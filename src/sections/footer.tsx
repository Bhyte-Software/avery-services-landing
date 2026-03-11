import { SlashSeparator } from "@/components/common/slash-separator"

const Footer = () => {
    return (
        <aside className="w-full overflow-hidden">
            <SlashSeparator />
            <footer className='z-50 max-w-screen overflow-x-hidden bg-background px-2 pb-2 border-t border-edge'>
                <div
                    className="screen-line-before screen-line-after md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col lg:flex-row h-fit lg:h-16 py-4 lg:py-0 items-center justify-between gap-2 border-x border-edge px-4 after:z-1 after:transition-[background-color] sm:gap-4"
                >
                    <span className=" text-xs md:text-sm text-foreground font-mono uppercase">© 2026 Culio. All Rights reserved.</span>
                    <span className=" text-xs md:text-sm text-foreground font-mono uppercase">A Bhyte Software Company</span>
                </div>
            </footer>
        </aside>
    )
}

export default Footer