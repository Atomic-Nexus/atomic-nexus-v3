"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import BinarySphere from "../animations/binary-sphere"
import Particles from "../animations/particles"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at center, #190e36 0%, #030014 40%)",
      }}
    >
      {/* Particles background */}
      <Particles quantity={40} staticity={50} ease={80} />

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Ignite Growth</span> with AI-Powered Strategy & Insights
          </motion.h1>

          <motion.p
            className="paragraph mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Atomic Nexus helps forward-thinking entrepreneurs master AI and automation through expert education and
            consulting—unlocking new opportunities for growth and innovation
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg">Get a Free Consultation</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 relative w-full max-w-4xl mx-auto aspect-[16/9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <BinarySphere />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

