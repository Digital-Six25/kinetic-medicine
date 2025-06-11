"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import our components
import { FadeIn, StaggeredFadeIn } from "@/components/animations";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { useTeamPageData } from "@/hooks/useTeamPageData";
import TeamLoading from "./loading";

export default function TeamPage() {
  const { data, error, isLoading } = useTeamPageData();

  if (isLoading) {
    return <TeamLoading />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const team = data.team;

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
                {team.hero.pill}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {team.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {team.hero.subtitle}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {team.values.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {team.values.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.values.cards.map((value, index) => (
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
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <BackgroundShapes className="opacity-50" />
        <FloatingElements color="text-orange-secondary" count={4} />
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                {team.team.pill}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {team.team.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {team.team.subtitle}
              </p>
            </div>
          </FadeIn>

          <Tabs
            defaultValue={team.team.tags[0]?.tag.toLowerCase()}
            className="w-full"
          >
            <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-12">
              {team.team.tags.map((tag, i) => (
                <TabsTrigger key={i} value={tag.tag.toLowerCase()}>
                  {tag.tag}
                </TabsTrigger>
              ))}
            </TabsList>

            {team.team.tags.map((tag, i) => (
              <TabsContent key={i} value={tag.tag.toLowerCase()}>
                <StaggeredFadeIn
                  direction="up"
                  staggerDelay={0.1}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {team.team.cards
                    .filter((member) =>
                      member.expertise_tags.some(
                        (t) =>
                          t.expertise_tag.toLowerCase() ===
                          tag.tag.toLowerCase()
                      )
                    )
                    .map((member, idx) => (
                      <TeamMemberCard key={idx} member={member} />
                    ))}
                </StaggeredFadeIn>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                  {team.qualification.pill}
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {team.qualification.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {team.qualification.subtitle}
                </p>

                <div className="space-y-6">
                  {team.qualification.bullets.map((item, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="bg-orange-primary/10 p-3 rounded-full flex-shrink-0">
                        <Image
                          src={item.icon}
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <Image
                  src={
                    team.qualification.img ||
                    "/placeholder.svg?height=500&width=600"
                  }
                  alt="Team qualifications"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-800">
                {team.careers.pill}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {team.careers.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {team.careers.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.careers.cards.map((card, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-4">
                    {card.bullets.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="bg-orange-primary/10 p-2 rounded-full mt-1">
                          <Image
                            src={
                              item.icon ||
                              "/placeholder.svg?height=500&width=600"
                            }
                            alt="Team qualifications"
                            width={24}
                            height={24}
                            className="rounded-2xl shadow-2xl"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {item.subtitle}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <Link href="/careers">{card.btn}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-primary relative overflow-hidden">
        <FloatingElements color="text-white" count={5} />
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Meet Our Team in Person?
            </h2>
            <p className="text-xl text-orange-primary/70 mb-8 max-w-3xl mx-auto">
              Book your consultation today and experience the Kinetic Medicine
              difference. Our expert team is ready to help you achieve your
              health and wellness goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 text-white"
              >
                <Link href="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-white text-orange-primary "
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// Team Member Card Component
function TeamMemberCard({ member }: { member: any }) {
  return (
    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64">
        <Image
          src={member.img || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-sm text-white/90">{member.role}</p>
          <p className="text-xs text-orange-primary mt-1">
            {member.designation}
          </p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-4">
          <Badge variant="outline" className="mb-2">
            {member.education}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {member.description}
        </p>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900">
            Areas of Expertise:
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise_tags.map((area: string, idx: number) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {area.expertise_tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <Button variant="outline" size="sm" className="flex-1">
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Book
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
