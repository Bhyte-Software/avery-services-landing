"use client"

import CalTrigger from "@/components/common/cal-trigger"
import { WaitlistButton } from "@/components/common/waitlist-button"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const FinalCta = () => {
    return (
        <section className="w-full overflow-x-hidden bg-[#F1F2EF] px-2">
            <div className="screen-line-before screen-line-after relative mx-auto w-full overflow-hidden border-x border-edge px-4 py-20 md:max-w-3xl lg:max-w-5xl lg:py-24 xl:max-w-6xl 2xl:max-w-7xl">
                <Image
                    src="/assets/Ditter.png"
                    alt=""
                    width={1112}
                    height={603}
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-auto w-full opacity-25"
                />

                <div className="relative z-[1] mx-auto flex max-w-2xl flex-col items-center text-center">
                    <p className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
                        Get Started
                    </p>

                    <h2 className="mt-4 text-balance text-3xl font-medium tracking-tighter text-foreground md:text-4xl lg:text-5xl lg:leading-[1.1]">
                        Move Faster With Financial Confidence
                    </h2>

                    <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
                        Foresight gives your team AI-driven clarity, real-time insights, and the
                        control needed to make better financial decisions.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                        <WaitlistButton className="h-10 px-6" />
                        <CalTrigger>
                            <Button
                                variant="outline"
                                className="h-10 rounded-lg border-edge bg-white px-6 text-sm font-sans font-medium normal-case text-foreground hover:bg-white/80"
                            >
                                Request Demo
                            </Button>
                        </CalTrigger>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalCta
