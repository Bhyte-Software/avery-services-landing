"use client"

import { Badge } from "@/components/ui/badge"
import { BorderBeam } from "@/components/ui/border-beam"
import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "motion/react"
import { RoadmapTimeline } from "./roadmap-timeline"

const Roadmap = () => {
    return (
        <section className="flex flex-col min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] px-2 ">
            <div
                className="screen-line-before screen-line-after relative flex-1 flex-col md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex w-full items-center justify-between border-x border-edge after:z-1 after:transition-[background-color]"
            >
                <div className="pt-20 w-full flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <Badge className="relative overflow-hidden">
                            <BorderBeam
                                size={80}
                                initialOffset={80}
                                className="from-transparent via-primary to-transparent"
                            />
                            <aside className=" size-2 md:size-2.5 aspect-square bg-primary mr-1" />
                            Our 2026 Roadmap
                        </Badge>
                    </motion.div>

                    <TextAnimate className="mt-4 text-[40px] leading-10 md:leading-12 lg:text-6xl xl:text-7xl tracking-tighter xl:leading-16 max-w-2xl text-balance text-center" animation="blurIn" as="h1">
                        Your restaurant growth, automated
                    </TextAnimate>

                    <TextAnimate className="mt-4 max-w-prose tracking-tight text-balance text-muted-foreground text-sm lg:text-base text-center font-sans" animation="blurInUp" as="h1">
                        Building in the open. Track our progress as we engineer the automated systems that turn every first-time guest into a high-value regular.
                    </TextAnimate>
                </div>

                <RoadmapTimeline />
            </div>
        </section>
    )
}

export default Roadmap