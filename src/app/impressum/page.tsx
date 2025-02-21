import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Impressum | Yanchew",
  description: "Rechtliche Informationen und Kontaktdaten von Yanchew.",
}

export default function ImpressumPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Impressum</h1>
        
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <div className="space-y-2">
            <p>Yanchew</p>
            <p>Adolf-Kaschny-Straße 19</p>
            <p>51373 Leverkusen</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Kontakt</h2>
          <div className="space-y-2">
            <p>E-Mail: info@yanchew.com</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Vertreten durch</h2>
          <div className="space-y-2">
            <p>Max Andronytschew</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Rechtliche Hinweise</h2>
          <div className="space-y-4">
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>
        </section>

        <div className="flex gap-4">
          <Link 
            href="/datenschutz"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Datenschutzerklärung
          </Link>
          <Link 
            href="/agb"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            AGB
          </Link>
        </div>
      </div>
    </div>
  )
} 