import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F26920] to-[#F8A21F] text-white py-16 pt-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Kinetic Medicine
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Ready to start your exercise physiology journey? We're here to help
            with your NDIS plan and answer any questions.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#323739] mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#323739] mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">(02) 1234 5678</p>
                    <p className="text-sm text-gray-500">
                      Monday to Friday, 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#323739] mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">
                      info@kineticmedicine.com.au
                    </p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#323739] mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 mb-2">
                      123 Health Street
                      <br />
                      Sydney NSW 2000
                      <br />
                      Australia
                    </p>
                    <p className="text-sm text-gray-500">
                      Accessible parking available
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#323739] mb-1">
                      Opening Hours
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#323739]">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="bg-[#F26920] hover:bg-[#F8A21F] justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#F26920] text-[#F26920] justify-start"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-[#F26920]/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#323739] mb-6">
                  Send Us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-[#323739] mb-2"
                      >
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="border-gray-300 focus:border-[#F26920] focus:ring-[#F26920]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-[#323739] mb-2"
                      >
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="border-gray-300 focus:border-[#F26920] focus:ring-[#F26920]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#323739] mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="border-gray-300 focus:border-[#F26920] focus:ring-[#F26920]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#323739] mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-gray-300 focus:border-[#F26920] focus:ring-[#F26920]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="block text-sm font-medium text-[#323739] mb-2"
                    >
                      Enquiry Type *
                    </label>
                    <select
                      id="enquiryType"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F26920] focus:border-[#F26920]"
                    >
                      <option value="">Select enquiry type</option>
                      <option value="ndis-participant">NDIS Participant</option>
                      <option value="carer-family">Carer/Family Member</option>
                      <option value="support-coordinator">
                        Support Coordinator
                      </option>
                      <option value="healthcare-professional">
                        Healthcare Professional
                      </option>
                      <option value="general-enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="ndisNumber"
                      className="block text-sm font-medium text-[#323739] mb-2"
                    >
                      NDIS Number (if applicable)
                    </label>
                    <Input
                      id="ndisNumber"
                      placeholder="Enter your NDIS number"
                      className="border-gray-300 focus:border-[#F26920] focus:ring-[#F26920]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#323739] mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your goals, current situation, or any questions you have..."
                      className="border-gray-300 focus:border-[#F26920] focus:ring-[#F26920]"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 w-4 h-4 text-[#F26920] border-gray-300 rounded focus:ring-[#F26920]"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to Kinetic Medicine contacting me about my
                      enquiry and understand my information will be handled
                      according to the Privacy Policy.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#F26920] hover:bg-[#F8A21F] text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#323739] mb-2">
                  How quickly can I start services?
                </h3>
                <p className="text-gray-600">
                  We typically have appointments available within 1-2 weeks. For
                  urgent referrals, we can often accommodate same-week
                  appointments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#323739] mb-2">
                  Do you provide services in my home?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer home visits, community-based sessions, and
                  clinic appointments depending on your needs and NDIS plan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#323739] mb-2">
                  What should I bring to my first appointment?
                </h3>
                <p className="text-gray-600">
                  Please bring your NDIS plan, any relevant medical reports,
                  current medications list, and comfortable exercise clothing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#323739] mb-2">
                  How do you work with my support team?
                </h3>
                <p className="text-gray-600">
                  We collaborate closely with your support coordinator, other
                  therapists, and healthcare providers to ensure coordinated
                  care and the best outcomes.
                </p>
              </CardContent>
            </Card>
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
