"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ErrorBoundary } from "@/components/error-boundary"
import { Suspense } from "react"
import {
  ArrowRightIcon,
  RocketIcon,
  CodeIcon,
  GearIcon,
  GlobeIcon,
  HomeIcon,
  PersonIcon,
  TimerIcon,
  StarIcon,
  HeartIcon,
  MixerHorizontalIcon,
  LayersIcon,
} from "@radix-ui/react-icons"

const values = [
  {
    title: "Lokale Expertise",
    description: "Wir machen hochwertige Webentwicklung für lokale Unternehmen zugänglich. Qualität muss nicht teuer sein.",
    Icon: HomeIcon,
    ariaLabel: "Icon für lokale Expertise",
  },
  {
    title: "Performance & Qualität",
    description: "Unsere Webanwendungen sind auf maximale Performance und Benutzerfreundlichkeit optimiert, mit besonderem Fokus auf Core Web Vitals.",
    Icon: StarIcon,
    ariaLabel: "Icon für Performance und Qualität",
  },
  {
    title: "Faire Preisgestaltung",
    description: "Transparente und erschwingliche Preise für erstklassige Webentwicklung. Damit auch kleine Unternehmen von modernster Technologie profitieren.",
    Icon: PersonIcon,
    ariaLabel: "Icon für faire Preisgestaltung",
  },
]

const stats = [
  {
    title: "Performance",
    value: "99+",
    description: "PageSpeed Score",
    Icon: TimerIcon,
    ariaLabel: "Icon für Performance Statistik",
  },
  {
    title: "Reichweite",
    value: "Global",
    description: "Deployment & Hosting",
    Icon: GlobeIcon,
    ariaLabel: "Icon für globale Reichweite",
  },
  {
    title: "Optimierung",
    value: "50%+",
    description: "Schnellere Ladezeiten",
    Icon: GearIcon,
    ariaLabel: "Icon für Optimierung",
  },
]

export default function UeberUnsPage() {
  // Schema.org structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yanchew",
    "description": "Spezialisierte Webentwicklung mit Next.js, React und TypeScript. Performance-optimierte Webanwendungen und SEO-fokussierte Entwicklung.",
    "url": "https://www.yanchew.com/ueber-uns",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Adolf-Kaschny-Straße 19",
      "addressLocality": "Leverkusen",
      "postalCode": "51373",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@yanchew.com",
      "contactType": "customer service"
    }
  }

  return (
    <ErrorBoundary>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>}>
        <div className="relative">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20">
            <div className="absolute inset-0 -z-10 bg-background/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.03]" />
            </div>
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Qualität für Alle Zugänglich
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  Wir demokratisieren hochwertige Webentwicklung. Unsere Mission ist es, erstklassige 
                  Websites und Webanwendungen für lokale Unternehmen erschwinglich und zugänglich zu machen.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="container py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Unsere Mission
              </h2>
              <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                <p>
                  Bei Yanchew glauben wir fest daran, dass jedes lokale Unternehmen Zugang zu hochwertiger 
                  Webentwicklung haben sollte. Wir haben es uns zur Aufgabe gemacht, die Lücke zwischen 
                  Premium-Webentwicklung und erschwinglichen Preisen zu schließen.
                </p>
                <p>
                  Durch die Kombination modernster Technologien wie Next.js, React und TypeScript mit 
                  effizienten Entwicklungsprozessen, können wir hochwertige Websites zu fairen Preisen 
                  anbieten. Unser "On-Demand"-Modell ermöglicht es lokalen Unternehmen, genau die 
                  Funktionen zu erhalten, die sie benötigen - ohne versteckte Kosten.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="container py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Unsere Werte & Versprechen
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Qualität, Fairness und lokales Engagement - das macht uns aus
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group relative flex flex-col rounded-lg border bg-background/50 p-6 transition-colors hover:border-primary/50 hover:bg-background/80"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.Icon className="h-6 w-6" aria-label={value.ariaLabel} role="img" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Approach Section */}
          <section className="container py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Unser Ansatz
              </h2>
              <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                <p>
                  Wir haben unseren Entwicklungsprozess speziell auf die Bedürfnisse lokaler Unternehmen 
                  ausgerichtet. Durch standardisierte Komponenten und bewährte Technologien können wir 
                  schnell und kosteneffizient hochwertige Websites erstellen.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border bg-background/50 p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <RocketIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Schnelle Umsetzung</h3>
                    <p className="text-sm text-muted-foreground">
                      Dank unserer optimierten Prozesse können wir Ihre Website schnell und effizient 
                      umsetzen - ohne Kompromisse bei der Qualität.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-background/50 p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MixerHorizontalIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Flexible Lösungen</h3>
                    <p className="text-sm text-muted-foreground">
                      Maßgeschneiderte Funktionen nach Ihren Bedürfnissen - Sie zahlen nur für das, 
                      was Sie wirklich brauchen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Culture Section */}
          <section className="container py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Unsere Arbeitskultur
              </h2>
              <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                <p>
                  Wir pflegen eine offene und kollaborative Arbeitskultur, in der Innovation und 
                  kontinuierliches Lernen im Mittelpunkt stehen. Unsere Mitarbeiter sind Experten 
                  in ihren Bereichen und teilen ihre Kenntnisse in regelmäßigen Knowledge-Sharing-Sessions.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border bg-background/50 p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <HeartIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Teamwork & Kollaboration</h3>
                    <p className="text-sm text-muted-foreground">
                      Gemeinsam erreichen wir mehr. Wir arbeiten eng zusammen und unterstützen uns gegenseitig 
                      bei der Entwicklung innovativer Lösungen.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-background/50 p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MixerHorizontalIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Innovation & Wachstum</h3>
                    <p className="text-sm text-muted-foreground">
                      Wir fördern kontinuierliches Lernen und Innovation. Regelmäßige Weiterbildungen 
                      und Tech-Talks gehören zu unserem Alltag.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Zahlen & Fakten
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Messbare Ergebnisse durch moderne Technologien
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col items-center rounded-lg border bg-background/50 p-6 text-center transition-colors hover:border-primary/50 hover:bg-background/80"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <stat.Icon className="h-6 w-6" aria-label={stat.ariaLabel} role="img" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <h3 className="mt-2 text-lg font-semibold">{stat.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Quality Standards Section */}
          <section className="container py-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Unsere Qualitätsstandards
              </h2>
              <div className="mt-6 space-y-6">
                <div className="rounded-lg border bg-background/50 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <LayersIcon className="h-6 w-6" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Code-Qualität & Best Practices</h3>
                    <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                      <li>Strikte TypeScript-Typisierung für maximale Code-Sicherheit</li>
                      <li>Automatisierte Tests und kontinuierliche Integration</li>
                      <li>Code Reviews und Pair Programming</li>
                      <li>Performance-Optimierung und SEO Best Practices</li>
                      <li>Barrierefreiheit nach WCAG-Standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="container py-20">
            <div className="relative overflow-hidden rounded-lg border bg-background/50 p-8 md:p-12 lg:p-16">
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.03]" />
              </div>
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Lassen Sie uns zusammenarbeiten
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Sie haben ein spannendes Projekt? Wir unterstützen Sie bei der Umsetzung Ihrer digitalen Vision. 
                  Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                </p>
                <div className="mt-8">
                  <Link
                    href="/kontakt"
                    className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Projekt besprechen
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
} 