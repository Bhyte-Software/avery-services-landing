"use client"

import { NavItem } from "@/components/common/nav-item"
import { WaitlistButton } from "@/components/common/waitlist-button"
import { navItems } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
    const pathname = usePathname()

    return (
        <aside className="sticky bg-background top-0 z-50 hidden lg:block">
            <header
                className="max-w-screen px-2 pt-2"
            >
                <div
                    className="screen-line-before screen-line-after relative md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex h-14 md:h-16 w-full items-center justify-between gap-2 border-x border-edge px-4 sm:gap-4 font-mono"
                >
                    <div className="absolute -top-[0.5px] -left-px h-3 w-3 border-t md:border-t-2 border-l md:border-l-2 border-neutral" />
                    <div className="absolute -top-[0.5px] -right-px h-3 w-3 border-t border-r md:border-t-2 md:border-r-2 border-neutral" />
                    <div className="absolute -bottom-[0.1px] -left-px h-3 w-3 border-b border-l md:border-b-2 md:border-l-2 border-neutral" />
                    <div className="absolute -bottom-[0.1px] -right-px h-3 w-3 border-b border-r md:border-b-2 md:border-r-2 border-neutral" />

                    <div className="flex flex-1 items-center justify-start">
                        <Link href="/">
                            <Image
                                src="/assets/Foresight-Wordmark.png"
                                alt="Foresight"
                                width={160}
                                height={40}
                                priority
                                className="h-9 w-auto md:h-10 object-contain"
                            />
                        </Link>
                    </div>

                    <nav
                        data-active-id={pathname}
                        className={cn("hidden lg:flex items-center gap-6 justify-center")}
                    >
                        {navItems.map(({ title, href }) => {
                            const active =
                                !href.includes("#") &&
                                (pathname === href ||
                                    (href === "/"
                                        ? ["/", "/index"].includes(pathname || "")
                                        : pathname?.startsWith(href)))

                            return (
                                <NavItem key={href} href={href} active={active}>
                                    {title}
                                </NavItem>
                            )
                        })}
                    </nav>

                    <div className="flex flex-1 items-center justify-end">
                        <WaitlistButton />
                    </div>
                </div>
            </header>
        </aside>
    )
}

export default Navigation