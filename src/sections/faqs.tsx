"use client"

import { SectionBadge } from "@/components/common/section-badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IconPlus, IconX } from "@tabler/icons-react"

const faqs = [
    {
        question: "How exactly does Foresight interact with my existing Avery setup?",
        answer:
            "Foresight connects to the accounting systems, banks, and tools you've already linked in Avery. Agents read from your chart of accounts and policies, then automate categorization, reconciliation, and monitoring — syncing results back to the systems you already trust without replacing your core setup.",
    },
    {
        question: "Can Foresight agents execute transactions or move funds?",
        answer:
            "No. Foresight agents analyze, categorize, and flag activity — they never initiate payments or move funds on your behalf. Any action that affects your ledger stays under your team's control and approval workflows.",
    },
    {
        question: 'Can we customize what the Sentinel agent considers an "irregularity"?',
        answer:
            "Yes. You can define thresholds, vendor rules, and spending patterns that matter to your team. Sentinel adapts to your policies and learns from how your finance team handles flagged items over time.",
    },
    {
        question: "How are notifications delivered?",
        answer:
            "Alerts can be delivered through Slack, email, and in-app notifications — configurable per agent and severity level so the right people see the right issues at the right time.",
    },
    {
        question: "How do you prevent AI hallucinations?",
        answer:
            "Every recommendation is grounded in your actual transaction data and chart of accounts. Agents cross-reference against source records before surfacing insights, and high-impact actions require human review before they're applied.",
    },
] as const

function FaqTriggerIcon() {
    return (
        <>
            <IconPlus
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground transition-colors group-hover/accordion-trigger:text-foreground group-aria-expanded/accordion-trigger:hidden"
            />
            <IconX
                aria-hidden
                className="hidden size-4 shrink-0 text-muted-foreground transition-colors group-hover/accordion-trigger:text-foreground group-aria-expanded/accordion-trigger:inline"
            />
        </>
    )
}

const Faqs = () => {
    return (
        <section id="faqs" className="w-full overflow-x-hidden px-2">
            <div className="screen-line-before screen-line-after relative mx-auto w-full border-x border-edge md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                <div className="relative z-[1] mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center md:py-20 lg:py-24">
                    <SectionBadge>Common Questions</SectionBadge>

                    <h2 className="mt-6 text-balance text-3xl font-medium tracking-tighter text-foreground md:text-4xl lg:text-5xl lg:leading-[1.1]">
                        Answers Before You Get Started
                    </h2>

                    <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
                        Clear answers to common questions about setup, security, integrations, and
                        how Foresight fits into your finance stack.
                    </p>
                </div>

                <div className="relative z-[1] border-t border-edge px-4 pb-16 md:px-8 md:pb-20 lg:pb-24">
                    <Accordion
                        defaultValue={["faq-0"]}
                        className="mx-auto max-w-3xl border border-edge bg-background"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`faq-${index}`}
                                className="border-edge"
                            >
                                <AccordionTrigger className="w-full px-6 py-5 text-base font-medium transition-colors duration-150 hover:bg-[#F1F2EF] hover:no-underline group-aria-expanded/accordion-trigger:bg-[#F1F2EF]/60 md:px-8 md:py-6 md:text-lg **:data-[slot=accordion-trigger-icon]:hidden">
                                    {faq.question}
                                    <FaqTriggerIcon />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground md:px-8 md:pb-6 md:text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Faqs
