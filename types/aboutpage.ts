// about.types.ts

export interface AboutResponse {
  about: {
    hero: {
      pill: string;
      title: string;
      subtitle: string;
      numbers: AboutHeroNumber[];
      image: string;
    };
    mission: {
      pill: string;
      title: string;
      subtitle: string;
      cards: AboutCard[];
    };
    story: {
      pill: string;
      title: string;
      text: string; // HTML string
      img: string;
      card: {
        name: string;
        designation: string;
        role: string;
      };
    };
    team: {
      pill: string;
      title: string;
      subtitle: string;
      cards: AboutTeamCard[];
    };
    award: {
      pill: string;
      title: string;
      subtitle: string;
      cards: AboutAwardCard[];
    };
    facility: {
      pill: string;
      title: string;
      subtitle: string;
      heading: string;
      bullets: { text: string }[];
      image: string;
      img_gallery: { img: string }[];
      cards: AboutFacilityCards[];
    };
    cards: AboutCard[];
  };
}

export interface AboutHeroNumber {
  number: string;
  text: string;
}

export interface AboutCard {
  icon: string; // base64 SVG
  title: string;
  subtitle: string;
}
export interface AboutFacilityCards {
  icon: string; // base64 SVG
  title: string;
  subtitle: string;
}

export interface AboutTeamCard {
  img: string | false;
  name: string;
  role: string;
}

export interface AboutAwardCard {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}
