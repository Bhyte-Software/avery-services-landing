"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { useReducedMotion } from "motion/react"
import Image from "next/image"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

const ACTIVE = "#087443"
const GLOW = "#12B76A"
const NODE_FILL = "#F1F2EF"

const ANIMATED_CONNECTORS = [
    {
        d: "M168 101L168 199.842C168 217.515 182.327 231.842 200 231.842L522 231.842C539.673 231.842 554 246.169 554 263.842L554 661",
        node: { cx: 167.883, cy: 96.1904, r: 6.132 },
    },
    {
        d: "M295.476 101.353L295.476 200.112C295.476 217.785 309.803 232.112 327.476 232.112L478.5 232.112",
        node: { cx: 295.477, cy: 96.1907, r: 6.132 },
    },
    {
        d: "M425.875 101.353L425.875 200.112C425.875 217.785 440.202 232.112 457.875 232.112L482.089 232.112",
        node: { cx: 425.875, cy: 96.1907, r: 6.132 },
    },
    {
        d: "M554.348 99.1264L553.746 258.003",
        node: { cx: 554, cy: 94.917, r: 5.609 },
    },
    {
        d: "M682.723 101.427V201C682.723 218.673 668.396 233 650.723 233L626.509 233",
        node: { cx: 682.723, cy: 96.2334, r: 6.132 },
    },
    {
        d: "M811.719 101.353V200.112C811.719 217.785 797.393 232.112 779.719 232.112L660.16 232.112",
        node: { cx: 811.719, cy: 96.1907, r: 6.132 },
    },
    {
        d: "M942 102V201.043C942 218.716 927.673 233.043 910 233.043L585.957 233.043C568.308 233.043 554 247.351 554 265",
        node: { cx: 942.118, cy: 96.1907, r: 6.132 },
    },
] as const

const BEAM_RATIO = 0.12
const SLACK_DURATION = 4800
const FAST_SPEED = 0.28 // SVG units/ms — Excel+ beams
const MIN_FAST_DURATION = 900
const STAGGER = 550

function getDuration(index: number, length: number): number {
    if (index === 0) return SLACK_DURATION
    return Math.max(MIN_FAST_DURATION, length / FAST_SPEED)
}

type BeamLayer = {
    glow: SVGPathElement | null
    core: SVGPathElement | null
    length: number
}

function BeamPaths({
    d,
    layerIndex,
    layersRef,
    compact,
}: {
    d: string
    layerIndex: number
    layersRef: React.MutableRefObject<BeamLayer[]>
    compact: boolean
}) {
    const measureRef = useRef<SVGPathElement>(null)
    const glowRef = useRef<SVGPathElement>(null)
    const coreRef = useRef<SVGPathElement>(null)

    useLayoutEffect(() => {
        layersRef.current[layerIndex] = {
            glow: glowRef.current,
            core: coreRef.current,
            length: measureRef.current?.getTotalLength() ?? 0,
        }
    })

    return (
        <>
            <path ref={measureRef} d={d} fill="none" stroke="none" aria-hidden />
            <path
                ref={glowRef}
                d={d}
                fill="none"
                stroke={GLOW}
                strokeWidth={compact ? 4 : 5}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={compact ? undefined : "url(#connector-beam-blur)"}
                opacity={compact ? 0.35 : 0.45}
            />
            <path
                ref={coreRef}
                d={d}
                fill="none"
                stroke={ACTIVE}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </>
    )
}

export function CardDiagram() {
    const containerRef = useRef<HTMLDivElement>(null)
    const layersRef = useRef<BeamLayer[]>([])
    const startRef = useRef<number | null>(null)
    const isVisibleRef = useRef(true)
    const prefersReducedMotion = useReducedMotion()
    const isMobile = useIsMobile()
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const mql = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")
        const onChange = () => setIsTablet(mql.matches)
        mql.addEventListener("change", onChange)
        setIsTablet(mql.matches)
        return () => mql.removeEventListener("change", onChange)
    }, [])

    const compact = isMobile || isTablet

    useEffect(() => {
        if (prefersReducedMotion) return

        const container = containerRef.current
        if (!container) return

        let frame = 0
        let running = false

        const tick = (now: number) => {
            if (!isVisibleRef.current) {
                running = false
                return
            }

            if (startRef.current === null) startRef.current = now
            const elapsed = now - startRef.current

            layersRef.current.forEach((layer, index) => {
                if (!layer?.glow || !layer.core) return

                if (!layer.length) {
                    layer.length = layer.glow.getTotalLength()
                    if (!layer.length) return
                }

                const beam = layer.length * BEAM_RATIO
                const gap = layer.length - beam
                const duration = getDuration(index, layer.length)
                const phase =
                    (((elapsed - index * STAGGER) % duration) + duration) % duration
                const progress = phase / duration
                const offset = -progress * layer.length

                layer.glow.style.strokeDasharray = `${beam} ${gap}`
                layer.glow.style.strokeDashoffset = `${offset}`
                layer.core.style.strokeDasharray = `${beam} ${gap}`
                layer.core.style.strokeDashoffset = `${offset}`
            })

            frame = requestAnimationFrame(tick)
        }

        const start = () => {
            if (running) return
            running = true
            frame = requestAnimationFrame(tick)
        }

        const stop = () => {
            running = false
            cancelAnimationFrame(frame)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisibleRef.current = entry.isIntersecting
                if (entry.isIntersecting) start()
                else stop()
            },
            { threshold: 0.05 }
        )

        observer.observe(container)
        start()

        return () => {
            stop()
            observer.disconnect()
        }
    }, [prefersReducedMotion])

    return (
        <div
            ref={containerRef}
            className="relative aspect-[1117/662] w-full [contain:layout_paint]"
        >
            <Image
                src="/assets/Card.svg"
                alt=""
                width={1117}
                height={662}
                priority
                aria-hidden
                sizes="(max-width: 767px) 320px, (max-width: 1023px) 768px, 1117px"
                className="block h-auto w-full"
            />

            {!prefersReducedMotion && (
                <svg
                    viewBox="0 0 1117 662"
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full"
                >
                    {!compact && (
                        <defs>
                            <filter
                                id="connector-beam-blur"
                                x="-100%"
                                y="-100%"
                                width="300%"
                                height="300%"
                            >
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    )}

                    {ANIMATED_CONNECTORS.map((connector, index) => (
                        <BeamPaths
                            key={connector.d}
                            d={connector.d}
                            layerIndex={index}
                            layersRef={layersRef}
                            compact={compact}
                        />
                    ))}

                    {ANIMATED_CONNECTORS.map(({ d, node }) => (
                        <circle
                            key={`node-${d}`}
                            cx={node.cx}
                            cy={node.cy}
                            r={node.r}
                            fill={NODE_FILL}
                            stroke={ACTIVE}
                            strokeWidth={1.5}
                        />
                    ))}
                </svg>
            )}
        </div>
    )
}
