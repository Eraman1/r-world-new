import { IndustryConfig } from "@/types/industries";

export const oilGas: IndustryConfig = {
  slug: "oil-gas",
  banner: {
    title: "Revolutionize Oil & Gas Operations with",
    highlight: "AI-Powered Energy Management Solutions",
    subtitle:
      "Enhance exploration, drilling, production, and logistics with intelligent automation, predictive analytics, and IoT-driven monitoring systems. Improve safety, efficiency, and sustainability across the oil and gas value chain.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Oil & Gas Solutions",
  },

  techHero: {
    heading: "Hire Expert Oil & Gas Software Developers",
    description:
      "We design and build intelligent software platforms for exploration, drilling, asset management, and logistics optimization. Empower your oil and gas enterprise with smart, data-driven solutions for operational excellence.",
    services: [
      {
        id: "exploration-data",
        title: "Exploration & Seismic Data Analysis",
        icon: "Tractor", //Database
        position: "left",
      },
      {
        id: "drilling-automation",
        title: "Automated Drilling & Rig Management",
        icon: "Tractor", //Cpu
        position: "left",
      },
      {
        id: "asset-tracking",
        title: "Asset Tracking & Equipment Monitoring",
        icon: "Tractor", //MapPin
        position: "left",
      },
      {
        id: "pipeline-monitoring",
        title: "Pipeline Monitoring & Leak Detection",
        icon: "Tractor", //Activity
        position: "left",
      },
      {
        id: "production-optimization",
        title: "Production Optimization Analytics",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "supply-chain",
        title: "Supply Chain & Logistics Management",
        icon: "Tractor", //Truck
        position: "right",
      },
      {
        id: "safety-compliance",
        title: "Safety & Regulatory Compliance Systems",
        icon: "Tractor", //ShieldCheck
        position: "right",
      },
      {
        id: "sustainability",
        title: "Sustainability & Carbon Tracking",
        icon: "Tractor", //Leaf
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI, IoT & Cloud Solutions for Oil & Gas Enterprises",
    mainDescription:
      "Transform upstream, midstream, and downstream operations with AI-driven platforms, IoT sensors, and cloud integration. Enable smarter exploration, predictive maintenance, and sustainable production management.",
    items: [
      {
        id: "exploration-ai",
        icon: "Shield", //Compass
        title: "AI-Powered Exploration Platforms",
        subtitle: "",
        description:
          "Analyze seismic and geological data using machine learning to improve drilling accuracy and reduce costs.",
      },
      {
        id: "rig-automation",
        icon: "Shield", //Cog
        title: "Rig & Drilling Automation Systems",
        subtitle: "",
        description:
          "Monitor rigs in real-time, predict maintenance needs, and enhance operational safety through automation.",
      },
      {
        id: "pipeline-safety",
        icon: "Shield",
        title: "Pipeline Safety & Leak Detection",
        subtitle: "",
        description:
          "Use IoT sensors and analytics to detect leaks, pressure drops, or anomalies in pipeline networks instantly.",
      },
      {
        id: "production-analytics",
        icon: "Shield", //barChart2
        title: "Production Analytics & Reporting",
        subtitle: "",
        description:
          "Gain real-time visibility into production metrics, efficiency levels, and downtime causes using dynamic dashboards.",
      },
      {
        id: "logistics-optimization",
        icon: "Shield", //Truck
        title: "Logistics & Fuel Supply Chain Optimization",
        subtitle: "",
        description:
          "Optimize fuel delivery routes, manage inventory, and track fleet performance using predictive analytics.",
      },
      {
        id: "emission-tracking",
        icon: "Shield", //Cloud
        title: "Emission & Sustainability Tracking",
        subtitle: "",
        description:
          "Monitor carbon footprint and emissions data to support ESG compliance and sustainable energy initiatives.",
      },
    ],
    linkText: "Explore Energy Tech Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "End-to-End Oil & Gas Management Systems",
    subtitle:
      "Empower exploration, drilling, and production with integrated platforms for real-time monitoring, analytics, and decision-making.",
    subtitleLink: { text: "oil and gas management software", url: "#" },
    laptopImage: "/images/oil-gas-laptop.jpg",
    mobileImage: "/images/oil-gas-mobile.jpg",
    topFeatures: [
      {
        id: "asset-automation",
        icon: "map", //Settings
        title: "Asset & Maintenance Automation",
        description:
          "Predict equipment failures and optimize maintenance schedules to reduce downtime and extend asset lifespan.",
      },
      {
        id: "performance-dashboard",
        icon: "map", //BarChart
        title: "Operational Performance Dashboards",
        description:
          "Access real-time insights into drilling performance, production metrics, and energy utilization.",
      },
      {
        id: "mobile-operations",
        icon: "map", //Smartphone
        title: "Mobile Field Operations",
        description:
          "Enable remote teams to manage field activities, inspections, and safety reports via mobile applications.",
      },
    ],
    bottomFeatures: [
      {
        id: "ai-prediction",
        icon: "map", //Cpu
        title: "AI-Based Predictive Analytics",
        description:
          "Leverage AI to forecast production, detect anomalies, and optimize operations based on real-time data.",
      },
      {
        id: "safety-security",
        icon: "map", //Shield
        title: "Safety, Compliance & Security",
        description:
          "Ensure workplace safety and regulatory compliance with automated incident tracking and reporting systems.",
      },
      {
        id: "energy-efficiency",
        icon: "map", //Battery
        title: "Energy Efficiency & Cost Control",
        description:
          "Monitor energy consumption patterns and implement optimizations to reduce operational costs.",
      },
      {
        id: "sustainability-insights",
        icon: "map", //Leaf
        title: "Sustainability & Environmental Insights",
        description:
          "Track emissions, waste management, and ESG performance to align with global sustainability goals.",
      },
    ],
    ctaText: "BUILD YOUR OIL & GAS SOLUTION",
    onCtaClick: () => {},
  },
};
