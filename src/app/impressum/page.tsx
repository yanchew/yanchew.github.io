import { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/layout/Container"

export const metadata: Metadata = {
  title: "Impressum | Yanchew",
  description: "Rechtliche Informationen und Kontaktdaten von Yanchew.",
  robots: "noindex, follow",
}

export default function ImpressumPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-medium">Impressum</h1>
        
        <section className="mb-12">
          <div className="space-y-2">
            <p>Yanchew</p>
            <p>Beispielstraße 123</p>
            <p>10115 Berlin</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section className="mb-12">
          <div className="space-y-2">
            <p>Telefon: +49 (0) 123 456789</p>
            <p>E-Mail: info@yanchew.com</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-medium">Streitschlichtung</h2>
          <div className="space-y-4">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-medium">Rechtliche Hinweise</h2>
          <div className="space-y-4">
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-medium">Haftung für Links</h2>
          <div className="space-y-4">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
              Links umgehend entfernen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-medium">Urheberrecht</h2>
          <div className="space-y-4">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        <div className="mt-16 flex gap-4">
          <Link 
            href="/datenschutz"
            className="text-sm text-muted-foreground hover:text-primary hover:underline"
          >
            Datenschutzerklärung
          </Link>
          <Link 
            href="/agb"
            className="text-sm text-muted-foreground hover:text-primary hover:underline"
          >
            AGB
          </Link>
          <Link 
            href="/"
            className="text-sm text-muted-foreground hover:text-primary hover:underline"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </Container>
  )
} 