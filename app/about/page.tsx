"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useStoryPageData } from "@/hooks/useStoryPageData";
import { Award, CheckCircle, Clock, Heart, Star, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const { data, error, isLoading } = useStoryPageData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  console.log("data", data);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F26920] to-[#F8A21F] text-white py-16 pt-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">
            {data.story_hero_pill}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {data.story_hero_title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {data.story_hero_subtitle}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-6">
                {data.story_title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">{data.story_text}</p>
              <div className="flex items-center space-x-6">
                {data.story_numbers.map((number, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-[#F26920]">
                      {number.number}
                    </div>
                    <div className="text-sm text-gray-600">{number.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src={
                  data.story_img ||
                  "/placeholder.svg?height=400&width=500&query=modern exercise physiology clinic with equipment and welcoming environment"
                }
                alt="Kinetic Medicine clinic"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.story_value_title}
            </h2>
            <p className="text-xl text-gray-600">{data.story_value_subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.story_value_cards.map((value, i) => (
              <Card className="text-center border-2 hover:border-[#F26920] transition-colors">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={value.icons || "n/a"}
                      height={32}
                      width={32}
                      className="filter invert"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#323739] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.story_team_title}
            </h2>
            <p className="text-xl text-gray-600">{data.story_team_subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.story_team_card.map((team, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-[#323739] mb-2">
                    {team.name}
                  </h3>
                  <p className="text-[#F26920] font-medium mb-3">
                    {team.designation}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{team.desc}</p>
                  <div className="flex justify-center space-x-2 mb-4">
                    {Array.isArray(team.tags) &&
                      team.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag.tag}
                        </Badge>
                      ))}
                  </div>
                  <div className="flex justify-center text-[#F8A21F]">
                    {[...Array(Number(team.rating) || 0)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Accreditations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.story_qualification_title}
            </h2>
            <p className="text-xl text-gray-600">
              {data.story_qualification_subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.story_qualifications.map((qualification, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#F26920] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={qualification.icon || "n/a"}
                      height={32}
                      width={32}
                      className="filter invert"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-[#323739] mb-2">
                    {qualification.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {qualification.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.story_why_title_}
            </h2>
            <p className="text-xl text-gray-600">{data.story_why_subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: First 5 items */}
            <div className="space-y-6">
              {data.story_why.slice(0, 5).map((why, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#323739] mb-2">
                      {why.title}
                    </h3>
                    <p className="text-gray-600">{why.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Remaining items */}
            <div className="space-y-6">
              {data.story_why.slice(5).map((why, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#F26920] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#323739] mb-2">
                      {why.title}
                    </h3>
                    <p className="text-gray-600">{why.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F26920] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {data.story_cta_title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {data.story_cta_subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
            >
              {data.story_cta_btn1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white  hover:bg-white text-[#F26920]"
            >
              {data.story_cta_btn2}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
