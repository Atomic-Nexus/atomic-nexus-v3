"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function BinarySphere() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)

    // Add renderer to DOM
    containerRef.current.appendChild(renderer.domElement)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    // Initial size
    handleResize()
    window.addEventListener("resize", handleResize)

    // Create particles
    const particlesCount = 8000
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      transparent: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    // Create positions for particles
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    const sphereRadius = 15
    const colorOptions = [
      new THREE.Color(0x8646f4), // Blue Violet
      new THREE.Color(0x2de2e6), // Electric Cyan
      new THREE.Color(0xff2079), // Neon Magenta
      new THREE.Color(0xffb800), // Luminous Gold
    ]

    // Create a spiral pattern
    for (let i = 0; i < particlesCount; i++) {
      // Fibonacci spiral distribution for more even coverage
      const phi = Math.acos(1 - 2 * (i / particlesCount))
      const theta = Math.sqrt(particlesCount * Math.PI) * phi

      // Add some randomness to the radius for depth
      const radius = sphereRadius * (0.9 + Math.random() * 0.1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Create color bands based on position
      let colorIndex
      if (Math.abs(y) < sphereRadius * 0.25) {
        colorIndex = 0 // Blue Violet for center band
      } else if (y > 0) {
        colorIndex = 1 // Electric Cyan for top
      } else {
        colorIndex = 2 // Neon Magenta for bottom
      }

      // Occasionally add gold accents
      if (Math.random() > 0.95) {
        colorIndex = 3 // Luminous Gold for accents
      }

      const color = colorOptions[colorIndex]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    particlesMaterial.vertexColors = true

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Create a second layer of particles for inner glow
    const innerParticlesCount = 2000
    const innerParticlesGeometry = new THREE.BufferGeometry()
    const innerPositions = new Float32Array(innerParticlesCount * 3)
    const innerColors = new Float32Array(innerParticlesCount * 3)

    for (let i = 0; i < innerParticlesCount; i++) {
      const phi = Math.acos(1 - 2 * (i / innerParticlesCount))
      const theta = Math.sqrt(innerParticlesCount * Math.PI) * phi

      const radius = sphereRadius * 0.5 * (0.8 + Math.random() * 0.2)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      innerPositions[i * 3] = x
      innerPositions[i * 3 + 1] = y
      innerPositions[i * 3 + 2] = z

      // Inner core is primarily blue-violet with occasional cyan
      const color =
        Math.random() > 0.8
          ? colorOptions[1] // Electric Cyan
          : colorOptions[0] // Blue Violet

      innerColors[i * 3] = color.r
      innerColors[i * 3 + 1] = color.g
      innerColors[i * 3 + 2] = color.b
    }

    innerParticlesGeometry.setAttribute("position", new THREE.BufferAttribute(innerPositions, 3))
    innerParticlesGeometry.setAttribute("color", new THREE.BufferAttribute(innerColors, 3))

    const innerParticlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      vertexColors: true,
    })

    const innerParticles = new THREE.Points(innerParticlesGeometry, innerParticlesMaterial)
    scene.add(innerParticles)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the particles to create spiral effect
      particles.rotation.y += 0.002
      particles.rotation.x += 0.0005
      particles.rotation.z += 0.0001

      innerParticles.rotation.y -= 0.003
      innerParticles.rotation.x -= 0.0007

      // Pulse effect
      const time = Date.now() * 0.001
      const pulse = Math.sin(time * 0.5) * 0.05 + 1
      particles.scale.set(pulse, pulse, pulse)

      // Counter pulse for inner particles
      const innerPulse = Math.sin(time * 0.5 + Math.PI) * 0.05 + 1
      innerParticles.scale.set(innerPulse, innerPulse, innerPulse)

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      particlesGeometry.dispose()
      innerParticlesGeometry.dispose()
      particlesMaterial.dispose()
      innerParticlesMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full min-h-[400px] md:min-h-[500px]" aria-hidden="true" />
}

