export interface ServicePageData {
  services: {
    pill: string;
    title: string;
    subtitle: string;
    cta: string;
    contact_title: string;
    contact_subTitle: string;
    contact_book_button: string;
    contact_download_button: string;
    work_title: string;
    work_subtitle: string;
    work_cards: {
      icon: string;
      title: string;
      subtitle: string;
    }[];
  };
  services_details: {
    hero: {
      pill: string;
      title: string;
      subtitle: string;
      image: string;
    };
    features: {
      feature: string;
    }[];
    faqs: {
      question: string;
      answers: string;
    }[];
    info_title: string;
    info_text: string;
    services: {
      title: string;
      types: {
        icon: string;
        title: string;
        subtitle: string;
      }[];
      img: string;
    };
    benefits: {
      title: string;
      cards: {
        title: string;
        subtitle: string;
      }[];
    };
    specialists: {
      title: string;
      specialist: {
        profile_picture: string;
        name: string;
        designation: string;
        description: string;
      }[];
    };
    cta: {
      title: string;
      subtitle: string;
      btn: string;
    };
    starting_from: string;
    duration: string;
  }[];
}
