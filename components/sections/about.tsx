"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="gradient-text">Atomic Nexus</span>?
          </motion.h2>
          <motion.p
            className="paragraph max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            className="bg-russian-violet/60 rounded-xl overflow-hidden max-w-5xl w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-12 md:p-16">
              <div className="text-cool-gray text-lg leading-relaxed">
                Atomic Nexus empowers forward-thinking entrepreneurs and early adopters to unlock growth, enhance
                customer experiences and optimize business operations through AI-driven automation. By identifying
                high-impact opportunities, Atomic Nexus helps businesses harness the full potential of AI to deliver
                smarter customer interactions, streamline workflows, and open new revenue streams—driving measurable
                results and lasting success.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

