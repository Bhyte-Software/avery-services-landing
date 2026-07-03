"use client"

import { scrollToSection } from "@/lib/scroll-to-section"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavItem({
    active,
    className,
    href,
    onClick,
    ...props
}: React.ComponentProps<typeof Link> & {
    active?: boolean
}) {
    const pathname = usePathname()

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event)
        if (event.defaultPrevented || typeof href !== "string") return

        const hashIndex = href.indexOf("#")
        if (hashIndex === -1) return

        const path = href.slice(0, hashIndex) || "/"
        const hash = href.slice(hashIndex + 1)
        if (!hash) return

        const onHome = pathname === "/" || pathname === ""
        if (!onHome || (path !== "/" && path !== "")) return

        event.preventDefault()
        scrollToSection(hash)
    }

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={cn(
                "text-[15px] tracking-tight font-sans text-foreground transition-colors hover:text-[#12B76A]",
                active && "text-[#087443]",
                className
            )}
            {...props}
        />
    )
}
