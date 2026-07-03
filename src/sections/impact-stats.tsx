"use client"

import Image from "next/image"

const stats = [
    {
        value: "100%",
        label: "Finance workflows automated",
        caption: "Early-stage startups and growing finance teams",
    },
    {
        value: "10x",
        label: "Time saved on operations",
        caption: "Replaced manual spreadsheets and reconciliations",
    },
    {
        value: "42%",
        label: "Faster financial reporting",
        caption: "AI-powered forecasting and anomaly detection",
    },
] as const

const ImpactStats = () => {
    return (
        <section id="impact" className="w-full overflow-x-hidden px-2">
            <div className="screen-line-before screen-line-after relative mx-auto w-full border-x border-edge md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                <div className="relative z-[1] mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center md:py-20 lg:py-24">
                    <div className="inline-flex h-9 items-center rounded-full border border-[#087443]/25 bg-background py-1 pl-1 pr-3 font-mono text-xs normal-case md:text-sm">
                        <span
                            aria-hidden
                            className="flex h-6 w-10 shrink-0 items-center justify-center rounded-full bg-[#087443] ring-2 ring-background md:h-7 md:w-12"
                        >
                            <Image
                                src="/assets/Star-mesaurable.svg"
                                alt=""
                                width={11}
                                height={12}
                                aria-hidden
                                className="h-3 w-auto md:h-3.5"
                            />
                        </span>
                        <span className="pl-3 text-foreground">Measurable Results</span>
                    </div>

                    <h2 className="mt-6 text-balance text-3xl font-medium tracking-tighter text-foreground md:text-4xl lg:text-5xl lg:leading-[1.1]">
                        Real Impact Across Finance Teams
                    </h2>

                    <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
                        Teams using our workflows report faster reporting cycles, higher forecast
                        accuracy, and significant time savings.
                    </p>
                </div>

                <div className="relative z-[1] grid grid-cols-1 divide-y divide-edge border-t border-edge md:grid-cols-3 md:divide-x md:divide-y-0">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                            <div className="px-6 py-8 md:px-8 md:py-10">
                                <p className="text-4xl font-medium tracking-tighter text-foreground md:text-5xl">
                                    {stat.value}
                                </p>
                                <p className="mt-3 text-lg font-medium tracking-tight text-foreground md:text-xl">
                                    {stat.label}
                                </p>
                            </div>
                            <div className="mt-auto border-t border-edge px-6 py-6 md:px-8">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {stat.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ImpactStats
