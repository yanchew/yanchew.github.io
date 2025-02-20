"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

interface TechItem {
  name: string
  wordmarkLight: string
  wordmarkDark: string
  color: string
  description: string
  imageClassName?: string
}

const techStack: TechItem[] = [
  {
    name: "Vercel",
    wordmarkLight: "/logos/vercel-wordmark-light.svg",
    wordmarkDark: "/logos/vercel-wordmark-dark.svg",
    color: "#000000",
    description: "Deployment & Hosting Platform",
  },
  {
    name: "Tailwind CSS",
    wordmarkLight: "/logos/tailwindcss-wordmark-light.svg",
    wordmarkDark: "/logos/tailwindcss-wordmark-dark.svg",
    color: "#38BDF8",
    description: "Utility-First CSS Framework",
  },
  {
    name: "Turbo",
    wordmarkLight: "/logos/turbo-wordmark-light.svg",
    wordmarkDark: "/logos/turbo-wordmark-dark.svg",
    color: "#7C3AED",
    description: "High-Performance Build System",
  },
  {
    name: "Next.js",
    wordmarkLight: "/logos/nextjs-wordmark-light.svg",
    wordmarkDark: "/logos/nextjs-wordmark-dark.svg",
    color: "#000000",
    description: "React Framework for Production",
  },
  {
    name: "TypeScript",
    wordmarkLight: "/logos/typescript-wordmark.svg",
    wordmarkDark: "/logos/typescript-wordmark.svg",
    color: "#3178C6",
    description: "Typed JavaScript at Scale",
  },
  {
    name: "Sanity",
    wordmarkLight: "/logos/sanity-wordmark.svg",
    wordmarkDark: "/logos/sanity-wordmark.svg",
    color: "#F03E2F",
    description: "Headless CMS Platform",
  },
  {
    name: "React",
    wordmarkLight: "/logos/react-wordmark.svg",
    wordmarkDark: "/logos/react-wordmark.svg",
    color: "#61DAFB",
    description: "JavaScript Library for UI",
    imageClassName: "h-12 w-auto",
  },
]

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const viewportWidth = container.offsetWidth
    const scrollDistance = scrollWidth - viewportWidth

    const scroll = async () => {
      await controls.start({
        x: -scrollDistance,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      })
    }

    scroll()

    return () => {
      controls.stop()
    }
  }, [controls])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      {/* Section Header */}
      <div className="container mb-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Unsere Technologie-Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wir nutzen modernste Technologien für optimale Performance und Skalierbarkeit
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative flex w-full touch-none items-center overflow-hidden"
        aria-label="Technologie Karussell"
      >
        <motion.div
          className="flex gap-8 px-8"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => controls.start({
            x: -containerRef.current!.scrollWidth + containerRef.current!.offsetWidth,
            transition: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            },
          })}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="relative flex w-[280px] flex-col items-center rounded-xl border bg-background p-6"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              style={{
                boxShadow: `0 0 20px ${tech.color}10`,
              }}
            >
              <div
                className="mb-4 flex h-16 w-full items-center justify-center"
              >
                <Image
                  src={currentTheme === "dark" ? tech.wordmarkDark : tech.wordmarkLight}
                  alt={`${tech.name} logo`}
                  width={160}
                  height={48}
                  className={tech.imageClassName || "h-8 w-auto object-contain"}
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 