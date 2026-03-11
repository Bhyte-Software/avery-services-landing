"use client";
import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

interface TimelineEntry {
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.1", "end end"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <div ref={containerRef} className="min-h-screen w-full">
            <div ref={ref} className="relative max-w-5xl mx-auto pb-20 md:px-10">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-12"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-start top-40 self-start max-w-xs md:max-w-xs lg:max-w-sm md:w-sm lg:w-full">
                            <div className="h-8 absolute hidden md:flex md:left-[65%] lg:left-[60%] w-8 bg-background items-center justify-center -mt-2">
                                <div className="h-4 w-4 bg-white border border-edge p-2" />
                            </div>
                            <div className="hidden md:block items-start lg:pl-12 md:-mt-4">
                                <div className="flex flex-col items-center gap-2 mt-4">
                                    <Image width={40} height={40} src="/assets/icon.png" className="overflow-clip" alt="Culio" />
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex flex-col items-center">
                                            <p className=" text-sm">Culio.co</p>
                                            <Link href="https://twitter.com/culioco" target="_blank">
                                                <span className=" text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                                                    <FaXTwitter className="size-3.5" />
                                                    @culioco</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative pl-4 pr-4 md:pl-4 w-full">
                            <div className="">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className=" hidden md:block absolute left-6 md:left-[28%] -translate-x-1/2 top-12 overflow-hidden w-[2px] bg-black/5"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-t from-primary via-accent to-black/10 from-0% via-10% rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
