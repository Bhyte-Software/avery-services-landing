"use client"

import { EmailCapture } from "@/components/common/email-capture"
import { BorderBeam } from "@/components/ui/border-beam"
import { TextAnimate } from "@/components/ui/text-animate"
import { IconArrowRight } from "@tabler/icons-react"
import { motion } from "motion/react"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="flex flex-col min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] px-2 ">
            <div
                className="screen-line-before screen-line-after relative mx-auto flex w-full flex-1 flex-col items-center md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl border-x border-edge after:z-1 after:transition-[background-color]"
            >
                <div className="flex w-full flex-col items-center pb-20 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="relative inline-flex h-9 items-center overflow-hidden rounded-full border border-[#087443]/25 bg-background py-1 pl-3 pr-1 font-mono text-xs normal-case shadow-[0_0_28px_rgba(8,116,67,0.18)] md:text-sm">
                            <BorderBeam
                                size={60}
                                initialOffset={20}
                                colorFrom="#087443"
                                colorTo="#12B76A"
                                className="from-transparent via-[#087443] to-transparent"
                                transition={{
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 20,
                                }}
                            />
                            <span className="relative z-[1] pr-3 text-foreground">
                                Get Early Access Today!
                            </span>
                            <a
                                href="#hero-email-input"
                                aria-label="Go to email signup"
                                className="relative z-[1] flex h-6 w-10 shrink-0 items-center justify-center rounded-full bg-[#087443] shadow-[0_0_16px_rgba(8,116,67,0.35)] ring-2 ring-background transition-colors hover:bg-[#066a35] md:h-7 md:w-12"
                            >
                                <IconArrowRight className="size-3 text-white md:size-3.5" stroke={2.25} />
                            </a>
                        </div>
                    </motion.div>

                    <TextAnimate
                        className="mt-4 text-[40px] leading-10 lg:text-6xl xl:text-7xl tracking-tighter xl:leading-16 max-w-2xl text-center"
                        animation="blurIn"
                        as="h1"
                        by="line"
                    >
                        {`Financial Intelligence.
Built on Your Data.`}
                    </TextAnimate>

                    <TextAnimate className="mt-4 max-w-prose tracking-tight text-balance text-muted-foreground text-sm lg:text-base text-center font-sans" animation="blurInUp" as="p">
                        Deploy AI agents directly on top of your financial stack to handle bookkeeping, real-time reconciliation, and anomaly detection.
                    </TextAnimate>

                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="w-full max-w-xl px-4 pt-10 md:px-0"
                    >
                        <EmailCapture />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="relative mt-16 w-full max-w-3xl px-4 md:mt-24 md:max-w-4xl md:px-0 lg:mt-28"
                    >
                        <div className="relative mx-auto w-full max-w-[1117px]">
                            <Image
                                src="/assets/Card.svg"
                                alt=""
                                width={1117}
                                height={662}
                                priority
                                aria-hidden
                                className="block h-auto w-full"
                            />
                            <div
                                className="-mt-4"
                                style={{
                                    width: `${(1112 / 1117) * 100}%`,
                                    marginLeft: `${((554.348 - 564.667) / 1117) * 100}%`,
                                }}
                            >
                                <Image
                                    src="/assets/Frame 2147226446.svg"
                                    alt=""
                                    width={1112}
                                    height={160}
                                    priority
                                    aria-hidden
                                    className="block h-auto w-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero