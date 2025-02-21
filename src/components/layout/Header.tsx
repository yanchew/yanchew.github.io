"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navigation = [
    { name: "Startseite", href: "/" },
    { name: "Dienstleistungen", href: "/dienstleistungen" },
    { name: "Über Uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Yanchew</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative flex h-6 w-12 items-center justify-center rounded-full border bg-muted p-0.5 transition-colors hover:bg-muted/80"
              aria-label="Theme umschalten"
            >
              <motion.div
                className="absolute h-5 w-5 rounded-full bg-white shadow-sm"
                animate={{ x: theme === "light" ? -6 : 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <div className="flex w-full items-center justify-between px-1">
                <SunIcon className="stroke-amber-500 stroke-2" />
                <MoonIcon className="stroke-slate-600 stroke-2 dark:stroke-slate-400" />
              </div>
              <span className="sr-only">Theme umschalten</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
} 