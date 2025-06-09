import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { FadeIn, StaggeredFadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  MapPin,
  Clock,
  ArrowLeft,
  Send,
  Calendar,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";

// This would typically come from a database or CMS
const vacancies = [
  {
    id: "physiotherapist",
    title: "Physiotherapist",
    location: "Brisbane",
    type: "Full-time",
    salary: "$85,000 - $110,000 per annum",
    description:
      "Join our team as a Physiotherapist to provide high-quality care to patients with various conditions. You'll work in a supportive environment with opportunities for professional growth.",
    responsibilities: [
      "Assess and treat patients with various musculoskeletal, neurological, and cardiorespiratory conditions",
      "Develop and implement personalized treatment plans",
      "Work collaboratively with our multidisciplinary team",
      "Maintain accurate and detailed clinical records",
      "Participate in case conferences and team meetings",
      "Contribute to quality improvement initiatives",
      "Mentor junior staff and students when required",
    ],
    requirements: [
      "Bachelor's degree in Physiotherapy",
      "Current AHPRA registration",
      "Minimum 2 years of clinical experience",
      "Strong communication and interpersonal skills",
      "Experience with NDIS clients (preferred)",
      "Commitment to ongoing professional development",
    ],
    benefits: [
      "Competitive salary package",
      "Professional development allowance",
      "Flexible working arrangements",
      "Supportive team environment",
      "Regular team building activities",
      "Modern facilities and equipment",
    ],
    posted: "2 weeks ago",
    closingDate: "July 15, 2025",
  },
  {
    id: "exercise-physiologist",
    title: "Exercise Physiologist",
    location: "Gold Coast",
    type: "Full-time",
    salary: "$75,000 - $95,000 per annum",
    description:
      "We're looking for an Exercise Physiologist to develop and implement exercise programs for our clients. You'll work closely with our multidisciplinary team to deliver comprehensive care.",
    responsibilities: [
      "Conduct comprehensive assessments of clients' physical capabilities",
      "Design and implement evidence-based exercise programs",
      "Provide education on lifestyle modifications and self-management strategies",
      "Monitor client progress and adjust programs accordingly",
      "Maintain detailed clinical documentation",
      "Collaborate with other healthcare professionals",
      "Participate in community health promotion activities",
    ],
    requirements: [
      "Degree in Exercise Physiology or related field",
      "ESSA accreditation as an Exercise Physiologist",
      "Experience working with NDIS clients",
      "Strong knowledge of exercise prescription for various conditions",
      "Excellent communication and interpersonal skills",
      "Ability to work independently and as part of a team",
    ],
    benefits: [
      "Competitive salary package",
      "Professional development opportunities",
      "Flexible working arrangements",
      "Supportive team environment",
      "Modern facilities and equipment",
      "Employee wellness program",
    ],
    posted: "3 days ago",
    closingDate: "July 30, 2025",
  },
  {
    id: "occupational-therapist",
    title: "Occupational Therapist",
    location: "Brisbane",
    type: "Part-time",
    salary: "$40 - $50 per hour",
    description:
      "Work as an Occupational Therapist helping clients improve their independence and quality of life. You'll assess client needs and develop personalized intervention plans.",
    responsibilities: [
      "Conduct comprehensive assessments of clients' functional abilities",
      "Develop and implement client-centered intervention plans",
      "Provide home modification recommendations and assistive technology solutions",
      "Collaborate with clients, families, and other healthcare professionals",
      "Maintain accurate clinical documentation",
      "Participate in team meetings and case conferences",
      "Contribute to service development initiatives",
    ],
    requirements: [
      "Bachelor's or Master's degree in Occupational Therapy",
      "Current AHPRA registration",
      "Experience with NDIS clients preferred",
      "Strong knowledge of assistive technology and home modifications",
      "Excellent communication and interpersonal skills",
      "Client-centered approach to practice",
    ],
    benefits: [
      "Competitive hourly rate",
      "Flexible working hours",
      "Supportive team environment",
      "Professional development opportunities",
      "Modern facilities and equipment",
      "Work-life balance",
    ],
    posted: "1 week ago",
    closingDate: "August 5, 2025",
  },
  {
    id: "admin-assistant",
    title: "Administrative Assistant",
    location: "Gold Coast",
    type: "Casual",
    salary: "$28 - $32 per hour",
    description:
      "Support our clinical team by managing appointments, handling client inquiries, and maintaining administrative systems. You'll be the friendly face welcoming our clients.",
    responsibilities: [
      "Manage appointment scheduling and client bookings",
      "Greet clients and handle general inquiries",
      "Process payments and manage invoicing",
      "Maintain client records and filing systems",
      "Coordinate with clinical staff regarding client needs",
      "Handle phone calls and correspondence",
      "Assist with general office duties as required",
    ],
    requirements: [
      "Previous administrative experience, preferably in healthcare",
      "Excellent organizational and time management skills",
      "Proficiency in Microsoft Office suite",
      "Strong communication and customer service skills",
      "Ability to maintain confidentiality",
      "Attention to detail and accuracy",
    ],
    benefits: [
      "Competitive hourly rate",
      "Flexible working hours",
      "Friendly and supportive team",
      "On-the-job training and development",
      "Modern office environment",
    ],
    posted: "Just posted",
    closingDate: "July 20, 2025",
  },
  {
    id: "practice-manager",
    title: "Practice Manager",
    location: "Brisbane",
    type: "Full-time",
    salary: "$95,000 - $120,000 per annum",
    description:
      "Lead our clinical operations as Practice Manager, overseeing staff, ensuring quality care, and managing business operations. You'll play a key role in our growth and development.",
    responsibilities: [
      "Oversee day-to-day operations of the practice",
      "Manage and develop clinical and administrative staff",
      "Ensure compliance with regulatory requirements",
      "Monitor and improve quality of service delivery",
      "Manage financial aspects including budgeting and reporting",
      "Implement and maintain policies and procedures",
      "Drive business growth and development initiatives",
    ],
    requirements: [
      "5+ years experience in healthcare management",
      "Strong leadership and people management skills",
      "Business acumen and financial management expertise",
      "Knowledge of healthcare regulations and compliance",
      "Excellent communication and interpersonal skills",
      "Problem-solving and decision-making abilities",
      "Allied health background advantageous",
    ],
    benefits: [
      "Competitive salary package",
      "Performance-based bonuses",
      "Professional development opportunities",
      "Flexible working arrangements",
      "Leadership role in a growing organization",
      "Supportive team environment",
    ],
    posted: "3 weeks ago",
    closingDate: "July 10, 2025",
  },
];

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const vacancy = vacancies.find((job) => job.id === params.id);

  if (!vacancy) {
    return {
      title: "Job Not Found | Kinetic Medicine",
    };
  }

  return {
    title: `${vacancy.title} | Careers | Kinetic Medicine`,
    description: vacancy.description,
  };
}

