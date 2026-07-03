import Image from "next/image"
import { cn } from "@/lib/utils"

type SectionBadgeProps = {
    children: React.ReactNode
    variant?: "outlined" | "dark"
    className?: string
}

export function SectionBadge({ children, variant = "outlined", className }: SectionBadgeProps) {
    if (variant === "dark") {
        return (
            <div
                className={cn(
                    "inline-flex h-9 items-center gap-2 rounded-full bg-[#0A0A0A] py-1 pl-2 pr-3 font-mono text-xs normal-case text-white md:text-sm",
                    className
                )}
            >
                <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087443] md:h-7 md:w-7"
                >
                    <Image
                        src="/assets/Star-mesaurable.svg"
                        alt=""
                        width={11}
                        height={12}
                        aria-hidden
                        className="h-3 w-auto"
                    />
                </span>
                {children}
            </div>
        )
    }

    return (
        <div
            className={cn(
                "inline-flex h-9 items-center rounded-full border border-[#087443]/25 bg-background py-1 pl-1 pr-3 font-mono text-xs normal-case md:text-sm",
                className
            )}
        >
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
            <span className="pl-3 text-foreground">{children}</span>
        </div>
    )
}
