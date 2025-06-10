import { CareersResponse } from "@/types/careerspage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useCareersPageData() {
  return useQuery<CareersResponse, Error>({
    queryKey: ["careers-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      if (!acf || !acf.careers) {
        throw new Error("Invalid ACF structure: 'careers' key missing.");
      }

      return {
        careers: {
          hero: {
            title: acf.careers.hero.title,
            subtitle: acf.careers.hero.subtitle,
            cta1: acf.careers.hero.cta1,
            cta2: acf.careers.hero.cta2,
            img: acf.careers.hero.img,
          },
          why_join: {
            title: acf.careers.why_join.title,
            subtitle: acf.careers.why_join.subtitle,
            cards: acf.careers.why_join.cards,
          },
          process: {
            img: acf.careers.process.img,
            title: acf.careers.process.title,
            cards: acf.careers.process.cards,
            cta: {
              title: acf.careers.process.cta.title,
              subtitle: acf.careers.process.cta.subtitle,
              btn: acf.careers.process.cta.btn,
            },
          },
          vacancy: acf.careers.vacancy,
        },
      };
    },
  });
}
