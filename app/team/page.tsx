"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Mail,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Users,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import our components
import { FloatingElements } from "@/components/floating-elements";
import { BackgroundShapes } from "@/components/background-shapes";
import { FadeIn, StaggeredFadeIn } from "@/components/animations";

export default function TeamPage() {
  // Team members data
  const teamMembers = {
    leadership: [
      {
        name: "Dr. Sarah Mitchell",
        role: "Founder & Medical Director",
        specialty: "Sports Medicine Physician",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "MBBS, FACSEP, PhD",
        bio: "Dr. Sarah Mitchell founded Kinetic Medicine in 2009 after completing her sports medicine fellowship. As a former professional athlete, she experienced firsthand the challenges of sports injuries and the importance of quality care. Her vision was to create a clinic that combines cutting-edge medical expertise with a deep understanding of athletic performance.",
        expertise: [
          "Sports Injury Management",
          "Athletic Performance",
          "Exercise Prescription",
          "Rehabilitation",
        ],
      },
      {
        name: "Dr. Mark Johnson",
        role: "Clinical Director",
        specialty: "Exercise Physiologist",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "PhD, AEP, ESSAM",
        bio: "Dr. Mark Johnson brings over 15 years of experience in exercise physiology and rehabilitation. He oversees our clinical operations and ensures that all patients receive the highest standard of care. His research in exercise science has been published in numerous peer-reviewed journals.",
        expertise: [
          "Clinical Exercise Physiology",
          "Chronic Disease Management",
          "Research",
          "Clinical Governance",
        ],
      },
    ],
    physiologists: [
      {
        name: "Emma Thompson",
        role: "Lead Physiotherapist",
        specialty: "Neurological Rehabilitation",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "BPhty, MSc Rehab",
        bio: "Emma specializes in neurological rehabilitation and has extensive experience helping patients with conditions such as stroke, multiple sclerosis, and Parkinson's disease. Her patient-centered approach focuses on improving function and quality of life.",
        expertise: [
          "Neurological Conditions",
          "Stroke Rehabilitation",
          "Balance Training",
          "Functional Movement",
        ],
      },
      {
        name: "Michael Davis",
        role: "Senior Exercise Physiologist",
        specialty: "Sports Rehabilitation",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "BExSc, AEP",
        bio: "Michael specializes in sports rehabilitation and has worked with elite athletes across various sports. His expertise in biomechanics and functional movement helps athletes recover from injuries and improve their performance.",
        expertise: [
          "Sports Rehabilitation",
          "Biomechanics",
          "Strength & Conditioning",
          "Return to Sport",
        ],
      },
      {
        name: "Dr. Rebecca Chen",
        role: "Exercise Physiologist",
        specialty: "Mental Health",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "PhD, AEP, ESSAM",
        bio: "Dr. Chen specializes in exercise interventions for mental health conditions. Her research and clinical practice focus on how physical activity can improve psychological wellbeing and manage conditions like anxiety and depression.",
        expertise: [
          "Mental Health",
          "Anxiety & Depression",
          "Stress Management",
          "Wellbeing Programs",
        ],
      },
      {
        name: "Thomas Wright",
        role: "Exercise Physiologist",
        specialty: "Cancer Support",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "MExSc, AEP",
        bio: "Thomas has dedicated his career to supporting individuals with cancer through exercise. He helps patients manage treatment side effects, maintain strength, and improve quality of life during and after cancer treatment.",
        expertise: [
          "Cancer Exercise Therapy",
          "Fatigue Management",
          "Strength Preservation",
          "Quality of Life",
        ],
      },
    ],
    specialists: [
      {
        name: "Lisa Chen",
        role: "NDIS Support Coordinator",
        specialty: "Disability Support",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "BSocSc, Cert IV Disability",
        bio: "Lisa specializes in NDIS support coordination and has extensive experience helping participants navigate the NDIS system effectively. She ensures our NDIS clients receive the support they need to achieve their goals.",
        expertise: [
          "NDIS Navigation",
          "Support Coordination",
          "Disability Services",
          "Goal Setting",
        ],
      },
      {
        name: "Dr. James Wilson",
        role: "Neurological Rehabilitation Specialist",
        specialty: "Neurological Conditions",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "PhD, BPhty, Cert Neuro Rehab",
        bio: "Dr. Wilson has dedicated his career to helping individuals with neurological conditions improve their function and quality of life. His specialized knowledge in neuroplasticity informs his evidence-based approach to rehabilitation.",
        expertise: [
          "Neurological Rehabilitation",
          "Stroke Recovery",
          "Parkinson's Management",
          "MS Support",
        ],
      },
      {
        name: "Alex Morgan",
        role: "Senior Exercise Physiologist",
        specialty: "Group Programs",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "MExSc, AEP",
        bio: "Alex brings energy and expertise to our Kinetic Sessions, specializing in group exercise programs for clients of all abilities and fitness levels. His motivational approach helps clients achieve their goals in a supportive environment.",
        expertise: [
          "Group Exercise",
          "Motivation",
          "Program Design",
          "Community Building",
        ],
      },
      {
        name: "Samantha Lee",
        role: "Mobility Specialist",
        specialty: "Aged Care",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "BExSc, Cert IV Aged Care",
        bio: "Samantha's expertise in mobility and recovery techniques helps older clients improve flexibility, reduce pain, and enhance movement quality. She specializes in falls prevention and maintaining independence in older adults.",
        expertise: [
          "Aged Care",
          "Falls Prevention",
          "Mobility Training",
          "Independence Support",
        ],
      },
    ],
    support: [
      {
        name: "David Park",
        role: "Practice Manager",
        specialty: "Operations",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "MBA, BHlthSc",
        bio: "David oversees the day-to-day operations of Kinetic Medicine, ensuring that our facilities, systems, and processes support the delivery of exceptional patient care. His background in health administration and business management keeps our practice running smoothly.",
        expertise: [
          "Practice Management",
          "Healthcare Administration",
          "Team Leadership",
          "Patient Experience",
        ],
      },
      {
        name: "Jessica Brown",
        role: "Client Services Manager",
        specialty: "Patient Support",
        image: "/placeholder.svg?height=400&width=400",
        qualifications: "BHlthSc, Cert IV Customer Service",
        bio: "Jessica leads our client services team, ensuring that every patient receives a warm welcome and seamless experience from their first contact through to ongoing care. Her focus on patient satisfaction has helped build our reputation for exceptional service.",
        expertise: [
          "Patient Experience",
          "Appointment Scheduling",
          "Health Insurance",
          "Client Communication",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                Our Experts
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our multidisciplinary team of qualified exercise physiologists,
                specialists, and support staff are dedicated to helping you
                achieve your health and wellness goals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Team Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Kinetic Medicine, our team is united by a shared commitment
                to these core values that guide everything we do.
              </p>
            </div>
          </FadeIn>

          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description:
                  "We strive for the highest standards in everything we do, from diagnosis to treatment and ongoing care.",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Compassion",
                description:
                  "We understand the physical and emotional impact of injuries and provide caring, supportive treatment.",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Expertise",
                description:
                  "Our team maintains cutting-edge knowledge through ongoing education and evidence-based practice.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description:
                  "We work as a team with patients, families, and other healthcare providers to achieve the best outcomes.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-orange-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <BackgroundShapes className="opacity-50" />
        <FloatingElements color="text-orange-secondary" count={4} />
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                Our Professionals
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multidisciplinary team brings together expertise from
                various fields to provide comprehensive care for all your health
                needs.
              </p>
            </div>
          </FadeIn>

          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="physiologists">
                Exercise Physiologists
              </TabsTrigger>
              <TabsTrigger value="specialists">Specialists</TabsTrigger>
              <TabsTrigger value="support">Support Team</TabsTrigger>
            </TabsList>

            <TabsContent value="leadership">
              <StaggeredFadeIn
                direction="up"
                staggerDelay={0.1}
                className="grid md:grid-cols-2 gap-8"
              >
                {teamMembers.leadership.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </StaggeredFadeIn>
            </TabsContent>

            <TabsContent value="physiologists">
              <StaggeredFadeIn
                direction="up"
                staggerDelay={0.1}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {teamMembers.physiologists.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </StaggeredFadeIn>
            </TabsContent>

            <TabsContent value="specialists">
              <StaggeredFadeIn
                direction="up"
                staggerDelay={0.1}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {teamMembers.specialists.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </StaggeredFadeIn>
            </TabsContent>

            <TabsContent value="support">
              <StaggeredFadeIn
                direction="up"
                staggerDelay={0.1}
                className="grid md:grid-cols-2 gap-8"
              >
                {teamMembers.support.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </StaggeredFadeIn>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                  Expertise & Qualifications
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Highly Qualified Professionals
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our team consists of highly qualified professionals with
                  extensive education, training, and experience in their
                  respective fields.
                </p>

                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <div className="bg-orange-primary/10 p-3 rounded-full flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-orange-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Advanced Degrees
                      </h3>
                      <p className="text-gray-600">
                        Our team includes professionals with PhDs, Masters
                        degrees, and specialized certifications in exercise
                        physiology, rehabilitation, and sports medicine.
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="bg-orange-primary/10 p-3 rounded-full flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-orange-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Industry Experience
                      </h3>
                      <p className="text-gray-600">
                        With a combined experience of over 100 years, our team
                        has worked with thousands of patients across various
                        settings, from elite sports to community health.
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="bg-orange-primary/10 p-3 rounded-full flex-shrink-0">
                      <Award className="h-6 w-6 text-orange-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Accreditations
                      </h3>
                      <p className="text-gray-600">
                        Our exercise physiologists are accredited with Exercise
                        & Sports Science Australia (ESSA) and maintain ongoing
                        professional development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Team qualifications"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-800">
                Careers
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're always looking for talented and passionate professionals
                to join our team. If you're committed to excellence in patient
                care and want to be part of a supportive, collaborative
                environment, we'd love to hear from you.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Current Openings
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-orange-primary/10 p-2 rounded-full mt-1">
                      <Briefcase className="h-5 w-5 text-orange-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Exercise Physiologist
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Full-time position at our Albury location
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-orange-primary/10 p-2 rounded-full mt-1">
                      <Briefcase className="h-5 w-5 text-orange-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        NDIS Support Coordinator
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Part-time position at our Forster location
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-orange-primary/10 p-2 rounded-full mt-1">
                      <Briefcase className="h-5 w-5 text-orange-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Client Services Assistant
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Casual position at our Taree location
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link href="/careers">View All Openings</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Work With Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Supportive Team Environment
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Work alongside experienced professionals in a
                        collaborative culture
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <GraduationCap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Professional Development
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Ongoing training and education opportunities to advance
                        your career
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Work-Life Balance
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Flexible scheduling options and a focus on employee
                        wellbeing
                      </p>
                    </div>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full mt-6">
                  <Link href="/contact">Contact Recruitment</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-primary relative overflow-hidden">
        <FloatingElements color="text-white" count={5} />
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Meet Our Team in Person?
            </h2>
            <p className="text-xl text-orange-primary/70 mb-8 max-w-3xl mx-auto">
              Book your consultation today and experience the Kinetic Medicine
              difference. Our expert team is ready to help you achieve your
              health and wellness goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8"
              >
                <Link href="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-primary"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// Team Member Card Component
function TeamMemberCard({ member }: { member: any }) {
  return (
    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-sm text-white/90">{member.role}</p>
          <p className="text-xs text-orange-primary mt-1">{member.specialty}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-4">
          <Badge variant="outline" className="mb-2">
            {member.qualifications}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900">
            Areas of Expertise:
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((area: string, idx: number) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {area}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <Button variant="outline" size="sm" className="flex-1">
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Book
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
