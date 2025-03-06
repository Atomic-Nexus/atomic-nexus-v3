"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; vx: number; vy: number; opacity: number; size: number; color: string }>
  >([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const colors = ["#8646f4", "#2DE2E6", "#FF2079", "#FFB800"]

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const newParticles = []
    for (let i = 0; i < quantity; i++) {
      const x = Math.floor(Math.random() * dimensions.width)
      const y = Math.floor(Math.random() * dimensions.height)
      const vx = Math.random() * 2 - 1
      const vy = Math.random() * 2 - 1
      const opacity = Math.random() * 0.6 + 0.1
      const size = Math.floor(Math.random() * 4) + 1
      const color = colors[Math.floor(Math.random() * colors.length)]

      newParticles.push({ x, y, vx, vy, opacity, size, color })
    }

    setParticles(newParticles)
  }, [dimensions, quantity])

  useEffect(() => {
    let animationFrameId: number
    let previousTime = Date.now()

    const animate = () => {
      const currentTime = Date.now()
      const deltaTime = currentTime - previousTime
      previousTime = currentTime

      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let { x, y, vx, vy } = particle

          // Update position based on velocity
          x += vx * (deltaTime / ease)
          y += vy * (deltaTime / ease)

          // Bounce off walls
          if (x < 0 || x > dimensions.width) {
            vx = -vx
          }

          if (y < 0 || y > dimensions.height) {
            vy = -vy
          }

          // Apply staticity (random small changes to velocity)
          vx += (Math.random() - 0.5) / staticity
          vy += (Math.random() - 0.5) / staticity

          // Ensure particles stay within bounds
          x = Math.max(0, Math.min(x, dimensions.width))
          y = Math.max(0, Math.min(y, dimensions.height))

          return { ...particle, x, y, vx, vy }
        }),
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrameId)
  }, [dimensions, ease, staticity])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full pointer-events-none"
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
          }}
          transition={{
            duration: 0,
            ease: "linear",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  )
}

