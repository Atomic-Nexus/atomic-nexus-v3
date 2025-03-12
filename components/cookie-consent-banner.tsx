"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useCookieConsent } from "../context/cookie-consent-context"
import Link from "next/link"

export default function CookieConsentBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)

  if (!showBanner) return null

  const toggleDetails = () => setShowDetails(!showDetails)

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
          <div className="bg-russian-violet/80 backdrop-blur-md border border-[rgba(255,184,0,0.3)] rounded-xl overflow-hidden shadow-xl">
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Privacy Notice</h3>
                  <p className="text-cool-gray text-sm md:text-base">
                    We use Simple Analytics to count website visits, which doesn't use cookies or collect personal data.
                    The only cookies we use are essential for Stripe payments. We don't use any cookies for advertising
                    purposes.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-blue-violet hover:bg-blue-violet/90" onClick={acceptAll}>
                    Accept
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={toggleDetails}
                  className="flex items-center text-electric-cyan hover:text-electric-cyan/80 text-sm font-medium transition-colors"
                >
                  {showDetails ? (
                    <>
                      <ChevronUp className="mr-1 h-4 w-4" />
                      Hide details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-1 h-4 w-4" />
                      View details
                    </>
                  )}
                </button>
              </div>

              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 border-t border-russian-violet/50 pt-4"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Essential Cookies</h4>
                        <p className="text-cool-gray text-sm">
                          These cookies are used only for Stripe payments and are essential for the payment process to
                          work properly.
                        </p>
                      </div>
                      <Switch checked={true} disabled />
                    </div>

                    <div className="bg-blue-violet/10 p-4 rounded-lg border border-blue-violet/20 mt-4">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-electric-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <div className="text-cool-gray text-sm">
                          <p className="mb-2">
                            We care about your privacy. We don't use any cookies for advertising or tracking purposes.
                          </p>
                          <p>
                            For analytics, we use Simple Analytics, a privacy-friendly service that doesn't use cookies
                            or collect personal data.{" "}
                            <Link
                              href="https://www.simpleanalytics.com/privacy-friendly-analytics"
                              className="text-electric-cyan hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Learn more
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

