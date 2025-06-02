// types/homepage.ts

export interface HeroSectionData {
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_image_1?: string;
  hero_image_2?: string;
  hero_image_3?: string;
}

export interface NumberedItem {
  number: string | number;
  text: string;
}

export type StatItem = {
  stats_icon: string;
  stats_number: string;
  stats_text: string;
};

export interface HowItWorksCard {
  how_it_works_icons: string;
  title: string;
  subtitle: string;
}

export interface HowItWorksData {
  title: string;
  subtitle: string;
  cards: HowItWorksCard[];
  cta: string;
}

// AREAS OF EXPERTISE SECTION TYPES

type AreaOfExpertiseBullet = {
  areas_of_expertise_large_card_icon: string;
  areas_of_expertise_large_card_text: string;
};

type SideCard = {
  side_card_icon: string;
  side_card_title: string;
  side_card_subtitle: string;
  side_card_cta: string;
};

type BottomCard = {
  bottom_card_icon: string;
  bottom_card_title: string;
  bottom_card_subtitle: string;
};

export type SuccessStoryCardType = {
  icon: string;
  review: string;
  name: string;
  designation: string;
};

export type AreaOfExpertiseData = {
  title: string;
  subtitle: string;
  large_card: {
    icon: string;
    title: string;
    subtitle: string;
    bullet: AreaOfExpertiseBullet[];
    cta: string;
  };
  side_cards: SideCard[];
  bottom_card: BottomCard[];
};

// HOMEPAGE DATA TYPES
export interface HomepageData {
  hero_section: {
    hero_title: string;
    hero_subtitle: string;
    hero_cta: string;
    hero_image_1: string;
    hero_image_2: string;
    hero_image_3: string;
  };
  stats_section: StatItem[];
  numbered_items: NumberedItem[];
  how_it_works: HowItWorksData;
  areas_of_expertise: {
    title: string;
    subtitle: string;
    large_card: {
      icon: string;
      title: string;
      subtitle: string;
      bullet: boolean;
      cta: string;
    };
    side_cards: boolean;
    bottom_card: boolean;
  };
  success_stories: {
    title: string;
    card: boolean;
  };
  contact: {
    title: string;
    subtitle: string;
    card: boolean;
  };
}
export interface ServiceTypeBullet {
  icon: string;
  type: string;
}

export interface ServiceType {
  service_type_icon: string;
  service_type_title: string;
  service_type_subtitle: string;
  service_type_bullet: ServiceTypeBullet[];
  service_type_cta: string;
}

export interface ServicesWorkCard {
  icons: string;
  title: string;
  subtitle: string;
}

export interface ServicesData {
  pill: string;
  title: string;
  subtitle: string;
  cta: string;
  types: ServiceType[];
  workTitle: string;
  workSubtitle: string;
  workCards: ServicesWorkCard[];
  contact_title: string;
  contact_subTitle: string;
  contact_book_button: string;
  contact_download_button: string;
}

export interface ServicePageData {
  services: ServicesData;
}
