import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ArrowRight, CheckCircle2 } from "lucide-react"

export default function SponsorsPage() {
  return (
    <>
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Sponsors</h1>
            <p className="text-xl text-muted-foreground">
              TruHacks 2026 is made possible by the generous support of our sponsors.
            </p>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/sponsorship-packet.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Sponsorship Packet
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="gold" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gold">Gold Sponsors</TabsTrigger>
              <TabsTrigger value="silver">Silver Sponsors</TabsTrigger>
              <TabsTrigger value="bronze">Bronze Sponsors</TabsTrigger>
            </TabsList>
            <TabsContent value="gold" className="mt-6">
              <div className="grid gap-8">
                {[1, 2].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/3 flex justify-center">
                          <div className="relative h-40 w-full max-w-[240px]">
                            <Image
                              src="/placeholder.svg?height=160&width=240"
                              alt={`Gold Sponsor ${i}`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-2/3 text-center md:text-left">
                          <h3 className="text-2xl font-bold mb-2">Gold Sponsor {i}</h3>
                          <p className="text-muted-foreground mb-4">
                            Leading technology company specializing in AI solutions for enterprise clients. Their
                            support helps make TruHacks possible.
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                              Visit Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="silver" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="relative h-24 w-full max-w-[180px]">
                          <Image
                            src="/placeholder.svg?height=96&width=180"
                            alt={`Silver Sponsor ${i}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Silver Sponsor {i}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Innovative company supporting student developers and the tech community.
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                              Visit Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bronze" className="mt-6">
              <div className="grid md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="relative h-16 w-full max-w-[120px]">
                          <Image
                            src="/placeholder.svg?height=64&width=120"
                            alt={`Bronze Sponsor ${i}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold">Bronze Sponsor {i}</h3>
                          <p className="text-xs text-muted-foreground mt-1 mb-2">
                            Supporting the next generation of tech talent.
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                              Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
              <p className="text-lg text-muted-foreground">
                Support the next generation of innovators and gain visibility for your brand.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <h3 className="text-xl font-bold">Bronze Tier</h3>
                    <p className="text-3xl font-bold">$1,000</p>
                    <ul className="space-y-2 text-sm text-left w-full">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Logo on website and event materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Social media recognition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Small booth at the event</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>1 mentor opportunity</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                    <h3 className="text-xl font-bold">Silver Tier</h3>
                    <p className="text-3xl font-bold">$3,000</p>
                    <ul className="space-y-2 text-sm text-left w-full">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>All Bronze tier benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Medium booth at prime location</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Workshop or tech talk opportunity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>3 mentor opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Resume access for recruiting</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <h3 className="text-xl font-bold">Gold Tier</h3>
                    <p className="text-3xl font-bold">$5,000+</p>
                    <ul className="space-y-2 text-sm text-left w-full">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>All Silver tier benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Large booth at premium location</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Speaking opportunity at opening/closing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Branded prize category</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>5 mentor opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>First access to top talent</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Custom sponsorship packages are also available. Contact us to discuss your specific needs.
              </p>
              <Button asChild variant="outline">
                <Link href="/sponsorship-packet.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Full Sponsorship Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Sponsor TruHacks?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Talent Recruitment</h3>
                <p className="text-muted-foreground">
                  Connect with over 500 talented and motivated students from universities across the Midwest. TruHacks
                  provides a unique opportunity to identify and recruit top tech talent.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Brand Visibility</h3>
                <p className="text-muted-foreground">
                  Increase your brand recognition among the next generation of tech leaders. Your logo will be featured
                  on our website, event materials, and social media channels.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Product Feedback</h3>
                <p className="text-muted-foreground">
                  Get fresh perspectives on your products or APIs. Participants can provide valuable feedback and
                  innovative use cases for your technology.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Community Engagement</h3>
                <p className="text-muted-foreground">
                  Demonstrate your commitment to education and innovation. Supporting TruHacks shows your investment in
                  developing the tech ecosystem and supporting STEM education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Support TruHacks 2026?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Join our growing list of sponsors and help make TruHacks 2026 an unforgettable experience for hundreds of
            student innovators.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/contact">
              Become a Sponsor <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
