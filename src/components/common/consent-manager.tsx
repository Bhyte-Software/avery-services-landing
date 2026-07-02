"use client"

import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
} from "@c15t/nextjs"

import { cn } from "@/lib/utils"

const buttonBase =
  "group/button cursor-pointer inline-flex shrink-0 items-center justify-center rounded-full font-sans font-medium text-sm normal-case whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-[#087443]/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 h-8 gap-1.5 px-4"

const primaryClasses = `${buttonBase} bg-[#087443] text-white hover:bg-[#066a35]`

const secondaryClasses = `${buttonBase} border border-edge bg-background text-foreground hover:bg-[#F1F2EF]`

export function ConsentManager({ children }: { children: React.ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "c15t",
        backendURL: "/api/c15t",
        consentCategories: ["necessary", "measurement", "experience", "marketing"],
        ignoreGeoLocation: true,
      }}
    >
      <CookieBanner
        theme={{
          "banner.card": {
            noStyle: true,
            className: cn(
              "relative w-full max-w-(--banner-max-width) overflow-hidden rounded-xl",
              "border border-edge bg-background text-foreground shadow-lg"
            ),
          },
          "banner.header.title": {
            noStyle: true,
            className: "text-base font-medium leading-snug tracking-tight text-foreground",
          },
          "banner.header.description": {
            noStyle: true,
            className: "text-sm leading-relaxed text-muted-foreground",
          },
          "banner.footer": {
            className: "border-t border-edge/50",
          },
          "banner.footer.sub-group": {
            noStyle: true,
            className: "grid grid-cols-2 items-center gap-2",
          },
          "banner.footer.reject-button": {
            noStyle: true,
            className: secondaryClasses,
          },
          "banner.footer.accept-button": {
            noStyle: true,
            className: primaryClasses,
          },
          "banner.footer.customize-button": {
            noStyle: true,
            className: secondaryClasses,
          },
        }}
      />

      <ConsentManagerDialog
        theme={{
          "dialog.root": {
            style: {
              "--dialog-height": "100%",
              "--dialog-font-family": "var(--font-sans)",
              "--dialog-background-color": "var(--background)",
              "--dialog-background-color-dark": "var(--background)",
              "--dialog-card-radius": "0.75rem",
            },
            className:
              "[--dialog-card-shadow-color:var(--foreground)]/10 dark:[--dialog-card-shadow-color:var(--edge)]",
          },
          "dialog.overlay": {
            style: {
              "--dialog-overlay-background-color": "lab(0% 0 0 / 0.2)",
              "--dialog-overlay-background-color-dark": "lab(0% 0 0 / 0.4)",
            },
          },
          "dialog.title": {
            noStyle: true,
            className:
              "text-base font-medium leading-none tracking-tight text-foreground",
          },
          "dialog.description": {
            noStyle: true,
            className: "text-sm leading-relaxed text-muted-foreground",
          },
          "dialog.header": {
            style: {
              "--dialog-header-gap": "0.5rem",
              "--dialog-card-gap": "0",
            },
          },
          "dialog.footer": {
            style: {
              "--dialog-border-width": "1px",
              "--dialog-stroke-color": "var(--edge)",
              "--dialog-stroke-color-dark": "var(--edge)",
              "--dialog-branding-icon-height": "1.125rem",
              "--dialog-branding-font-size": "0.875rem",
              "--dialog-branding-focus-color":
                "color-mix(in oklab, #087443 50%, transparent)",
              "--dialog-branding-focus-color-dark":
                "color-mix(in oklab, #087443 50%, transparent)",
              "--dialog-foreground-color": "var(--muted-foreground)",
              "--dialog-foreground-color-dark": "var(--muted-foreground)",
            },
          },
          "widget.accordion.item": {
            noStyle: true,
            className: "rounded-lg border border-edge",
          },
          "widget.accordion.trigger": {
            noStyle: true,
            className: "flex items-center gap-3 pr-3",
          },
          "widget.accordion.trigger-inner": {
            noStyle: true,
            className: cn(
              "flex flex-1 items-center rounded-lg px-4 py-3 text-sm font-normal text-foreground **:[svg]:hidden",
              "outline-none focus-visible:ring-2 focus-visible:ring-[#087443]/30"
            ),
          },
          "widget.accordion.content": {
            noStyle: true,
            className:
              "overflow-hidden px-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          },
          "widget.accordion.content-inner": {
            noStyle: true,
            className: "pb-4 text-sm leading-relaxed text-muted-foreground",
          },
          "widget.switch": {
            noStyle: true,
            className: cn(
              "inline-flex h-4.5 w-8 shrink-0 items-center rounded-full transition-all",
              "border border-transparent",
              "outline-none focus-visible:ring-2 focus-visible:ring-[#087443]/30",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "data-[state=checked]:bg-[#087443] data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80"
            ),
          },
          "widget.switch.track": {
            noStyle: true,
          },
          "widget.switch.thumb": {
            noStyle: true,
            className: cn(
              "pointer-events-none block size-4 rounded-full bg-background ring-0 transition-[translate,background-color]",
              "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white"
            ),
          },
          "widget.footer.sub-group": {
            noStyle: true,
            className: "grid grid-cols-2 gap-4 sm:flex",
          },
          "widget.footer.reject-button": {
            noStyle: true,
            className: secondaryClasses,
          },
          "widget.footer.accept-button": {
            noStyle: true,
            className: primaryClasses,
          },
          "widget.footer.save-button": {
            noStyle: true,
            className: primaryClasses,
          },
        }}
      />

      {children}
    </ConsentManagerProvider>
  )
}
