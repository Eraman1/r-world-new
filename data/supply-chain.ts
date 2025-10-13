import { IndustryConfig } from "@/types/industries";

export const supplyChain: IndustryConfig = {
  slug: "supply-chain",

  banner: {
    title: "Revolutionize Supply Chain Operations with",
    highlight: "AI-Powered Logistics & Inventory Management Solutions",
    subtitle:
      "Empower manufacturers, distributors, and logistics providers with advanced automation, real-time visibility, and predictive analytics. From procurement to last-mile delivery, we build digital systems that streamline global supply chains.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Supply Chain Solutions",
  },

  techHero: {
    heading: "Hire Expert Developers for Supply Chain Technology Solutions",
    description:
      "We design intelligent software platforms that optimize logistics, monitor inventory, manage vendors, and enable data-driven decision-making across complex supply networks.",
    services: [
      {
        id: "player-analytics",
        title: "Real-Time Inventory Tracking Systems",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "team-management",
        title: "Warehouse & Fleet Management Platforms",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "event-management",
        title: "Procurement & Supplier Collaboration Tools",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "training-ai",
        title: "AI-Powered Demand Forecasting",
        icon: "Tractor",
        position: "left",
      },
      {
        id: "fan-engagement",
        title: "End-to-End Logistics Automation",
        icon: "Tractor",
        position: "right",
      },
      {
        id: "ticketing",
        title: "Smart Order & Shipment Tracking",
        icon: "Tractor",
        position: "right",
      },
      {
        id: "broadcast-analytics",
        title: "Supply Chain Visibility Dashboards",
        icon: "Tractor",
        position: "right",
      },
      {
        id: "sponsorship",
        title: "Cost Optimization & Financial Analytics",
        icon: "Tractor",
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "Next-Gen Supply Chain & Logistics Solutions",
    mainDescription:
      "Leverage IoT, AI, and cloud technology to enhance transparency, resilience, and efficiency across your global supply chain. Streamline procurement, production, warehousing, and transportation with digital transformation.",
    items: [
      {
        id: "player-performance",
        icon: "Leaf",
        title: "Real-Time Inventory Optimization",
        subtitle: "",
        description:
          "Track stock levels, automate reordering, and balance demand with predictive inventory intelligence.",
      },
      {
        id: "club-management",
        icon: "Leaf",
        title: "Supplier & Vendor Management Systems",
        subtitle: "",
        description:
          "Centralize supplier data, performance, and compliance with collaborative digital procurement tools.",
      },
      {
        id: "smart-ticketing",
        icon: "Leaf",
        title: "Smart Logistics & Delivery Tracking",
        subtitle: "",
        description:
          "Monitor shipments and delivery routes in real time to improve accuracy, visibility, and customer satisfaction.",
      },
      {
        id: "fan-platforms",
        icon: "Leaf",
        title: "Warehouse Automation Platforms",
        subtitle: "",
        description:
          "Use AI and robotics to automate sorting, picking, and packaging while reducing operational costs.",
      },
      {
        id: "sports-analytics",
        icon: "Leaf",
        title: "Supply Chain Analytics & Insights",
        subtitle: "",
        description:
          "Visualize KPIs, track logistics performance, and optimize routes using AI-powered dashboards.",
      },
      {
        id: "broadcast-tools",
        icon: "Leaf",
        title: "Cloud-Based Collaboration Tools",
        subtitle: "",
        description:
          "Enable seamless communication across suppliers, transporters, and distributors through secure cloud platforms.",
      },
    ],
    linkText: "Explore Supply Chain Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Comprehensive Supply Chain Management Ecosystem",
    subtitle:
      "Digitize and optimize every aspect of your supply chain — from procurement and inventory to logistics and customer delivery.",
    subtitleLink: { text: "supply chain management software", url: "#" },
    laptopImage: "/images/sports-laptop.jpg",
    mobileImage: "/images/sports-mobile.jpg",
    topFeatures: [
      {
        id: "match-analytics",
        icon: "map",
        title: "Real-Time Logistics & Shipment Analytics",
        description:
          "Monitor freight movement, delivery times, and route efficiency using live data analytics and GPS tracking.",
      },
      {
        id: "training-management",
        icon: "map",
        title: "Warehouse Operations Management",
        description:
          "Automate warehouse workflows, manage stock distribution, and minimize downtime with AI-assisted tools.",
      },
      {
        id: "communication-platform",
        icon: "map",
        title: "Supplier Communication & Coordination",
        description:
          "Enable seamless coordination among manufacturers, vendors, and distributors via centralized communication tools.",
      },
    ],
    bottomFeatures: [
      {
        id: "fan-insights",
        icon: "map",
        title: "Predictive Demand & Supply Analytics",
        description:
          "Use data modeling and AI to forecast demand patterns, production needs, and logistics requirements.",
      },
      {
        id: "data-security",
        icon: "map", // same
        title: "Data Security & Supply Chain Compliance",
        description:
          "Ensure secure data exchange, transaction integrity, and regulatory compliance across your supply network.",
      },
      {
        id: "mobile-experience",
        icon: "map",
        title: "Mobile Access & Real-Time Updates",
        description:
          "Access key supply chain data, shipment updates, and inventory insights directly from mobile devices.",
      },
      {
        id: "sponsorship-analytics",
        icon: "map",
        title: "Cost Analysis & Performance Tracking",
        description:
          "Gain actionable insights into procurement costs, transport efficiency, and supplier performance metrics.",
      },
    ],
    ctaText: "BUILD YOUR SUPPLY CHAIN PLATFORM",
    onCtaClick: () => {},
  },
};
