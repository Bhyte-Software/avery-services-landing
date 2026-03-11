import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
} from "@c15t/nextjs"

import { cn } from "@/lib/utils"

const buttonBase =
  "group/button cursor-pointer inline-flex shrink-0 items-center justify-center rounded-none font-normal text-sm whitespace-nowrap transition-all outline-none select-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"

const secondaryClasses = `${buttonBase} bg-muted border border-edge  text-muted-foreground hover:bg-white aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`

const defaultClasses = `${buttonBase} bg-primary text-primary-foreground hover:bg-primary/80 font-mono uppercase`

export function ConsentManager({ children }: { children: React.ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "c15t",
        backendURL: '/api/c15t',
        consentCategories: ['necessary', 'measurement', 'experience', 'marketing'],
        ignoreGeoLocation: true,
      }}
    >
      <CookieBanner
        theme={{
          "banner.card": {
            noStyle: true,
            className: cn(
              "relative w-full max-w-(--banner-max-width) overflow-hidden rounded-none",
              "bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 dark:ring-border"
            ),
          },
          "banner.header.title": {
            noStyle: true,
            className: "text-base leading-none font-medium text-foreground",
          },
          "banner.header.description": {
            noStyle: true,
            className: "text-sm text-muted-foreground",
          },
          "banner.footer": {
            className: "border-t border-t-edge/50",
          },
          "banner.footer.sub-group": {
            noStyle: true,
            className: "flex items-center gap-2",
          },
          "banner.footer.reject-button": {
            noStyle: true,
            className: secondaryClasses,
          },
          "banner.footer.accept-button": {
            noStyle: true,
            className: secondaryClasses,
          },
          "banner.footer.customize-button": {
            noStyle: true,
            className: defaultClasses,
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


              "--dialog-card-radius": "0rem",
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
              "text-base leading-none font-medium tracking-tight text-foreground",
          },
          "dialog.description": {
            noStyle: true,
            className: "text-sm text-muted-foreground",
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
                "color-mix(in oklab, var(--ring) 50%, transparent)",
              "--dialog-branding-focus-color-dark":
                "color-mix(in oklab, var(--ring) 50%, transparent)",

              "--dialog-foreground-color": "var(--muted-foreground)",
              "--dialog-foreground-color-dark": "var(--muted-foreground)",
            },
          },
          "widget.accordion.item": {
            noStyle: true,
            className: "rounded-none border border-edge",
          },
          "widget.accordion.trigger": {
            noStyle: true,
            className: "flex items-center gap-3 pr-3",
          },
          "widget.accordion.trigger-inner": {
            noStyle: true,
            className: cn(
              "flex flex-1 items-center rounded-none px-4 py-3 text-sm font-normal text-foreground **:[svg]:hidden",
              "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            ),
          },
          "widget.accordion.content": {
            noStyle: true,
            className:
              "overflow-hidden px-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          },
          "widget.accordion.content-inner": {
            noStyle: true,
            className: "pb-4 text-sm text-muted-foreground",
          },
          "widget.switch": {
            noStyle: true,
            className: cn(
              "inline-flex h-4.5 w-8 shrink-0 items-center rounded-full transition-all",
              "border border-transparent",
              "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80"
            ),
          },
          "widget.switch.track": {
            noStyle: true,
          },
          "widget.switch.thumb": {
            noStyle: true,
            className: cn(
              "pointer-events-none block size-4 rounded-full bg-background ring-0 transition-[translate,background-color]",
              "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
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
            className: secondaryClasses,
          },
          "widget.footer.save-button": {
            noStyle: true,
            className: defaultClasses,
          },
        }}
      />

      {children}
    </ConsentManagerProvider>
  )
}
