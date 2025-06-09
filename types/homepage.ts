import { JSX } from "react";

// types/homepage.ts
export interface HeroFeatures {
  hero_feature: string;
}
export interface HeroSectionData {
  hero_pill: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_cta_1: string;
  hero_image_1?: string;
  hero_features: HeroFeatures[];
  hero_counter: {
    icon: string;
    number: string;
    text: string;
  };
}

export type StatItem = {
  stats_icon: string;
  stats_number: string;
  stats_text: string;
};

export interface HowItWorksBullet {
  icon: string;
  title: string;
  subtitle: string;
}

export interface HowItWorksData {
  pill: string;
  title: string;
  subtitle: string;
  bullets: HowItWorksBullet[];
  img: string;
  cta: string;
  rating_name: string;
  rating: number;
}

// AREAS OF EXPERTISE SECTION TYPES
type AreaOfExpertiseBullet = {
  icon: string;
  text: string;
};

export type SuccessStoryCardType = {
  icon: string;
  review: string;
  name: string;
  designation: string;
};

export type AreaOfExpertiseData = {
  pill: string;
  title: string;
  subtitle: string;
  card: {
    map(arg0: (item: any, i: number) => JSX.Element): import("react").ReactNode;
    icon: string;
    title: string;
    subtitle: string;
    bullet: AreaOfExpertiseBullet[];
    cta: string;
  };
};

// IMAGE GALLERY
export interface ImgGalleryImage {
  img: string;
}

export interface ImgGallery {
  pill: string;
  title: string;
  subtitle: string;
  images: ImgGalleryImage[];
}

// TESTIMONIALS DATA
export type TestimonialCard = {
  rating: string;
  text: string;
  profile_photo: string | false;
  patient_name: string;
  patient_type: string;
  patient_injury_type: string;
};

export type TestimonialsSection = {
  pill: string;
  title: string;
  subtitle: string;
  cards: TestimonialCard[];
};

// HOMEPAGE DATA TYPES
export interface HomepageData {
  hero_section: HeroSectionData;
  stats_section: StatItem[];
  how_it_works: HowItWorksData;
  areas_of_expertise: AreaOfExpertiseData;
  img_gallery: ImgGallery;
  success_stories: TestimonialsSection;

  contact: {
    title: string;
    subtitle: string;
    card: boolean;
  };
}
// STORY PAGE TYPES
export interface StoryNumber {
  number: string;
  title: string;
}

export interface StoryValueCard {
  icons: string;
  title: string;
  subtitle: string;
}

export interface StoryTeamCard {
  img: string;
  name: string;
  designation: string;
  desc: string;
  tags: { tag: string }[];
  rating: string;
}

export interface StoryQualification {
  icon: string;
  title: string;
  subtitle: string;
}

export interface StoryWhy {
  icon: string;
  title: string;
  subtitle: string;
}

export interface StorySectionData {
  story_hero_pill: string;
  story_hero_title: string;
  story_hero_subtitle: string;
  story_title: string;
  story_text: string;
  story_numbers: StoryNumber[];
  story_img: string;
  story_value_title: string;
  story_value_subtitle: string;
  story_value_cards: StoryValueCard[];
  story_team_title: string;
  story_team_subtitle: string;
  story_team_card: StoryTeamCard[];
  story_qualification_title: string;
  story_qualification_subtitle: string;
  story_qualifications: StoryQualification[];
  story_why_title_: string;
  story_why_subtitle: string;
  story_why: StoryWhy[];
  story_cta_title: string;
  story_cta_subtitle: string;
  story_cta_btn1: string;
  story_cta_btn2: string;
}
