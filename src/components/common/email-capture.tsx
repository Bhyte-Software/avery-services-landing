"use client"

import { SuccessDialog } from "@/components/common/success-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { IconX } from "@tabler/icons-react"
import { useState } from "react"

interface EmailCaptureProps {
    inputId?: string
    className?: string
}

export function EmailCapture({
    inputId = "hero-email-input",
    className,
}: EmailCaptureProps) {
    const [email, setEmail] = useState("")
    const [submittedEmail, setSubmittedEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return
        setIsLoading(true)
        try {
            setSubmittedEmail(email)
            setEmail("")
            setIsSuccessOpen(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <form
                className={cn("w-full", className)}
                onSubmit={handleSubmit}
            >
                <div className="flex items-center rounded-lg border border-edge bg-white p-1.5 shadow-sm transition-[border-color,box-shadow] focus-within:border-[#087443]/35 focus-within:ring-1 focus-within:ring-[#087443]/15">
                    <Input
                        id={inputId}
                        type="email"
                        placeholder="Enter your email"
                        className="h-10 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm font-sans font-normal shadow-none focus-visible:border-0 focus-visible:bg-transparent focus-visible:ring-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {email && (
                        <button
                            type="button"
                            onClick={() => setEmail("")}
                            className="mr-1 shrink-0 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="Clear email"
                        >
                            <IconX size={16} />
                        </button>
                    )}
                    <Button
                        type="submit"
                        loading={isLoading}
                        className="h-9 shrink-0 rounded-lg bg-[#087443] px-5 text-sm font-sans font-medium normal-case text-white hover:bg-[#066a35]"
                    >
                        Join Waitlist
                    </Button>
                </div>
            </form>

            <SuccessDialog
                isOpen={isSuccessOpen}
                setIsOpen={setIsSuccessOpen}
                submittedEmail={submittedEmail}
            />
        </>
    )
}
