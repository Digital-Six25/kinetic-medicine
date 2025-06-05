export interface NDISData {
  hero: NDISHero;
  services: NDISServices;
  programs: NDISPrograms;
  benefits: NDISBenefits;
}

export interface NDISHero {
  pill: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  card: NDISCard;
  img: string;
  marquee: { text: string }[];
}

export interface NDISCard {
  icon: string;
  title: string;
  subtitle: string;
}

export interface NDISServices {
  title: string;
  subtitle: string;
  cards: NDISServiceCard[];
}

export interface NDISServiceCard {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: Bullets[];
}

export interface Bullets {
  title: string;
  subtitle?: string;
}

export interface NDISPrograms {
  pill: string;
  title: string;
  subtitle: string;
  card: {
    title: string;
    subtitle: string;
  };
  img: string;
}

export interface NDISBenefits {
  title: string;
  subtitle: string;
  card: NDISCard[];
}
