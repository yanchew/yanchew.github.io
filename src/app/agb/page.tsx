import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AGB | Yanchew",
  description: "Allgemeine Geschäftsbedingungen von Yanchew für Webentwicklungsdienstleistungen.",
}

export default function AGBPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Allgemeine Geschäftsbedingungen</h1>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">§1 Geltungsbereich</h2>
          <div className="space-y-4">
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Yanchew, 
              Adolf-Kaschny-Straße 19, 51373 Leverkusen (nachfolgend "Auftragnehmer") und dem jeweiligen 
              Vertragspartner (nachfolgend "Auftraggeber") über Webentwicklungsdienstleistungen.
            </p>
            <p>
              Abweichende Geschäftsbedingungen des Auftraggebers werden nicht Vertragsbestandteil, 
              es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">§2 Vertragsgegenstand</h2>
          <div className="space-y-4">
            <p>
              Gegenstand des Vertrages ist die Entwicklung und Programmierung von Webanwendungen, 
              insbesondere mit den Technologien Next.js, React und TypeScript, sowie damit 
              verbundene Dienstleistungen gemäß der individuellen Vereinbarung mit dem Auftraggeber.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">§3 Leistungsumfang</h2>
          <div className="space-y-4">
            <p>
              Der konkrete Leistungsumfang ergibt sich aus dem individuellen Angebot bzw. der 
              Auftragsbestätigung. Zusätzliche Leistungen werden gesondert vereinbart und berechnet.
            </p>
            <p>
              Der Auftragnehmer ist berechtigt, zur Erfüllung der vereinbarten Leistungen 
              Subunternehmer einzusetzen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">§4 Mitwirkungspflichten des Auftraggebers</h2>
          <div className="space-y-4">
            <p>
              Der Auftraggeber stellt dem Auftragnehmer alle für die Durchführung des Projekts 
              benötigten Unterlagen und Informationen rechtzeitig zur Verfügung.
            </p>
            <p>
              Verzögerungen durch verspätete Mitwirkung des Auftraggebers gehen nicht zu Lasten 
              des Auftragnehmers und können zu einer Anpassung des Zeitplans führen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">§5 Vergütung und Zahlungsbedingungen</h2>
          <div className="space-y-4">
            <p>
              Die Vergütung ergibt sich aus dem individuellen Angebot. Alle Preise verstehen sich 
              zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p>
              Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">§6 Nutzungsrechte</h2>
          <div className="space-y-4">
            <p>
              Mit vollständiger Bezahlung der vereinbarten Vergütung überträgt der Auftragnehmer 
              dem Auftraggeber die für den jeweiligen Zweck erforderlichen Nutzungsrechte an den 
              erstellten Arbeiten.
            </p>
            <p>
              Der Source-Code verbleibt im Eigentum des Auftragnehmers, soweit nicht ausdrücklich 
              anders vereinbart.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">§7 Gewährleistung und Haftung</h2>
          <div className="space-y-4">
            <p>
              Der Auftragnehmer gewährleistet, dass die erstellten Arbeiten frei von Mängeln sind. 
              Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
            </p>
            <p>
              Die Haftung für leicht fahrlässige Pflichtverletzungen wird ausgeschlossen, sofern 
              diese keine vertragswesentlichen Pflichten oder Schäden aus der Verletzung des Lebens, 
              des Körpers oder der Gesundheit betreffen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">§8 Schlussbestimmungen</h2>
          <div className="space-y-4">
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p>
              Erfüllungsort und Gerichtsstand ist Leverkusen, sofern der Auftraggeber Kaufmann, 
              juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
              Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
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
            href="/datenschutz"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  )
} 