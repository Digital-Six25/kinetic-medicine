"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Car,
  Navigation,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import our components
import { FloatingElements } from "@/components/floating-elements";
import { BackgroundShapes } from "@/components/background-shapes";
import { FadeIn, StaggeredFadeIn } from "@/components/animations";

export default function LocationsPage() {
  const locations = [
    {
      city: "Albury",
      address: "461B Dean Street",
      phone: "(02) 6021 3456",
      hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM",
      image: "/placeholder.svg?height=300&width=400",
      slug: "albury",
      description:
        "Our flagship location in Albury offers comprehensive exercise physiology and rehabilitation services.",
      services: [
        "NDIS Support",
        "Injury Rehabilitation",
        "Health Management",
        "Kinetic Sessions",
      ],
    },
    {
      city: "Corowa",
      address: "237 Honour Ave",
      phone: "(02) 6033 2789",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-1PM",
      image: "/placeholder.svg?height=300&width=400",
      slug: "corowa",
      description:
        "Serving the Corowa community with personalized exercise physiology and wellness programs.",
      services: [
        "Exercise Physiology",
        "Chronic Conditions",
        "Mobility Training",
        "Health Assessments",
      ],
    },
    {
      city: "Forster",
      address: "87 Macintosh Street",
      phone: "(02) 6554 8901",
      hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-3PM",
      image: "/placeholder.svg?height=300&width=400",
      slug: "forster",
      description:
        "Coastal location providing expert care for active individuals and those managing health conditions.",
      services: [
        "Sports Rehabilitation",
        "NDIS Services",
        "Cancer Support",
        "Group Programs",
      ],
    },
    {
      city: "Gloucester",
      address: "777-81 Dension Street",
      phone: "(02) 6558 1234",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-12PM",
      image: "/placeholder.svg?height=300&width=400",
      slug: "gloucester",
      description:
        "Rural healthcare excellence with specialized programs for workplace injuries and chronic conditions.",
      services: [
        "Workplace Injuries",
        "Rural Health",
        "Telehealth",
        "Home Visits",
      ],
    },
    {
      city: "Salamander Bay",
      address: "3/263 Soldiers Point Rd",
      phone: "(02) 4919 5678",
      hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM",
      image: "/placeholder.svg?height=300&width=400",
      slug: "salamander-bay",
      description:
        "Modern facility offering comprehensive exercise physiology services in the Port Stephens area.",
      services: [
        "Neurological Rehab",
        "Falls Prevention",
        "Aquatic Therapy",
        "Senior Programs",
      ],
    },
    {
      city: "Taree",
      address: "70 Wynter Street",
      phone: "(02) 6552 9012",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-1PM",
      image: "/placeholder.svg?height=300&width=400",
      slug: "taree",
      description:
        "Central location serving the Manning Valley with expert exercise physiology and rehabilitation.",
      services: [
        "Injury Recovery",
        "Mental Health Support",
        "Diabetes Management",
        "Cardiac Rehab",
      ],
    },
    {
      city: "Wingham",
      address: "2/18 Isabella Street",
      phone: "(02) 6553 3456",
      hours: "Mon-Fri: 8AM-4PM, Sat: 9AM-12PM",
      image: "/placeholder.svg?height=300&width=400",
      slug: "wingham",
      description:
        "Community-focused clinic providing personalized care and specialized programs for all ages.",
      services: [
        "Community Programs",
        "Youth Services",
        "Aged Care",
        "Disability Support",
      ],
    },
  ];

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
                Our Locations
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                7 Convenient Locations Across NSW
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Quality exercise physiology and rehabilitation services are
                always within reach. Find the Kinetic Medicine clinic nearest to
                you and discover how we can help you achieve your health goals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid lg:grid-cols-2 gap-8"
          >
            {locations.map((location, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={`Kinetic Medicine ${location.city} location`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {location.city}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {location.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-orange-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">
                            {location.address}
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="h-5 w-5 text-orange-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">
                            {location.phone}
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="h-5 w-5 text-orange-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">
                            {location.hours}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Key Services:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {location.services.map((service, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button asChild className="flex-1">
                        <Link href={`/locations/${location.slug}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Navigation className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Find Us on the Map
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategically located clinics ensure that quality exercise
                physiology services are accessible throughout New South Wales.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-gray-300 h-96 rounded-xl mb-8 flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                Interactive Map of All Locations
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-6 w-6 text-orange-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Easy Access
                </h3>
                <p className="text-sm text-gray-600">
                  All locations offer convenient parking and are easily
                  accessible by car or public transport.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Strategic Locations
                </h3>
                <p className="text-sm text-gray-600">
                  Positioned throughout NSW to serve urban and rural communities
                  with equal excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Flexible Hours
                </h3>
                <p className="text-sm text-gray-600">
                  Extended hours and weekend availability to accommodate your
                  busy schedule.
                </p>
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
              Ready to Visit Us?
            </h2>
            <p className="text-xl text-orange-primary/70 mb-8 max-w-3xl mx-auto">
              Choose the location most convenient for you and book your
              consultation today. Our expert team is ready to help you achieve
              your health and wellness goals.
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
