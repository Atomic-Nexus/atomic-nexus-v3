"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarClock } from "lucide-react"
import { motion } from "framer-motion"

export default function BookingComingSoonClientPage() {
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
                Booking System
              </motion.h1>

              <motion.h2
                className="heading-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="gradient-text">Coming Soon</span>
              </motion.h2>

              <motion.p
                className="paragraph max-w-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We're currently setting up our AI strategy call booking system with Calendly. Soon you'll be able to
                schedule your free AI discovery call directly through our website.
              </motion.p>

             

              <motion.div
                className="bg-blue-violet/10 rounded-lg p-6 w-full max-w-md border border-blue-violet/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-white">What to Expect from Our AI Strategy Calls:</h3>
                <ul className="space-y-3 text-left">
                  <motion.li
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <span className="text-electric-cyan mr-3 text-lg flex-shrink-0">•</span>
                    <div>Personalized assessment of your business's AI readiness</div>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <span className="text-electric-cyan mr-3 text-lg flex-shrink-0">•</span>
                    <div>Identification of high-impact AI opportunities for your industry</div>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <span className="text-electric-cyan mr-3 text-lg flex-shrink-0">•</span>
                    <div>Clear, jargon-free explanations of relevant AI technologies</div>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <span className="text-electric-cyan mr-3 text-lg flex-shrink-0">•</span>
                    <div>Strategic guidance on next steps for AI implementation</div>
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p className="text-cool-gray">
                  For urgent inquiries, please contact us at{" "}
                  <a href="mailto:info@atomicnexus.io" className="text-electric-cyan hover:underline">
                    info@atomicnexus.io
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

