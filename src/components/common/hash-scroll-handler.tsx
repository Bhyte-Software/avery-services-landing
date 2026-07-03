"use client"

import { scrollToSection } from "@/lib/scroll-to-section"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function HashScrollHandler() {
    const pathname = usePathname()

    useEffect(() => {
        const hash = window.location.hash
        if (!hash) return

        const scroll = () => scrollToSection(hash, "smooth")

        scroll()
        const timeout = window.setTimeout(scroll, 300)

        return () => window.clearTimeout(timeout)
    }, [pathname])

    return null
}
