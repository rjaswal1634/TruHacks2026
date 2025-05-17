import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  return (
    <>
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Register for TruHacks 2026</h1>
            <p className="text-xl text-muted-foreground">
              Join us for 48 hours of innovation, learning, and fun at Truman State University.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student">University Students</TabsTrigger>
                <TabsTrigger value="highschool">High School Students</TabsTrigger>
                <TabsTrigger value="mentor">Mentors & Volunteers</TabsTrigger>
              </TabsList>
              <TabsContent value="student" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">University Student Registration</h2>
                        <p className="text-muted-foreground mb-4">
                          Open to all undergraduate and graduate students from any university or college.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Free registration includes meals, snacks, and swag</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Access to all workshops, mentorship, and networking events</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Opportunity to win prizes worth over $10,000</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Travel reimbursements available for out-of-state participants</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Requirements:</h3>
                        <ul className="space-y-1 text-sm">
                          <li>• Valid university/college ID</li>
                          <li>• Completed registration form</li>
                          <li>• Signed liability waiver</li>
                          <li>• Adherence to Code of Conduct</li>
                        </ul>
                      </div>
                      <div className="flex justify-center">
                        <Button asChild size="lg" className="font-semibold">
                          <Link href="https://forms.google.com/truhacks-university-registration" target="_blank" rel="noopener noreferrer">
                            Register as University Student
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="highschool" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">High School Student Registration</h2>
                        <p className="text-muted-foreground mb-4">
                          Open to all high school students (grades 9-12) with an interest in technology and innovation.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Free registration includes meals, snacks, and swag</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Beginner-friendly workshops and dedicated mentors</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Special prize category for high school teams</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Opportunity to connect with university students and faculty</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Requirements:</h3>
                        <ul className="space-y-1 text-sm">
                          <li>• Valid high school ID</li>
                          <li>• Completed registration form</li>
                          <li>• Parental consent form for students under 18</li>
                          <li>• Signed liability waiver</li>
                          <li>• Adherence to Code of Conduct</li>
                        </ul>
                      </div>
                      <div className="flex justify-center">
                        <Button asChild size="lg" className="font-semibold">
                          <Link href="https://forms.google.com/truhacks-highschool-registration" target="_blank" rel="noopener noreferrer">
                            Register as High School Student
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="mentor" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Mentor & Volunteer Registration</h2>
                        <p className="text-muted-foreground mb-4">
                          Industry professionals, faculty, and experienced students are invited to mentor or volunteer at TruHacks 2026.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Share your expertise and guide the next generation of innovators</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Network with other professionals and talented students</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Flexible time commitments (minimum 4 hours)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>Meals, snacks, and exclusive mentor swag provided</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Areas of Expertise Needed:</h3>
                        <ul className="space-y-1 text-sm">
                          <li>• Artificial Intelligence / Machine Learning</li>
                          <li>• Web Development</li>
                          <li>• Mobile App Development</li>
                          <li>• UI/UX Design</li>
                          <li>• Hardware / IoT</li>
                          <li>• Business / Entrepreneurship</li>
                          <li>• Sustainability / Environmental Science</li>
                        </ul>
                      </div>
                      <div className="flex justify-center">
                        <Button asChild size="lg" className="font-semibold">
                          <Link href="https://forms.google.com/truhacks-mentor-registration" target="_blank" rel="noopener noreferrer">
                            Register as Mentor/Volunteer
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Registration Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-primary"></div>
                  <div className="ml-auto mr-[calc(50%+2rem)] md:mr-[calc(50%+4rem)] p-4 bg-card rounded-lg border shadow-sm max-w-[300px]">
                    <h3 className="font-semibold">Early Bird Registration</h3>
                    <p className="text-sm text-muted-foreground">November 1, 2025 - January 15, 2026</p>
                    <p className="text-sm mt-2">
                      Register early for guaranteed swag and priority workshop selection.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-primary"></div>
                  <div className="mr-auto ml-[calc(50%+2rem)] md:ml-[calc(50%+4rem)] p-4 bg-card rounded-lg border shadow-sm max-w-[300px]">
                    <h3 className="font-semibold">Regular Registration</h3>
                    <p className="text-sm text-muted-foreground">January 16 - March 1, 2026</p>
                    <p className="text-sm mt-2">
                      Standard registration period for all participants.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-primary"></div>
                  <div className="ml-auto mr-[calc(50%+2rem)] md:mr-[calc(50%+4rem)] p-4 bg-card rounded-lg border shadow-sm max-w-[300px]">
                    <h3 className="font-semibold">Late Registration</h3>
                    <p className="text-sm text-muted-foreground">March 2 - March 15, 2026</p>
                    <p className="text-sm mt-2">
                      Space-available basis only, limited swag guaranteed.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-primary"></div>
                  <div className="mr-auto ml-[calc(50%+2rem)] md:ml-[calc(50%+4rem)] p-4 bg-card rounded-lg border shadow-sm max-w-[300px]">
                    <h3 className="font-semibold">TruHacks 2026</h3>
                    <p className="text-sm text-muted-foreground">March 20-22, 2026</p>
                    <p className="text-sm mt-2">
                      The big event! Check-in begins at 3:00 PM on March 20.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Registration Questions</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Can I register as a team?</h3>
                <p className="text-muted-foreground">
                  Each participant must register individually. You'll have the opportunity to form or join teams during the event. Teams can have up to 4 members.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Is there a registration fee?</h3>
                <p className="text-muted-foreground">
                  No, TruHacks is completely free for all participants, thanks to our generous sponsors. We provide meals, snacks, workspace, and swag at no cost.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">What if I need to cancel my registration?</h3>
                <p className="text-muted-foreground">
                  If you need to cancel, please do so as soon as possible through the link provided in your registration confirmation email. This allows us to offer your spot to another participant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}