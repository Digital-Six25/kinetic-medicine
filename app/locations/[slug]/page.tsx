"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, CheckCircle, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Import our components
import { FloatingElements } from "@/components/floating-elements";
import { BackgroundShapes } from "@/components/background-shapes";
import { FadeIn } from "@/components/animations";

const locations = {
  albury: {
    city: "Albury",
    address: "461B Dean Street",
    phone: "(02) 6021 3456",
    email: "albury@kineticmedicine.com.au",
    hours: {
      weekdays: "Monday - Friday: 7:00 AM - 6:00 PM",
      saturday: "Saturday: 8:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
    },
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Our flagship location in Albury offers comprehensive exercise physiology and rehabilitation services in a state-of-the-art facility.",
    services: [
      "NDIS Exercise Physiology",
      "Injury Rehabilitation",
      "Health Management",
      "Kinetic Sessions",
      "Neurological Rehabilitation",
      "Workplace Injury Support",
    ],
    features: [
      "Fully equipped gymnasium",
      "Private consultation rooms",
      "Hydrotherapy pool",
      "On-site parking",
      "Wheelchair accessible",
      "Latest diagnostic equipment",
    ],
    team: [
      { name: "Dr. Sarah Mitchell", role: "Senior Exercise Physiologist" },
      { name: "Michael Davis", role: "Rehabilitation Specialist" },
    ],
  },
  corowa: {
    city: "Corowa",
    address: "237 Honour Ave",
    phone: "(02) 6033 2789",
    email: "corowa@kineticmedicine.com.au",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 9:00 AM - 1:00 PM",
      sunday: "Sunday: Closed",
    },
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Serving the Corowa community with personalized exercise physiology and wellness programs in a welcoming environment.",
    services: [
      "Exercise Physiology",
      "Chronic Condition Management",
      "Mobility Training",
      "Health Assessments",
      "Falls Prevention",
      "Mental Health Support",
    ],
    features: [
      "Modern exercise equipment",
      "Group class studio",
      "Assessment facilities",
      "Free parking",
      "Accessible entrance",
      "Comfortable waiting area",
    ],
    team: [
      { name: "Emma Thompson", role: "Exercise Physiologist" },
      { name: "James Wilson", role: "Health Specialist" },
    ],
  },
  forster: {
    city: "Forster",
    address: "87 Macintosh Street",
    phone: "(02) 6554 8901",
    email: "forster@kineticmedicine.com.au",
    hours: {
      weekdays: "Monday - Friday: 7:00 AM - 6:00 PM",
      saturday: "Saturday: 8:00 AM - 3:00 PM",
      sunday: "Sunday: Closed",
    },
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Coastal location providing expert care for active individuals and those managing health conditions in the beautiful Forster area.",
    services: [
      "Sports Rehabilitation",
      "NDIS Services",
      "Cancer Support Therapy",
      "Group Programs",
      "Aquatic Therapy",
      "Performance Optimization",
    ],
    features: [
      "Coastal location",
      "Aquatic therapy pool",
      "Sports rehabilitation equipment",
      "Group exercise studio",
      "Ample parking",
      "Modern facilities",
    ],
    team: [
      { name: "Dr. Lisa Chen", role: "Sports Medicine Specialist" },
      { name: "Alex Morgan", role: "Aquatic Therapist" },
    ],
  },
  gloucester: {
    city: "Gloucester",
    address: "777-81 Dension Street",
    phone: "(02) 6558 1234",
    email: "gloucester@kineticmedicine.com.au",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 9:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Rural healthcare excellence with specialized programs for workplace injuries and chronic conditions serving the Gloucester Valley.",
    services: [
      "Workplace Injury Rehabilitation",
      "Rural Health Programs",
      "Telehealth Services",
      "Home Visit Programs",
      "Chronic Disease Management",
      "Preventive Care",
    ],
    features: [
      "Rural healthcare focus",
      "Telehealth capabilities",
      "Home visit services",
      "Workplace injury specialists",
      "Community programs",
      "Flexible scheduling",
    ],
    team: [
      { name: "Dr. Mark Johnson", role: "Rural Health Specialist" },
      { name: "Sarah Brown", role: "Community Health Coordinator" },
    ],
  },
  "salamander-bay": {
    city: "Salamander Bay",
    address: "3/263 Soldiers Point Rd",
    phone: "(02) 4919 5678",
    email: "salamanderbay@kineticmedicine.com.au",
    hours: {
      weekdays: "Monday - Friday: 7:00 AM - 6:00 PM",
      saturday: "Saturday: 8:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
    },
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Modern facility offering comprehensive exercise physiology services in the Port Stephens area with specialized programs for seniors.",
    services: [
      "Neurological Rehabilitation",
      "Falls Prevention Programs",
      "Aquatic Therapy",
      "Senior Health Programs",
      "Balance Training",
      "Mobility Enhancement",
    ],
    features: [
      "Senior-friendly design",
      "Hydrotherapy facilities",
      "Balance training equipment",
      "Neurological rehabilitation suite",
      "Easy access parking",
      "Comfortable environment",
    ],
    team: [
      { name: "Dr. Rebecca Chen", role: "Neurological Specialist" },
      { name: "Thomas Wright", role: "Senior Health Coordinator" },
    ],
  },
  taree: {
    city: "Taree",
    address: "70 Wynter Street",
    phone: "(02) 6552 9012",
    email: "taree@kineticmedicine.com.au",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 9:00 AM - 1:00 PM",
      sunday: "Sunday: Closed",
    },
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Central location serving the Manning Valley with expert exercise physiology and rehabilitation services for diverse health needs.",
    services: [
      "Injury Recovery Programs",
      "Mental Health Support",
      "Diabetes Management",
      "Cardiac Rehabilitation",
      "Weight Management",
      "Chronic Pain Management",
    ],
    features: [
      "Central Manning Valley location",
      "Mental health support programs",
      "Cardiac rehabilitation equipment",
      "Diabetes education center",
      "Group therapy rooms",
      "Comprehensive assessment facilities",
    ],
    team: [
      { name: "Dr. Amanda Wilson", role: "Chronic Disease Specialist" },
      { name: "David Park", role: "Mental Health Exercise Specialist" },
    ],
  },
  wingham: {
    city: "Wingham",
    address: "2/18 Isabella Street",
    phone: "(02) 6553 3456",
    email: "wingham@kineticmedicine.com.au",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 4:00 PM",
      saturday: "Saturday: 9:00 AM - 12:00 PM",
      sunday: "Sunday: Closed",
    },
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Community-focused clinic providing personalized care and specialized programs for all ages in the heart of Wingham.",
    services: [
      "Community Health Programs",
      "Youth Exercise Programs",
      "Aged Care Services",
      "Disability Support",
      "Family Health Programs",
      "Preventive Health Services",
    ],
    features: [
      "Community-centered approach",
      "Youth programs",
      "Aged care specialists",
      "Family-friendly environment",
      "Disability support services",
      "Flexible appointment times",
    ],
    team: [
      { name: "Lisa Chen", role: "Community Health Specialist" },
      { name: "Michael Davis", role: "Youth Program Coordinator" },
    ],
  },
};

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = locations[params.slug as keyof typeof locations];

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-primary/5 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                  Kinetic Medicine
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {location.city}{" "}
                  <span className="text-orange-primary">Location</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {location.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-primary" />
                    <span className="text-gray-700">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-primary" />
                    <span className="text-gray-700">{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-primary" />
                    <span className="text-gray-700">
                      {location.hours.weekdays}
                    </span>
                  </div>
                </div>

                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/book-appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`Kinetic Medicine ${location.city} location`}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services & Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Services Available
                </h2>
                <div className="grid gap-4">
                  {location.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Facility Features
                </h2>
                <div className="grid gap-4">
                  {location.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Opening Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">
                        Monday - Friday
                      </span>
                      <span className="text-gray-600">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">
                        Saturday
                      </span>
                      <span className="text-gray-600">8:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-900">Sunday</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-orange-primary mt-4">
                    Emergency appointments available 24/7
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-orange-primary" />
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <div className="text-gray-600">{location.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-orange-primary" />
                      <div>
                        <div className="font-medium text-gray-900">Address</div>
                        <div className="text-gray-600">{location.address}</div>
                      </div>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-6">
                    <Link href="/contact">Get Directions</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-primary relative overflow-hidden">
        <FloatingElements color="text-white" count={5} />
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-xl text-orange-primary/70 mb-8 max-w-3xl mx-auto">
              Book your consultation at our {location.city} location today and
              take the first step towards better health and wellbeing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8"
              >
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-primary"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
