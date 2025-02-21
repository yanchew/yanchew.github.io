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
} from "@radix-ui/react-icons"
import { TechStack } from "@/components/sections/TechStack"
import { Hero } from "@/components/sections/Hero"

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
  "url": "https://www.yanchew.de",
  "logo": "https://www.yanchew.de/logo.png",
  "description": "Spezialisierte Webentwicklung mit Next.js, React und TypeScript. Performance-optimierte Webanwendungen und SEO-fokussierte Entwicklung für Unternehmen in Deutschland.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 123",
    "addressLocality": "Berlin",
    "postalCode": "12345",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-123-456789",
    "contactType": "customer service",
    "email": "info@yanchew.de"
  },
  "sameAs": [
    "https://www.linkedin.com/company/yanchew",
    "https://www.xing.com/companies/yanchew"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Deutschland"
  },
  "serviceType": "Web Development",
  "knowsAbout": [
    "Next.js Development",
    "React Development",
    "TypeScript",
    "Vercel Deployment",
    "TailwindCSS",
    "Web Performance Optimization",
    "Server Side Rendering",
    "React Server Components",
    "Headless CMS Integration",
    "Enterprise Web Development"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Next.js Entwicklung",
        "description": "Professionelle Entwicklung mit Next.js 14 und React Server Components"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Performance Optimierung",
        "description": "Web Vitals Optimierung und SEO-fokussierte Entwicklung"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Enterprise React Entwicklung",
        "description": "Skalierbare React Anwendungen für Großunternehmen"
      }
    }
  ]
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />

      {/* Features Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professionelle Next.js & React Entwicklung
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Enterprise-Grade Webanwendungen mit modernsten JavaScript Technologien
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="group relative">
                <div className="relative rounded-lg border bg-background/50 p-6 transition-colors hover:border-primary/50 hover:bg-background/80">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold leading-7">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      {/* Project Showcase Section */}
      <section className="container py-20" id="projects">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Enterprise React & Next.js Projekte
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Performance-optimierte Webanwendungen für Unternehmen
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseProjects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-lg border bg-background/50 p-6"
              loading="lazy"
            >
              <div className="mb-2 text-sm font-medium text-primary">{project.category}</div>
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20" id="contact">
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
      </section>
    </>
  )
} 