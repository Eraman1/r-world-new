import { IndustryConfig } from "@/types/industries";

export const telecommunications: IndustryConfig = {
  slug: "telecommunications",

  banner: {
    title: "Transform Telecommunications Networks with",
    highlight: "AI-Powered Connectivity & Infrastructure Solutions",
    subtitle:
      "Empower telecom operators and network providers with intelligent automation, 5G optimization, and predictive maintenance. From customer experience to network reliability, we build solutions that connect the world efficiently.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Telecommunications Solutions",
  },

  techHero: {
    heading: "Hire Expert Developers for Telecom Technology Solutions",
    description:
      "We develop smart telecom software systems that enhance network performance, improve customer experience, and streamline operations — enabling future-ready communication ecosystems.",
    services: [
      {
        id: "player-analytics",
        title: "Network Monitoring & Optimization Systems",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "team-management",
        title: "Telecom Infrastructure Management Platforms",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "event-management",
        title: "Customer & Service Management Tools",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "training-ai",
        title: "AI-Powered Predictive Maintenance",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "fan-engagement",
        title: "End-to-End Network Automation",
        icon: "Tractor",
        position: "right",
      },
      {
        id: "ticketing",
        title: "Smart Billing & Subscription Systems",
        icon: "Tractor",
        position: "right",
      },
      {
        id: "broadcast-analytics",
        title: "Telecom Data & Performance Dashboards",
        icon: "Tractor",
        position: "right",
      },
      {
        id: "sponsorship",
        title: "Revenue & Cost Optimization Analytics",
        icon: "Tractor",
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "Next-Gen Telecommunications & Connectivity Solutions",
    mainDescription:
      "Leverage AI, IoT, and cloud technology to enhance connectivity, network efficiency, and customer satisfaction. Modernize your telecom infrastructure and digital operations for the 5G and IoT era.",
    items: [
      {
        id: "player-performance",
        icon: "Leaf",
        title: "Network Performance Monitoring",
        subtitle: "",
        description:
          "Gain real-time visibility into network health, detect outages instantly, and ensure uninterrupted connectivity.",
      },
      {
        id: "club-management",
        icon: "Leaf",
        title: "Customer Relationship & Service Portals",
        subtitle: "",
        description:
          "Manage customer accounts, plans, and complaints efficiently with centralized CRM and self-service platforms.",
      },
      {
        id: "smart-ticketing",
        icon: "Leaf",
        title: "Smart Billing & Payment Automation",
        subtitle: "",
        description:
          "Automate billing, payment processing, and subscription management with secure, scalable systems.",
      },
      {
        id: "fan-platforms",
        icon: "Leaf",
        title: "IoT & 5G Network Management",
        subtitle: "",
        description:
          "Deploy, monitor, and manage next-gen IoT and 5G infrastructure with intelligent control systems.",
      },
      {
        id: "sports-analytics",
        icon: "Leaf",
        title: "Telecom Analytics & Predictive Insights",
        subtitle: "",
        description:
          "Analyze call data, customer behavior, and network patterns to optimize performance and reduce churn.",
      },
      {
        id: "broadcast-tools",
        icon: "Leaf",
        title: "Cloud-Based Collaboration & Data Systems",
        subtitle: "",
        description:
          "Enable seamless data sharing and coordination between telecom teams, vendors, and customers through secure cloud solutions.",
      },
    ],
    linkText: "Explore Telecom Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Comprehensive Telecommunications Management Ecosystem",
    subtitle:
      "Digitize and optimize every aspect of telecommunications — from network operations and billing to customer experience and analytics.",
    subtitleLink: { text: "telecommunications management software", url: "#" },
    laptopImage: "/images/sports-laptop.jpg",
    mobileImage: "/images/sports-mobile.jpg",
    topFeatures: [
      {
        id: "match-analytics",
        icon: "map",
        title: "Real-Time Network Analytics",
        description:
          "Monitor bandwidth usage, detect anomalies, and optimize routing using live analytics and AI insights.",
      },
      {
        id: "training-management",
        icon: "map",
        title: "Service Provisioning & Resource Management",
        description:
          "Automate provisioning workflows, manage network assets, and ensure quality of service across regions.",
      },
      {
        id: "communication-platform",
        icon: "map",
        title: "Unified Communication Management",
        description:
          "Facilitate real-time communication and collaboration among teams, operators, and field technicians.",
      },
    ],
    bottomFeatures: [
      {
        id: "fan-insights",
        icon: "map",
        title: "Customer Experience & Engagement Insights",
        description:
          "Understand user behavior, reduce churn, and personalize service plans with AI-powered analytics.",
      },
      {
        id: "data-security",
        icon: "map",
        title: "Data Security & Compliance Systems",
        description:
          "Protect user data, ensure GDPR compliance, and maintain network integrity with advanced security protocols.",
      },
      {
        id: "mobile-experience",
        icon: "map",
        title: "Mobile Operations & Field Support",
        description:
          "Enable technicians and managers to monitor network health and resolve issues via mobile access tools.",
      },
      {
        id: "sponsorship-analytics",
        icon: "map",
        title: "Revenue & Performance Analytics",
        description:
          "Track revenue streams, usage metrics, and operational KPIs to optimize financial performance.",
      },
    ],
    ctaText: "BUILD YOUR TELECOM PLATFORM",
    onCtaClick: () => {},
  },
};
