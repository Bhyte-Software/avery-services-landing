import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function WaitlistButton({ className }: { className?: string }) {
    const fullWidth = className?.includes("w-full")

    return (
        <Link
            href="/#hero-email-input"
            className={fullWidth ? "block w-full" : undefined}
        >
            <Button
                className={cn(
                    "h-8 rounded-lg bg-[#087443] px-4 text-sm font-sans font-medium normal-case text-white hover:bg-[#066a35]",
                    className
                )}
            >
                Join Waitlist
            </Button>
        </Link>
    )
}
