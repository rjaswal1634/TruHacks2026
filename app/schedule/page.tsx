import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Calendar, Clock } from "lucide-react"

export default function SchedulePage() {
  return (
    <>
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Event Schedule</h1>
            <p className="text-xl text-muted-foreground">
              Plan your TruHacks 2026 experience with our detailed schedule of events.
            </p>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/schedule.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Schedule PDF
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="day1">Day 1 (March 20)</TabsTrigger>
              <TabsTrigger value="day2">Day 2 (March 21)</TabsTrigger>
              <TabsTrigger value="day3">Day 3 (March 22)</TabsTrigger>
            </TabsList>
            <TabsContent value="day1" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">3:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Check-in & Registration</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Main Lobby</p>
                        <p className="mt-1">
                          Arrive early to check in, get your badge, swag bag, and find your team area.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">5:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Opening Ceremony</h3>
                        <p className="text-sm text-muted-foreground">Baldwin Auditorium</p>
                        <p className="mt-1">
                          Welcome address, introduction to the theme, rules explanation, and sponsor presentations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">6:30 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Dinner & Team Formation</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Ballroom</p>
                        <p className="mt-1">
                          Enjoy dinner while meeting potential teammates. Team formation activities for those who
                          don&apos;t have a team yet.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">8:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Hacking Begins!</h3>
                        <p className="text-sm text-muted-foreground">Various Locations</p>
                        <p className="mt-1">The official start of the hackathon. Begin working on your projects!</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">9:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Workshop: Intro to AI Development</h3>
                        <p className="text-sm text-muted-foreground">Violette Hall, Room 1010</p>
                        <p className="mt-1">
                          Learn the basics of AI development and how to integrate AI into your projects.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">11:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Late Night Snacks</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Main Lobby</p>
                        <p className="mt-1">Refuel with snacks and beverages to keep the creativity flowing.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="day2" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">8:00 AM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Breakfast</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Ballroom</p>
                        <p className="mt-1">Start your day with a nutritious breakfast to fuel your coding session.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">10:00 AM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Workshop: Machine Learning Models</h3>
                        <p className="text-sm text-muted-foreground">Violette Hall, Room 1010</p>
                        <p className="mt-1">
                          Deep dive into machine learning models and how to implement them in your projects.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">12:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Lunch & Mentor Sessions</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Ballroom</p>
                        <p className="mt-1">
                          Enjoy lunch while getting advice from industry mentors about your projects.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">2:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Workshop: UI/UX Design for AI Applications</h3>
                        <p className="text-sm text-muted-foreground">Violette Hall, Room 1020</p>
                        <p className="mt-1">
                          Learn best practices for designing user interfaces for AI-powered applications.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">6:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Dinner & Sponsor Networking</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Ballroom</p>
                        <p className="mt-1">
                          Dinner served with an opportunity to network with sponsors and learn about internship and job
                          opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">8:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Game Night & Social Activities</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Game Room</p>
                        <p className="mt-1">
                          Take a break from coding to socialize, play games, and recharge your creative energy.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">11:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Midnight Snacks</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Main Lobby</p>
                        <p className="mt-1">Late night energy boost with snacks and beverages.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="day3" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">8:00 AM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Breakfast</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Ballroom</p>
                        <p className="mt-1">Final day breakfast to energize for project completion.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">10:00 AM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Workshop: Preparing Your Demo</h3>
                        <p className="text-sm text-muted-foreground">Violette Hall, Room 1010</p>
                        <p className="mt-1">Tips and best practices for presenting your project to judges.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">12:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Lunch</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Ballroom</p>
                        <p className="mt-1">Final lunch before project submissions.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">2:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Hacking Ends</h3>
                        <p className="text-sm text-muted-foreground">All Locations</p>
                        <p className="mt-1">All coding stops! Submit your projects to the judging platform.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">2:30 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Project Expo & Judging</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Ballroom</p>
                        <p className="mt-1">
                          Present your projects to judges and other participants in a science fair style expo.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">5:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Closing Ceremony & Awards</h3>
                        <p className="text-sm text-muted-foreground">Baldwin Auditorium</p>
                        <p className="mt-1">
                          Celebration of achievements, announcement of winners, and distribution of prizes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="min-w-[100px] text-center">
                        <div className="bg-primary/10 rounded-md p-2">
                          <Clock className="h-5 w-5 text-primary mx-auto" />
                          <p className="text-sm font-medium">7:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Farewell Dinner</h3>
                        <p className="text-sm text-muted-foreground">Student Union Building, Ballroom</p>
                        <p className="mt-1">Final dinner and networking opportunity before departure.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Workshops & Special Events</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">AI Development Workshop Series</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A series of workshops covering various aspects of AI development, from basics to advanced
                    techniques.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Introduction to AI Development (Day 1, 9:00 PM)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Machine Learning Models (Day 2, 10:00 AM)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">UI/UX Design for AI Applications (Day 2, 2:00 PM)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Sponsor Tech Talks</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Industry experts from our sponsor companies will share insights on cutting-edge technologies and
                    career opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">The Future of AI in Healthcare (Day 2, 11:00 AM)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Building Ethical AI Systems (Day 2, 3:00 PM)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Career Paths in AI and Machine Learning (Day 2, 5:00 PM)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Social Activities</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take a break from coding and connect with fellow hackers through fun activities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Team Formation Mixer (Day 1, 6:30 PM)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Game Night (Day 2, 8:00 PM)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Sponsor Networking Event (Day 2, 6:00 PM)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Register now to secure your spot at TruHacks 2026 and be part of this exciting event!
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
