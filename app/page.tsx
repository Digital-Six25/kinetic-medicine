"use client";

import CallToAction from "@/components/homepage/CallToAction";
import DynamicStats from "@/components/homepage/DynamicStats";
import HeroSection from "@/components/homepage/HeroSection";
import HowItWorks from "@/components/homepage/HowItWorks";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import { useHomepageData } from "@/hooks/useHomepageData";
import { HeroSectionData, NumberedItem } from "@/types/homepage";

export default function HomePage() {
  const { data, error, isLoading } = useHomepageData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const hero: HeroSectionData = data.hero_section;
  const numberedItems: NumberedItem[] = data.numbered_items || [];
  const stats = data.stats_section || [];
  const howItWorks = data.how_it_works || [];
  const areaOfExpertise = data.areas_of_expertise || [];
  const successStories = data.success_stories;
  const contact = data.contact;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection hero={hero} numberedItems={numberedItems} />
      <DynamicStats stats={stats} />
      <HowItWorks howItWorks={howItWorks} />
      <Services services={areaOfExpertise} />
      <Testimonials successStories={successStories} />
      <CallToAction contact={contact} />
    </div>
  );
}
