import { SlashSeparator } from "@/components/common/slash-separator"
import Agents from "@/sections/agents"
import Faqs from "@/sections/faqs"
import FinalCta from "@/sections/final-cta"
import Hero from "@/sections/hero"
import ImpactStats from "@/sections/impact-stats"
import WhyForesight from "@/sections/why-foresight"

const HomePage = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <SlashSeparator />
      <Hero />
      <SlashSeparator />
      <ImpactStats />
      <SlashSeparator />
      <Agents />
      <SlashSeparator />
      <WhyForesight />
      <SlashSeparator />
      <Faqs />
      <SlashSeparator />
      <FinalCta />
    </div>
  )
}

export default HomePage