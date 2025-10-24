import { SolutionConfig } from "@/types/solutions";

export const wearableTechnology: SolutionConfig = {
  slug: "wearable-technology",

  banner: {
    title: "Revolutionize Health & Lifestyle with",
    highlight: "Cutting-Edge Wearable Technology",
    subtitle:
      "Empower individuals and enterprises with smart wearable devices that track health, improve productivity, and enhance everyday life.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Wearable Solutions",
  },

  developerDetails: {
    heading: "Experts in Wearable Device Development",
    subheading:
      "Our team designs and develops innovative wearable technologies for health, fitness, enterprise, and entertainment applications.",
    mainTitle: "Custom Wearable Technology Solutions",
    mainDescription:
      "We build smart wearables that integrate sensors, mobile apps, and cloud analytics to provide real-time monitoring, insights, and personalized experiences for users.",
    image: "/images/wearable-laptop.png",
    services: [
      {
        id: 1,
        title: "Health & Fitness Trackers",
        description:
          "Develop smart wearables to track heart rate, steps, sleep, and fitness activities with mobile app integration.",
        icon: "/icons/heart.svg",
      },
      {
        id: 2,
        title: "Smart Watches & Wearable Apps",
        description:
          "Build custom smart watches and apps with notifications, GPS, and productivity tools for both individuals and enterprises.",
        icon: "/icons/watch.svg",
      },
      {
        id: 3,
        title: "IoT-Enabled Wearables",
        description:
          "Integrate sensors and IoT connectivity to monitor environmental conditions, body metrics, and location data in real-time.",
        icon: "/icons/iot.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Innovative Wearable Technology Solutions",
    mainDescription:
      "Our wearable solutions empower users with real-time data, predictive insights, and seamless integration with mobile and cloud platforms.",
    items: [
      {
        id: "health-monitoring",
        icon: "Leaf",
        title: "Health Monitoring Devices",
        subtitle: "Track & Analyze Vital Metrics",
        description:
          "Monitor vital signs, physical activity, and sleep patterns using wearable health devices integrated with analytics platforms.",
      },
      {
        id: "fitness-solutions",
        icon: "Leaf",
        title: "Fitness & Activity Trackers",
        subtitle: "Improve Wellness & Performance",
        description:
          "Wearable devices track steps, calories, workouts, and personalized fitness goals to enhance wellness programs.",
      },
      {
        id: "enterprise-wearables",
        icon: "Leaf",
        title: "Enterprise Wearables",
        subtitle: "Boost Productivity & Safety",
        description:
          "Smart wearables for workforce safety, task management, and productivity tracking in industrial, healthcare, and logistics environments.",
      },
      {
        id: "augmented-reality",
        icon: "Leaf",
        title: "AR & VR Wearables",
        subtitle: "Immersive Experiences",
        description:
          "Develop augmented and virtual reality wearable devices for training, gaming, and interactive experiences.",
      },
      {
        id: "wearable-apps",
        icon: "Leaf",
        title: "Custom Wearable Apps",
        subtitle: "Seamless Connectivity",
        description:
          "Design mobile apps that connect with wearable devices, providing real-time data visualization and actionable insights.",
      },
      {
        id: "sensor-integration",
        icon: "Leaf",
        title: "Sensor & IoT Integration",
        subtitle: "Real-Time Metrics & Alerts",
        description:
          "Integrate multiple sensors into wearables to collect environmental and health data, with real-time alerts and cloud analytics.",
      },
    ],
    linkText: "Explore Wearable Technology",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Wearable Data Management Platforms",
    subtitle:
      "Manage, analyze, and visualize data from wearable devices through secure dashboards and cloud platforms.",
    subtitleLink: { text: "wearable management platforms", url: "#" },
    laptopImage: "/images/wearable-management-laptop.jpg",
    mobileImage: "/images/wearable-management-mobile.jpg",
    topFeatures: [
      {
        id: "dashboard",
        icon: "map",
        title: "Centralized Dashboard",
        description:
          "Monitor wearable device data, user activity, and analytics in one centralized dashboard.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Advanced Analytics & Reporting",
        description:
          "Analyze health, activity, and environmental data with customizable reports and predictive insights.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Privacy",
        description:
          "Ensure user data protection with encrypted storage, access controls, and compliance with privacy regulations.",
      },
    ],
    bottomFeatures: [
      {
        id: "mobile-integration",
        icon: "map",
        title: "Mobile App Connectivity",
        description:
          "Sync wearable devices with mobile apps for seamless real-time data access and notifications.",
      },
      {
        id: "cloud-sync",
        icon: "map",
        title: "Cloud Integration",
        description:
          "Store and manage wearable data securely in the cloud for analytics, reporting, and remote access.",
      },
      {
        id: "alerts",
        icon: "map",
        title: "Real-Time Alerts",
        description:
          "Receive notifications for important health metrics, activity goals, or environmental triggers.",
      },
      {
        id: "workflow",
        icon: "map",
        title: "Automated Workflows",
        description:
          "Automate insights, reporting, and notifications using wearable data streams and integration rules.",
      },
    ],
    ctaText: "Get Wearable Technology Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What types of wearables can you develop?",
        answer:
          "We develop health trackers, fitness devices, smart watches, enterprise wearables, and AR/VR wearable solutions tailored to user needs.",
      },
      {
        id: "2",
        question: "Can wearable devices integrate with mobile apps?",
        answer:
          "Yes, we create mobile applications that connect with wearable devices for real-time monitoring, alerts, and analytics.",
      },
      {
        id: "3",
        question: "Do you provide IoT-enabled wearable solutions?",
        answer:
          "Absolutely. Our wearables integrate sensors and IoT for real-time data collection, environmental monitoring, and alerts.",
      },
      {
        id: "4",
        question: "Can wearables be used for enterprise productivity?",
        answer:
          "Yes, we build enterprise wearables to track employee safety, tasks, and productivity in industrial and healthcare environments.",
      },
      {
        id: "5",
        question: "Do you provide cloud data management for wearables?",
        answer:
          "Yes, all wearable data can be securely stored, managed, and analyzed through cloud dashboards and management platforms.",
      },
      {
        id: "6",
        question: "Can you create custom wearable apps and interfaces?",
        answer:
          "Yes, we design custom apps and interfaces that sync with wearable devices to provide actionable insights and visualizations.",
      },
    ],
  },
};
