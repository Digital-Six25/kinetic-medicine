"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import our components
import { FadeIn } from "@/components/animations";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { useLocationsPageData } from "@/hooks/useLocationsPageData";
import { useParams } from "next/navigation";

const formatSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function LocationPage() {
  const { data, error, isLoading } = useLocationsPageData();
  const params = useParams();
  const slug = params?.slug as string;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data?.locations?.cards?.length) return <div>No data available</div>;

  const card = data.locations.cards.find(
    (card) => formatSlug(card.name || "") === slug
  );

  if (!card) return <div>Location not found</div>;

  const { name, address, phone, img, text, timing, services, facilities } =
    card;

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
                  {name} <span className="text-orange-primary">Location</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {card.text}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-primary" />
                    <span className="text-gray-700">{address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-primary" />
                    <span className="text-gray-700">{phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-primary" />
                    <span className="text-gray-700">{timing}</span>
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
                  src={img || "/placeholder.svg"}
                  alt={`Kinetic Medicine ${name} location`}
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
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service.service}</span>
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
                  {facilities.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature.facility}</span>
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
