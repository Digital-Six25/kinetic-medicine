import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Download,
  FileText,
  HelpCircle,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function NDISSupport() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F26920] to-[#F8A21F] text-white py-16 pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                NDIS Registered Provider
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your NDIS Exercise Physiology Guide
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Everything you need to know about accessing exercise physiology
                services through your NDIS plan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
                >
                  Check Your Eligibility
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#F26920]"
                >
                  Download NDIS Guide
                </Button>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=500&query=NDIS participant reviewing plan with exercise physiologist"
                alt="NDIS plan consultation"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Eligibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              Am I Eligible for NDIS Exercise Physiology?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exercise physiology may be funded under your NDIS plan if it helps
              you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#323739] mb-6">
                You may be eligible if you have:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#323739]">
                      Physical Disability
                    </h4>
                    <p className="text-gray-600">
                      Conditions affecting mobility, strength, or physical
                      function
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#323739]">
                      Chronic Health Conditions
                    </h4>
                    <p className="text-gray-600">
                      Ongoing conditions that impact your daily activities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#323739]">
                      Psychosocial Disability
                    </h4>
                    <p className="text-gray-600">
                      Mental health conditions affecting participation in
                      community
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#323739]">
                      Neurological Conditions
                    </h4>
                    <p className="text-gray-600">
                      Conditions affecting the nervous system and movement
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-[#F26920] hover:bg-[#F8A21F]">
                Check My Eligibility
              </Button>
            </div>

            <Card className="border-2 border-[#F26920]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323739] mb-4">
                  Common NDIS Goals We Support:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F26920] mr-3" />
                    <span>Improve physical fitness and strength</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F26920] mr-3" />
                    <span>Increase independence in daily activities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F26920] mr-3" />
                    <span>Manage chronic pain effectively</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F26920] mr-3" />
                    <span>Improve mental health and wellbeing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F26920] mr-3" />
                    <span>Participate in community activities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F26920] mr-3" />
                    <span>Prevent secondary health conditions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NDIS Funding Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              How NDIS Funding Works
            </h2>
            <p className="text-xl text-gray-600">
              Understanding your NDIS plan and how exercise physiology fits in
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#323739] mb-3">
                  Core Supports
                </h3>
                <p className="text-gray-600 mb-4">
                  Exercise physiology is typically funded under Core Supports -
                  Daily Activities in your NDIS plan.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Individual therapy sessions</li>
                  <li>• Group programs</li>
                  <li>• Assessment and planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#323739] mb-3">
                  Capacity Building
                </h3>
                <p className="text-gray-600 mb-4">
                  Some services may be funded under Capacity Building - Improved
                  Health and Wellbeing.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Skill development programs</li>
                  <li>• Independence training</li>
                  <li>• Health and fitness education</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#323739] mb-3">
                  Plan Management
                </h3>
                <p className="text-gray-600 mb-4">
                  We work with all plan management types to make accessing our
                  services easy.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Self-managed plans</li>
                  <li>• Plan-managed</li>
                  <li>• NDIA-managed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to access exercise physiology through your NDIS plan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#323739] mb-2">
                    Contact Us
                  </h3>
                  <p className="text-gray-600">
                    Call or email us to discuss your NDIS plan and goals. We'll
                    help you understand if exercise physiology is right for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#323739] mb-2">
                    Plan Review
                  </h3>
                  <p className="text-gray-600">
                    We'll review your NDIS plan together to understand your
                    funding and how our services align with your goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#323739] mb-2">
                    Service Agreement
                  </h3>
                  <p className="text-gray-600">
                    We'll create a service agreement that outlines how we'll
                    work together to achieve your NDIS goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#323739] mb-2">
                    Start Your Program
                  </h3>
                  <p className="text-gray-600">
                    Begin your personalized exercise physiology program with
                    regular sessions and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              NDIS Resources & Support
            </h2>
            <p className="text-xl text-gray-600">
              Helpful resources to understand your NDIS journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Download className="w-12 h-12 text-[#F26920] mx-auto mb-4" />
                <h3 className="font-semibold text-[#323739] mb-2">
                  NDIS Exercise Guide
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Complete guide to exercise physiology and NDIS funding
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#F26920] text-[#F26920]"
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-[#F26920] mx-auto mb-4" />
                <h3 className="font-semibold text-[#323739] mb-2">
                  Plan Review Checklist
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  What to look for in your NDIS plan for exercise physiology
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#F26920] text-[#F26920]"
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-[#F26920] mx-auto mb-4" />
                <h3 className="font-semibold text-[#323739] mb-2">
                  For Support Coordinators
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Information for support coordinators and case managers
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#F26920] text-[#F26920]"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-[#F26920] mx-auto mb-4" />
                <h3 className="font-semibold text-[#323739] mb-2">
                  Free Consultation
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Book a free consultation to discuss your NDIS plan
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#F26920] text-[#F26920]"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Referrers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              For Healthcare Professionals & Referrers
            </h2>
            <p className="text-xl text-gray-600">
              Referring NDIS participants to our exercise physiology services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#323739] mb-6">
                Why Refer to Kinetic Medicine?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#323739]">
                      NDIS Registered Provider
                    </h4>
                    <p className="text-gray-600">
                      Fully registered and compliant with NDIS standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#323739]">
                      Qualified Exercise Physiologists
                    </h4>
                    <p className="text-gray-600">
                      University-qualified professionals with disability
                      experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#323739]">
                      Comprehensive Reporting
                    </h4>
                    <p className="text-gray-600">
                      Detailed progress reports and outcome measurements
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#323739]">
                      Collaborative Approach
                    </h4>
                    <p className="text-gray-600">
                      Work closely with your treatment team and care plans
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-[#F26920] hover:bg-[#F8A21F]">
                  Refer a Client
                </Button>
                <Button
                  variant="outline"
                  className="border-[#F26920] text-[#F26920]"
                >
                  Download Referral Form
                </Button>
              </div>
            </div>

            <Card className="border-2 border-[#F26920]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323739] mb-4">
                  Referral Information Needed:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F26920] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Client's NDIS plan details and funding allocation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F26920] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Current medical history and diagnoses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F26920] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Specific goals and outcomes desired</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F26920] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Any contraindications or precautions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F26920] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Contact details for client and support team</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Quick Referral:</strong> Call us on (02) 1234 5678
                    or email referrals@kineticmedicine.com.au
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F26920] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access NDIS Exercise Physiology?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you understand your NDIS plan and how exercise
            physiology can support your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#F26920]"
            >
              <Download className="w-5 h-5 mr-2" />
              Download NDIS Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-[#F26920] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Urgent Support?</h2>
          <p className="text-lg mb-6">
            For urgent health matters, please contact your GP or call 000. For
            urgent NDIS support needs, contact us directly.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (02) 1234 5678
          </Button>
        </div>
      </section>
    </div>
  );
}
