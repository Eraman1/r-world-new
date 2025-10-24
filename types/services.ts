export type ServiceConfig = {
  slug: string;
  banner: {
    title: string;
    highlight?: string;
    subtitle?: string;
    image?: string;
    linkText?: string;
  };
  developerDetails?: {
    heading: string;
    subheading: string;
    mainTitle: string;
    mainDescription: string;
    image: string;
    services: {
      id: number;
      title: string;
      description: string;
      icon: string; // store as string, we’ll map to Lucide icons
    }[];
  };
  solutions?: {
    mainTitle: string;
    mainDescription: string;
    items: {
      id: string;
      icon: string; // store icon name (e.g., "Warehouse")
      title: string;
      subtitle: string;
      description: string;
    }[];
    linkText?: string;
    linkUrl?: string;
  };
  managementSolutions?: {
    title?: string;
    subtitle?: string;
    subtitleLink?: { text: string; url: string };
    laptopImage?: string;
    mobileImage?: string;
    topFeatures?: {
      id: string;
      icon: string;
      title: string;
      description: string;
      link?: { text: string; url: string };
    }[];
    bottomFeatures?: {
      id: string;
      icon: string;
      title: string;
      description: string;
      link?: { text: string; url: string };
    }[];
    ctaText?: string;
    onCtaClick?: () => void;
  };
  managementSolutionsTwo?: {
    title?: string;
    subtitle?: string;
    subtitleLink?: { text: string; url: string };
    laptopImage?: string;
    mobileImage?: string;
    topFeatures?: {
      id: string;
      icon: string;
      title: string;
      description: string;
      link?: { text: string; url: string };
    }[];
    bottomFeatures?: {
      id: string;
      icon: React.ReactNode;
      title: string;
      description: string;
      link?: { text: string; url: string };
    }[];
    ctaText?: string;
    onCtaClick?: string;
  };
  faq?: {
    title: string;
    items: {
      id: string;
      question: string;
      answer: string;
    }[];
  };
};
