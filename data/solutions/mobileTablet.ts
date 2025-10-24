import { SolutionConfig } from "@/types/solutions";

export const mobileTablet: SolutionConfig = {
  slug: "mobile-tablet",

  banner: {
    title: "Empower Your Business with",
    highlight: "Mobile & Tablet App Solutions",
    subtitle:
      "Create seamless, responsive, and engaging mobile and tablet experiences for your users with our end-to-end app development services.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Mobile Solutions",
  },

  developerDetails: {
    heading: "Expert Mobile & Tablet App Developers",
    subheading:
      "Our team delivers high-quality apps for iOS, Android, and tablets, ensuring smooth performance, intuitive UI/UX, and full-featured functionality.",
    mainTitle: "Professional Mobile & Tablet App Development",
    mainDescription:
      "We build native, cross-platform, and hybrid apps tailored to your business needs. Our apps focus on speed, usability, and a seamless experience across mobile and tablet devices.",
    image: "/images/mobile-tablet-laptop.png",
    services: [
      {
        id: 1,
        title: "Native App Development",
        description:
          "iOS and Android apps built for high performance, stability, and full access to device capabilities.",
        icon: "/icons/mobile.svg",
      },
      {
        id: 2,
        title: "Cross-Platform Development",
        description:
          "Efficient cross-platform apps using frameworks like Flutter, React Native, and Xamarin for multi-device support.",
        icon: "/icons/tablet.svg",
      },
      {
        id: 3,
        title: "App UI/UX Design",
        description:
          "User-friendly interfaces and engaging designs for mobile and tablet applications to enhance user retention.",
        icon: "/icons/design.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Comprehensive Mobile & Tablet Solutions",
    mainDescription:
      "We provide full-stack solutions for mobile and tablet devices, including app development, integration, maintenance, and support. Our focus is to deliver engaging experiences that drive results.",
    items: [
      {
        id: "mobile-commerce",
        icon: "Leaf",
        title: "Mobile Commerce Apps",
        subtitle: "Boost Sales on Mobile",
        description:
          "Develop feature-rich e-commerce apps with secure payment gateways, catalogs, and push notifications for better user engagement.",
      },
      {
        id: "tablet-productivity",
        icon: "Leaf",
        title: "Tablet Productivity Apps",
        subtitle: "Enhance Workplace Efficiency",
        description:
          "Create apps optimized for tablets to improve productivity, project management, and workflow efficiency for teams.",
      },
      {
        id: "mobile-gaming",
        icon: "Leaf",
        title: "Mobile Gaming Apps",
        subtitle: "Fun & Engaging Gameplay",
        description:
          "Design and develop immersive mobile games with smooth graphics, interactive UI, and monetization options.",
      },
      {
        id: "mobile-analytics",
        icon: "Leaf",
        title: "Mobile Analytics Solutions",
        subtitle: "Track Performance & Engagement",
        description:
          "Integrate analytics tools to monitor user behavior, app usage, and performance metrics for data-driven improvements.",
      },
      {
        id: "hybrid-apps",
        icon: "Leaf",
        title: "Hybrid App Development",
        subtitle: "Multi-Platform Support",
        description:
          "Build apps using hybrid frameworks to support both mobile and tablet devices with consistent functionality.",
      },
      {
        id: "app-maintenance",
        icon: "Leaf",
        title: "App Maintenance & Updates",
        subtitle: "Keep Apps Up-to-Date",
        description:
          "Ensure your apps stay current, secure, and compatible with new OS updates through regular maintenance and updates.",
      },
    ],
    linkText: "Get Mobile & Tablet Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Mobile & Tablet Management Platforms",
    subtitle:
      "Manage app deployments, updates, analytics, and performance efficiently across mobile and tablet devices.",
    subtitleLink: { text: "mobile management software", url: "#" },
    laptopImage: "/images/mobile-management-laptop.jpg",
    mobileImage: "/images/mobile-management-mobile.jpg",
    topFeatures: [
      {
        id: "app-dashboard",
        icon: "map",
        title: "Centralized App Dashboard",
        description:
          "Monitor app performance, user engagement, and analytics from a single, unified dashboard.",
      },
      {
        id: "update-management",
        icon: "map",
        title: "Automated Update Management",
        description:
          "Deploy updates and patches seamlessly across all mobile and tablet devices with minimal downtime.",
      },
      {
        id: "security-compliance",
        icon: "map",
        title: "Security & Compliance",
        description:
          "Protect sensitive data and ensure apps comply with privacy regulations and industry standards.",
      },
    ],
    bottomFeatures: [
      {
        id: "integration",
        icon: "map",
        title: "Third-Party Integrations",
        description:
          "Integrate your apps with popular APIs, cloud services, and backend systems for enhanced functionality.",
      },
      {
        id: "push-notifications",
        icon: "map",
        title: "Push Notifications & Alerts",
        description:
          "Engage users with timely notifications, reminders, and updates directly on mobile and tablet devices.",
      },
      {
        id: "analytics-reporting",
        icon: "map",
        title: "Analytics & Reporting",
        description:
          "Track user behavior, app performance, and key metrics to make informed business decisions.",
      },
      {
        id: "support",
        icon: "map",
        title: "24/7 App Support",
        description:
          "Ensure your apps are always operational with dedicated support and troubleshooting assistance.",
      },
    ],
    ctaText: "Get Mobile App Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "Do you develop apps for both mobile and tablet?",
        answer:
          "Yes, we create apps optimized for iOS and Android smartphones as well as tablets, ensuring a consistent experience across all devices.",
      },
      {
        id: "2",
        question: "Which frameworks do you use for app development?",
        answer:
          "We use native frameworks (Swift, Kotlin), cross-platform tools (React Native, Flutter), and hybrid frameworks to suit client requirements.",
      },
      {
        id: "3",
        question: "Can you integrate APIs and third-party services?",
        answer:
          "Absolutely. We integrate APIs, payment gateways, analytics tools, and other third-party services into your apps.",
      },
      {
        id: "4",
        question: "Do you provide app maintenance and updates?",
        answer:
          "Yes, we offer ongoing maintenance, updates, and optimization to ensure apps remain secure, compatible, and functional.",
      },
      {
        id: "5",
        question: "Can you design engaging UI/UX for apps?",
        answer:
          "Yes, our design team specializes in creating intuitive, visually appealing, and user-friendly interfaces for mobile and tablet apps.",
      },
      {
        id: "6",
        question: "Do you provide app analytics and monitoring?",
        answer:
          "Yes, we implement analytics solutions to monitor user behavior, app performance, and provide actionable insights.",
      },
    ],
  },
};
