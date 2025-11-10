import { IndustryConfig } from "@/types/industries";

export const energyUtilities: IndustryConfig = {
  slug: "energy-utilities",
  banner: {
    title: "Transform Energy Operations with",
    highlight: "Smart Energy & Utility Management Software",
    subtitle:
      "Drive efficiency, sustainability, and innovation with AI-powered solutions for the energy and utilities sector. From smart grids to renewable forecasting, empower your infrastructure with intelligent automation and analytics.",
    image: "https://stockit.rworldsoftware.in/images/industryEnergyBanner.webp",
    linkText: "Get Energy Solutions",
  },

  techHero: {
    heading: "Hire Expert Energy & Utility Software Developers",
    description:
      "We develop scalable, secure, and data-driven software solutions for the energy and utilities industry. Our technology empowers organizations to optimize resources, improve grid reliability, reduce waste, and transition to clean, smart energy systems.",
    services: [
      {
        id: "smartgrid",
        title: "Smart Grid Management Systems",
        icon: "Tractor", //zap
        position: "left",
      },
      {
        id: "energytrading",
        title: "Energy Trading & Risk Management Platforms",
        icon: "Tractor", //BarChart
        position: "left",
      },
      {
        id: "demandforecast",
        title: "AI-Based Demand Forecasting",
        icon: "Tractor", //Activity
        position: "left",
      },
      {
        id: "assetmonitoring",
        title: "Asset Monitoring & Maintenance Software",
        icon: "Tractor", //Cog
        position: "left",
      },
      {
        id: "renewable",
        title: "Renewable Energy Management Systems",
        icon: "Tractor", //Sun
        position: "right",
      },
      {
        id: "utilitybilling",
        title: "Utility Billing & Customer Portals",
        icon: "Tractor", //CreditCard
        position: "right",
      },
      {
        id: "iotintegration",
        title: "IoT-Enabled Energy Monitoring",
        icon: "Tractor", //Cpu
        position: "right",
      },
      {
        id: "analytics",
        title: "Energy Analytics & Optimization Dashboards",
        icon: "Tractor", //LineChart
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI & IoT Solutions for the Energy & Utilities Industry",
    mainDescription:
      "Leverage Artificial Intelligence, IoT, and advanced analytics to revolutionize energy management. Our solutions enable predictive maintenance, real-time monitoring, and data-driven optimization. Drive sustainability, reduce energy losses, and achieve operational excellence with smart, connected systems.",
    items: [
      {
        id: "grid-management",
        icon: "Leaf", //Network
        title: "Smart Grid Optimization",
        subtitle: "",
        description:
          "Integrate real-time monitoring and AI-based control to balance energy distribution, prevent outages, and maximize grid reliability.",
      },
      {
        id: "demand-response",
        icon: "Leaf", //TrendingUp
        title: "Demand Response Systems",
        subtitle: "",
        description:
          "Predict and manage consumer energy demand efficiently using machine learning models that reduce peak loads and stabilize networks.",
      },
      {
        id: "renewable-forecast",
        icon: "Leaf", //Sun
        title: "Renewable Energy Forecasting",
        subtitle: "",
        description:
          "Use AI-driven weather and production models to forecast solar, wind, and hydro generation accurately for optimized energy trading.",
      },
      {
        id: "smart-metering",
        icon: "Leaf", //Gauge
        title: "Smart Metering & Data Analytics",
        subtitle: "",
        description:
          "Enable intelligent consumption tracking with IoT-powered meters and analytics that improve billing transparency and customer satisfaction.",
      },
      {
        id: "maintenance",
        icon: "Leaf", //Wrench
        title: "Predictive Maintenance Systems",
        subtitle: "",
        description:
          "Reduce downtime and maintenance costs by predicting equipment failures using AI, sensors, and historical performance data.",
      },
      {
        id: "carbon-tracking",
        icon: "Leaf",
        title: "Carbon Footprint Monitoring",
        subtitle: "",
        description:
          "Empower sustainability initiatives with real-time carbon tracking tools that measure, report, and reduce environmental impact.",
      },
    ],
    linkText: "Get AI-Powered Energy Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Energy & Utility Management Software Solutions",
    subtitle:
      "Our expert developers deliver innovative energy software that enhances operational efficiency, improves reliability, and supports clean energy transitions across industries.",
    subtitleLink: { text: "energy management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "energy-distribution",
        icon: "map", //Battery
        title: "Energy Distribution Management",
        description:
          "Monitor and control power distribution networks with precision using AI and SCADA-integrated systems for real-time optimization.",
        link: { text: "grid monitoring systems", url: "#" },
      },
      {
        id: "billing",
        icon: "map", //FileText
        title: "Automated Billing & Tariff Systems",
        description:
          "Simplify billing operations with automated tariff calculations, payment integration, and transparent energy usage reports.",
      },
      {
        id: "integration",
        icon: "map", //Plug
        title: "System Integration & API Connectivity",
        description:
          "Connect your ERP, CRM, and IoT devices seamlessly with API-based architecture that ensures efficient energy ecosystem integration.",
      },
    ],
    bottomFeatures: [
      {
        id: "smartcities",
        icon: "map", //Globe
        title: "Smart City Energy Platforms",
        description:
          "Build connected city ecosystems with IoT, renewable integration, and intelligent analytics to optimize energy use across urban infrastructure.",
      },
      {
        id: "renewable-mix",
        icon: "map", //Wind
        title: "Hybrid Energy Mix Optimization",
        description:
          "Balance renewable and non-renewable sources using AI-driven optimization that enhances energy reliability and sustainability.",
      },
      {
        id: "safety",
        icon: "map", //ShieldCheck
        title: "Safety & Compliance Management",
        description:
          "Ensure workplace safety and regulatory compliance with digital monitoring and automated reporting for energy operations.",
      },
      {
        id: "reporting",
        icon: "map", //PieChart
        title: "Real-Time Performance Reporting",
        description:
          "Visualize KPIs and operational data through dynamic dashboards that support informed, real-time decision-making.",
      },
    ],
    ctaText: "BUILD YOUR ENERGY SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
  faq: {
    title: "Energy & Utilities FAQ",
    items: [
      {
        id: "1",
        question: "What are Energy & Utility Management Solutions?",
        answer:
          "Energy and utility management solutions help organizations monitor, optimize, and control energy consumption. These systems integrate IoT, analytics, and automation to improve efficiency, reduce costs, and promote sustainability.",
      },
      {
        id: "2",
        question: "How can smart grids improve energy distribution?",
        answer:
          "Smart grids use real-time data and automation to balance energy demand and supply efficiently. They enable predictive maintenance, reduce outages, and support renewable energy integration across distribution networks.",
      },
      {
        id: "3",
        question: "What technologies are transforming the energy sector?",
        answer:
          "Technologies like IoT sensors, artificial intelligence, blockchain, and cloud analytics are driving innovation in the energy sector. They enhance demand forecasting, asset performance monitoring, and transparent energy trading.",
      },
      {
        id: "4",
        question:
          "How do energy analytics platforms benefit utility providers?",
        answer:
          "Energy analytics platforms collect and analyze operational data to detect inefficiencies, forecast demand, and optimize generation schedules. This leads to better resource utilization, cost savings, and improved grid reliability.",
      },
      {
        id: "5",
        question: "Can digital solutions support renewable energy integration?",
        answer:
          "Yes. Digital platforms help integrate solar, wind, and other renewable sources into the grid by managing fluctuations in generation, ensuring grid stability, and enabling data-driven energy forecasting.",
      },
      {
        id: "6",
        question:
          "How do Energy Management Systems (EMS) support sustainability?",
        answer:
          "EMS platforms monitor energy consumption patterns, track carbon emissions, and identify areas for reduction. They empower organizations to achieve sustainability goals and comply with environmental regulations.",
      },
      {
        id: "7",
        question: "What role does AI play in utility operations?",
        answer:
          "AI optimizes demand response, predicts equipment failures, and enhances load balancing. It also improves maintenance planning and ensures consistent service delivery with minimal energy wastage.",
      },
      {
        id: "8",
        question:
          "Are these systems suitable for both commercial and residential sectors?",
        answer:
          "Yes. Energy management and utility solutions can be tailored for industries, commercial buildings, and residential areas—offering insights into usage, savings opportunities, and sustainability performance.",
      },
      {
        id: "9",
        question: "How do IoT-enabled utilities improve customer experience?",
        answer:
          "IoT devices provide real-time energy data, enabling consumers to monitor and control their usage. This transparency leads to smarter energy habits, reduced bills, and improved satisfaction.",
      },
      {
        id: "10",
        question:
          "What is the future of digital transformation in energy and utilities?",
        answer:
          "The future of energy lies in smart, connected infrastructure powered by AI, blockchain, and renewables. Utilities are shifting toward decentralized grids, predictive analytics, and carbon-neutral operations for a sustainable tomorrow.",
      },
    ],
  },
};
