import { EmailCapture } from "@/components/common/email-capture"
import { navItems } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa6"
import { SiX } from "react-icons/si"

function FooterDotPattern({ className }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 h-28 bg-[radial-gradient(#087443_1px,transparent_1px)] bg-size-[12px_12px] opacity-[0.12] ${className}`}
        />
    )
}

const Footer = () => {
    return (
        <aside className="w-full overflow-x-hidden px-2 pb-2">
            <footer className="relative overflow-hidden border-t border-edge bg-[#F1F2EF]">
                <FooterDotPattern className="top-0 mask-[linear-gradient(to_bottom,black,transparent)]" />

                <div className="screen-line-before screen-line-after relative mx-auto w-full overflow-hidden border-x border-edge px-4 py-16 md:max-w-3xl lg:max-w-5xl lg:py-20 xl:max-w-6xl 2xl:max-w-7xl after:z-1">
                    <Image
                        src="/assets/Ditter.png"
                        alt=""
                        width={1112}
                        height={603}
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-auto w-full opacity-25"
                    />

                    <div className="relative z-[1]">
                        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.75fr_1.1fr] lg:items-start lg:gap-10 xl:gap-16">
                        <div className="flex flex-col gap-5">
                            <Link href="/" aria-label="Foresight home">
                                <Image
                                    src="/assets/Foresight-Wordmark.png"
                                    alt="Foresight"
                                    width={160}
                                    height={40}
                                    className="h-8 w-auto object-contain md:h-9"
                                />
                            </Link>

                            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                                Financial Intelligence. Built on Your Data.
                            </p>

                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Foresight on LinkedIn"
                                    className="text-[#0A0A0A]/75 transition-colors hover:text-[#087443]"
                                >
                                    <FaLinkedin className="size-[18px]" />
                                </a>
                                <span className="h-4 w-px bg-border" aria-hidden="true" />
                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Foresight on X"
                                    className="text-[#0A0A0A]/75 transition-colors hover:text-[#087443]"
                                >
                                    <SiX className="size-[17px]" />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-base font-semibold tracking-tight text-foreground">
                                Explore
                            </h2>
                            <nav aria-label="Footer" className="flex flex-col gap-3">
                                {navItems.map(({ title, href }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="w-fit text-sm text-muted-foreground transition-colors hover:text-[#12B76A]"
                                    >
                                        {title}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-base font-semibold tracking-tight text-foreground">
                                Get Early Access
                            </h2>
                            <EmailCapture inputId="footer-email-input" />
                        </div>
                        </div>

                        <p className="mt-24 pt-4 pb-8 text-center text-sm text-muted-foreground lg:mt-28 lg:pb-12">
                            © 2026 Avery, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </aside>
    )
}

export default Footer
