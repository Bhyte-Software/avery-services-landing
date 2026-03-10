import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { IconSun } from "@tabler/icons-react"
import Link from "next/link"
import { Badge } from "../ui/badge"
import Image from "next/image"

interface SuccessDialogProps {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    submittedEmail: string
}

export const SuccessDialog = ({ isOpen, setIsOpen, submittedEmail }: SuccessDialogProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent showCloseButton={false} className="sm:max-w-sm p-0 overflow-hidden rounded-none border-edge bg-white">
                <div className="flex flex-col items-center px-4 pb-4">
                    <div className="relative size-18 mb-4 mt-6">
                        <Image fill src="/assets/culio-logo-icon.svg" alt="Culio logo icon" className=" object-contain object-center animate-[spin_8s_linear_infinite]" />
                    </div>

                    <Badge><aside className=" size-2.5 aspect-square bg-primary mr-1" />You're on the list</Badge>

                    <p className="mt-4 text-center text-base text-muted-foreground text-balance tracking-tight">
                        We're hand-picking our founding restaurants to ensure every launch is flawless. We'll reach out to{" "}
                        <strong className="text-foreground font-medium">{submittedEmail}</strong>{" "}
                        as soon as a spot opens up.
                    </p>
                </div>

                <div className="bg-muted border-t border-edge px-4 py-4 grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-2">
                    <DialogClose render={
                        <Button variant="outline">Close</Button>
                    } />
                    <Link
                        className="w-full"
                        href="/roadmap"
                    >
                        <Button className="w-full">
                            Follow our roadmap
                        </Button>
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}
