import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  Car,
  Train,
} from "lucide-react";

// Add imports for our new components at the top
import { FloatingElements } from "@/components/floating-elements";
import { BackgroundShapes } from "@/components/background-shapes";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Kinetic Medicine
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to start your journey to optimal performance and recovery?
              Get in touch with our expert team today. We're here to help you
              achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours. For urgent matters, please call us directly.
              </p>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="mt-2" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="mt-2" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <select
                        id="service"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                      >
                        <option value="">Select a service</option>
                        <option value="injury-assessment">
                          Injury Assessment
                        </option>
                        <option value="physiotherapy">Physiotherapy</option>
                        <option value="performance">
                          Performance Optimization
                        </option>
                        <option value="prevention">Injury Prevention</option>
                        <option value="exercise-physiology">
                          Exercise Physiology
                        </option>
                        <option value="elite-support">
                          Elite Athlete Support
                        </option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        className="mt-2 min-h-[120px]"
                        placeholder="Please describe your injury, symptoms, or how we can help you..."
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1"
                        required
                      />
                      <Label
                        htmlFor="consent"
                        className="text-sm text-gray-600"
                      >
                        I consent to Kinetic Medicine contacting me about my
                        inquiry and understand that my information will be
                        handled according to the Privacy Policy.
                      </Label>
                    </div>

                    <Button type="submit" className="w-full text-lg py-3">
                      Send Message
                      <MessageCircle className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Multiple ways to reach us. Choose the method that works best for
                you.
              </p>

              <div className="space-y-6 mb-12">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-orange-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Phone
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Call us for immediate assistance or to book an
                          appointment
                        </p>
                        <p className="text-xl font-bold text-orange-primary">
                          (02) 9876 5432
                        </p>
                        <p className="text-sm text-gray-500">
                          Emergency line: (02) 9876 5433
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Email
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Send us an email and we'll respond within 24 hours
                        </p>
                        <p className="text-lg font-semibold text-green-600">
                          info@kineticmedicine.com.au
                        </p>
                        <p className="text-sm text-gray-500">
                          Urgent: urgent@kineticmedicine.com.au
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Address
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Visit our modern facility in the heart of Sydney
                        </p>
                        <p className="text-lg font-semibold text-purple-600">
                          123 Sports Medicine Drive
                        </p>
                        <p className="text-gray-600">Sydney NSW 2000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Opening Hours
                        </h3>
                        <div className="space-y-1 text-gray-600">
                          <p>
                            <span className="font-medium">
                              Monday - Friday:
                            </span>{" "}
                            7:00 AM - 7:00 PM
                          </p>
                          <p>
                            <span className="font-medium">Saturday:</span> 8:00
                            AM - 4:00 PM
                          </p>
                          <p>
                            <span className="font-medium">Sunday:</span> 9:00 AM
                            - 2:00 PM
                          </p>
                          <p className="text-sm text-orange-600 mt-2">
                            Emergency appointments available 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-orange-primary/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="mr-3 h-5 w-5" />
                    Book Online Appointment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="mr-3 h-5 w-5" />
                    Request Callback
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Live Chat Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
              Find Us
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Location & Directions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in Sydney with easy access by car or public
              transport. Ample parking available on-site.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-300 h-96 rounded-xl mb-8 flex items-center justify-center">
                <p className="text-gray-600">Interactive Map Placeholder</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="bg-orange-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-6 w-6 text-orange-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">By Car</h3>
                    <p className="text-sm text-gray-600">
                      Free parking available on-site. Easy access from major
                      highways.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Train className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Public Transport
                    </h3>
                    <p className="text-sm text-gray-600">
                      5-minute walk from Central Station. Multiple bus routes
                      nearby.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Detailed Directions
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    From Sydney CBD
                  </h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Head south on George Street towards Central Station</li>
                    <li>Turn right onto Elizabeth Street</li>
                    <li>Continue for 2km until Sports Medicine Drive</li>
                    <li>Turn left - our clinic is on the right side</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    From Airport
                  </h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>
                      Take the Airport Link train to Central Station (13
                      minutes)
                    </li>
                    <li>Exit at Central and walk 5 minutes to our clinic</li>
                    <li>
                      Alternatively, take a taxi (20-30 minutes depending on
                      traffic)
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Parking Information
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Free on-site parking for all patients</li>
                    <li>Disabled parking spaces available</li>
                    <li>Secure underground parking</li>
                    <li>Electric vehicle charging stations</li>
                  </ul>
                </div>

                <div className="bg-orange-primary/5 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    First Visit Tips
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Arrive 15 minutes early for paperwork</li>
                    <li>Bring your Medicare card and any insurance details</li>
                    <li>Bring any previous medical reports or scans</li>
                    <li>Wear comfortable clothing suitable for examination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50 border-t-4 border-red-500 relative overflow-hidden">
        <FloatingElements color="text-red-400" count={4} />
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Emergency Sports Medicine Care
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              For urgent sports injuries requiring immediate attention, we offer
              24/7 emergency consultation services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-orange-primary hover:bg-orange-primary text-lg px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Line: (02) 9876 5433
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Emergency Chat
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              For life-threatening emergencies, please call 000 immediately
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
