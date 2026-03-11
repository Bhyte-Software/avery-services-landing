"use client"

import { SlashSeparator } from "@/components/common/slash-separator"
import { Badge } from "@/components/ui/badge"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"
import { TextAnimate } from "@/components/ui/text-animate"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <SlashSeparator />

      <section className="relative flex flex-col h-[calc(100vh-96px)] md:h-[calc(100vh-112px)] px-2 overflow-clip ">
        <div
          className="screen-line-before screen-line-after relative flex-1 flex-col md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex w-full items-center justify-between border-x border-edge after:z-1 after:transition-[background-color]"
        >
          <aside className="w-full h-80 relative scale-y-[-1]">
            <Image fill src="/assets/hero-dither.webp" alt="Dither illustration" className=" object-cover object-top" />
          </aside>
          <div className="w-full flex flex-col items-center absolute top-1/2 -translate-y-[60%] z-50">
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
                />
                <aside className=" size-2 md:size-2.5 aspect-square bg-primary mr-1" />
                404_Error
              </Badge>
            </motion.div>
            <span className=" inline-flex items-center gap-1">
              <TextAnimate className="mt-4 text-[40px] leading-10 lg:text-6xl xl:text-7xl tracking-tighter xl:leading-16 max-w-2xl text-balance text-center" animation="blurIn" as="h1">
                Page Not Found
              </TextAnimate>
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                className=" text-primary text-[40px] leading-10 lg:text-6xl xl:text-7xl tracking-tighter xl:leading-16"
              >_</motion.span>
            </span>

            <Link href="/">
              <Button className="h-10 md:h-12 px-6 mt-8">
                Go to homepage
              </Button>
            </Link>

          </div>
          <aside className="h-100 w-full relative">
            <Image fill src="/assets/hero-dither.webp" alt="Dither illustration" className=" object-cover object-top" />
          </aside>
        </div>
      </section>
    </div>
  )
}

export default NotFound