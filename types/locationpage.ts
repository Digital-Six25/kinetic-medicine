export type LocationsResponse = {
  locations: {
    hero: {
      pill: string;
      title: string;
      subtitle: string;
    };
    cards: LocationCard[];
    find_us: {
      title: string;
      text: string;
      location_url?: string;
      img: string | boolean;
      cards: FindUsCard[];
    };
  };
};

export type LocationCard = {
  img: string;
  name: string;
  text: string;
  address: string;
  phone: string;
  timing: string;
  location_url?: string;
  services: {
    service: string;
  }[];
  facilities: {
    facility: string;
  }[];
};

export type FindUsCard = {
  icon: string; // base64 SVG string
  title: string;
  subtitle: string;
};
