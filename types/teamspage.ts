export type TeamSection = {
  team: {
    hero: {
      pill: string;
      title: string;
      subtitle: string;
    };
    values: {
      title: string;
      subtitle: string;
      cards: {
        icon: string; // base64-encoded SVG
        title: string;
        subtitle: string;
      }[];
    };
    team: {
      pill: string;
      title: string;
      subtitle: string;
      tags: {
        tag: string;
      }[];
      cards: {
        img: string | false; // can be image URL or `false`
        name: string;
        role: string;
        designation: string;
        education: string;
        description: string;
        expertise_tags: {
          expertise_tag: string;
        }[];
      }[];
    };
    qualification: {
      pill: string;
      title: string;
      subtitle: string;
      bullets: {
        icon: string; // base64-encoded SVG
        title: string;
        subtitle: string;
      }[];
    };
    careers: {
      title: string;
      bullets: {
        icon: string;
        title: string;
        subtitle: string;
      }[];
      btn: string;
    };
  };
};
