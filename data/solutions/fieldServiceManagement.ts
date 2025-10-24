import { SolutionConfig } from "@/types/solutions";

export const fieldServiceManagement: SolutionConfig = {
  slug: "field-service-management",

  banner: {
    title: "Optimize Operations with",
    highlight: "Field Service Management Solutions",
    subtitle:
      "Empower your on-site teams with intelligent scheduling, mobile tools, and real-time visibility to deliver exceptional customer service.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get FSM Solutions",
  },

  developerDetails: {
    heading: "Experts in Field Operations & Workflow Automation",
    subheading:
      "We design AI-driven Field Service Management platforms that streamline dispatching, maintenance, and workforce efficiency across industries.",
    mainTitle: "Intelligent Field Service Management Software Development",
    mainDescription:
      "Our team develops scalable FSM solutions tailored to service-based businesses. From predictive maintenance to mobile technician tools, we help companies deliver faster and smarter service operations.",
    image: "/images/field-service-laptop.png",
    services: [
      {
        id: 1,
        title: "Work Order Management",
        description:
          "Automate work order creation, assignment, and tracking to reduce manual errors and improve turnaround times.",
        icon: "/icons/tasks.svg",
      },
      {
        id: 2,
        title: "Smart Scheduling & Dispatching",
        description:
          "Use AI-powered algorithms to assign the right technician to the right job, optimizing travel routes and reducing downtime.",
        icon: "/icons/calendar.svg",
      },
      {
        id: 3,
        title: "Mobile Workforce Solutions",
        description:
          "Equip technicians with mobile apps to access job details, capture signatures, upload images, and update job status in real-time.",
        icon: "/icons/smartphone.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Comprehensive FSM Software Solutions",
    mainDescription:
      "We deliver end-to-end digital field management tools to improve service delivery, enhance asset performance, and empower field technicians.",
    items: [
      {
        id: "asset-tracking",
        icon: "Leaf",
        title: "Asset Tracking & Monitoring",
        subtitle: "Real-Time Equipment Insights",
        description:
          "Track asset performance using IoT-enabled sensors and dashboards that predict maintenance needs and minimize downtime.",
      },
      {
        id: "service-automation",
        icon: "Leaf",
        title: "Service Automation",
        subtitle: "Reduce Manual Workload",
        description:
          "Automate repetitive service tasks, job updates, and maintenance scheduling for maximum operational efficiency.",
      },
      {
        id: "mobile-access",
        icon: "Leaf",
        title: "Mobile Technician Access",
        subtitle: "On-the-Go Work Management",
        description:
          "Enable technicians to view assignments, update progress, and collect digital proof of work through mobile devices.",
      },
      {
        id: "analytics",
        icon: "Leaf",
        title: "Performance Analytics",
        subtitle: "Data-Driven Decision Making",
        description:
          "Gain actionable insights from service data to measure KPIs, identify inefficiencies, and improve overall service quality.",
      },
      {
        id: "customer-portal",
        icon: "Leaf",
        title: "Customer Self-Service Portal",
        subtitle: "Transparency & Convenience",
        description:
          "Provide customers with portals to book services, track requests, and communicate directly with technicians in real-time.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "ERP & CRM Integration",
        subtitle: "Unified Business Operations",
        description:
          "Seamlessly integrate FSM platforms with CRM, ERP, and billing systems for synchronized workflows and data accuracy.",
      },
    ],
    linkText: "Get Field Service Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Advanced FSM Management Systems",
    subtitle:
      "Our management systems provide complete visibility into field operations, technician performance, and service requests in one unified platform.",
    subtitleLink: { text: "FSM Management Software", url: "#" },
    laptopImage: "/images/fsm-management-laptop.jpg",
    mobileImage: "/images/fsm-management-mobile.jpg",
    topFeatures: [
      {
        id: "scheduling",
        icon: "map",
        title: "Intelligent Job Scheduling",
        description:
          "Optimize field operations with automated scheduling that factors in technician skill, location, and availability.",
      },
      {
        id: "inventory",
        icon: "map",
        title: "Inventory & Spare Parts Management",
        description:
          "Track parts usage and availability to ensure timely replacements and prevent service delays.",
      },
      {
        id: "notifications",
        icon: "map",
        title: "Alerts & Notifications",
        description:
          "Get instant updates for new requests, task completion, or delays across your field network.",
      },
    ],
    bottomFeatures: [
      {
        id: "gps",
        icon: "map",
        title: "GPS Tracking & Route Optimization",
        description:
          "Monitor technician locations and use smart routing to reduce travel costs and enhance punctuality.",
      },
      {
        id: "contract",
        icon: "map",
        title: "Contract & SLA Management",
        description:
          "Define and monitor service level agreements to maintain high-quality standards and compliance.",
      },
      {
        id: "reporting",
        icon: "map",
        title: "Custom Reporting & Insights",
        description:
          "Generate reports on technician productivity, customer satisfaction, and financial performance.",
      },
      {
        id: "integration",
        icon: "map",
        title: "Integration with IoT Devices",
        description:
          "Connect with IoT-enabled assets for predictive maintenance and automatic fault detection.",
      },
    ],
    ctaText: "Talk to FSM Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is Field Service Management software?",
        answer:
          "Field Service Management (FSM) software helps organizations coordinate field operations through automation, mobile access, and real-time tracking.",
      },
      {
        id: "2",
        question: "Can FSM systems improve technician productivity?",
        answer:
          "Yes, FSM software enables smart scheduling, route optimization, and mobile tools that help technicians complete more jobs in less time.",
      },
      {
        id: "3",
        question: "Does the system support real-time tracking?",
        answer:
          "Absolutely. GPS and IoT integrations provide real-time visibility into technician movements and asset performance.",
      },
      {
        id: "4",
        question: "Can it integrate with CRM or ERP platforms?",
        answer:
          "Yes, our FSM solutions seamlessly connect with CRM, ERP, and accounting systems for unified data and process management.",
      },
      {
        id: "5",
        question: "Is mobile access available for field workers?",
        answer:
          "Yes. Technicians can access job details, update work orders, and capture digital signatures directly from their mobile devices.",
      },
      {
        id: "6",
        question: "Do you offer custom FSM software development?",
        answer:
          "Yes, we build fully customized FSM platforms tailored to your industry, team size, and operational needs.",
      },
    ],
  },
};
