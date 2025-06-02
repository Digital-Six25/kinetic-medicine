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
// ELIGIBILITY PAGE TYPES
export interface EligibilityCriteriaItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface EligibilityGoalItem {
  icon: string;
  title: string;
}

export interface EligibilityWorkItem {
  ttitle: string;
}

export interface EligibilityWork {
  icon: string;
  title: string;
  subtitle: string;
  eligibility_work: EligibilityWorkItem[];
}

export interface EligibilityStep {
  title: string;
  subtitle: string;
}
export interface EligibilitySupport {
  icon: string;
  title: string;
  subtitle: string;
  btn: string;
}
export interface EligibilityWhy {
  icon: string;
  title: string;
  subtitle: string;
}
export interface EligibilityInfo {
  icon: string;
  text: string;
}

export interface EligibilityData {
  eligibility_hero_pill: string;
  eligibility_hero_title: string;
  eligibility_hero_subtitle: string;
  eligibility_hero_btn1: string;
  eligibility_hero_btn2: string;
  eligibility_hero_img: string;

  eligibility_eligible_title: string;
  eligibility_eligible_subtitle: string;

  eligibility_criteria_title: string;
  eligibility_criteria: EligibilityCriteriaItem[];
  eligibility_criteria_btn: string;

  eeligibility_goal_title: string;
  eligibility_goals: EligibilityGoalItem[];

  eligibility_works_title: string;
  eligibility_works_subtitle: string;
  eligibility_works: EligibilityWork[];

  eligibility_started_title: string;
  eligibility_started_subtitle: string;
  eligibility_started: EligibilityStep[];

  eligibility_support_title: string;
  eligibility_support_subtitle: string;
  eligibility_support: EligibilitySupport[];

  eligibility_referrers_title: string;
  eligibility_referrers_subtitle: string;
  eligibility_why_refer: EligibilityWhy[];
  eligibility_why_refer_title: string;
  eligibility_refer_btn1: string;
  eligibility_refer_btn2: string;
  eligibility_referral_info_title: string;
  eligibility_referral_info: EligibilityInfo[];
  eligibility_quick_referral: string;

  eligibility_cta1_title: string;
  eligibility_cta1_subtitle: string;
  eligibility_cta1_btn1: string;
  eligibility_cta1_btn2: string;

  eligibility_cta2_title: string;
  eligibility_cta2_subtitle: string;
  eligibility_cta2_btn: string;
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
