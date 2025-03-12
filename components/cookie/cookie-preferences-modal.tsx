"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useCookieConsent } from "@/context/cookie-consent-context"
import { X } from "lucide-react"

export default function CookiePreferencesModal() {
  const { consent, showPreferencesModal, closePreferences, savePreferences } = useCookieConsent()

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    if (consent) {
      setPreferences(consent)
    }
  }, [consent])

  const handleSave = () => {
    savePreferences(preferences)
  }

  if (!showPreferencesModal) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-rich-black border border-[rgba(255,184,0,0.3)] rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closePreferences}
                className="text-cool-gray hover:text-white"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="border-b border-russian-violet/50 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Necessary Cookies</h3>
                      <p className="text-cool-gray text-sm mt-1">
                        These cookies are essential for the website to function properly and cannot be disabled.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.necessary}
                      disabled={true}
                      className="data-[state=checked]:bg-blue-violet"
                    />
                  </div>
                </div>

                <div className="border-b border-russian-violet/50 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                      <p className="text-cool-gray text-sm mt-1">
                        These cookies help us understand how visitors interact with our website, helping us improve our
                        services.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, analytics: checked }))}
                      className="data-[state=checked]:bg-blue-violet"
                    />
                  </div>
                </div>

                <div className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                      <p className="text-cool-gray text-sm mt-1">
                        These cookies are used to track visitors across websites to display relevant advertisements.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, marketing: checked }))}
                      className="data-[state=checked]:bg-blue-violet"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <Button variant="outline" onClick={closePreferences}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save Preferences</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

