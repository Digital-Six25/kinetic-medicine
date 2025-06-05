import { NDISData } from "@/types/nidspage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useNdisPageData() {
  return useQuery<NDISData, Error>({
    queryKey: ["ndis-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      if (!acf || !acf.ndis) {
        throw new Error("Invalid ACF structure: 'ndis' key missing.");
      }

      return {
        hero: {
          pill: acf.ndis.hero.pill,
          title: acf.ndis.hero.title,
          subtitle: acf.ndis.hero.subtitle,
          cta1: acf.ndis.hero.cta1,
          cta2: acf.ndis.hero.cta2,
          img: acf.ndis.hero.img,
          card: acf.ndis.hero.card,
          marquee: acf.ndis.hero.marquee,
        },
        services: {
          title: acf.ndis.services.title,
          subtitle: acf.ndis.services.subtitle,
          cards: acf.ndis.services.cards,
        },
        benefits: {
          title: acf.ndis.benefits.title,
          subtitle: acf.ndis.benefits.subtitle,
          card: acf.ndis.benefits.card,
        },
        programs: {
          pill: acf.ndis.programs.pill,
          title: acf.ndis.programs.title,
          subtitle: acf.ndis.programs.subtitle,
          card: acf.ndis.programs.card,
          img: acf.ndis.programs.img,
        },
      };
    },
  });
}
