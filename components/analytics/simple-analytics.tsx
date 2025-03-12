"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function SimpleAnalytics() {
  // Track page views manually for client-side navigation
  useEffect(() => {
    if (typeof window === "undefined") return

    // Function to send page view to Simple Analytics
    const trackPageView = () => {
      if (window.sa_event) {
        window.sa_event("pageview")
      }
    }

    // Track initial page view
    trackPageView()

    // Listen for route changes in Next.js
    const handleRouteChange = () => {
      trackPageView()
    }

    // Add event listener for route changes
    window.addEventListener("routeChangeComplete", handleRouteChange)

    // Clean up
    return () => {
      window.removeEventListener("routeChangeComplete", handleRouteChange)
    }
  }, [])

  return (
    <>
      <Script
        src="https://scripts.simpleanalyticscdn.com/latest.js"
        data-collect-dnt="true"
        data-auto-collect="false"
        strategy="afterInteractive"
      />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  )
}

