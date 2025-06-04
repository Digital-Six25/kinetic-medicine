import { ServicePageData } from "@/types/servicepage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useServicePageData() {
  return useQuery<ServicePageData, Error>({
    queryKey: ["service-page-data"],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (!API_URL) {
        throw new Error(
          "Environment variable NEXT_PUBLIC_API_URL is not defined"
        );
      }

      const { data } = await axios.get(API_URL);
      const acf = data.acf;

      if (!acf) {
        throw new Error("Invalid API response: missing ACF field");
      }

      return {
        services: {
          pill: acf.services_pill,
          title: acf.services_title,
          subtitle: acf.services_subtitle,
          cta: acf.services_cta,
          contact_title: acf.services_contact_title,
          contact_subTitle: acf.services_contact_subTitle,
          contact_book_button: acf.services_book_button,
          contact_download_button: acf.services_download_button,
          work_title: acf.services_work_title,
          work_subtitle: acf.services_work_subtitle,
          work_cards: (acf.services_work_cards || []).map((card: any) => ({
            icon: card.icons,
            title: card.title,
            subtitle: card.subtitle,
          })),
        },
        services_details: (acf.services_details || []).map((detail: any) => ({
          hero: {
            pill: detail.hero?.pill || "",
            title: detail.hero?.title || "",
            subtitle: detail.hero?.subtitle || "",
            image: detail.hero?.image || "",
          },
          features: (detail.features || []).map((f: any) => ({
            feature: f.feature,
          })),
          faqs: (detail.faqs || []).map((faq: any) => ({
            question: faq.question,
            answers: faq.answers,
          })),
          info_title: detail.info_title,
          info_text: detail.info_text,
          services: {
            title: detail.services?.title,
            types: (detail.services?.types || []).map((type: any) => ({
              icon: type.icon,
              title: type.title,
              subtitle: type.subtitle,
            })),
            img: detail.services?.img,
          },
          benefits: {
            title: detail.benefits?.title,
            cards: (detail.benefits?.cards || []).map((card: any) => ({
              title: card.title,
              subtitle: card.subtitle,
            })),
          },
          specialists: {
            title: detail.specialists?.title,
            specialist: (detail.specialists?.specialist || []).map(
              (s: any) => ({
                profile_picture: s.profile_picture || "",
                name: s.name,
                designation: s.designation,
                description: s.description,
              })
            ),
          },
          cta: {
            title: detail.cta?.title,
            subtitle: detail.cta?.subtitle,
            btn: detail.cta?.btn,
          },
          starting_from: detail.starting_from,
          duration: detail.duration,
        })),
      };
    },
  });
}
