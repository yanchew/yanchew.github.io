"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  GitHubLogoIcon,
} from "@radix-ui/react-icons"
import { Container } from "./Container"

const footerLinks = {
  company: [
    { name: "Über Uns", href: "/ueber-uns" },
  ],
  services: [
    { name: "Unsere Lösungen", href: "/dienstleistungen" },
    { name: "Technologien", href: "/technologien" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/yanchew",
      icon: "/logos/instagram-icon.svg",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@yanchew",
      icon: "/logos/tiktok-icon.svg",
    },
    {
      name: "GitHub",
      href: "https://github.com/yanchew",
      icon: "/logos/github-icon.svg",
    },
  ],
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="group relative w-fit">
    <span className="relative z-10 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
      {children}
    </span>
    <motion.span
      className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary"
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.2 }}
    />
  </Link>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block">
                <h3 className="text-xl font-bold">Yanchew</h3>
              </Link>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Innovative Technologielösungen für die digitale Transformation Ihres Unternehmens. Wir gestalten die Zukunft der IT.
              </p>
              <div className="mt-6 flex gap-4">
                {footerLinks.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-lg border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src={item.icon}
                      alt={`${item.name} logo`}
                      width={20}
                      height={20}
                      className="h-5 w-5 dark:invert dark:brightness-200 brightness-0"
                    />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3">
              <div>
                <h4 className="mb-4 text-sm font-semibold">Unternehmen</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <FooterLink href={link.href}>{link.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-semibold">Dienstleistungen</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <FooterLink href={link.href}>{link.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-semibold">Rechtliches</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <FooterLink href={link.href}>{link.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t pt-6">
            <p className="text-sm text-center text-muted-foreground md:text-left">
              © {currentYear} Yanchew GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
} 