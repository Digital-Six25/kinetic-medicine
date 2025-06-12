"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import our components
import { CountUp, FadeIn } from "@/components/animations";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { HeroSectionData } from "@/types/homepage";

interface HeroSectionProps {
  hero: HeroSectionData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ hero }) => {
  return (
    <section className="bg-gradient-to-br from-orange-primary/5 to-indigo-100 py-20 relative overflow-hidden">
      <BackgroundShapes />
      <FloatingElements count={8} />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" duration={0.8}>
            <div>
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                {hero.hero_pill || "Leading Exercise Physiology Clinic"}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {hero.hero_title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {hero.hero_subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-8 animate-pulse"
                >
                  <Link href="/services">
                    <Calendar className="mr-2 h-5 w-5" />
                    {hero.hero_cta_1}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-8"
                >
                  <Link href="/book-appointment">
                    {hero.hero_cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                {hero.hero_features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{feature.hero_feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" duration={0.8} delay={0.2}>
            <div className="relative">
              <Image
                src={
                  hero.hero_image_1 || "/placeholder.svg?height=600&width=500"
                }
                alt="Modern exercise physiology clinic"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Image
                      src={hero.hero_counter.icon}
                      width={24}
                      height={24}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      <CountUp
                        end={Number(hero.hero_counter.number) || 0}
                        className="text-2xl font-bold text-gray-900"
                      />
                      +
                    </div>
                    <div className="text-sm text-gray-600">
                      {hero.hero_counter.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
