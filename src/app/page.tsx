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

export const metadata: Metadata = {
  title: "Yanchew - Innovative Technologielösungen für Ihren Geschäftserfolg",
  description: "Yanchew bietet maßgeschneiderte digitale Lösungen für die Transformation Ihres Unternehmens. Entdecken Sie unsere innovativen IT-Dienstleistungen, Technologieberatung und Softwareentwicklung.",
  keywords: "Digitale Transformation, IT-Beratung, Softwareentwicklung, Cloud-Lösungen, KI, IT-Sicherheit, Deutschland",
}

// Schema.org markup for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Yanchew",
  "url": "https://www.yanchew.de",
  "logo": "https://www.yanchew.de/logo.png",
  "description": "Yanchew bietet maßgeschneiderte digitale Lösungen für die Transformation Ihres Unternehmens.",
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
  ]
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="container">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Innovative Technologielösungen für Ihren Geschäftserfolg
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Yanchew bietet maßgeschneiderte digitale Lösungen, die Ihr Unternehmen in die Zukunft führen. Entdecken Sie unsere innovativen Dienstleistungen.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Kontakt aufnehmen
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/dienstleistungen"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Unsere Dienstleistungen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Unsere Kernkompetenzen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wir bieten umfassende Lösungen für die digitale Transformation Ihres Unternehmens
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="group relative">
                <div className="relative rounded-lg border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent/50">
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

      {/* Testimonials Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Erfahren Sie, wie wir anderen Unternehmen geholfen haben
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="rounded-lg border bg-card p-6">
              <blockquote className="text-lg text-muted-foreground">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-lg border bg-card p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Bereit für die digitale Transformation?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Lassen Sie uns gemeinsam Ihr Unternehmen in die digitale Zukunft führen.
            </p>
            <div className="mt-8">
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Jetzt Beratungsgespräch vereinbaren
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const features = [
  {
    title: "Digitale Transformation",
    description: "Wir begleiten Sie auf dem Weg zur digitalen Transformation Ihres Unternehmens mit maßgeschneiderten Strategien und Lösungen.",
    icon: <RocketIcon className="h-6 w-6" />,
  },
  {
    title: "Technologie-Beratung",
    description: "Unsere Experten beraten Sie zu den neuesten Technologien und deren optimaler Integration in Ihre Geschäftsprozesse.",
    icon: <LightningBoltIcon className="h-6 w-6" />,
  },
  {
    title: "Softwareentwicklung",
    description: "Wir entwickeln hochwertige, skalierbare Softwarelösungen, die perfekt auf Ihre Anforderungen zugeschnitten sind.",
    icon: <CodeIcon className="h-6 w-6" />,
  },
  {
    title: "Cloud-Lösungen",
    description: "Modernisieren Sie Ihre IT-Infrastruktur mit unseren sicheren und effizienten Cloud-Lösungen.",
    icon: <GearIcon className="h-6 w-6" />,
  },
  {
    title: "Datenanalyse & KI",
    description: "Nutzen Sie das Potenzial Ihrer Daten durch fortschrittliche Analysen und künstliche Intelligenz.",
    icon: <BarChartIcon className="h-6 w-6" />,
  },
  {
    title: "IT-Sicherheit",
    description: "Schützen Sie Ihr Unternehmen mit unseren umfassenden IT-Sicherheitslösungen vor digitalen Bedrohungen.",
    icon: <LockClosedIcon className="h-6 w-6" />,
  },
]

const testimonials = [
  {
    quote: "Die Zusammenarbeit mit Yanchew hat unsere digitale Transformation erheblich beschleunigt. Professionell, kompetent und zielorientiert.",
    author: "Dr. Michael Schmidt",
    role: "CTO, TechCorp GmbH"
  },
  {
    quote: "Hervorragende technische Expertise gepaart mit einem tiefen Verständnis für unsere Geschäftsprozesse.",
    author: "Sarah Weber",
    role: "Geschäftsführerin, InnovateTech"
  },
  {
    quote: "Die Cloud-Migration verlief reibungslos und hat unsere Effizienz deutlich gesteigert. Ein verlässlicher Partner.",
    author: "Thomas Müller",
    role: "IT-Leiter, DataSys AG"
  }
] 