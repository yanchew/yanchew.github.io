import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Yanchew | Innovative Technologielösungen',
  description: 'Yanchew bietet innovative Technologielösungen für Unternehmen. Entdecken Sie unsere maßgeschneiderten Dienstleistungen für Ihren geschäftlichen Erfolg.',
  keywords: 'Yanchew, Technologielösungen, Digitale Transformation, Unternehmensberatung, Deutschland',
  authors: [{ name: 'Yanchew' }],
  creator: 'Yanchew',
  publisher: 'Yanchew',
  robots: 'index, follow',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.yanchew.de',
    title: 'Yanchew | Innovative Technologielösungen',
    description: 'Yanchew bietet innovative Technologielösungen für Unternehmen. Entdecken Sie unsere maßgeschneiderten Dienstleistungen.',
    siteName: 'Yanchew',
  },
  metadataBase: new URL('https://www.yanchew.de'),
  other: {
    "google-site-verification": "YOUR_VERIFICATION_CODE"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
        />
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />
      </head>
      <body className="font-['Helvetica_Neue',_sans-serif]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 