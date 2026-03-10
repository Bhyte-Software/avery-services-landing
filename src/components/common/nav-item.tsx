import { cn } from "@/lib/utils"
import Link from "next/link"

export function NavItem({
    active,
    ...props
}: React.ComponentProps<typeof Link> & {
    active?: boolean
}) {
    return (
        <Link
            className={cn(
                "text-[15px] tracking-tight font-sans text-foreground transition-[color] hover:text-primary",
                active && "text-primary"
            )}
            {...props}
        />
    )
}
