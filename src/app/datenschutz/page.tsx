import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Yanchew",
  description: "Datenschutzerklärung von Yanchew. Erfahren Sie, wie wir Ihre personenbezogenen Daten schützen und verarbeiten.",
}

export default function DatenschutzPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Datenschutzerklärung</h1>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">1. Datenschutz auf einen Blick</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Verantwortliche Stelle</h3>
            <div className="space-y-2">
              <p>[Name des Geschäftsführers]</p>
              <p>Beispielstraße 123</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">2. Allgemeine Hinweise</h2>
          <div className="space-y-4">
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
              werden können.
            </p>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich 
              und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">3. Datenerfassung auf dieser Website</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Cookies</h3>
            <p>
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. 
              Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p>
              Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. 
              Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
            </p>

            <h3 className="text-xl font-medium">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">4. Ihre Rechte</h2>
          <div className="space-y-4">
            <p>Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">5. Datenschutzbeauftragter</h2>
          <div className="space-y-4">
            <p>
              Gesetzlich vorgeschriebener Datenschutzbeauftragter:
            </p>
            <div className="space-y-2">
              <p>[Name des Geschäftsführers]</p>
              <p>Beispielstraße 123</p>
            </div>
          </div>
        </section>

        <div className="flex gap-4">
          <Link 
            href="/impressum"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Impressum
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