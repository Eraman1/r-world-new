import { SolutionConfig } from "@/types/solutions";

export const facilitiesManagement: SolutionConfig = {
  slug: "facilities-management",

  banner: {
    title: "Optimize Operations with",
    highlight: "Smart Facilities Management Solutions",
    subtitle:
      "Streamline maintenance, energy usage, asset tracking, and workspace management through our intelligent facilities management software systems.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Facilities Solutions",
  },

  developerDetails: {
    heading: "Facilities Management Software Experts",
    subheading:
      "We design and implement data-driven facility management systems that enhance operational efficiency, safety, and sustainability for enterprises of all sizes.",
    mainTitle: "End-to-End Facilities Management System Development",
    mainDescription:
      "Our custom FM software integrates maintenance scheduling, asset management, and IoT monitoring to optimize space usage, reduce downtime, and control operational costs across buildings and infrastructure.",
    image: "/images/facility-management-laptop.png",
    services: [
      {
        id: 1,
        title: "Asset Tracking & Maintenance",
        description:
          "Automate maintenance schedules, track equipment performance, and manage work orders efficiently using real-time monitoring systems.",
        icon: "/icons/tools.svg",
      },
      {
        id: 2,
        title: "Energy & Sustainability Management",
        description:
          "Monitor energy consumption and implement smart automation to reduce costs and environmental impact using IoT-powered systems.",
        icon: "/icons/leaf.svg",
      },
      {
        id: 3,
        title: "Space Optimization & Utilization",
        description:
          "Use digital floor plans and analytics to optimize workspace layouts, reduce underused areas, and improve overall productivity.",
        icon: "/icons/layout.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Comprehensive Facilities Management Solutions",
    mainDescription:
      "Our integrated facilities management platforms combine maintenance automation, analytics, and IoT data to simplify complex building operations.",
    items: [
      {
        id: "cmms",
        icon: "Leaf",
        title: "Computerized Maintenance Management System (CMMS)",
        subtitle: "Automate Facility Maintenance",
        description:
          "Schedule preventive maintenance, assign work orders, and track technician performance with a centralized CMMS dashboard.",
      },
      {
        id: "bms",
        icon: "Leaf",
        title: "Building Management System (BMS)",
        subtitle: "Smart Building Control",
        description:
          "Control HVAC, lighting, and security systems from a single platform to optimize comfort, safety, and energy efficiency.",
      },
      {
        id: "iot-integration",
        icon: "Leaf",
        title: "IoT-Enabled Monitoring",
        subtitle: "Real-Time Insights",
        description:
          "Integrate IoT sensors for monitoring equipment health, space usage, and energy consumption across multiple facilities.",
      },
      {
        id: "helpdesk",
        icon: "Leaf",
        title: "Helpdesk & Ticketing System",
        subtitle: "Streamlined Request Handling",
        description:
          "Empower facility staff with a responsive helpdesk solution for handling service requests and incident tracking efficiently.",
      },
      {
        id: "compliance",
        icon: "Leaf",
        title: "Regulatory Compliance & Safety Audits",
        subtitle: "Ensure Compliance with Standards",
        description:
          "Manage inspection records, certifications, and safety audits to stay compliant with local and international regulations.",
      },
      {
        id: "analytics",
        icon: "Leaf",
        title: "Data Analytics & Reporting",
        subtitle: "Smarter Decision-Making",
        description:
          "Gain insights into energy trends, maintenance efficiency, and cost performance with real-time analytics dashboards.",
      },
    ],
    linkText: "Get Facilities Management Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Facility Operations & Asset Management Systems",
    subtitle:
      "We provide scalable software platforms to manage building assets, maintenance teams, and sustainability goals in real-time.",
    subtitleLink: { text: "facilities operations", url: "#" },
    laptopImage: "/images/facility-operations-laptop.jpg",
    mobileImage: "/images/facility-operations-mobile.jpg",
    topFeatures: [
      {
        id: "maintenance",
        icon: "map",
        title: "Predictive Maintenance",
        description:
          "Use AI-driven analytics to predict asset failures and reduce downtime with proactive maintenance scheduling.",
      },
      {
        id: "inventory",
        icon: "map",
        title: "Inventory & Spare Parts Management",
        description:
          "Track spare parts, consumables, and inventory levels with automated reorder alerts and vendor integration.",
      },
      {
        id: "mobile-access",
        icon: "map",
        title: "Mobile Workforce Access",
        description:
          "Enable technicians to receive work orders, update task status, and capture site photos from mobile devices.",
      },
    ],
    bottomFeatures: [
      {
        id: "reporting",
        icon: "map",
        title: "Advanced Reporting",
        description:
          "Generate detailed reports on maintenance KPIs, cost allocation, and energy performance.",
      },
      {
        id: "integration",
        icon: "map",
        title: "ERP & IoT Integration",
        description:
          "Seamlessly integrate with ERP, HR, and IoT platforms for data synchronization and unified management.",
      },
      {
        id: "security",
        icon: "map",
        title: "Role-Based Access Control",
        description:
          "Protect sensitive data with secure authentication, access levels, and encrypted communication.",
      },
      {
        id: "cloud",
        icon: "map",
        title: "Cloud & On-Premise Deployment",
        description:
          "Choose between cloud-hosted or on-premise deployment to fit your organization’s infrastructure and compliance needs.",
      },
    ],
    ctaText: "Talk to Our Facilities Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is a Facilities Management System?",
        answer:
          "A Facilities Management System (FMS) is software that helps organizations manage their buildings, assets, and maintenance operations efficiently through automation and analytics.",
      },
      {
        id: "2",
        question: "Can your system integrate with IoT devices?",
        answer:
          "Yes, our facilities management platform integrates with IoT sensors for real-time data collection on temperature, air quality, occupancy, and energy usage.",
      },
      {
        id: "3",
        question: "Do you provide mobile access for maintenance teams?",
        answer:
          "Absolutely. Our mobile app enables technicians to manage tasks, access work orders, and submit reports on-site.",
      },
      {
        id: "4",
        question: "Is your solution customizable for different industries?",
        answer:
          "Yes, we build industry-specific FMS solutions for healthcare, manufacturing, real estate, education, and hospitality sectors.",
      },
      {
        id: "5",
        question: "Can your platform handle multi-site management?",
        answer:
          "Yes. Our system supports centralized management of multiple facilities with unified dashboards and performance analytics.",
      },
      {
        id: "6",
        question: "Is the system available on the cloud?",
        answer:
          "Yes, we offer both cloud-based and on-premise deployment options, depending on your organization’s data and IT policies.",
      },
    ],
  },
};
