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
        "Transform retail environments with dynamic displays that showcase real-time offers and personalized recommendations. Engage customers through interactive menus and motion-triggered ads. Increase conversions and enhance the overall in-store experience across multiple outlets.",
    },
    {
      id: "corporate-signage",
      icon: "Leaf",
      title: "Corporate & Internal Signage",
      subtitle: "Improve Communication",
      description:
        "Simplify internal communication by displaying real-time company updates, metrics, and employee announcements. Enhance productivity with digital dashboards in offices and campuses. Support a connected workplace through engaging and easily managed visual content.",
    },
    {
      id: "hospitality-signage",
      icon: "Leaf",
      title: "Hospitality & Event Signage",
      subtitle: "Immersive Guest Experiences",
      description:
        "Create memorable guest journeys with interactive wayfinding, digital menus, and event schedules. Display real-time information across hotels, resorts, and event venues. Strengthen brand presence with visually captivating and easily updated digital experiences.",
    },
    {
      id: "outdoor-signage",
      icon: "Leaf",
      title: "Outdoor LED & Digital Displays",
      subtitle: "High Visibility & Impact",
      description:
        "Deliver high-definition visuals on durable LED displays for outdoor marketing and events. Ensure maximum visibility under all weather conditions with adaptive brightness and rugged design. Capture attention with motion graphics, live feeds, and promotional content.",
    },
    {
      id: "analytics-dashboard",
      icon: "Leaf",
      title: "Analytics & Performance Tracking",
      subtitle: "Data-Driven Insights",
      description:
        "Measure audience engagement and screen performance in real time using advanced analytics dashboards. Identify content effectiveness and optimize campaigns for better ROI. Use visual data insights to make informed creative and business decisions.",
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
      "Enhance audience engagement with touch-enabled screens, QR code integration, and gesture-based navigation. Create immersive experiences that drive participation and attention. Transform static displays into dynamic, interactive communication platforms.",
  },
  {
    id: "analytics",
    icon: "map",
    title: "Analytics & Insights",
    description:
      "Track viewer behavior and measure campaign effectiveness through detailed analytics dashboards. Gain actionable insights into engagement patterns and screen performance. Use real-time data to refine strategies and optimize audience reach.",
  },
  {
    id: "security",
    icon: "map",
    title: "Secure & Reliable",
    description:
      "Protect your content with advanced encryption, secure networks, and controlled access management. Ensure consistent uptime and safe content delivery across all locations. Maintain reliability through continuous monitoring and automatic updates.",
  },
  {
    id: "api-integration",
    icon: "map",
    title: "API Integration",
    description:
      "Connect seamlessly with POS, ERP, scheduling, and content management systems. Automate updates across multiple screens without manual intervention. Enable smarter workflows and synchronized communication through robust API connections.",
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
