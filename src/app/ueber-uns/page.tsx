"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ErrorBoundary } from "@/components/error-boundary"
import { Suspense } from "react"
import { Container } from "@/components/layout/Container"
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
  GitHubLogoIcon,
  LinkedInLogoIcon,
  BookmarkIcon,
  LightningBoltIcon,
  CheckIcon,
  DownloadIcon,
  EnvelopeClosedIcon,
  PinRightIcon,
  ChatBubbleIcon,
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

// New team members data
const teamMembers = [
  {
    name: "Max Andronytschew",
    role: "Gründer & CEO",
    bio: "Mehr als 10 Jahre Erfahrung in der Webentwicklung mit Fokus auf React und TypeScript. Experte für Performance-Optimierung und UX-Design.",
    links: {
      linkedin: "https://linkedin.com/in/max-andronytschew",
      github: "https://github.com/max-andronytschew",
    },
  },
  {
    name: "Sophie Becker",
    role: "Lead Developer",
    bio: "Spezialisiert auf Next.js und Server Components. Hat zahlreiche Enterprise-Projekte erfolgreich geleitet und implementiert.",
    links: {
      linkedin: "https://linkedin.com/in/sophie-becker",
      github: "https://github.com/sophie-becker",
    },
  },
  {
    name: "David Schmidt",
    role: "UX/UI Designer",
    bio: "Kombination aus technischem Wissen und kreativem Design. Experte für TailwindCSS und moderne UI/UX-Prinzipien.",
    links: {
      linkedin: "https://linkedin.com/in/david-schmidt",
      github: "https://github.com/david-schmidt",
    },
  },
];

// New timeline events
const companyTimeline = [
  {
    year: "2018",
    title: "Gründung",
    description: "Yanchew wird mit dem Ziel gegründet, hochwertige Webentwicklung für lokale Unternehmen zugänglich zu machen."
  },
  {
    year: "2020",
    title: "Erweiterung des Teams",
    description: "Das Team wächst auf 5 Mitarbeiter und spezialisiert sich auf React und TypeScript Entwicklung."
  },
  {
    year: "2022",
    title: "Fokus auf Next.js",
    description: "Strategische Ausrichtung auf Next.js und Server Components für maximale Performance und SEO."
  },
  {
    year: "2024",
    title: "KI-Integration",
    description: "Einführung von KI-gestützten Entwicklungsprozessen und Content-Optimierung für Kunden."
  },
  {
    year: "2025",
    title: "Expansion & Nachhaltigkeit",
    description: "Expansion in neue Märkte mit Fokus auf nachhaltige Webentwicklung und grüne Technologien."
  },
];

