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
        "Automate preventive maintenance schedules and track asset performance through an intuitive CMMS dashboard. Streamline work orders and technician assignments to minimize downtime. Improve operational efficiency with real-time updates and data-driven maintenance insights.",
    },
    {
      id: "bms",
      icon: "Leaf",
      title: "Building Management System (BMS)",
      subtitle: "Smart Building Control",
      description:
        "Monitor and control HVAC, lighting, and security systems from one unified platform. Enhance occupant comfort while optimizing energy consumption and sustainability. Enable intelligent automation that adjusts building conditions based on usage patterns and environmental data.",
    },
    {
      id: "iot-integration",
      icon: "Leaf",
      title: "IoT-Enabled Monitoring",
      subtitle: "Real-Time Insights",
      description:
        "Deploy IoT sensors to capture real-time data on equipment health, space utilization, and energy metrics. Detect anomalies early and schedule proactive maintenance to avoid costly failures. Gain comprehensive visibility into your facilities’ operational performance.",
    },
    {
      id: "helpdesk",
      icon: "Leaf",
      title: "Helpdesk & Ticketing System",
      subtitle: "Streamlined Request Handling",
      description:
        "Simplify facility service management with a centralized helpdesk platform for issue tracking and resolution. Automatically route tickets to the right teams to reduce response time. Improve communication and accountability with transparent status monitoring.",
    },
    {
      id: "compliance",
      icon: "Leaf",
      title: "Regulatory Compliance & Safety Audits",
      subtitle: "Ensure Compliance with Standards",
      description:
        "Digitize inspection records and safety documentation to meet regulatory standards effortlessly. Schedule periodic audits and generate compliance reports automatically. Maintain a secure, traceable record system to ensure accountability and workplace safety.",
    },
    {
      id: "analytics",
      icon: "Leaf",
      title: "Data Analytics & Reporting",
      subtitle: "Smarter Decision-Making",
      description:
        "Leverage advanced analytics to uncover trends in energy consumption, maintenance performance, and cost efficiency. Create customizable dashboards for real-time operational insights. Drive strategic decisions with accurate and actionable facility data.",
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
      "Generate in-depth reports covering maintenance KPIs, asset utilization, and energy efficiency trends. Gain actionable insights for cost reduction and performance optimization. Empower management teams with real-time dashboards and visual analytics.",
  },
  {
    id: "integration",
    icon: "map",
    title: "ERP & IoT Integration",
    description:
      "Seamlessly integrate with ERP, HR, and IoT systems for unified data management. Enable real-time monitoring of assets and predictive maintenance alerts. Enhance operational visibility through synchronized workflows across departments.",
  },
  {
    id: "security",
    icon: "map",
    title: "Role-Based Access Control",
    description:
      "Secure your data with multi-level authentication and encryption protocols. Assign permissions based on user roles to maintain strict data governance. Prevent unauthorized access while maintaining operational flexibility and compliance.",
  },
  {
    id: "cloud",
    icon: "map",
    title: "Cloud & On-Premise Deployment",
    description:
      "Deploy your solution in the cloud for scalability or on-premise for complete control. Maintain compliance with industry regulations while ensuring system reliability. Choose the deployment model that best fits your IT strategy and business needs.",
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