export async function generateStaticParams() {
  return vacancies.map((job) => ({
    id: job.id,
  }));
}

export default function JobDetailPage({ params }: Props) {
  const vacancy = vacancies.find((job) => job.id === params.id);

  if (!vacancy) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
        <BackgroundShapes />
        <div className="container relative z-10">
          <FadeIn>
            <Link
              href="/careers"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all vacancies
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mr-3">
                {vacancy.title}
              </h1>
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20"
              >
                {vacancy.type}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1 text-primary" />{" "}
                {vacancy.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-1 text-primary" />{" "}
                {vacancy.salary}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1 text-primary" /> Posted:{" "}
                {vacancy.posted}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-1 text-primary" /> Closing:{" "}
                {vacancy.closingDate}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Apply Now</Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#job-details">View Details</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Job Details Section */}
      <section id="job-details" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <StaggeredFadeIn>
                <FadeIn>
                  <div className="prose max-w-none mb-12">
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <p className="text-gray-600">{vacancy.description}</p>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3">
                      {vacancy.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                    <ul className="space-y-3">
                      {vacancy.requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Benefits</h2>
                    <ul className="space-y-3">
                      {vacancy.benefits.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </StaggeredFadeIn>
            </div>

            <div>
              <FadeIn>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">
                      Application Process
                    </h3>
                    <div className="space-y-6 mb-8">
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Submit Application</p>
                          <p className="text-sm text-gray-600">
                            Complete the online application form with your
                            details
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Initial Screening</p>
                          <p className="text-sm text-gray-600">
                            Our team will review your application
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Interview</p>
                          <p className="text-sm text-gray-600">
                            Selected candidates will be invited for an interview
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Offer & Onboarding</p>
                          <p className="text-sm text-gray-600">
                            Successful candidates will receive an offer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full">Apply Now</Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="mailto:careers@kineticmedicine.com.au">
                          <Send className="mr-2 h-4 w-4" /> Email Your Resume
                        </a>
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">
                        Application closes on:
                      </p>
                      <p className="font-medium">{vacancy.closingDate}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Related Positions */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold">
              Other Positions You Might Like
            </h2>
          </FadeIn>

          <StaggeredFadeIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vacancies
              .filter((job) => job.id !== vacancy.id)
              .slice(0, 3)
              .map((job) => (
                <FadeIn key={job.id}>
                  <Link href={`/careers/${job.id}`} className="block h-full">
                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px]">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {job.type}
                          </Badge>
                        </div>
                        <div className="flex items-center mb-4 text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" /> {job.location}
                        </div>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {job.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            Posted: {job.posted}
                          </span>
                          <span className="text-primary font-medium">
                            View Details
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
          </StaggeredFadeIn>

          <FadeIn className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/careers">View All Positions</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Working at Kinetic Medicine */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Working at Kinetic Medicine"
                  fill
                  className="object-cover rounded-lg"
                />
                <FloatingElements count={6} />
              </div>
            </FadeIn>
            <FadeIn className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Working at Kinetic Medicine
              </h2>
              <p className="text-lg text-gray-600">
                At Kinetic Medicine, we're committed to creating a positive,
                supportive work environment where our team members can thrive
                professionally and personally.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Collaborative Team
                    </h3>
                    <p className="text-gray-600">
                      Work alongside passionate professionals who are committed
                      to excellence in healthcare.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <GraduationCap className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Professional Development
                    </h3>
                    <p className="text-gray-600">
                      Access ongoing training, mentorship, and career
                      advancement opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
