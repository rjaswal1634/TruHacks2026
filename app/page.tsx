"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Calendar,
  Code,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Brain,
  Lightbulb,
  Rocket,
} from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Computer Science Student",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "TruHacks was an incredible experience! I learned so much about AI and made connections that led to my internship.",
    },
    {
      name: "Samantha Lee",
      role: "Data Science Major",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The mentors at TruHacks were amazing. They helped our team refine our idea and implement advanced ML techniques.",
    },
    {
      name: "Marcus Chen",
      role: "High School Senior",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "As a high school student, I was nervous at first, but everyone was so welcoming. I can't wait to come back next year!",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 hero-gradient">
        <div className="tech-pattern absolute inset-0 opacity-30"></div>
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Join TruHacks 2026: <span className="gradient-text">Build the Future with AI</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  A 48-hour hackathon for university and high school students to create innovative AI-driven solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/register">Register Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/sponsors">Become a Sponsor</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span>March 20-22, 2026 • Truman State University</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[300px] md:h-[400px] animate-float"
            >
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="TruHacks 2026"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Countdown to TruHacks 2026</h2>
            <p className="text-muted-foreground mt-2">Mark your calendars and get ready!</p>
          </div>
          <CountdownTimer targetDate="2026-03-20T18:00:00" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-card rounded-xl p-6 shadow-lg border text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-muted-foreground">Participants</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-card rounded-xl p-6 shadow-lg border text-center">
              <div className="flex justify-center mb-4">
                <Code className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-muted-foreground">Projects</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-card rounded-xl p-6 shadow-lg border text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-muted-foreground">Sponsors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">2026 Theme: AI-Driven Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build innovative solutions using artificial intelligence to address real-world challenges aligned with UN
              Sustainable Development Goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">AI for Good</h3>
                  <p className="text-muted-foreground">
                    Develop AI solutions that address social challenges and contribute to a more equitable world.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Innovative Interfaces</h3>
                  <p className="text-muted-foreground">
                    Create novel ways for humans to interact with AI systems through voice, gesture, or other
                    modalities.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Future of Work</h3>
                  <p className="text-muted-foreground">
                    Build tools that enhance human productivity and creativity in collaboration with AI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/about">
                Learn More About the Theme <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Participants Say</h2>
            <p className="text-muted-foreground mt-2">Hear from past TruHacks attendees</p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/80 shadow-md"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl p-8 shadow-lg border"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <blockquote className="text-lg italic">"{testimonials[currentTestimonial].quote}"</blockquote>
                <div>
                  <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/80 shadow-md"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Sponsors</h2>
            <p className="text-muted-foreground mt-2">
              TruHacks wouldn&apos;t be possible without the support of our amazing sponsors
            </p>
          </div>
          <Tabs defaultValue="gold" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gold">Gold</TabsTrigger>
              <TabsTrigger value="silver">Silver</TabsTrigger>
              <TabsTrigger value="bronze">Bronze</TabsTrigger>
            </TabsList>
            <TabsContent value="gold" className="mt-6">
              <div className="grid grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-card rounded-lg p-6 flex items-center justify-center h-32 border">
                    <Image
                      src="/placeholder.svg?height=80&width=200"
                      alt={`Gold Sponsor ${i}`}
                      width={200}
                      height={80}
                      className="max-h-16 w-auto"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="silver" className="mt-6">
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card rounded-lg p-4 flex items-center justify-center h-24 border">
                    <Image
                      src="/placeholder.svg?height=60&width=150"
                      alt={`Silver Sponsor ${i}`}
                      width={150}
                      height={60}
                      className="max-h-12 w-auto"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bronze" className="mt-6">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-card rounded-lg p-3 flex items-center justify-center h-20 border">
                    <Image
                      src="/placeholder.svg?height=50&width=100"
                      alt={`Bronze Sponsor ${i}`}
                      width={100}
                      height={50}
                      className="max-h-10 w-auto"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/sponsors">
                View All Sponsors <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Join hundreds of innovative students for 48 hours of coding, learning, and fun at TruHacks 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
