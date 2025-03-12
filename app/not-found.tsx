"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const hue = 217
    const stars: Star[] = []
    const count = 800
    const maxSize = 2
    const fieldWidth = 900
    const fieldHeight = 900
    const speed = 0.1

    type Star = {
      x: number
      y: number
      z: number
      px: number
      py: number
      pz: number
    }

    const random = (min: number, max: number) => Math.random() * (max - min) + min

    const clearCanvas = () => {
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, w, h)
    }

    const initStars = () => {
      for (let i = 0; i < count; i++) {
        stars.push({
          x: random(-fieldWidth, fieldWidth),
          y: random(-fieldHeight, fieldHeight),
          z: random(1, 1000),
          px: 0,
          py: 0,
          pz: 0,
        })
      }
    }

    const updateStars = () => {
      for (let i = 0; i < count; i++) {
        const star = stars[i]
        star.pz = star.z
        star.z -= speed

        if (star.z <= 0) {
          star.z = 1000
          star.px = star.x
          star.py = star.y
          star.x = random(-fieldWidth, fieldWidth)
          star.y = random(-fieldHeight, fieldHeight)
        }

        star.px = star.x
        star.py = star.y
        star.x = (star.x * 1000) / star.z
        star.y = (star.y * 1000) / star.z
      }
    }

    const renderStars = () => {
      for (let i = 0; i < count; i++) {
        const star = stars[i]
        const x = star.x + w / 2
        const y = star.y + h / 2
        const px = star.px + w / 2
        const py = star.py + h / 2

        const size = ((1000 - star.z) / 1000) * maxSize

        const opacity = (1000 - star.z) / 1000

        ctx.beginPath()
        ctx.fillStyle = `hsla(${hue}, 100%, 80%, ${opacity})`
        ctx.arc(x, y, size, 0, 2 * Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.strokeStyle = `hsla(${hue}, 100%, 80%, ${opacity})`
        ctx.lineWidth = size / 2
        ctx.moveTo(px, py)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
    }

    const loop = () => {
      clearCanvas()
      updateStars()
      renderStars()
      requestAnimationFrame(loop)
    }

    const resizeHandler = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    initStars()
    loop()

    window.addEventListener("resize", resizeHandler)

    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "black" }}></canvas>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image src="/404.png" alt="Lost Astronaut" width={300} height={300} className="mx-auto" priority />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="heading-xl mb-6 text-white"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl font-medium mb-8 text-white"
        >
          Are you lost among the bytes?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button asChild size="lg" className="bg-blue-violet hover:bg-blue-violet/90">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

