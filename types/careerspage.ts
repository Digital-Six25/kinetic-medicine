// careers.types.ts

export type CareersResponse = {
  careers: {
    hero: HeroSection;
    why_join: WhyJoinSection;
    process: ApplicationProcessSection;
    vacancy: Vacancy[];
  };
};

export type HeroSection = {
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  img: string;
};

export type WhyJoinSection = {
  title: string;
  subtitle: string;
  cards: WhyJoinCard[];
};

export type WhyJoinCard = {
  icon: string; // base64 SVG or image URL
  title: string;
  subtitle: string;
};

export type ApplicationProcessSection = {
  img: string;
  title: string;
  cards: ProcessStep[];
  cta: ProcessCTA;
};

export type ProcessStep = {
  title: string;
  subtitle: string;
};

export type ProcessCTA = {
  title: string;
  subtitle: string;
  btn: string;
};

export type Vacancy = {
  title: string;
  type: string;
  location: string;
  salary: string;
  posted: string;
  closing: string;
  overview: string;
  responsibilities: Responsibility[];
  requirements: Requirement[];
  benefits: Benefit[];
};

export type Responsibility = {
  responsibility: string;
};

export type Requirement = {
  requirement: string;
};

export type Benefit = {
  benefit: string;
};
