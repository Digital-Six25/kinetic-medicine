import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { FadeIn, StaggeredFadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Users,
  Heart,
  Lightbulb,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Kinetic Medicine",
  description:
    "Join our team of passionate healthcare professionals at Kinetic Medicine and make a difference in people's lives.",
};

const vacancies = [
  {
    id: "physiotherapist",
    title: "Physiotherapist",
    location: "Brisbane",
    type: "Full-time",
    description:
      "Join our team as a Physiotherapist to provide high-quality care to patients with various conditions. You'll work in a supportive environment with opportunities for professional growth.",
    requirements: [
      "Bachelor's degree in Physiotherapy",
      "AHPRA registration",
      "Min. 2 years experience",
      "Strong communication skills",
    ],
    posted: "2 weeks ago",
  },
  {
    id: "exercise-physiologist",
    title: "Exercise Physiologist",
    location: "Gold Coast",
    type: "Full-time",
    description:
      "We're looking for an Exercise Physiologist to develop and implement exercise programs for our clients. You'll work closely with our multidisciplinary team to deliver comprehensive care.",
    requirements: [
      "Degree in Exercise Physiology",
      "ESSA accreditation",
      "Experience with NDIS clients",
      "Passion for rehabilitation",
    ],
    posted: "3 days ago",
  },
  {
    id: "occupational-therapist",
    title: "Occupational Therapist",
    location: "Brisbane",
    type: "Part-time",
    description:
      "Work as an Occupational Therapist helping clients improve their independence and quality of life. You'll assess client needs and develop personalized intervention plans.",
    requirements: [
      "Bachelor's/Master's in Occupational Therapy",
      "AHPRA registration",
      "NDIS experience preferred",
      "Client-centered approach",
    ],
    posted: "1 week ago",
  },
  {
    id: "admin-assistant",
    title: "Administrative Assistant",
    location: "Gold Coast",
    type: "Casual",
    description:
      "Support our clinical team by managing appointments, handling client inquiries, and maintaining administrative systems. You'll be the friendly face welcoming our clients.",
    requirements: [
      "Previous admin experience",
      "Excellent organizational skills",
      "Proficiency in MS Office",
      "Healthcare experience preferred",
    ],
    posted: "Just posted",
  },
  {
    id: "practice-manager",
    title: "Practice Manager",
    location: "Brisbane",
    type: "Full-time",
    description:
      "Lead our clinical operations as Practice Manager, overseeing staff, ensuring quality care, and managing business operations. You'll play a key role in our growth and development.",
    requirements: [
      "5+ years in healthcare management",
      "Strong leadership skills",
      "Business acumen",
      "Allied health background advantageous",
    ],
    posted: "3 weeks ago",
  },
];

const benefits = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Supportive Team",
    description:
      "Work alongside passionate professionals in a collaborative environment",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Career Growth",
    description:
      "Ongoing professional development and clear advancement pathways",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Innovation",
    description:
      "Be part of a forward-thinking practice embracing new approaches",
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Work-Life Balance",
    description: "Flexible scheduling options and focus on wellbeing",
  },
];

export default function CareersPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeIn className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                Join Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Be part of a passionate team dedicated to transforming lives
                through innovative healthcare solutions and personalized
                treatment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#vacancies">View Open Positions</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#process">How to Apply</a>
                </Button>
              </div>
            </FadeIn>
            <FadeIn className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Kinetic Medicine team collaborating"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <FloatingElements />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Why Join Kinetic Medicine?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're building a team of exceptional individuals who are
              passionate about making a difference in healthcare.
            </p>
          </FadeIn>

          <StaggeredFadeIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <FadeIn key={index}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-2">{benefit.icon}</div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Current Vacancies Section */}
      <section id="vacancies" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Current Vacancies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our open positions and find your next career opportunity
              with us.
            </p>
          </FadeIn>

          <StaggeredFadeIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vacancies.map((job) => (
              <FadeIn key={job.id}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {job.type}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center mt-2">
                      <MapPin className="h-4 w-4 mr-1" /> {job.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Requirements:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> {job.posted}
                    </span>
                    <Button variant="default" className="group" asChild>
                      <Link href={`/careers/${job.id}`}>
                        Apply Now{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Application Process */}
      <section id="process" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Application process at Kinetic Medicine"
                  fill
                  className="object-cover rounded-lg"
                />
                <FloatingElements />
              </div>
            </FadeIn>
            <FadeIn className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Our Application Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                    <p className="text-gray-600">
                      Submit your application through our online portal with
                      your resume and cover letter.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Initial Screening
                    </h3>
                    <p className="text-gray-600">
                      Our recruitment team will review your application and
                      contact you for an initial phone interview.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interview</h3>
                    <p className="text-gray-600">
                      Selected candidates will be invited for an in-person or
                      video interview with our team.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Offer & Onboarding
                    </h3>
                    <p className="text-gray-600">
                      Successful candidates will receive an offer and begin our
                      comprehensive onboarding program.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Don't See a Suitable Position?
              </h2>
              <p className="text-lg text-gray-600">
                We're always looking for talented individuals to join our team.
                Send us your resume and we'll keep it on file for future
                opportunities.
              </p>
              <Button size="lg" className="mt-4" asChild>
                <a href="mailto:careers@kineticmedicine.com.au">
                  <Send className="mr-2 h-5 w-5" /> Contact Our Recruitment Team
                </a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              What Our Team Says
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from the people who make Kinetic Medicine an amazing place to
              work.
            </p>
          </FadeIn>

          <StaggeredFadeIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn>
              <Card className="h-full border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-6">
                    "Working at Kinetic Medicine has been incredibly rewarding.
                    The supportive team environment and opportunities for
                    professional development have helped me grow both personally
                    and professionally."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden relative">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Sarah Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">
                        Physiotherapist, 3 years
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn>
              <Card className="h-full border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-6">
                    "The collaborative approach at Kinetic Medicine allows us to
                    provide truly comprehensive care to our clients. I've never
                    worked somewhere with such a strong focus on both client and
                    staff wellbeing."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden relative">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Michael Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-gray-500">
                        Exercise Physiologist, 2 years
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn>
              <Card className="h-full border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-6">
                    "Joining Kinetic Medicine was the best career decision I've
                    made. The mentorship program and continuous learning
                    opportunities have accelerated my professional growth in
                    ways I couldn't have imagined."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden relative">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Emma Williams"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Emma Williams</p>
                      <p className="text-sm text-gray-500">
                        Occupational Therapist, 1 year
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </StaggeredFadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Join Our Team?
              </h2>
              <p className="text-lg opacity-90">
                Take the next step in your career journey with Kinetic Medicine
                and help us transform lives through innovative healthcare.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <a href="#vacancies">
                    <Briefcase className="mr-2 h-5 w-5" /> Browse Open Positions
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
