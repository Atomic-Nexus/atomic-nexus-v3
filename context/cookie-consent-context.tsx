"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { getCookie, setCookie } from "@/lib/cookies"

interface CookieConsentContextType {
  showBanner: boolean
  setShowBanner: (show: boolean) => void
  acceptAll: () => void
  declineAll: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [showBanner, setShowBanner] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
    // Check if user has already acknowledged the privacy notice
    const acknowledged = getCookie("privacy-acknowledged")

    if (!acknowledged) {
      // No acknowledgment yet, show the banner
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    if (isClient) {
      setCookie("privacy-acknowledged", "true", 365) // Store for 1 year
      setShowBanner(false)
    }
  }

  // For API consistency, we keep this function even though it does the same as acceptAll
  const declineAll = () => {
    acceptAll()
  }

  return (
    <CookieConsentContext.Provider
      value={{
        showBanner,
        setShowBanner,
        acceptAll,
        declineAll,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return context
}

