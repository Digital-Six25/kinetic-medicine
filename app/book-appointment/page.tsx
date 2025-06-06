import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Award,
} from "lucide-react";

// Add imports for our new components at the top
import { FloatingElements } from "@/components/floating-elements";
import { BackgroundShapes } from "@/components/background-shapes";

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-primary/5 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
              Book Your Appointment
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Start Your Recovery Journey Today
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take the first step towards optimal performance and recovery. Book
              your consultation with our expert sports medicine team.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Same Day Appointments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Insurance Accepted</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Free Initial Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Book Your Appointment
                  </h2>

                  <form className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required className="mt-2" />
                        </div>
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
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="dob">Date of Birth</Label>
                          <Input id="dob" type="date" className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="gender">Gender</Label>
                          <select
                            id="gender"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">
                              Prefer not to say
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Appointment Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="service">Service Required *</Label>
                          <select
                            id="service"
                            required
                            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                          >
                            <option value="">Select a service</option>
                            <option value="initial-consultation">
                              Initial Consultation
                            </option>
                            <option value="injury-assessment">
                              Sports Injury Assessment
                            </option>
                            <option value="physiotherapy">
                              Physiotherapy Session
                            </option>
                            <option value="performance">
                              Performance Optimization
                            </option>
                            <option value="prevention">
                              Injury Prevention
                            </option>
                            <option value="exercise-physiology">
                              Exercise Physiology
                            </option>
                            <option value="follow-up">
                              Follow-up Appointment
                            </option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="practitioner">
                            Preferred Practitioner
                          </Label>
                          <select
                            id="practitioner"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                          >
                            <option value="">No preference</option>
                            <option value="dr-mitchell">
                              Dr. Sarah Mitchell
                            </option>
                            <option value="dr-johnson">Dr. Mark Johnson</option>
                            <option value="dr-thompson">
                              Dr. Emma Thompson
                            </option>
                            <option value="physio-brown">
                              Sarah Brown (Physiotherapist)
                            </option>
                            <option value="physio-davis">
                              Michael Davis (Physiotherapist)
                            </option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="preferredDate">
                            Preferred Date *
                          </Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferredTime">
                            Preferred Time *
                          </Label>
                          <select
                            id="preferredTime"
                            required
                            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                          >
                            <option value="">Select time</option>
                            <option value="morning">
                              Morning (7:00 AM - 12:00 PM)
                            </option>
                            <option value="afternoon">
                              Afternoon (12:00 PM - 5:00 PM)
                            </option>
                            <option value="evening">
                              Evening (5:00 PM - 7:00 PM)
                            </option>
                            <option value="specific">
                              Specific time (please specify in notes)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Medical Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Medical Information
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="injury">
                            Current Injury/Concern *
                          </Label>
                          <Textarea
                            id="injury"
                            required
                            className="mt-2 min-h-[100px]"
                            placeholder="Please describe your current injury, symptoms, or reason for visit..."
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="sport">
                              Primary Sport/Activity
                            </Label>
                            <Input
                              id="sport"
                              className="mt-2"
                              placeholder="e.g., Tennis, Running, Football"
                            />
                          </div>
                          <div>
                            <Label htmlFor="level">Competition Level</Label>
                            <select
                              id="level"
                              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                            >
                              <option value="">Select level</option>
                              <option value="recreational">Recreational</option>
                              <option value="club">Club Level</option>
                              <option value="state">State Level</option>
                              <option value="national">National Level</option>
                              <option value="professional">Professional</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="history">
                            Previous Injuries/Medical History
                          </Label>
                          <Textarea
                            id="history"
                            className="mt-2 min-h-[80px]"
                            placeholder="Please list any previous injuries, surgeries, or relevant medical conditions..."
                          />
                        </div>

                        <div>
                          <Label htmlFor="medications">
                            Current Medications
                          </Label>
                          <Input
                            id="medications"
                            className="mt-2"
                            placeholder="List any medications you're currently taking"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Insurance Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Insurance Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="medicare">Medicare Number</Label>
                          <Input
                            id="medicare"
                            className="mt-2"
                            placeholder="Medicare card number"
                          />
                        </div>
                        <div>
                          <Label htmlFor="insurance">
                            Private Health Insurance
                          </Label>
                          <select
                            id="insurance"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                          >
                            <option value="">Select your insurer</option>
                            <option value="bupa">Bupa</option>
                            <option value="medibank">Medibank</option>
                            <option value="hcf">HCF</option>
                            <option value="ahm">AHM</option>
                            <option value="nib">NIB</option>
                            <option value="other">Other</option>
                            <option value="none">No private insurance</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        className="mt-2 min-h-[80px]"
                        placeholder="Any additional information you'd like us to know..."
                      />
                    </div>

                    {/* Consent */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="consent1"
                          className="mt-1"
                          required
                        />
                        <Label
                          htmlFor="consent1"
                          className="text-sm text-gray-600"
                        >
                          I consent to Kinetic Medicine contacting me to confirm
                          my appointment and provide relevant health
                          information.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="consent2"
                          className="mt-1"
                          required
                        />
                        <Label
                          htmlFor="consent2"
                          className="text-sm text-gray-600"
                        >
                          I understand the clinic's cancellation policy and
                          agree to provide 24 hours notice for any changes.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <input type="checkbox" id="consent3" className="mt-1" />
                        <Label
                          htmlFor="consent3"
                          className="text-sm text-gray-600"
                        >
                          I would like to receive updates about new services and
                          health tips via email.
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full text-lg py-4">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book My Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Quick Info */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Appointment Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-orange-primary" />
                      <div>
                        <div className="font-medium text-gray-900">
                          Duration
                        </div>
                        <div className="text-sm text-gray-600">
                          Initial consultation: 60-90 minutes
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-orange-primary" />
                      <div>
                        <div className="font-medium text-gray-900">
                          What to Expect
                        </div>
                        <div className="text-sm text-gray-600">
                          Comprehensive assessment and treatment plan
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-orange-primary" />
                      <div>
                        <div className="font-medium text-gray-900">
                          Expert Care
                        </div>
                        <div className="text-sm text-gray-600">
                          Board-certified sports medicine physicians
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Options */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Need Help Booking?
                  </h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="mr-3 h-5 w-5" />
                      Call (02) 9876 5432
                    </Button>

                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="mr-3 h-5 w-5" />
                      Email Us
                    </Button>

                    <div className="text-sm text-gray-600 mt-4">
                      <p className="font-medium mb-2">Office Hours:</p>
                      <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
                      <p>Sat: 8:00 AM - 4:00 PM</p>
                      <p>Sun: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preparation Tips */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Prepare for Your Visit
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Bring your Medicare card and insurance details
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Bring any previous medical reports or scans</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Wear comfortable clothing for examination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Arrive 15 minutes early for paperwork</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>List current medications and supplements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
