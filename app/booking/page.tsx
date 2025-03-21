import type { Metadata } from "next"
import CalendlyWidget from "@/components/calendly-widget"

export const metadata: Metadata = {
  title: "Book Your AI Discovery Call | Atomic Nexus",
  description: "Schedule your free AI strategy consultation to explore how AI can benefit your business.",
}

export default function BookingPage() {
  return (
    <div className="py-32">
      <div className="container-custom max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">AI Discovery Call Booking</h1>

        {/* Calendly Widget */}
        <div className="w-full">
          <CalendlyWidget />
        </div>
      </div>
    </div>
  )
}

