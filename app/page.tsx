"use client";

import CallToAction from "@/components/homepage/CallToAction";
import DynamicStats from "@/components/homepage/DynamicStats";
import HeroSection from "@/components/homepage/HeroSection";
import HowItWorks from "@/components/homepage/HowItWorks";
import ImageGallery from "@/components/homepage/ImageGallery";
import Locations from "@/components/homepage/Locations";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import { useHomepageData } from "@/hooks/useHomepageData";
import { AreaOfExpertiseData, HeroSectionData } from "@/types/homepage";
import Loading from "./loading";

export default function HomePage() {
  const { data, error, isLoading } = useHomepageData();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const hero: HeroSectionData = data.hero_section;
  const stats = data.stats_section || [];
  const howItWorks = data.how_it_works || [];
  const areaOfExpertise: AreaOfExpertiseData = data.areas_of_expertise;
  const successStories = data.success_stories;
  const contact = data.contact;
  const { pill, title, subtitle, images } = data.img_gallery;
  // const locations = data.locations;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection hero={hero} />
      <DynamicStats stats={stats} />
      <Services services={areaOfExpertise} />
      <HowItWorks howItWorks={howItWorks} />
      <ImageGallery
        pill={pill}
        title={title}
        subtitle={subtitle}
        images={images}
      />
      <Locations />
      <Testimonials successStories={successStories} />
      <CallToAction contact={contact} />
    </div>
  );
}
