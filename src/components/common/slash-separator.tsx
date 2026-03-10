import { cn } from "@/lib/utils";

export function SlashSeparator({ className }: { className?: string }) {
    return (
        <div className="w-full px-2 ">
            <div
                className={cn(
                    "relative flex h-10 w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto border-x border-edge px-4",
                    "before:absolute before:-left-[100vw] before:-z-1 before:h-10 before:w-[200vw]",
                    "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/60",
                    className
                )}
            />
        </div>
    )
}
