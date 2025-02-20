import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yanchew | Innovative Technologielösungen',
  description: 'Yanchew bietet innovative Technologielösungen für Unternehmen. Entdecken Sie unsere maßgeschneiderten Dienstleistungen für Ihren geschäftlichen Erfolg.',
  keywords: 'Yanchew, Technologielösungen, Digitale Transformation, Unternehmensberatung, Deutschland',
  authors: [{ name: 'Yanchew GmbH' }],
  creator: 'Yanchew GmbH',
  publisher: 'Yanchew GmbH',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.yanchew.de'
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.yanchew.de',
    title: 'Yanchew | Innovative Technologielösungen',
    description: 'Yanchew bietet innovative Technologielösungen für Unternehmen. Entdecken Sie unsere maßgeschneiderten Dienstleistungen.',
    siteName: 'Yanchew',
  },
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
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body className={inter.className}>
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