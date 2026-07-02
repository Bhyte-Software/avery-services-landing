"use client"

import {
  ConsentManagerDialog,
  CookieBanner,
} from "@c15t/nextjs"

import {
  consentDialogTheme,
  cookieBannerTheme,
} from "@/components/common/consent-theme"

export function ConsentManagerUI() {
  return (
    <>
      <CookieBanner theme={cookieBannerTheme} />
      <ConsentManagerDialog theme={consentDialogTheme} />
    </>
  )
}
