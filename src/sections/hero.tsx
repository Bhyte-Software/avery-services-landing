"use client"

import { SuccessDialog } from "@/components/common/success-dialog"
import { Badge } from "@/components/ui/badge"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TextAnimate } from "@/components/ui/text-animate"
import { api } from "../../convex/_generated/api"
import { IconX } from "@tabler/icons-react"
import { useMutation } from "convex/react"
import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

const Hero = () => {
    const [email, setEmail] = useState("")
    const [submittedEmail, setSubmittedEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)
    const joinWaitlist = useMutation(api.waitlist.join)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        setIsLoading(true)
        try {
            await joinWaitlist({ email })
            setSubmittedEmail(email)
            setEmail("")
            setIsSuccessOpen(true)
        } catch (error) {
            console.error("Failed to join waitlist:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="flex flex-col min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-112px)] px-2 ">
            <div
                className="screen-line-before screen-line-after relative flex-1 flex-col md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex w-full items-center justify-between border-x border-edge after:z-1 after:transition-[background-color]"
            >
                <div className="pt-20 w-full flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <Badge className="relative overflow-hidden">
                            <BorderBeam
                                size={40}
                                initialOffset={20}
                                className="from-transparent via-primary to-transparent"
                                transition={{
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 20,
                                }}
                            />
                            <aside className=" size-2 md:size-2.5 aspect-square bg-primary mr-1" />
                            Join the early access
                        </Badge>
                    </motion.div>

                    <TextAnimate className="mt-4 text-[40px] leading-10 lg:text-6xl xl:text-7xl tracking-tighter xl:leading-16 max-w-2xl text-balance text-center" animation="blurIn" as="h1">
                        We’re getting ready to launch soon
                    </TextAnimate>

                    <TextAnimate className="mt-4 max-w-prose tracking-tight text-balance text-muted-foreground text-sm lg:text-base text-center font-sans" animation="blurInUp" as="h1">
                        Culio gives your restaurant AI-driven engagement, automated ordering, and the strategic intelligence needed to turn every diner into a lifelong regular.
                    </TextAnimate>

                    <motion.form
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex flex-col lg:flex-row w-full px-4 md:px-0 max-w-lg items-center gap-2 pt-10 pb-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="relative flex-1 w-full">
                            <Input
                                id="hero-email-input"
                                type="email"
                                placeholder="Enter your email"
                                className="h-10 md:h-12 w-full bg-background tracking-tight pr-10 text-sm font-sans font-normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {email && (
                                <button
                                    type="button"
                                    onClick={() => setEmail("")}
                                    className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <IconX size={18} />
                                </button>
                            )}
                        </div>
                        <Button type="submit" className="h-10 md:h-12 px-6 w-full lg:w-fit" loading={isLoading}>
                            Join the waitlist
                        </Button>
                    </motion.form>
                    <motion.span
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="uppercase font-mono text-xs text-muted-foreground"
                    >
                        Early access spots are limited.
                    </motion.span>
                </div>

                <aside className="h-full flex-1 w-full relative">
                    <Image fill src="/assets/hero-dither.webp" alt="Dither illustration" className=" object-cover object-bottom" />
                </aside>
            </div>

            <SuccessDialog
                isOpen={isSuccessOpen}
                setIsOpen={setIsSuccessOpen}
                submittedEmail={submittedEmail}
            />
        </section>
    )
}

export default Hero