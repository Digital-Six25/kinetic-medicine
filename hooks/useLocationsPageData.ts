import { LocationsResponse } from "@/types/locationpage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useLocationsPageData() {
  return useQuery<LocationsResponse, Error>({
    queryKey: ["locations-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      if (!acf || !acf.locations) {
        throw new Error("Invalid ACF structure: 'locations' key missing.");
      }

      return {
        locations: {
          hero: {
            pill: acf.locations.hero.pill,
            title: acf.locations.hero.title,
            subtitle: acf.locations.hero.subtitle,
          },
          cards: acf.locations.cards.map((card: any) => ({
            img: card.img,
            name: card.name,
            text: card.text,
            address: card.address,
            phone: card.phone,
            timing: card.timing,
            services: card.services.map((s: any) => ({
              service: s.service,
            })),
            facilities: card.facilities.map((f: any) => ({
              facility: f.facility,
            })),
          })),
          find_us: {
            title: acf.locations.find_us.title,
            text: acf.locations.find_us.text,
            img: acf.locations.find_us.img,
            cards: acf.locations.find_us.cards.map((c: any) => ({
              icon: c.icon,
              title: c.title,
              subtitle: c.subtitle,
            })),
          },
        },
      };
    },
  });
}
