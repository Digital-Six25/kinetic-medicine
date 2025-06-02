import { ServicePageData } from "@/types/homepage";
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

      return {
        services: {
          pill: acf.services_pill,
          title: acf.services_title,
          subtitle: acf.services_subtitle,
          cta: acf.services_cta,
          types: acf.services_types.map((type: any) => ({
            service_type_icon: type.service_type_icon,
            service_type_title: type.service_type_title,
            service_type_subtitle: type.service_type_subtitle,
            service_type_bullet: type.service_type_bullet.map(
              (bullet: any) => ({
                icon: bullet.icon,
                type: bullet.type,
              })
            ),
            service_type_cta: type.service_type_cta,
          })),
          workTitle: acf.services_work_title,
          workSubtitle: acf.services_work_subtitle,
          workCards: acf.services_work_cards.map((card: any) => ({
            icons: card.icons,
            title: card.title,
            subtitle: card.subtitle,
          })),
          contact_title: acf.services_contact_title,
          contact_subTitle: acf.services_contact_subTitle,
          contact_book_button: acf.services_book_button,
          contact_download_button: acf.services_download_button,
        },
      };
    },
  });
}
