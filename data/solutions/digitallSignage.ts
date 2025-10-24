import { SolutionConfig } from "@/types/solutions";

export const digitalSignage: SolutionConfig = {
  slug: "digital-signage",

  banner: {
    title: "Engage Audiences with",
    highlight: "Dynamic Digital Signage Solutions",
    subtitle:
      "Transform your communication strategy with interactive displays, real-time content management, and visually captivating signage experiences.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Digital Signage Solutions",
  },

  developerDetails: {
    heading: "Experts in Interactive & Real-Time Signage",
    subheading:
      "Our team designs, develops, and implements digital signage solutions for retail, corporate, hospitality, and public spaces to drive engagement and brand awareness.",
    mainTitle: "Professional Digital Signage Services",
    mainDescription:
      "We provide end-to-end digital signage solutions including software, hardware, content creation, and cloud management. From interactive touchscreens to large video walls, our solutions deliver seamless communication experiences.",
    image: "/images/digital-signage-laptop.png",
    services: [
      {
        id: 1,
        title: "Interactive Display Design",
        description:
          "We design intuitive touch-based and interactive displays for customer engagement, information kiosks, and experiential marketing.",
        icon: "/icons/touch.svg",
      },
      {
        id: 2,
        title: "Content Management Systems",
        description:
          "Our digital signage CMS allows easy scheduling, remote updates, and multi-screen management for businesses of all sizes.",
        icon: "/icons/monitor.svg",
      },
      {
        id: 3,
        title: "Video Wall & LED Solutions",
        description:
          "We implement scalable video wall and LED solutions for large venues, retail stores, and corporate lobbies to create visually impactful displays.",
        icon: "/icons/video.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Innovative Digital Signage Solutions",
    mainDescription:
      "Our digital signage solutions provide real-time content updates, interactivity, analytics, and remote management, helping you communicate your brand effectively and capture audience attention.",
    items: [
      {
        id: "retail-signage",
        icon: "Leaf",
        title: "Retail Digital Signage",
        subtitle: "Drive Sales & Engagement",
        description:
          "Enhance customer experiences with interactive menus, promotions, and real-time updates across multiple retail locations.",
      },
      {
        id: "corporate-signage",
        icon: "Leaf",
        title: "Corporate & Internal Signage",
        subtitle: "Improve Communication",
        description:
          "Streamline internal communications, announcements, and wayfinding in corporate offices, campuses, and industrial environments.",
      },
      {
        id: "hospitality-signage",
        icon: "Leaf",
        title: "Hospitality & Event Signage",
        subtitle: "Immersive Guest Experiences",
        description:
          "Deliver interactive information, wayfinding, event schedules, and immersive visual experiences in hotels, resorts, and convention centers.",
      },
      {
        id: "outdoor-signage",
        icon: "Leaf",
        title: "Outdoor LED & Digital Displays",
        subtitle: "High Visibility & Impact",
        description:
          "Implement large-scale outdoor digital displays and LED screens for advertising, events, and public spaces with weather-proof hardware.",
      },
      {
        id: "analytics-dashboard",
        icon: "Leaf",
        title: "Analytics & Performance Tracking",
        subtitle: "Data-Driven Insights",
        description:
          "Monitor engagement metrics, audience interactions, and content performance to optimize campaigns and ROI.",
      },
    ],
    linkText: "Request Digital Signage Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Digital Signage Management Platforms",
    subtitle:
      "Our software platforms streamline content creation, scheduling, and deployment across multiple screens and locations.",
    subtitleLink: { text: "digital signage management", url: "#" },
    laptopImage: "/images/digital-signage-management.jpg",
    mobileImage: "/images/digital-signage-management-mobile.jpg",
    topFeatures: [
      {
        id: "remote-management",
        icon: "map",
        title: "Remote Display Management",
        description:
          "Update content, manage playlists, and control multiple screens remotely with ease and efficiency.",
      },
      {
        id: "content-scheduling",
        icon: "map",
        title: "Content Scheduling",
        description:
          "Automate display schedules for time-sensitive promotions, announcements, and dynamic campaigns.",
      },
      {
        id: "multi-location",
        icon: "map",
        title: "Multi-Site Deployment",
        description:
          "Control digital signage across multiple locations from a single centralized platform.",
      },
    ],
    bottomFeatures: [
      {
        id: "interactive-tools",
        icon: "map",
        title: "Interactive Tools",
        description:
          "Add touch interactivity, QR code integration, and gesture-based navigation to engage your audience.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Analytics & Insights",
        description:
          "Measure audience engagement and content effectiveness with integrated analytics dashboards.",
      },
      {
        id: "security",
        icon: "map",
        title: "Secure & Reliable",
        description:
          "Ensure content and network security with encrypted connections and access control.",
      },
      {
        id: "api-integration",
        icon: "map",
        title: "API Integration",
        description:
          "Integrate with external systems, POS, ERP, or scheduling tools for automated content updates.",
      },
    ],
    ctaText: "Talk to Digital Signage Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is digital signage?",
        answer:
          "Digital signage is an electronic display system used to broadcast content such as advertisements, information, or entertainment to a target audience in real-time.",
      },
      {
        id: "2",
        question: "Can I manage multiple screens remotely?",
        answer:
          "Yes. Our digital signage platforms allow centralized control for content scheduling, updates, and monitoring across multiple screens and locations.",
      },
      {
        id: "3",
        question: "Do you provide interactive touchscreen solutions?",
        answer:
          "Absolutely. We offer interactive touchscreens, gesture-based interactions, and QR code integrations to enhance audience engagement.",
      },
      {
        id: "4",
        question: "Can I integrate with my existing software?",
        answer:
          "Yes. Our platforms support API integration with ERP, POS, scheduling, and content management systems for automated updates.",
      },
      {
        id: "5",
        question: "Do you offer analytics on viewer engagement?",
        answer:
          "Yes. Our dashboards track content performance, audience interaction, and engagement metrics to help optimize your campaigns.",
      },
    ],
  },
};
