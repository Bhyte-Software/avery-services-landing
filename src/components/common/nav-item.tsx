import { cn } from "@/lib/utils"
import Link from "next/link"

export function NavItem({
    active,
    className,
    ...props
}: React.ComponentProps<typeof Link> & {
    active?: boolean
}) {
    return (
        <Link
            className={cn(
                "text-[15px] tracking-tight font-sans text-foreground transition-colors hover:text-[#12B76A]",
                active && "text-[#087443]",
                className
            )}
            {...props}
        />
    )
}
