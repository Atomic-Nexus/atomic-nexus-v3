"use client"

import { motion } from "framer-motion"
import { StarBorder } from "@/components/ui/star-border"
import { trackEvent } from "@/lib/analytics"
import Link from "next/link"

export default function Cta() {
  const handleCtaClick = () => {
    trackEvent("cta_button_clicked", { section: "main_cta" })
  }

  return (
    <section className="py-24 relative">
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8 md:p-12 text-center bg-gradient-to-b from-russian-violet/60 to-rich-black rounded-xl">
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              AI Is Changing Business.
            </motion.h3>

            <motion.h2
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Are You Ready?
            </motion.h2>

            <motion.p
              className="paragraph mb-12 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Don't get left behind. Discover how AI can streamline your operations, boost revenue, and future-proof
              your business. Book a free consultation and start your AI journey today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <StarBorder as={Link} href="/booking" onClick={handleCtaClick}>
                Book Your Free AI Discovery Call
              </StarBorder>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

