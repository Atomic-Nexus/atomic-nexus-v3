"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { CalendarClock } from "lucide-react"
import { motion } from "framer-motion"

export default function BookingComingSoonClientPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the new booking page
    router.replace("/booking")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          className="bg-russian-violet/30 border border-[rgba(255,184,0,0.3)] rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="mb-6 p-4 bg-blue-violet/20 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CalendarClock className="h-12 w-12 text-blue-violet" />
              </motion.div>

              <motion.h1
                className="heading-xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Redirecting...
              </motion.h1>

              <motion.p
                className="paragraph max-w-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Please wait while we redirect you to our booking system.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

