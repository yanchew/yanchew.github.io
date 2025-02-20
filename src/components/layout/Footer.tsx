"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Yanchew</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-sm text-muted-foreground hover:text-primary">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="text-sm text-muted-foreground hover:text-primary">
                  Karriere
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Dienstleistungen</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/dienstleistungen" className="text-sm text-muted-foreground hover:text-primary">
                  Unsere Lösungen
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className="text-sm text-muted-foreground hover:text-primary">
                  Referenzen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Rechtliches</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-muted-foreground hover:text-primary">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-sm text-muted-foreground hover:text-primary">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                Yanchew GmbH
              </li>
              <li className="text-sm text-muted-foreground">
                Musterstraße 123
              </li>
              <li className="text-sm text-muted-foreground">
                12345 Berlin
              </li>
              <li className="text-sm text-muted-foreground">
                Tel: +49 (0) 123 456789
              </li>
              <li className="text-sm text-muted-foreground">
                E-Mail: info@yanchew.de
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Yanchew GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-4">
              <Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-muted-foreground hover:text-primary">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-sm text-muted-foreground hover:text-primary">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 