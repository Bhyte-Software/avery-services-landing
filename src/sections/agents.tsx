"use client"

import { SectionBadge } from "@/components/common/section-badge"
import { IconArrowRight } from "@tabler/icons-react"

function FeatureBullet({ title, description }: { title: string; description: string }) {
    return (
        <li className="flex gap-3">
            <span aria-hidden className="mt-1 shrink-0 text-foreground">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.4 7.5V11H6.6V7.5L9.8 10.75L10.65 9.88L7.45 6.63H11.5V5.37H7.45L10.65 2.12L9.8 1.25L6.6 4.5V0.5H5.4V4.5L2.18 1.25L1.33 2.12L4.53 5.37H0.5V6.63H4.53L1.33 9.88L2.18 10.75L5.4 7.5Z" />
                </svg>
            </span>
            <div>
                <p className="font-medium text-foreground">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
        </li>
    )
}

function BookkeeperIllustration() {
    return (
        <div className="relative mx-auto flex max-w-md items-center justify-center py-4">
            <div className="relative w-full rounded-xl border border-edge bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 rounded-lg border border-edge bg-[#F1F2EF] px-3 py-2.5">
                    <span className="font-mono text-sm text-muted-foreground">&gt; Ask agent...</span>
                    <span className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087443] text-white">
                        <IconArrowRight className="size-4" stroke={2} />
                    </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    {["Categorize", "Reconcile", "Audit"].map((action) => (
                        <span
                            key={action}
                            className="rounded-full border border-edge bg-white px-3 py-1 text-xs font-medium text-foreground"
                        >
                            {action}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

function SentinelIllustration() {
    const transactions = [
        { name: "Walmart", category: "Office Supplies", amount: "$142.50" },
        { name: "Starbucks", category: "Meals", amount: "$18.40" },
        { name: "Uber", category: "Travel", amount: "$34.20" },
    ]

    return (
        <div className="relative mx-auto flex max-w-md items-center justify-center py-4">
            <div className="relative w-full rounded-xl border border-edge bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-foreground">Categorize transactions</p>
                <ul className="mt-4 space-y-3">
                    {transactions.map((tx) => (
                        <li
                            key={tx.name}
                            className="flex items-center justify-between gap-3 border-b border-edge pb-3 last:border-0 last:pb-0"
                        >
                            <div>
                                <p className="text-sm font-medium text-foreground">{tx.name}</p>
                                <p className="text-xs text-muted-foreground">{tx.category}</p>
                            </div>
                            <p className="text-sm font-medium text-foreground">{tx.amount}</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-edge bg-[#F1F2EF] px-3 py-2">
                    <span className="font-mono text-xs text-muted-foreground">&gt; Ask agent...</span>
                    <span className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#087443] text-white">
                        <IconArrowRight className="size-3.5" stroke={2} />
                    </span>
                </div>
            </div>
        </div>
    )
}

function AgentRow({
    title,
    description,
    features,
    illustration,
    illustrationFirst = false,
}: {
    title: string
    description: string
    features: { title: string; description: string }[]
    illustration: React.ReactNode
    illustrationFirst?: boolean
}) {
    const textContent = (
        <div className="flex flex-col justify-center px-6 py-10 md:px-10 md:py-14 lg:px-14">
            <h3 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>
            <ul className="mt-8 space-y-6">
                {features.map((feature) => (
                    <FeatureBullet key={feature.title} {...feature} />
                ))}
            </ul>
        </div>
    )

    const illustrationContent = (
        <div className="flex items-center justify-center border-t border-edge bg-[#F1F2EF]/40 px-6 py-10 md:border-t-0 md:py-14">
            {illustration}
        </div>
    )

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-edge">
            {illustrationFirst ? (
                <>
                    {illustrationContent}
                    {textContent}
                </>
            ) : (
                <>
                    {textContent}
                    {illustrationContent}
                </>
            )}
        </div>
    )
}

const Agents = () => {
    return (
        <section id="agents" className="w-full overflow-x-hidden px-2">
            <div className="screen-line-before screen-line-after relative mx-auto w-full border-x border-edge md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                <div className="relative z-[1] mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center md:py-20 lg:py-24">
                    <SectionBadge variant="dark">Built for Financial Leaders</SectionBadge>

                    <h2 className="mt-6 text-balance text-3xl font-medium tracking-tighter text-foreground md:text-4xl lg:text-5xl lg:leading-[1.1]">
                        Meet the Agents
                    </h2>

                    <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
                        Autonomous digital specialists running your financial operations in the
                        background.
                    </p>
                </div>

                <div className="relative z-[1] border-t border-edge">
                    <AgentRow
                        title="The Autonomous Bookkeeper"
                        description="Operating continuously in the background, this agent map-matches transactions against your chart of accounts and keeps your books current without manual intervention."
                        features={[
                            {
                                title: "Contextual Categorization",
                                description:
                                    "Learns your vendor logic and tags transactions with precision based on historical patterns.",
                            },
                            {
                                title: "Ledger Synchronization",
                                description:
                                    "Keeps your ledgers and spreadsheets updated in real-time as transactions flow in.",
                            },
                        ]}
                        illustration={<BookkeeperIllustration />}
                    />

                    <div className="border-t border-edge">
                        <AgentRow
                            title="The Sentinel"
                            description="Models operational velocity to protect your cash flows from anomalies, drift, and irregular spending before they become problems."
                            features={[
                                {
                                    title: "SaaS & Vendor Drift",
                                    description:
                                        "Alerts you when subscription prices jump, duplicate billing occurs, or vendor patterns shift.",
                                },
                                {
                                    title: "Irregularity Isolation",
                                    description:
                                        "Flags outlier transactions the moment they clear, so your team can investigate immediately.",
                                },
                            ]}
                            illustration={<SentinelIllustration />}
                            illustrationFirst
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agents
