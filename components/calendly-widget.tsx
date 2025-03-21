"use client"

import { useEffect, useState, useRef } from "react"

export default function CalendlyWidget() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true

    // Set up a listener for when Calendly is fully loaded
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event && e.data.event.indexOf("calendly") === 0) {
        // When Calendly is loaded or changes
        if (
          e.data.event === "calendly.event_scheduled" ||
          e.data.event === "calendly.date_and_time_selected" ||
          e.data.event === "calendly.profile_page_viewed"
        ) {
          setIsLoaded(true)
        }
      }
    }

    window.addEventListener("message", handleCalendlyEvent)
    document.body.appendChild(script)

    return () => {
      window.removeEventListener("message", handleCalendlyEvent)
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Initial height is large enough to avoid scrollbars before content is measured
  const initialHeight = 2200

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/d/crwq-ckg-sg6?background_color=5b32c2&text_color=ffffff&primary_color=2de2e6"
        style={{
          minWidth: "320px",
          height: `${initialHeight}px`,
          transition: "height 0.3s ease",
        }}
      />
    </div>
  )
}

