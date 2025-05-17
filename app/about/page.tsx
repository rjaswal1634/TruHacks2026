import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Target, Users, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About TruHacks</h1>
            <p className="text-xl text-muted-foreground">
              Learn about our mission, history, and the team behind TruHacks 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                TruHacks is an annual 48-hour hackathon hosted by Truman State University&apos;s Google Developer
                Student Clubs (GDSC) and Community of College Entrepreneurs (CCE).
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to foster innovation, collaboration, and learning among university and high school
                students by providing a platform to develop creative solutions to real-world problems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-2">
                      <Target className="h-8 w-8 text-primary" />
                      <h3 className="font-semibold">Innovation</h3>
                      <p className="text-sm text-muted-foreground">Encouraging creative problem-solving</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-2">
                      <Users className="h-8 w-8 text-primary" />
                      <h3 className="font-semibold">Collaboration</h3>
                      <p className="text-sm text-muted-foreground">Building connections and teamwork</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-2">
                      <Lightbulb className="h-8 w-8 text-primary" />
                      <h3 className="font-semibold">Learning</h3>
                      <p className="text-sm text-muted-foreground">Developing new skills and knowledge</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="TruHacks Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">2026 Theme: AI-Driven Solutions</h2>
            <p className="text-lg text-muted-foreground">
              This year&apos;s theme focuses on leveraging artificial intelligence to address the United Nations
              Sustainable Development Goals.
            </p>
          </div>
          <Tabs defaultValue="theme" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="theme">Theme Overview</TabsTrigger>
              <TabsTrigger value="tracks">Challenge Tracks</TabsTrigger>
              <TabsTrigger value="goals">UN SDGs</TabsTrigger>
            </TabsList>
            <TabsContent value="theme" className="mt-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">Building the Future with AI</h3>
                <p className="mb-4">
                  Artificial Intelligence is transforming every aspect of our lives, from how we work and learn to how
                  we address global challenges. TruHacks 2026 challenges participants to harness the power of AI to
                  create innovative solutions that make a positive impact.
                </p>
                <p className="mb-4">
                  Whether you&apos;re developing a machine learning model to predict environmental changes, creating an
                  AI assistant to improve accessibility, or building a computer vision system to enhance healthcare
                  diagnostics, TruHacks 2026 is your opportunity to showcase your creativity and technical skills.
                </p>
                <p>
                  No prior AI experience? No problem! We&apos;ll provide workshops, mentorship, and resources to help
                  you get started.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tracks" className="mt-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">Challenge Tracks</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold">AI for Health & Wellbeing</h4>
                    <p className="text-sm text-muted-foreground">
                      Create solutions that improve healthcare access, mental health support, or wellness monitoring.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">AI for Environmental Sustainability</h4>
                    <p className="text-sm text-muted-foreground">
                      Develop tools to address climate change, resource conservation, or biodiversity protection.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">AI for Education & Accessibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Build applications that enhance learning experiences or make technology more accessible to all.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">AI for Economic Opportunity</h4>
                    <p className="text-sm text-muted-foreground">
                      Create solutions that promote financial inclusion, entrepreneurship, or workforce development.
                    </p>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="goals" className="mt-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">UN Sustainable Development Goals</h3>
                <p className="mb-4">
                  Projects at TruHacks 2026 should align with one or more of the United Nations Sustainable Development
                  Goals:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                  {[
                    "No Poverty",
                    "Zero Hunger",
                    "Good Health and Well-being",
                    "Quality Education",
                    "Gender Equality",
                    "Clean Water and Sanitation",
                    "Affordable and Clean Energy",
                    "Decent Work and Economic Growth",
                    "Industry, Innovation and Infrastructure",
                  ].map((goal, index) => (
                    <div key={index} className="bg-muted p-2 rounded text-sm text-center">
                      {goal}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href="https://sdgs.un.org/goals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    Learn more about the UN SDGs
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Emma Davis", role: "Lead Organizer", image: "/placeholder.svg?height=200&width=200" },
              { name: "Jason Kim", role: "Technical Director", image: "/placeholder.svg?height=200&width=200" },
              {
                name: "Sophia Martinez",
                role: "Sponsorship Coordinator",
                image: "/placeholder.svg?height=200&width=200",
              },
              { name: "Michael Johnson", role: "Marketing Lead", image: "/placeholder.svg?height=200&width=200" },
              { name: "Olivia Wilson", role: "Logistics Manager", image: "/placeholder.svg?height=200&width=200" },
              { name: "David Chen", role: "Workshop Coordinator", image: "/placeholder.svg?height=200&width=200" },
              { name: "Aisha Patel", role: "Volunteer Coordinator", image: "/placeholder.svg?height=200&width=200" },
              { name: "Ryan Thompson", role: "Judging Coordinator", image: "/placeholder.svg?height=200&width=200" },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="text-lg text-muted-foreground mb-8">
              TruHacks began in 2020 as a small, campus-only event with just 50 participants. Since then, we&apos;ve
              grown to become one of the premier hackathons in the Midwest, attracting students from across the region.
            </p>
            <div className="relative h-[300px] mb-8">
              <Image
                src="/placeholder.svg?height=300&width=700"
                alt="TruHacks History"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-lg text-muted-foreground">
              Over the years, TruHacks has fostered countless innovations, launched several startups, and helped
              hundreds of students develop their skills and find internships and job opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us at TruHacks 2026</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Whether you&apos;re a coding expert or just getting started, TruHacks is the perfect place to learn, create,
            and connect.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/register">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
