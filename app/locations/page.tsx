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
import { useLocationsPageData } from "@/hooks/useLocationsPageData";
import LocationsLoading from "./loading";

export default function LocationsPage() {
  const { data, error, isLoading } = useLocationsPageData();

  if (isLoading) {
    return <LocationsLoading />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const locations = data.locations;

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
                {locations.hero.pill}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {locations.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {locations.hero.subtitle}
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
            {locations.cards.map((location, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={location.img || "/placeholder.svg"}
                      alt={`Kinetic Medicine ${location.name} location`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {location.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{location.text}</p>

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
                            {location.timing}
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
                              {service.service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button asChild className="flex-1">
                        <Link
                          href={`/locations/${location.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Link
                          href={location.location_url || "/#"}
                          target="_blank"
                        >
                          <Navigation className="h-4 w-4" />
                        </Link>
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
          {/* <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Find Us on the Map
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategically located clinics ensure that quality exercise
                physiology services are accessible throughout New South Wales.
              </p>
            </div>
          </FadeIn> */}

          {/* <FadeIn direction="up" delay={0.2}>
            <div className="bg-gray-300 h-96 rounded-xl mb-8 flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                Interactive Map of All Locations
              </p>
            </div>
          </FadeIn> */}

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
                className="text-lg px-8 text-white"
              >
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-white text-orange-primary hover:bg-white hover:text-orange-primary"
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
