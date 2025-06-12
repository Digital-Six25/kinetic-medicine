"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Add imports for our new components at the top
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { ImageGrid } from "@/components/image-grid";
import { useAboutPageData } from "@/hooks/useAboutPageData";
import AboutLoading from "./loading";

export default function AboutPage() {
  const { data, error, isLoading } = useAboutPageData();

  if (isLoading) {
    return <AboutLoading />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const about = data.about;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                {about.hero.pill}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {about.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {about.hero.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {about.hero.numbers.map((num, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-orange-primary mb-2">
                      {num.number}
                    </div>
                    <div className="text-sm text-gray-600">{num.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={
                  about.hero.image || "/placeholder.svg?height=600&width=500"
                }
                alt="Kinetic Medicine clinic"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">
              {about.mission.pill}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {about.mission.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.mission.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.mission.cards.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-orange-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-primary">
                    <Image src={value.icon} width={32} height={32} alt="icon" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                {about.story.pill}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {about.story.title}
              </h2>
              <div
                className="space-y-6 text-gray-600"
                dangerouslySetInnerHTML={{ __html: about.story.text }}
              />

              <div className="mt-8">
                <Button asChild>
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={about.story.img || "/placeholder.svg?height=600&width=500"}
                alt="Dr. Sarah Mitchell, Founder"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">
                    {about.story.card.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {about.story.card.designation}
                  </div>
                  <div className="text-xs text-orange-primary mt-1">
                    {about.story.card.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
              {about.team.pill}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {about.team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.team.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {about.team.cards.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.img || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-orange-primary">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">
              {about.award.pill}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {about.award.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.award.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {about.award.cards.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {achievement.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <div className="text-orange-primary font-semibold mb-4">
                    {achievement.subtitle}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <BackgroundShapes className="opacity-50" />
        <FloatingElements color="text-orange-secondary" count={4} />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
              {about.facility.pill}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {about.facility.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {about.facility.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {about.facility.heading}
              </h3>
              <div className="space-y-4">
                {about.facility.bullets.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={
                  about.facility.image ||
                  "/placeholder.svg?height=500&width=600"
                }
                alt="Modern sports medicine facility"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <ImageGrid
            images={about.facility.img_gallery.map(
              (img: { img: any }, i: number) => ({
                src: img.img,
                alt: `Facility image ${i + 1}`,
              })
            )}
            className="mb-8"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Convenient Location",
                description:
                  "Easily accessible location in the heart of Sydney with ample parking and public transport links.",
                icon: <MapPin className="h-8 w-8" />,
              },
              {
                title: "Extended Hours",
                description:
                  "Open early mornings and evenings to accommodate busy schedules and training times.",
                icon: <Clock className="h-8 w-8" />,
              },
              {
                title: "Comfortable Environment",
                description:
                  "Modern, clean, and welcoming facility designed for patient comfort and optimal healing.",
                icon: <Heart className="h-8 w-8" />,
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-orange-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Kinetic Medicine Difference
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join thousands of athletes who have trusted us with their sports
            medicine needs. Discover why we're the preferred choice for sports
            medicine in Sydney.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 text-white"
            >
              <Link href={"/book-appointment"}>Book Your Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-orange-primary hover:bg-white hover:text-orange-primary"
            >
              <Link href={"/contact"}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
