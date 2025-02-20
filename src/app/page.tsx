import Link from "next/link"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
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
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Kontakt aufnehmen
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
                <div className="relative rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold leading-7">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-lg border bg-card p-8 md:p-12 lg:p-16">
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
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Jetzt Beratungsgespräch vereinbaren
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
  },
  {
    title: "Technologie-Beratung",
    description: "Unsere Experten beraten Sie zu den neuesten Technologien und deren optimaler Integration in Ihre Geschäftsprozesse.",
  },
  {
    title: "Softwareentwicklung",
    description: "Wir entwickeln hochwertige, skalierbare Softwarelösungen, die perfekt auf Ihre Anforderungen zugeschnitten sind.",
  },
  {
    title: "Cloud-Lösungen",
    description: "Modernisieren Sie Ihre IT-Infrastruktur mit unseren sicheren und effizienten Cloud-Lösungen.",
  },
  {
    title: "Datenanalyse & KI",
    description: "Nutzen Sie das Potenzial Ihrer Daten durch fortschrittliche Analysen und künstliche Intelligenz.",
  },
  {
    title: "IT-Sicherheit",
    description: "Schützen Sie Ihr Unternehmen mit unseren umfassenden IT-Sicherheitslösungen vor digitalen Bedrohungen.",
  },
] 