"use client";
import { FadeIn, StaggeredFadeIn } from "@/components/animations";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useServicePageData } from "@/hooks/useServicePageData";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ServicesLoading from "./loading";

export default function ServicesPage() {
  const { data, error, isLoading } = useServicePageData();

  if (isLoading) {
    return <ServicesLoading />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const service = data.services;
  const details = data.services_details;

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
                {service.pill}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid lg:grid-cols-2 gap-12"
          >
            {details.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl">
                <div className="relative h-64">
                  <Image
                    src={service.hero.image || "/placeholder.svg"}
                    alt={service.hero.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {/* <div className="bg-orange-primary p-3 rounded-full mb-3">
                      {service.icon}
                    </div> */}
                    <h3 className="text-2xl font-bold">{service.hero.title}</h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.hero.subtitle}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {service.features?.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {feature.feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.benefits?.cards?.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.cards.map((card, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-gray-600"
                            >
                              <Star className="h-4 w-4 text-orange-secondary mr-2 mt-0.5 flex-shrink-0" />
                              {card.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-sm text-gray-600">
                          Starting from
                        </div>
                        <div className="text-2xl font-bold text-orange-primary">
                          {service.starting_from}
                        </div>
                      </div>
                      <div className="h-8 w-px bg-gray-300" />
                      <div>
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold text-gray-900">
                          {service.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button asChild className="flex-1">
                      <Link href="/book-appointment">
                        Book Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <Link
                        href={`/services/${service.hero.title
                          .toLowerCase()
                          .replace(/&/g, "")
                          .replace(/\s+/g, "-")}`}
                      >
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <BackgroundShapes className="opacity-50" />
        <FloatingElements color="text-orange-secondary" count={4} />
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                Our Process
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {service.work_title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {service.work_subtitle}
              </p>
            </div>
          </FadeIn>
          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.15}
            className="grid md:grid-cols-4 gap-8"
          >
            {service.work_cards.map((work, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src={work.icon || "n/a"}
                    height={32}
                    width={32}
                    className="filter invert"
                    alt="icon"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {work.title}
                </h3>
                <p className="text-gray-600">{work.subtitle}</p>
              </div>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-primary relative overflow-hidden">
        <FloatingElements color="text-white" count={5} />
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              {service.contact_title}
            </h2>
            <p className="text-xl text-orange-primary/70 mb-8 max-w-3xl mx-auto">
              {" "}
              {service.contact_subTitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 animate-pulse text-white"
              >
                <Link href="/book-appointment">Book Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-white text-orange-primary hover:bg-white hover:text-orange-primary"
              >
                <Link href="/contact">Call (02) 9876 5432</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
