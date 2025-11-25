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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
      "We provide full-stack solutions for mobile and tablet devices, including app development, integration, maintenance, and support. Our focus is to deliver engaging experiences that drive results and maximize user satisfaction.",
    items: [
      {
        id: "mobile-commerce",
        icon: "Leaf",
        title: "Mobile Commerce Apps",
        subtitle: "Boost Sales on Mobile",
        description:
          "Develop feature-rich e-commerce apps with secure payment gateways and interactive product catalogs. Implement push notifications and personalized offers to increase user engagement. Drive conversions and improve overall shopping experience on mobile devices.",
      },
      {
        id: "tablet-productivity",
        icon: "Leaf",
        title: "Tablet Productivity Apps",
        subtitle: "Enhance Workplace Efficiency",
        description:
          "Create apps optimized for tablet devices to improve project management and team collaboration. Streamline workflows with task tracking, scheduling, and document management. Empower employees with intuitive interfaces and productivity-enhancing features.",
      },
      {
        id: "mobile-gaming",
        icon: "Leaf",
        title: "Mobile Gaming Apps",
        subtitle: "Fun & Engaging Gameplay",
        description:
          "Design and develop immersive mobile games with high-quality graphics and smooth performance. Incorporate interactive UI, animations, and sound effects for an engaging experience. Include monetization strategies like in-app purchases and ads for revenue generation.",
      },
      {
        id: "mobile-analytics",
        icon: "Leaf",
        title: "Mobile Analytics Solutions",
        subtitle: "Track Performance & Engagement",
        description:
          "Integrate analytics tools to monitor user behavior, app usage, and engagement metrics in real-time. Generate actionable insights to enhance app features and performance. Make data-driven decisions to improve retention and overall user satisfaction.",
      },
      {
        id: "hybrid-apps",
        icon: "Leaf",
        title: "Hybrid App Development",
        subtitle: "Multi-Platform Support",
        description:
          "Build apps using hybrid frameworks to support both mobile and tablet devices seamlessly. Ensure consistent functionality and user experience across platforms. Reduce development time and costs with a single codebase for multiple devices.",
      },
      {
        id: "app-maintenance",
        icon: "Leaf",
        title: "App Maintenance & Updates",
        subtitle: "Keep Apps Up-to-Date",
        description:
          "Provide regular updates to ensure apps remain compatible with new OS versions and devices. Implement security patches and performance improvements to maintain reliability. Continuously enhance features to meet evolving user expectations.",
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
    laptopImage:
      "https://i.pinimg.com/736x/14/4d/75/144d756d814f189bb5147c37b1d80e4c.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/ad/5d/86/ad5d864d49cf8926140e37e09ce26b9c.jpg",
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
          "Seamlessly connect your mobile apps with popular APIs, cloud services, and backend systems. Automate data exchange and enhance functionality across platforms. Ensure smooth interoperability for a consistent user experience.",
      },
      {
        id: "push-notifications",
        icon: "map",
        title: "Push Notifications & Alerts",
        description:
          "Keep users engaged with timely notifications, reminders, and updates directly on mobile and tablet devices. Personalize messages based on user behavior and preferences. Drive higher retention and app usage with proactive communication.",
      },
      {
        id: "analytics-reporting",
        icon: "map",
        title: "Analytics & Reporting",
        description:
          "Monitor user behavior, app performance, and key metrics to make data-driven decisions. Gain actionable insights to optimize features and UX. Generate detailed reports to track growth, engagement, and ROI effectively.",
      },
      {
        id: "support",
        icon: "map",
        title: "24/7 App Support",
        description:
          "Provide round-the-clock assistance to ensure your apps remain fully operational. Resolve issues quickly with dedicated troubleshooting and maintenance. Maintain user satisfaction and minimize downtime for uninterrupted service.",
      },
    ],
    ctaText: "Get Mobile App Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
