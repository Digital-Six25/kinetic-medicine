import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Clock, Heart, Star, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F26920] to-[#F8A21F] text-white py-16 pt-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">
            About Kinetic Medicine
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Exercise Physiology Care
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Dedicated to helping NDIS participants achieve their health and
            mobility goals through evidence-based exercise programs.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kinetic Medicine was founded with a simple mission: to provide
                exceptional exercise physiology services that truly make a
                difference in people's lives. As NDIS registered providers, we
                understand the unique challenges faced by people with
                disabilities and are committed to delivering personalized,
                compassionate care.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of qualified exercise physiologists brings together
                years of experience in disability support, chronic disease
                management, and rehabilitation. We believe that everyone
                deserves access to quality healthcare that helps them achieve
                their personal goals and live their best life.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F26920]">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F26920]">500+</div>
                  <div className="text-sm text-gray-600">Clients Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F26920]">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=500&query=modern exercise physiology clinic with equipment and welcoming environment"
                alt="Kinetic Medicine clinic"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-[#F26920] transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#323739] mb-3">
                  Compassionate Care
                </h3>
                <p className="text-gray-600">
                  We treat every client with empathy, respect, and
                  understanding, recognizing their unique journey and
                  challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-[#F26920] transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#323739] mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We maintain the highest standards of professional practice and
                  continuously improve our services and knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-[#F26920] transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#323739] mb-3">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  We work closely with clients, families, and other healthcare
                  professionals to achieve the best outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-[#F26920] transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#323739] mb-3">
                  Reliability
                </h3>
                <p className="text-gray-600">
                  We're committed to being there when you need us, providing
                  consistent and dependable support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Qualified exercise physiologists dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-[#323739] mb-2">
                  Dr. Sarah Johnson
                </h3>
                <p className="text-[#F26920] font-medium mb-3">
                  Lead Exercise Physiologist
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  PhD in Exercise Physiology with 12 years experience in
                  disability support and chronic disease management.
                </p>
                <div className="flex justify-center space-x-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    NDIS Specialist
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Chronic Pain
                  </Badge>
                </div>
                <div className="flex justify-center text-[#F8A21F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-[#323739] mb-2">
                  Michael Chen
                </h3>
                <p className="text-[#F26920] font-medium mb-3">
                  Senior Exercise Physiologist
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Masters in Clinical Exercise Physiology specializing in
                  neurological conditions and mobility training.
                </p>
                <div className="flex justify-center space-x-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Neurological
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Mobility
                  </Badge>
                </div>
                <div className="flex justify-center text-[#F8A21F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-[#323739] mb-2">
                  Emma Williams
                </h3>
                <p className="text-[#F26920] font-medium mb-3">
                  Exercise Physiologist
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Bachelor of Exercise and Sport Science with expertise in
                  psychosocial support and mental health.
                </p>
                <div className="flex justify-center space-x-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Psychosocial
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Mental Health
                  </Badge>
                </div>
                <div className="flex justify-center text-[#F8A21F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualifications & Accreditations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              Qualifications & Accreditations
            </h2>
            <p className="text-xl text-gray-600">
              Maintaining the highest standards of professional practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F26920] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#323739] mb-2">
                  NDIS Registered
                </h3>
                <p className="text-sm text-gray-600">
                  Fully registered NDIS provider with quality and safeguards
                  compliance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F26920] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#323739] mb-2">
                  ESSA Accredited
                </h3>
                <p className="text-sm text-gray-600">
                  Exercise & Sports Science Australia accredited exercise
                  physiologists
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F26920] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#323739] mb-2">
                  University Qualified
                </h3>
                <p className="text-sm text-gray-600">
                  All staff hold relevant university qualifications in exercise
                  physiology
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F26920] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#323739] mb-2">
                  Ongoing Education
                </h3>
                <p className="text-sm text-gray-600">
                  Committed to continuous professional development and best
                  practice
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              Why Choose Kinetic Medicine?
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart in NDIS exercise physiology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    NDIS Expertise
                  </h3>
                  <p className="text-gray-600">
                    Deep understanding of NDIS processes, funding, and
                    participant needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    Personalized Programs
                  </h3>
                  <p className="text-gray-600">
                    Every program is tailored to your specific goals, abilities,
                    and preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    Evidence-Based Practice
                  </h3>
                  <p className="text-gray-600">
                    All our interventions are based on the latest research and
                    best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    Collaborative Approach
                  </h3>
                  <p className="text-gray-600">
                    We work with your entire support team for the best outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    Flexible Service Delivery
                  </h3>
                  <p className="text-gray-600">
                    Clinic-based, home visits, and community programs available.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    Comprehensive Reporting
                  </h3>
                  <p className="text-gray-600">
                    Detailed progress reports and outcome measurements for all
                    stakeholders.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    Ongoing Support
                  </h3>
                  <p className="text-gray-600">
                    Continuous support and program adjustments as your needs
                    change.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    Proven Results
                  </h3>
                  <p className="text-gray-600">
                    Track record of helping clients achieve their health and
                    mobility goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F26920] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of NDIS participants who have improved their health
            and independence with our expert care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#F26920]"
            >
              Learn About Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
