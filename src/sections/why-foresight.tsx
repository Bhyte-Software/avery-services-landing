import { SectionBadge } from "@/components/common/section-badge"
import { IconCheck, IconX } from "@tabler/icons-react"

const comparisons = [
    {
        traditional: "Long setup and manual configuration",
        foresight: "Fast onboarding with minimal setup",
    },
    {
        traditional: "Static models and assumptions",
        foresight: "Adaptive AI forecasting based on live data",
    },
    {
        traditional: "Manual reports updated periodically",
        foresight: "Real-time insights and automated reporting",
    },
    {
        traditional: "Breaks down as data and teams grow",
        foresight: "Proactive anomaly detection before problems grow",
    },
    {
        traditional: "Issues discovered after the fact",
        foresight: "Built to scale with complex finance operations",
    },
] as const

const WhyForesight = () => {
    return (
        <section id="why-us" className="w-full overflow-x-hidden px-2">
            <div className="screen-line-before screen-line-after relative mx-auto w-full border-x border-edge md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                <div className="relative z-[1] mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center md:py-20 lg:py-24">
                    <SectionBadge>Why Foresight</SectionBadge>

                    <h2 className="mt-6 text-balance text-3xl font-medium tracking-tighter text-foreground md:text-4xl lg:text-5xl lg:leading-[1.1]">
                        Smarter Alternative to Traditional Tools
                    </h2>

                    <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
                        Replaces manual finance workflows and fragmented tools with AI-driven
                        intelligence built for modern teams.
                    </p>
                </div>

                <div className="relative z-[1] grid grid-cols-1 border-t border-edge md:grid-cols-2">
                    <div className="border-b border-edge bg-background md:border-b-0 md:border-r md:border-edge">
                        <div className="border-b border-edge px-6 py-5 md:px-8 md:py-6">
                            <p className="text-lg font-medium tracking-tight text-foreground md:text-xl">
                                Traditional Tools
                            </p>
                        </div>
                        <ul className="divide-y divide-edge">
                            {comparisons.map((row) => (
                                <li
                                    key={row.traditional}
                                    className="flex items-start gap-3 px-6 py-5 md:px-8 md:py-6"
                                >
                                    <span
                                        aria-hidden
                                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground"
                                    >
                                        <IconX className="size-3" stroke={2.5} />
                                    </span>
                                    <span className="text-sm leading-relaxed text-foreground md:text-base">
                                        {row.traditional}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#087443] text-white">
                        <div className="border-b border-white/15 px-6 py-5 md:px-8 md:py-6">
                            <p className="text-lg font-medium tracking-tight md:text-xl">
                                Foresight (AI-Powered)
                            </p>
                        </div>
                        <ul className="divide-y divide-white/15">
                            {comparisons.map((row) => (
                                <li
                                    key={row.foresight}
                                    className="flex items-start gap-3 px-6 py-5 md:px-8 md:py-6"
                                >
                                    <span
                                        aria-hidden
                                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white"
                                    >
                                        <IconCheck className="size-3" stroke={2.5} />
                                    </span>
                                    <span className="text-sm leading-relaxed md:text-base">
                                        {row.foresight}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyForesight
