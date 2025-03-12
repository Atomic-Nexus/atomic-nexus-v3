"use client"

import CookieBanner from "./cookie-banner"
import CookiePreferencesModal from "./cookie-preferences-modal"

export default function CookieConsent() {
  return (
    <>
      <CookieBanner />
      <CookiePreferencesModal />
    </>
  )
}

