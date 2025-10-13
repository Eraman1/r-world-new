import { IndustryConfig } from "@/types/industries";

export const corrections: IndustryConfig = {
  slug: "corrections",
  banner: {
    title: "Transform Correctional Facilities with",
    highlight: "Smart Prison Management Software Solutions",
    subtitle:
      "Enhance safety, transparency, and rehabilitation in correctional facilities with intelligent digital solutions. From inmate tracking to staff scheduling and security automation, streamline every aspect of prison management for better outcomes.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Corrections Solutions",
  },
  techHero: {
    heading: "Hire Expert Corrections Software Developers",
    description:
      "Our team builds secure, scalable, and compliant correctional software systems. From inmate data management to surveillance analytics, we help correctional institutions operate more efficiently and humanely through digital transformation.",
    services: [
      {
        id: "land",
        title: "Inmate Tracking Systems",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "livestock",
        title: "Staff Scheduling & Roster Tools",
        icon: "Beef",
        position: "left",
      },
      {
        id: "farm",
        title: "Visitation Management Platforms",
        icon: "Warehouse",
        position: "left",
      },
      {
        id: "precision",
        title: "Facility Automation & Monitoring",
        icon: "Wheat",
        position: "left",
      },
      {
        id: "aquaculture",
        title: "Secure Communication Systems",
        icon: "Fish",
        position: "right",
      },
      {
        id: "seed",
        title: "Rehabilitation & Learning Portals",
        icon: "ShoppingCart",
        position: "right",
      },
      {
        id: "drone",
        title: "Incident & Safety Reporting",
        icon: "PlaneTakeoff",
        position: "right",
      },
      {
        id: "food",
        title: "Real-Time Analytics Dashboards",
        icon: "FileCheck",
        position: "right",
      },
    ],
    // deviceImages: {
    //   laptop: "/images/devices/laptop-agri.png",
    //   tablet: "/images/devices/tablet-agri.png",
    //   mobile: "/images/devices/mobile-agri.png",
    // },
  },
  solutions: {
    mainTitle: "AI & IoT Solutions for Modern Corrections Management",
    mainDescription:
      "Empower correctional institutions with AI, IoT, and cloud-based systems that enhance facility operations, improve security, and promote rehabilitation. Gain better control and insights across all correctional processes through intelligent automation.",

    items: [
      {
        id: "crop-yield",
        icon: "Warehouse",
        title: "AI-Powered Inmate Analytics",
        subtitle: "",
        description:
          "Leverage AI-driven insights to assess behavior, risk levels, and rehabilitation progress for data-backed inmate management decisions.",
      },
      {
        id: "chemical-spraying",
        icon: "Sprout",
        title: "IoT-Enabled Surveillance Systems",
        subtitle: "",
        description:
          "Monitor cells, corridors, and perimeter zones with smart IoT cameras and sensors to ensure safety and detect anomalies instantly.",
      },
      {
        id: "seed-sowing",
        icon: "Leaf",
        title: "Automated Staff Operations",
        subtitle: "",
        description:
          "Simplify scheduling, duty rosters, and shift management with automated workflows that improve coordination and reduce administrative workload.",
      },
      {
        id: "autonomous-harvesting",
        icon: "Tractor",
        title: "Digital Visitation & Communication",
        subtitle: "",
        description:
          "Enable secure and monitored virtual visitation systems for inmates to connect with family while maintaining compliance and safety.",
      },
      {
        id: "crop-monitoring",
        icon: "Shield",
        title: "Incident Tracking & Alert System",
        subtitle: "",
        description:
          "Detect and respond to incidents faster with real-time alerts, automated reporting, and centralized incident logs.",
      },
      {
        id: "disease-diagnosis",
        icon: "Bug",
        title: "Rehabilitation Program Management",
        subtitle: "",
        description:
          "Digitize learning, counseling, and rehabilitation programs with analytics that measure engagement and progress effectively.",
      },
    ],
    linkText: "Get AI-Powered Corrections Solutions",
    linkUrl: "/contact-us",
  },
  managementSolutions: {
    title: "Corrections Management Solutions",
    subtitle:
      "Enhance the efficiency, safety, and accountability of your correctional facilities with intelligent management tools built for modern security needs.",
    subtitleLink: { text: "land management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "mapping",
        icon: "map",
        title: "Centralized Operations Control",
        description:
          "Manage inmate movement, staff deployment, and daily activities from a unified dashboard with real-time visibility.",
        link: { text: "GIS & GPS technologies", url: "#" },
      },
      {
        id: "3d-design",
        icon: "box",
        title: "Biometric Access Control",
        description:
          "Integrate secure biometric systems to prevent unauthorized access and enhance perimeter and cell block security.",
      },
      {
        id: "sensors",
        icon: "sliders",
        title: "Facility Resource Management",
        description:
          "Track and manage supplies, food, and medical inventory efficiently to maintain optimal resource balance.",
      },
    ],
    bottomFeatures: [
      {
        id: "autonomous",
        icon: "monitor",
        title: "Smart Security Automation",
        description:
          "Automate surveillance, alarms, and gate control systems with IoT integration for real-time situational awareness.",
      },
      {
        id: "irrigation",
        icon: "droplets",
        title: "Training & Rehabilitation Tools",
        description:
          "Offer digital education and skill development platforms for inmates, fostering reform and reintegration into society.",
        link: { text: "irrigation software", url: "#" },
      },
      {
        id: "agronomy",
        icon: "testTube",
        title: "Compliance & Reporting Tools",
        description:
          "Ensure transparency and meet legal standards with automated compliance documentation and reporting tools.",
      },
      {
        id: "operations",
        icon: "settings",
        title: "Cost Optimization & Budget Control",
        description:
          "Analyze operational costs and resource utilization with real-time insights for efficient financial management.",
      },
    ],
    ctaText: "GET CORRECTIONS SOFTWARE DEVELOPERS",
    onCtaClick: () => {},
  },
};
