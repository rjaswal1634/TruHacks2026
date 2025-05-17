"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, topic: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      })
      setFormState({
        name: "",
        email: "",
        topic: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)

    // In a real application, you would send the form data to your server
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formState),
    // })
    //
    // if (response.ok) {
    //   toast({
    //     title: "Message sent!",
    //     description: "We'll get back to you as soon as possible.",
    //   })
    //   setFormState({
    //     name: "",
    //     email: "",
    //     topic: "",
    //     message: "",
    //   })
    // } else {
    //   toast({
    //     title: "Error",
    //     description: "There was a problem sending your message. Please try again.",
    //     variant: "destructive",
    //   })
    // }
    // setIsSubmitting(false)
  }

  return (
    <>
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about TruHacks 2026? We&apos;re here to help!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions about participating, sponsoring, or volunteering, our team is ready to assist
                you. Fill out the form and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Select value={formState.topic} onValueChange={handleSelectChange} required>
                    <SelectTrigger id="topic">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="registration">Registration</SelectItem>
                      <SelectItem value="sponsorship">Sponsorship</SelectItem>
                      <SelectItem value="volunteering">Volunteering/Mentoring</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email Us</h3>
                        <p className="text-muted-foreground mb-2">We&apos;ll respond within 24-48 hours</p>
                        <Link href="mailto:truhacks@truman.edu" className="text-primary hover:underline font-medium">
                          truhacks@truman.edu
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <p className="text-muted-foreground mb-2">Monday-Friday, 9am-5pm CST</p>
                        <Link href="tel:+16606654269" className="text-primary hover:underline font-medium">
                          (660) 665-4269
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Visit Us</h3>
                        <p className="text-muted-foreground mb-2">Truman State University</p>
                        <address className="not-italic">
                          100 E. Normal Ave
                          <br />
                          Kirksville, MO 63501
                          <br />
                          Student Union Building
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Event Hours</h3>
                        <p className="text-muted-foreground mb-2">March 20-22, 2026</p>
                        <ul className="space-y-1">
                          <li>
                            <span className="font-medium">Friday:</span> 3:00 PM - 11:59 PM
                          </li>
                          <li>
                            <span className="font-medium">Saturday:</span> 8:00 AM - 11:59 PM
                          </li>
                          <li>
                            <span className="font-medium">Sunday:</span> 8:00 AM - 7:00 PM
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="icon">
                    <Link
                      href="https://discord.gg/truhacks"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Discord"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-discord"
                      >
                        <circle cx="9" cy="12" r="1" />
                        <circle cx="15" cy="12" r="1" />
                        <path d="M7.5 7.2a11.4 11.4 0 0 1 9 0" />
                        <path d="M7.5 16.8a11.4 11.4 0 0 0 9 0" />
                        <path d="M3.75 8.25v.5a17.4 17.4 0 0 0 .75 5.25 17.4 17.4 0 0 0 15 0 17.4 17.4 0 0 0 .75-5.25v-.5a3.75 3.75 0 0 0-3.75-3.75H7.5a3.75 3.75 0 0 0-3.75 3.75Z" />
                      </svg>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link
                      href="https://twitter.com/truhacks"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link
                      href="https://instagram.com/truhacks"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <Link
                      href="https://github.com/truhacks"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
            <div className="rounded-lg overflow-hidden shadow-lg border h-[400px] mb-8">
              {/* Replace with an actual map component in production */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">Truman State University</p>
                  <p className="text-muted-foreground">100 E. Normal Ave, Kirksville, MO 63501</p>
                  <Button asChild variant="outline" className="mt-4">
                    <Link
                      href="https://maps.google.com/?q=Truman+State+University,Kirksville,MO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Parking</h3>
                  <p className="text-sm text-muted-foreground">
                    Free parking is available in the Student Union parking lot and surrounding campus lots during the
                    event.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Accommodations</h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ve partnered with local hotels to provide discounted rates for TruHacks participants.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Transportation</h3>
                  <p className="text-sm text-muted-foreground">
                    Shuttle services will be available from major airports and train stations to Kirksville.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How quickly will you respond to my inquiry?</h3>
                  <p className="text-muted-foreground">
                    We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters,
                    please call our office directly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    I&apos;m interested in sponsoring. Who should I contact?
                  </h3>
                  <p className="text-muted-foreground">
                    Please use the contact form and select &quot;Sponsorship&quot; as the topic. Our sponsorship team
                    will reach out with detailed information about our sponsorship packages.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I visit the venue before the event?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer venue tours by appointment. Please contact us to schedule a visit to the Truman State
                    University campus and the hackathon spaces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join TruHacks 2026?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Register now to secure your spot at the most innovative hackathon of the year!
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/register">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Toaster />
    </>
  )
}
