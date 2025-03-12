"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCookieConsent } from "@/context/cookie-consent-context"
import { Settings } from "lucide-react"
import Link from "next/link"

export default function CookieBanner() {
  const { showBanner, acceptAll, openPreferences } = useCookieConsent()

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="bg-russian-violet/80 backdrop-blur-md border border-[rgba(255,184,0,0.3)] rounded-xl p-4 md:p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">We value your privacy</h3>
                <p className="text-cool-gray text-sm md:text-base">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                  traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
                  <Link href="/privacy" className="text-electric-cyan hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-0">
                <Button
                  variant="outline"
                  className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan/10"
                  onClick={openPreferences}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Customize
                </Button>
                <Button onClick={acceptAll}>Accept All</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

