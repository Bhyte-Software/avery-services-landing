"use client"

import { useAnimationFrame, useReducedMotion } from "motion/react"
import Image from "next/image"
import { useLayoutEffect, useRef, useState } from "react"

const ACTIVE = "#087443"
const GLOW = "#12B76A"
const NODE_FILL = "#F1F2EF"

const PRIMARY_PATH =
    "M168 101L168 199.842C168 217.515 182.327 231.842 200 231.842L522 231.842C539.673 231.842 554 246.169 554 263.842L554 661"

const PRIMARY_NODE = { cx: 167.883, cy: 96.1904, r: 6.132 }

const BEAM_RATIO = 0.12
const DURATION = 2800

function ConnectorBeam({ d }: { d: string }) {
    const measureRef = useRef<SVGPathElement>(null)
    const glowRef = useRef<SVGPathElement>(null)
    const coreRef = useRef<SVGPathElement>(null)
    const [pathLen, setPathLen] = useState(0)

    useLayoutEffect(() => {
        if (measureRef.current) {
            setPathLen(measureRef.current.getTotalLength())
        }
    }, [d])

    useAnimationFrame((time) => {
        if (!pathLen) return

        const beam = pathLen * BEAM_RATIO
        const gap = pathLen - beam
        const progress = (time % DURATION) / DURATION
        const offset = -progress * pathLen

        if (glowRef.current) {
            glowRef.current.style.strokeDasharray = `${beam} ${gap}`
            glowRef.current.style.strokeDashoffset = `${offset}px`
        }
        if (coreRef.current) {
            coreRef.current.style.strokeDasharray = `${beam} ${gap}`
            coreRef.current.style.strokeDashoffset = `${offset}px`
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
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#connector-beam-blur)"
                opacity={0.45}
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
    const prefersReducedMotion = useReducedMotion()

    return (
        <div className="relative aspect-[1117/662] w-full">
            <Image
                src="/assets/Card.svg"
                alt=""
                width={1117}
                height={662}
                priority
                aria-hidden
                className="block h-auto w-full"
            />

            {!prefersReducedMotion && (
                <svg
                    viewBox="0 0 1117 662"
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full"
                >
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

                    <ConnectorBeam d={PRIMARY_PATH} />

                    <circle
                        cx={PRIMARY_NODE.cx}
                        cy={PRIMARY_NODE.cy}
                        r={PRIMARY_NODE.r}
                        fill={NODE_FILL}
                        stroke={ACTIVE}
                        strokeWidth={1.5}
                    />
                </svg>
            )}
        </div>
    )
}
