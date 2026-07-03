import { cn } from "@/lib/utils";

export function SlashSeparator({ className }: { className?: string }) {
    return (
        <div className="relative w-full border-y border-edge">
            <div className="px-2">
                <div
                    className={cn(
                        "relative mx-auto h-8 w-full border-x border-edge bg-background md:h-10 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",
                        className
                    )}
                >
                    <div
                        aria-hidden
                        className="absolute -left-[100vw] top-0 bottom-px w-[200vw] bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/60"
                    />
                </div>
            </div>
        </div>
    )
}
