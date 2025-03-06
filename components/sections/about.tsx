"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-6">
            Why Choose <span className="gradient-text">Atomic Nexus</span>?
          </h2>

          {/* Centered card with animated border */}
          <div className="card-with-border mb-12 relative rounded-xl overflow-hidden">
            {/* Card content */}
            <div className="relative bg-russian-violet/30 rounded-xl p-8 z-10">
              <p className="paragraph">
                Atomic Nexus empowers forward-thinking entrepreneurs and early adopters to unlock growth, enhance
                customer experiences, and optimize business operations through AI-driven automation. By identifying
                high-impact opportunities, Atomic Nexus helps businesses harness the full potential of AI to deliver
                smarter customer interactions, streamline workflows, and open new revenue streams—driving measurable
                results and lasting success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

