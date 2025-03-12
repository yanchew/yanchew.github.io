import Link from "next/link"
import { Metadata } from "next"
import {
  ArrowRightIcon,
  RocketIcon,
  LightningBoltIcon,
  CodeIcon,
  GearIcon,
  BarChartIcon,
  LockClosedIcon,
  MagicWandIcon,
  StackIcon,
  GridIcon,
  QuoteIcon,
  HeartIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons"
import { TechStack } from "@/components/sections/TechStack"
import { Hero } from "@/components/sections/Hero"
import { Container } from "@/components/layout/Container"

export const metadata: Metadata = {
  title: "Yanchew | Next.js & React Webentwicklung Agentur Berlin | TypeScript Experten",
  description: "✓ Next.js 14 Entwicklung ✓ React & TypeScript Programmierung ✓ Headless CMS Integration ✓ Performance-optimierte Webanwendungen ✓ SEO-optimierte Websites ✓ Vercel Hosting Experten in Berlin",
  keywords: "Next.js Entwicklung Berlin, React Agentur Deutschland, TypeScript Programmierung, Vercel Hosting Experten, TailwindCSS Entwicklung, SEO-optimierte Webentwicklung, Performance-optimierte Webanwendungen, Headless CMS Integration, Server Side Rendering, React Server Components, Full Stack JavaScript Entwicklung, Enterprise React Entwicklung, Next.js 14 Migration, TypeScript Code Migration, Web Performance Optimierung",
  openGraph: {
    title: "Next.js & React Webentwicklung Agentur Berlin | TypeScript Experten",
    description: "Professionelle Webentwicklung mit Next.js, React & TypeScript. Performance-optimierte Webanwendungen & SEO-fokussierte Entwicklung für Ihren Geschäftserfolg.",
    type: "website",
    locale: "de_DE",
  },
}

// Schema.org markup for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Yanchew",
  "url": "https://www.yanchew.com",
  "description": "Spezialisierte Webentwicklung mit Next.js, React und TypeScript. Performance-optimierte Webanwendungen und SEO-fokussierte Entwicklung.",
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
  },
  "founder": {
    "@type": "Person",
    "name": "Max Andronytschew"
  }
}

const features = [
  {
    title: "Next.js 14 & React Server Components",
    description: "Modernste Server-Side Rendering Technologien für optimale Performance. React Server Components und Streaming für blitzschnelle Ladezeiten.",
    icon: <RocketIcon className="h-6 w-6" />,
  },
  {
    title: "Enterprise TypeScript Entwicklung",
    description: "Typsichere Entwicklung nach Enterprise-Standards. Code-Migration und Modernisierung bestehender JavaScript Anwendungen.",
    icon: <CodeIcon className="h-6 w-6" />,
  },
  {
    title: "TailwindCSS & Responsive Design",
    description: "Mobile-First Entwicklung mit TailwindCSS. Barrierefreie Implementierung nach WCAG-Standards für maximale Zugänglichkeit.",
    icon: <LightningBoltIcon className="h-6 w-6" />,
  },
  {
    title: "Web Performance Optimierung",
    description: "Core Web Vitals Optimierung und Performance-Monitoring. Vercel Edge Functions für globale Content-Auslieferung.",
    icon: <GearIcon className="h-6 w-6" />,
  },
  {
    title: "Headless CMS & E-Commerce",
    description: "Integration von Sanity, Contentful und Shopify. API-First Entwicklung für flexible Content-Verwaltung und E-Commerce.",
    icon: <BarChartIcon className="h-6 w-6" />,
  },
  {
    title: "Full Stack JavaScript Entwicklung",
    description: "End-to-End TypeScript Entwicklung. Node.js APIs und Datenbank-Integration für vollständige Webanwendungen.",
    icon: <LockClosedIcon className="h-6 w-6" />,
  },
]

const showcaseProjects = [
  {
    title: "Enterprise E-Commerce Platform",
    description: "Next.js 14 & Shopify Integration. Server Components für optimale Performance, 99/100 PageSpeed Score.",
    category: "Enterprise E-Commerce",
  },
  {
    title: "TypeScript Migrations-Projekt",
    description: "JavaScript zu TypeScript Migration. Implementierung von Monorepo-Struktur mit Turborepo für bessere Entwicklungseffizienz.",
    category: "Code-Modernisierung",
  },
  {
    title: "Headless CMS Platform",
    description: "Sanity CMS Integration mit Next.js. Internationalisierung und automatisierte Content-Workflows für globale Märkte.",
    category: "Content Platform",
  },
]

// New AI demonstration examples
const aiDemos = [
  {
    title: "AI-Assisted Development",
    description: "Maximierung der Entwicklungsgeschwindigkeit durch KI-Tools und Automatisierung. Reduzierung der Entwicklungszeit um bis zu 40%.",
    icon: <MagicWandIcon className="h-6 w-6" />,
    metrics: "40% schnellere Entwicklung",
  },
  {
    title: "KI-basierte Inhaltsoptimierung",
    description: "Intelligente Content-Analyse und Optimierung für maximalen Impact und bessere Conversion-Raten bei Ihren Nutzern.",
    icon: <StackIcon className="h-6 w-6" />,
    metrics: "32% höhere Conversion",
  },
  {
    title: "Predictive Analytics",
    description: "Vorausschauende Analysen für die kontinuierliche Verbesserung Ihrer digitalen Präsenz basierend auf Nutzerverhalten.",
    icon: <GridIcon className="h-6 w-6" />,
    metrics: "28% bessere Kundenbindung",
  },
];

