"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code2, Github, Twitter, Instagram, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl gradient-text">TruHacks 2026</span>
            </div>
            <p className="text-sm text-muted-foreground">
              An annual 48-hour hackathon hosted by Truman State University&apos;s Google Developer Student Clubs (GDSC)
              and Community of College Entrepreneurs (CCE).
            </p>
            <div className="flex space-x-3">
              <Link href="https://discord.gg/truhacks" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Discord">
                  <Discord className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com/truhacks" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://instagram.com/truhacks" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://github.com/truhacks" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Sponsors
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-foreground transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/code-of-conduct" className="text-muted-foreground hover:text-foreground transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsorship-packet.pdf"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sponsorship Packet
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Enter your email" className="h-9" aria-label="Email for newsletter" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TruHacks. All rights reserved.</p>
          <p className="mt-1">
            Organized by{" "}
            <Link
              href="https://gdsc.community.dev/truman-state-university/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDSC Truman State
            </Link>{" "}
            and{" "}
            <Link
              href="https://cce.truman.edu"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CCE
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
