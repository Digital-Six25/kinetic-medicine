"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import our components
import { FadeIn, StaggeredFadeIn } from "@/components/animations";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { useNdisPageData } from "@/hooks/useNdisPageData";
import NDISLoading from "./loading";

export default function NDISPage() {
  const { data: ndis, error, isLoading } = useNdisPageData();

  if (isLoading) {
    return <NDISLoading />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!ndis) {
    return <div>No data available</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={8} />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" duration={0.8}>
              <div>
                <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                  {ndis.hero.pill}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {ndis.hero.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {ndis.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    asChild
                    className="text-lg px-8 animate-pulse"
                  >
                    <Link href="/book-appointment">
                      <Calendar className="mr-2 h-5 w-5" />
                      {ndis.hero.cta1}
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="text-lg px-8"
                  >
                    <Link href="/services/ndis-disability-support">
                      {ndis.hero.cta2}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" duration={0.8} delay={0.2}>
              <div className="relative">
                <Image
                  src={ndis.hero.img || "/placeholder.svg?height=600&width=500"}
                  alt="NDIS Exercise Physiology Services"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Image
                        src={
                          ndis.hero.card.icon ||
                          "/placeholder.svg?height=600&width=500"
                        }
                        alt="NDIS Exercise Physiology Services"
                        width={24}
                        height={24}
                        className="rounded-2xl shadow-2xl"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {ndis.hero.card.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {ndis.hero.card.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Scrolling Text Banner */}
      <section className="py-8 bg-orange-primary overflow-hidden">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-scroll">
            <span className="text-white text-lg font-medium mx-8">
              {[
                ...ndis.hero.marquee,
                ...ndis.hero.marquee,
                ...ndis.hero.marquee,
              ].map((item, i) => (
                <span key={i} className="mx-4">
                  {item.text} ～
                </span>
              ))}
            </span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {ndis.services.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {ndis.services.subtitle}
              </p>
            </div>
          </FadeIn>
          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid lg:grid-cols-2 gap-12"
          >
            {ndis?.services?.cards?.map((item, i) => (
              <Card key={i} className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-orange-primary/10 p-3 rounded-full">
                      <Image
                        src={item.icon}
                        width={28}
                        height={28}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-orange-primary">{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{item.description}</p>

                  {item.bullets?.length > 0 && (
                    <>
                      {item.bullets.some((b) => b.subtitle) ? (
                        <div className="space-y-4">
                          {item.bullets.map((b, i) =>
                            b.subtitle ? (
                              <div key={i}>
                                <h4 className="font-semibold text-gray-900 mb-2">
                                  {b.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {b.subtitle}
                                </p>
                              </div>
                            ) : null
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          {item.bullets.map((b, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              <span className="text-sm text-gray-700">
                                {b.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>{" "}
        </div>
      </section>

      {/* Complex Disabilities Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <BackgroundShapes className="opacity-50" />
        <FloatingElements color="text-orange-secondary" count={4} />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                  {ndis.programs.pill}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {ndis.programs.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {ndis.programs.subtitle}
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {ndis.programs.card.title}
                  </h3>
                  <p className="text-gray-600">{ndis.programs.card.subtitle}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <Image
                  src={
                    ndis.programs.img || "/placeholder.svg?height=500&width=600"
                  }
                  alt="Complex disability support"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {ndis.benefits.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {ndis.benefits.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {ndis.benefits.card.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-orange-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-primary">
                    <Image
                      src={benefit.icon}
                      width={28}
                      height={28}
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-primary relative overflow-hidden">
        <FloatingElements color="text-white" count={6} />
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your NDIS Journey?
            </h2>
            <p className="text-xl text-orange-primary/70 mb-8 max-w-3xl mx-auto">
              Take the first step towards achieving your health and wellness
              goals with our expert NDIS exercise physiology services. Our team
              is here to support you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 animate-pulse"
              >
                <Link href="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book NDIS Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-primary"
              >
                <Link href="/contact">
                  Learn More About NDIS Funding
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-orange-primary/70">
              <p className="text-sm">
                NDIS Registered Provider • All Plan Management Types Accepted •
                Expert Care
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
