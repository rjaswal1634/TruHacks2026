import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TruHacks 2026 | AI-Driven Hackathon at Truman State",
  description: "Join TruHacks 2026, a 48-hour hackathon for students to build innovative AI solutions. Register now!",
  keywords: "hackathon, TruHacks, Truman State University, AI, coding, students, innovation",
  authors: [{ name: "TruHacks Team" }],
  openGraph: {
    title: "TruHacks 2026 | AI-Driven Hackathon at Truman State",
    description: "Join TruHacks 2026, a 48-hour hackathon for students to build innovative AI solutions. Register now!",
    url: "https://truhacks.truman.edu",
    siteName: "TruHacks 2026",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TruHacks 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TruHacks 2026 | AI-Driven Hackathon at Truman State",
    description: "Join TruHacks 2026, a 48-hour hackathon for students to build innovative AI solutions. Register now!",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
