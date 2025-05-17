import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

export default function FAQPage() {
  return (
    <>
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">Find answers to common questions about TruHacks 2026.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who can participate in TruHacks?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    TruHacks is open to all university and high school students. You don&apos;t need to be a computer
                    science major or have extensive coding experience to participate.
                  </p>
                  <p>
                    We welcome students from all backgrounds and disciplines who are interested in technology,
                    innovation, and problem-solving.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How much does it cost to participate?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    TruHacks is completely free for all participants! Thanks to our generous sponsors, we provide meals,
                    snacks, swag, and prizes at no cost to you. We also offer travel reimbursements for participants
                    coming from outside the local area, subject to certain conditions.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What should I bring to the hackathon?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">You should bring:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-2">
                    <li>Your laptop and charger</li>
                    <li>Student ID</li>
                    <li>Any personal items you&apos;ll need for the weekend</li>
                    <li>A change of clothes if you plan to stay overnight</li>
                    <li>Toiletries</li>
                    <li>A water bottle</li>
                    <li>Your creativity and enthusiasm!</li>
                  </ul>
                  <p>We&apos;ll provide meals, snacks, and a comfortable hacking environment.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need to have a team before the event?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    No, you don&apos;t need to have a team before the event. While you&apos;re welcome to form a team in
                    advance, we&apos;ll have team formation activities at the beginning of the hackathon to help you
                    find teammates. Teams can have up to 4 members, and we encourage collaboration between students with
                    different skills and backgrounds.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What if I don&apos;t know how to code?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    That&apos;s perfectly fine! TruHacks is a learning experience, and we welcome participants of all
                    skill levels. We&apos;ll have workshops, mentors, and resources to help you learn and contribute to
                    your team&apos;s project. Non-technical skills like design, project management, and presentation are
                    also valuable for hackathon projects.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What are the prizes?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    TruHacks 2026 will feature over $10,000 in prizes across various categories, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Grand Prize: $3,000</li>
                    <li>Runner-up: $2,000</li>
                    <li>Best AI Implementation: $1,000</li>
                    <li>Best UI/UX: $1,000</li>
                    <li>Best Environmental Impact: $1,000</li>
                    <li>Best Health Solution: $1,000</li>
                    <li>People&apos;s Choice: $500</li>
                    <li>Best High School Team: $500</li>
                  </ul>
                  <p className="mt-2">
                    Additionally, sponsor companies may offer their own prizes and recruitment opportunities.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Can I work on a pre-existing project?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    No, all projects must be started from scratch at the hackathon. You can come with ideas and plans,
                    but the actual coding and development must begin when the hackathon officially starts. This ensures
                    a fair competition for all participants. However, you can use open-source libraries, APIs, and
                    frameworks as building blocks for your project.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Is there a virtual participation option?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, we offer a virtual participation option for those who cannot attend in person. Virtual
                    participants will have access to the same workshops, mentorship, and judging opportunities through
                    our online platform. However, we encourage in-person attendance if possible for the full hackathon
                    experience and networking opportunities.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>What resources will be available during the hackathon?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">We provide a variety of resources to help you succeed:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Technical workshops on AI, web development, and more</li>
                    <li>Mentors from industry and academia</li>
                    <li>Cloud computing credits</li>
                    <li>Hardware for prototyping</li>
                    <li>API access from our sponsors</li>
                    <li>Quiet spaces for brainstorming</li>
                    <li>Collaboration spaces for team work</li>
                    <li>High-speed internet</li>
                    <li>Meals and snacks to keep you energized</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>How are projects judged?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Projects are judged based on the following criteria:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Innovation and Creativity (25%)</li>
                    <li>Technical Complexity (25%)</li>
                    <li>Alignment with Theme and SDGs (20%)</li>
                    <li>Functionality and Completeness (15%)</li>
                    <li>Presentation and Demo (15%)</li>
                  </ul>
                  <p className="mt-2">
                    Judges include industry professionals, academics, and representatives from our sponsor companies.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger>Is there a Code of Conduct?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Yes, TruHacks has a strict Code of Conduct that all participants, mentors, sponsors, and organizers
                    must follow. We are committed to providing a harassment-free, inclusive experience for everyone
                    regardless of gender, gender identity and expression, age, sexual orientation, disability, physical
                    appearance, body size, race, ethnicity, nationality, religion, or technical experience.
                  </p>
                  <p>
                    <Link href="/code-of-conduct" className="text-primary hover:underline">
                      Read our full Code of Conduct here
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger>How can I prepare for TruHacks?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">To prepare for TruHacks, we recommend:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Brushing up on your programming skills</li>
                    <li>Learning about AI and machine learning basics</li>
                    <li>Exploring the UN Sustainable Development Goals</li>
                    <li>Thinking about potential project ideas</li>
                    <li>Getting familiar with common APIs and frameworks</li>
                    <li>Joining our Discord community to connect with other participants</li>
                    <li>Getting plenty of rest before the event!</li>
                  </ul>
                  <p className="mt-2">
                    We&apos;ll also be hosting pre-hackathon workshops in the weeks leading up to the event.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you couldn&apos;t find the answer to your question, feel free to reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://discord.gg/truhacks" target="_blank" rel="noopener noreferrer">
                  Join Our Discord
                </Link>
              </Button>
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
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
