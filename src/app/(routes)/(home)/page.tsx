import { SlashSeparator } from "@/components/common/slash-separator"
import FinalCta from "@/sections/final-cta"
import Hero from "@/sections/hero"

const HomePage = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <SlashSeparator />
      <Hero />
      <FinalCta />
    </div>
  )
}

export default HomePage