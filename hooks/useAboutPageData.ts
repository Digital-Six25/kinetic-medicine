import { AboutResponse } from "@/types/aboutpage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAboutPageData() {
  return useQuery<AboutResponse, Error>({
    queryKey: ["about-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not defined");
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      if (!acf || !acf.about) {
        throw new Error("Invalid ACF structure: 'about' key missing.");
      }

      return {
        about: {
          hero: {
            pill: acf.about.hero.pill,
            title: acf.about.hero.title,
            subtitle: acf.about.hero.subtitle,
            numbers: acf.about.hero.numbers,
            image: acf.about.hero.image,
          },
          mission: {
            pill: acf.about.mission.pill,
            title: acf.about.mission.title,
            subtitle: acf.about.mission.subtitle,
            cards: acf.about.mission.cards,
          },
          story: {
            pill: acf.about.story.pill,
            title: acf.about.story.title,
            text: acf.about.story.text,
            img: acf.about.story.img,
            card: {
              name: acf.about.story.card?.name,
              designation: acf.about.story.card?.designation,
              role: acf.about.story.card?.role,
            },
          },
          team: {
            pill: acf.about.team.pill,
            title: acf.about.team.title,
            subtitle: acf.about.team.subtitle,
            cards: acf.about.team.cards,
          },
          award: {
            pill: acf.about.award.pill,
            title: acf.about.award.title,
            subtitle: acf.about.award.subtitle,
            cards: acf.about.award.cards,
          },
          facility: {
            pill: acf.about.facility.pill,
            title: acf.about.facility.title,
            subtitle: acf.about.facility.subtitle,
            heading: acf.about.facility.heading,
            bullets: acf.about.facility.bullets,
            image: acf.about.facility.image,
            img_gallery: acf.about.facility.img_gallery,
            cards: acf.about.facility?.cards ?? [],
          },
          cards: acf.about.cards,
        },
      };
    },
  });
}