// New sustainability initiatives
const sustainabilityInitiatives = [
  {
    title: "Grüne Serverinfrastruktur",
    description: "Wir setzen ausschließlich auf CO2-neutrale Serverinfrastruktur mit regenerativen Energien und optimaler Serverauslastung.",
  },
  {
    title: "Performance-Optimierung",
    description: "Energieeffiziente Websites durch konsequente Optimierung der Ladezeiten und Ressourcenverbrauch.",
  },
  {
    title: "Nachhaltige Entwicklungspraktiken",
    description: "Langfristig wartbare Codestrukturen und modulare Architekturen für eine längere Lebensdauer Ihrer digitalen Produkte.",
  },
];

// New client testimonials
const testimonials = [
  {
    quote: "Die Zusammenarbeit mit Yanchew hat unsere digitale Präsenz komplett transformiert. Die Website lädt blitzschnell und die Conversion-Rate ist signifikant gestiegen.",
    author: "Martina Berger",
    company: "TechVision GmbH",
    metrics: "+85% Mobile Conversion",
  },
  {
    quote: "Das Team von Yanchew hat unsere komplexen Anforderungen perfekt umgesetzt. Die Integration von KI-gestützten Funktionen hat unseren Kundenservice revolutioniert.",
    author: "Markus Weber",
    company: "Innovate Solutions",
    metrics: "65% weniger Support-Anfragen",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Professionelle Next.js & React Entwicklung
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Enterprise-Grade Webanwendungen mit modernsten JavaScript Technologien
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="group relative flex flex-col rounded-lg border bg-background/50 p-6 transition-colors hover:border-primary/50 hover:bg-background/80">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold leading-7">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TechStack />

      {/* NEW: AI Integration Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
              <MagicWandIcon className="mr-1 h-3 w-3" /> 2025 Technologie
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              KI-gestützte Webentwicklung
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Revolutionieren Sie Ihre digitale Präsenz mit unseren fortschrittlichen KI-Integrationen
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {aiDemos.map((demo, index) => (
              <div 
                key={demo.title}
                className="group relative overflow-hidden rounded-xl border bg-background/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-background/80 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute top-0 right-0 bg-primary/10 px-3 py-1 text-xs font-medium text-primary rounded-bl-lg">
                  {demo.metrics}
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {demo.icon}
                </div>
                <h3 className="text-lg font-semibold leading-7 mt-2">{demo.title}</h3>
                <p className="mt-2 text-muted-foreground">{demo.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/technologien/ki-integration"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Mehr über unsere KI-Integration erfahren
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* NEW: Sustainability Section */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-700/20 dark:ring-green-400/30 mb-6">
                <HeartIcon className="mr-1 h-3 w-3" /> Nachhaltige Technologie
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Digital Nachhaltig
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Bei Yanchew setzen wir auf nachhaltige Entwicklungspraktiken und umweltbewusste Technologien, um den ökologischen Fußabdruck Ihrer digitalen Präsenz zu minimieren.
              </p>
              
              <div className="mt-8 space-y-6">
                {sustainabilityInitiatives.map((initiative) => (
                  <div key={initiative.title} className="flex">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium">{initiative.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{initiative.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-xl border bg-background/50 p-6 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-100/50 dark:bg-green-900/20 blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl"></div>
              
              <div className="relative z-10 space-y-6 text-center sm:mx-auto sm:max-w-md">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 mx-auto">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold">Bis zu 70% CO₂-Reduktion</h3>
                  <p className="mt-2 text-muted-foreground">gegenüber konventionellen Webanwendungen durch optimierten Code und ressourcenschonende Entwicklung</p>
                </div>
                
                <Link
                  href="/nachhaltigkeit"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 dark:bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                >
                  Mehr erfahren
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* NEW: Client Testimonials */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
              <QuoteIcon className="mr-1 h-3 w-3" /> Kundenreferenzen
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Erfahren Sie, wie unsere Lösungen echte Ergebnisse für Unternehmen liefern
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-xl border bg-background/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-background/80"
              >
                <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <QuoteIcon className="h-8 w-8" />
                </div>
                <div className="mt-2 mb-6 text-lg font-medium">{testimonial.quote}</div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                      {testimonial.metrics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/referenzen"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Alle Erfolgsgeschichten ansehen
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Project Showcase Section */}
      <section className="py-20" id="projects">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enterprise React & Next.js Projekte
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Performance-optimierte Webanwendungen für Unternehmen
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseProjects.map((project, index) => (
              <div key={index} className="group relative flex flex-col rounded-lg border bg-background/50 p-6 transition-colors hover:border-primary/50 hover:bg-background/80">
                <div className="mb-2 text-sm font-medium text-primary">{project.category}</div>
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20" id="contact">
        <Container>
          <div className="relative overflow-hidden rounded-lg border bg-background/50 p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.03]" />
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Next.js Entwicklung für Ihr Unternehmen
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Profitieren Sie von unserer Expertise in React und TypeScript Entwicklung
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
        </Container>
      </section>
    </>
  )
} 