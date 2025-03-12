"use client"

import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { Container } from "../layout/Container"

export function Hero() {
  const businessHighlights = [
    {
      title: "Enterprise React Entwicklung",
      description: "Skalierbare Webanwendungen mit Next.js 14"
    },
    {
      title: "Performance Optimierung",
      description: "99+ PageSpeed Score & SEO-Optimierung"
    },
    {
      title: "Full-Stack TypeScript",
      description: "End-to-End typsichere Entwicklung"
    }
  ]

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-background/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.03]" />
      </div>

      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Webentwicklung der nächsten Generation
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Entdecken Sie die Möglichkeiten moderner Web-Technologien. Mit React, Next.js und TypeScript entwickeln wir Ihre digitale Präsenz auf Enterprise-Niveau.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Jetzt durchstarten
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/technologien"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-background/80 hover:text-accent-foreground"
                >
                  Technologie-Stack
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side Content */}
          <div className="relative mt-10 lg:col-span-5 lg:mt-0 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-lg border bg-background/50 p-6 backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-1 w-12 rounded bg-primary/30" />
                  <div className="h-1 w-8 rounded bg-primary/20" />
                  <div className="h-1 w-4 rounded bg-primary/10" />
                </div>
                <div className="grid gap-4">
                  {businessHighlights.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="rounded-md border bg-background/50 p-4 shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary/40" />
                          <div className="text-sm font-medium">{item.title}</div>
                        </div>
                        <div className="pl-4">
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
} 