// New certifications and partnerships
const certificationsAndPartners = [
  {
    name: "Vercel Partner",
    type: "partnership",
    description: "Offizieller Vercel Partner für Next.js Entwicklung und Deployment"
  },
  {
    name: "React Certified Professional",
    type: "certification",
    description: "Alle Entwickler sind zertifizierte React-Experten"
  },
  {
    name: "TypeScript Certified",
    type: "certification",
    description: "Zertifizierte TypeScript-Kenntnisse auf höchstem Niveau"
  },
  {
    name: "GreenTech Alliance",
    type: "partnership",
    description: "Mitglied der GreenTech Alliance für nachhaltige Technologien"
  },
];

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
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                  <StarIcon className="mr-1 h-3 w-3" /> Über Uns
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Qualität für Alle Zugänglich
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  Wir demokratisieren hochwertige Webentwicklung. Unsere Mission ist es, erstklassige 
                  Websites und Webanwendungen für lokale Unternehmen erschwinglich und zugänglich zu machen.
                </p>
              </div>
            </Container>
          </section>

          {/* Mission & Values Section - Combined */}
          <section className="py-20">
            <Container>
              <div className="grid gap-16 md:grid-cols-2">
                {/* Mission Column */}
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Unsere Mission
                  </h2>
                  <div className="rounded-lg border bg-background/50 p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold">Unsere Vision & Ziele</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">2018-2025</span>
                    </div>
                    <p className="text-muted-foreground">
                      Bei Yanchew glauben wir fest daran, dass jedes lokale Unternehmen Zugang zu hochwertiger 
                      Webentwicklung haben sollte. Wir haben es uns zur Aufgabe gemacht, die Lücke zwischen 
                      Premium-Webentwicklung und erschwinglichen Preisen zu schließen.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      Durch die Kombination modernster Technologien wie Next.js, React und TypeScript mit 
                      effizienten Entwicklungsprozessen, können wir hochwertige Websites zu fairen Preisen 
                      anbieten. Unser "On-Demand"-Modell ermöglicht es lokalen Unternehmen, genau die 
                      Funktionen zu erhalten, die sie benötigen - ohne versteckte Kosten.
                    </p>
                  </div>
                </div>

                {/* Company History Column */}
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Unsere Geschichte
                  </h2>
                  <div className="rounded-lg border bg-background/50 p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold">Gründung bis heute</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">2018-2025</span>
                    </div>
                    <p className="text-muted-foreground">
                      Yanchew wurde 2018 mit dem Ziel gegründet, hochwertige Webentwicklung für lokale Unternehmen 
                      zugänglich zu machen. Über die Jahre haben wir uns auf React und TypeScript spezialisiert, 
                      2022 unseren Fokus auf Next.js und Server Components gelegt und 2024 KI-Integration in 
                      unsere Entwicklungsprozesse eingeführt. 2025 expandieren wir mit einem Fokus auf 
                      nachhaltige Webentwicklung und grüne Technologien.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Values Section - Redesigned */}
          <section className="py-20 bg-gradient-to-b from-background to-background/80">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Unsere Werte & Versprechen
                </h2>
                <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-2xl">
                  Qualität, Fairness und lokales Engagement - das macht uns aus
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {values.map((value) => (
                  <motion.div
                    key={value.title}
                    className="group relative flex flex-col rounded-lg border bg-background/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-background/80 hover:-translate-y-1 hover:shadow-lg h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <value.Icon className="h-6 w-6" aria-label={value.ariaLabel} role="img" />
                    </div>
                    <h3 className="text-lg font-semibold leading-7">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Team Section - Unchanged but with h-full added */}
          <section className="py-20">
            <Container>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                  <PersonIcon className="mr-1 h-3 w-3" /> Unser Team
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Die Menschen hinter Yanchew
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Lernen Sie unsere Experten kennen
                </p>
              </div>
              
              <div className="grid gap-10 md:grid-cols-3">
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.name}
                    className="group relative rounded-xl border bg-background/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-background/80 hover:-translate-y-1 hover:shadow-lg overflow-hidden h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-2xl transform transition-transform duration-500 group-hover:scale-150"></div>
                    
                    <div className="relative z-10">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold mb-4">
                        {member.name.split(' ').map(name => name[0]).join('')}
                      </div>
                      
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                      <p className="text-muted-foreground mb-6">{member.bio}</p>
                      
                      <div className="flex space-x-3">
                        <Link
                          href={member.links.linkedin}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedInLogoIcon className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                          href={member.links.github}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubLogoIcon className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Link
                  href="/karriere"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-background/80"
                >
                  Jobangebote ansehen
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Container>
          </section>

          {/* Approach & Work Culture - Combined for consistency */}
          <section className="py-20 bg-gradient-to-b from-background to-background/80">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Unsere Arbeitsweise
                </h2>
                <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-2xl">
                  Effiziente Prozesse und kollaboratives Arbeiten für optimale Ergebnisse
                </p>
              </div>
              
              <div className="grid gap-10 md:grid-cols-2">
                {/* Approach Column */}
                <motion.div
                  className="rounded-xl border bg-background/50 p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <RocketIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Unser Ansatz</h3>
                  <p className="text-muted-foreground mb-6">
                    Wir haben unseren Entwicklungsprozess speziell auf die Bedürfnisse lokaler Unternehmen 
                    ausgerichtet. Durch standardisierte Komponenten und bewährte Technologien können wir 
                    schnell und kosteneffizient hochwertige Websites erstellen.
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2">Schnelle Umsetzung</h4>
                    <p className="text-sm text-muted-foreground">
                      Dank unserer optimierten Prozesse können wir Ihre Website schnell und effizient 
                      umsetzen - ohne Kompromisse bei der Qualität.
                    </p>
                  </div>
                </motion.div>
                
                {/* Work Culture Column */}
                <motion.div
                  className="rounded-xl border bg-background/50 p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HeartIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Unsere Arbeitskultur</h3>
                  <p className="text-muted-foreground mb-6">
                    Wir pflegen eine offene und kollaborative Arbeitskultur, in der Innovation und 
                    kontinuierliches Lernen im Mittelpunkt stehen. Unsere Mitarbeiter sind Experten 
                    in ihren Bereichen und teilen ihre Kenntnisse regelmäßig.
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2">Teamwork & Kollaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Gemeinsam erreichen wir mehr. Wir arbeiten eng zusammen und unterstützen uns gegenseitig 
                      bei der Entwicklung innovativer Lösungen.
                    </p>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>

          {/* Stats Section - Redesigned with consistent sizing */}
          <section className="py-20">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Zahlen & Fakten
                </h2>
                <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-2xl">
                  Messbare Ergebnisse durch moderne Technologien
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group relative flex flex-col items-center rounded-lg border bg-background/50 p-6 text-center transition-colors hover:border-primary/50 hover:bg-background/80 h-full"
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
            </Container>
          </section>

          {/* Quality Standards Section - Redesigned */}
          <section className="py-20 bg-gradient-to-b from-background to-background/80">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Unsere Qualitätsstandards
                </h2>
                <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-2xl">
                  Kompromisslose Code-Qualität und Best Practices
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                {[
                  {
                    title: "TypeScript",
                    description: "Strikte Typisierung für maximale Code-Sicherheit"
                  },
                  {
                    title: "Automatisierte Tests",
                    description: "Kontinuierliche Integration und Code-Qualität"
                  },
                  {
                    title: "Code Reviews",
                    description: "Regelmäßige Peer-Reviews und Pair Programming"
                  },
                  {
                    title: "Performance",
                    description: "Optimierung und SEO Best Practices"
                  },
                  {
                    title: "Barrierefreiheit",
                    description: "Implementierung nach WCAG-Standards"
                  }
                ].map((standard, index) => (
                  <motion.div
                    key={standard.title}
                    className="rounded-lg border bg-background/50 p-6 hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-medium mb-2">{standard.title}</h3>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* FAQ Section - Redesigned for visual consistency */}
          <section className="py-20">
            <Container>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                  <ChatBubbleIcon className="mr-1 h-3 w-3" /> FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Häufig gestellte Fragen
                </h2>
                <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-2xl">
                  Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen
                </p>
              </div>
              
              <div className="mx-auto max-w-3xl grid grid-cols-1 gap-6">
                {[
                  {
                    question: "Was unterscheidet Yanchew von anderen Webentwicklungsagenturen?",
                    answer: "Wir kombinieren Enterprise-Level Technologien mit fairen Preisen speziell für lokale Unternehmen. Unser Fokus auf Next.js, React und TypeScript ermöglicht uns, hochperformante Websites zu entwickeln, die sonst nur für große Unternehmen erschwinglich wären."
                  },
                  {
                    question: "Wie lange dauert die Entwicklung einer Website?",
                    answer: "Die Entwicklungszeit hängt vom Umfang des Projekts ab. Einfache Websites können in 2-3 Wochen fertiggestellt werden, während komplexere Projekte 1-3 Monate in Anspruch nehmen können. Durch unsere optimierten Prozesse und vorgefertigten Komponenten sind wir jedoch deutlich schneller als der Branchendurchschnitt."
                  },
                  {
                    question: "Bieten Sie auch Website-Wartung und Support an?",
                    answer: "Ja, wir bieten verschiedene Support- und Wartungspakete an, die regelmäßige Updates, Sicherheitspatches und technischen Support umfassen. So stellen wir sicher, dass Ihre Website immer auf dem neuesten Stand und optimal geschützt ist."
                  },
                  {
                    question: "Wie integrieren Sie KI in Ihre Entwicklungsprozesse?",
                    answer: "Wir nutzen KI-Tools zur Code-Optimierung, automatisierten Tests und Content-Erstellung. Dadurch können wir effizienter arbeiten und bessere Ergebnisse erzielen. Für unsere Kunden bieten wir KI-basierte Funktionen wie personalisierte Nutzererlebnisse und intelligente Inhaltsanalysen an."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="rounded-lg border bg-background/50 p-6 hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-medium mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Contact CTA Section - Updated with more consistent styling */}
          <section className="py-20">
            <Container>
              <div className="relative overflow-hidden rounded-lg border bg-background/50 p-8 md:p-12">
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.03]" />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Bereit für Ihre neue Website?
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/kontakt"
                      className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Kontakt aufnehmen
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="mailto:info@yanchew.com"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-background/80"
                    >
                      <EnvelopeClosedIcon className="h-4 w-4" />
                      info@yanchew.com
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
} 