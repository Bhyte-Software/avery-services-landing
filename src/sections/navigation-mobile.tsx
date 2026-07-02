"use client"

import { NavItem } from "@/components/common/nav-item";
import { WaitlistButton } from "@/components/common/waitlist-button";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";


const NavigationMobile = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <aside className="sticky top-2 z-50 lg:hidden w-full overflow-x-hidden border-y border-y-edge">
            <header
                className="bg-background px-2">
                <nav
                    className="screen-line-before bg-white screen-line-after max-h-[calc(100dvh-2rem)] relative w-full gap-2 border-x border-edge font-mono"
                >

                    <div className="absolute -top-[0.1px] -left-px h-3 w-3 border-t md:border-t-2 border-l md:border-l-2 border-neutral" />
                    <div className="absolute -top-[0.1px] -right-px h-3 w-3 border-t border-r md:border-t-2 md:border-r-2 border-neutral" />
                    <div className="absolute -bottom-[0.1px] -left-px h-3 w-3 border-b border-l md:border-b-2 md:border-l-2 border-neutral" />
                    <div className="absolute -bottom-[0.1px] -right-px h-3 w-3 border-b border-r md:border-b-2 md:border-r-2 border-neutral" />


                    <div className=" w-full flex items-center justify-between sticky top-0 z-50 pl-4 pr-4 py-2">
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

                        <div className=" inline-flex items-center gap-3">
                            <WaitlistButton />
                            <motion.button
                                initial="hide"
                                animate={open ? "show" : "hide"}
                                onClick={toggleMenu}
                                className="flex flex-col space-y-1.5 h-8 w-8 items-center justify-center relative z-2147483006"
                                aria-label={open ? "Close menu" : "Open menu"}
                            >
                                <motion.span
                                    variants={{
                                        hide: {
                                            rotate: 0,
                                        },
                                        show: {
                                            rotate: 45,
                                            y: 4,
                                        },
                                    }}
                                    className="w-[24px] bg-foreground rounded-full h-[2.4px] block"
                                />
                                <motion.span
                                    variants={{
                                        hide: {
                                            rotate: 0,
                                        },
                                        show: {
                                            rotate: -45,
                                            y: -4,
                                        },
                                    }}
                                    className="w-[24px] bg-foreground rounded-full h-[2.4px] block"
                                />
                            </motion.button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden lg:hidden px-4"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.1,
                                            },
                                        },
                                    }}
                                    className="pt-4 space-y-2.5"
                                >
                                    {navItems.map((item) => (
                                        <motion.div
                                            key={item.href}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className={item.href === navItems.at(-1)?.href ? "mb-6" : undefined}
                                        >
                                            <NavItem
                                                href={item.href}
                                                className="block py-1 text-base font-medium"
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.title}
                                            </NavItem>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="pt-2 pb-4"
                                    >
                                        <Link href="https://twitter.com/culioco">
                                            <Button variant="outline" className="w-full">
                                                <FaXTwitter className="size-3.5" />
                                                Follow Us
                                            </Button>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>
        </aside>
    );
}

export default NavigationMobile;