import { SolutionConfig } from "@/types/solutions";

export const itServiceManagement: SolutionConfig = {
  slug: "it-service-management",

  banner: {
    title: "Optimize IT Operations with",
    highlight: "Smart IT Service Management (ITSM) Solutions",
    subtitle:
      "Automate, streamline, and enhance your IT workflows with our modern ITSM solutions — ensuring reliability, compliance, and improved service delivery.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get ITSM Solutions",
  },

  developerDetails: {
    heading: "Empowering IT Teams with Automation & Efficiency",
    subheading:
      "Our IT Service Management experts help enterprises modernize support operations, automate incident handling, and enhance customer experiences.",
    mainTitle: "End-to-End ITSM Development & Integration",
    mainDescription:
      "We build and integrate ITSM platforms that centralize IT operations, automate routine processes, and improve SLA compliance. From incident tracking to change management, our solutions ensure IT runs smoothly across departments.",
    image: "/images/itsm-dashboard.png",
    services: [
      {
        id: 1,
        title: "Service Desk Automation",
        description:
          "We develop intelligent service desk systems that automate ticket routing, prioritize incidents, and speed up issue resolution.",
        icon: "/icons/helpdesk.svg",
      },
      {
        id: 2,
        title: "Asset & Configuration Management",
        description:
          "Track and manage your IT assets, software licenses, and configurations in real-time for better resource utilization.",
        icon: "/icons/settings.svg",
      },
      {
        id: 3,
        title: "Incident & Problem Management",
        description:
          "Minimize downtime with automated incident tracking and root-cause analysis tools that ensure rapid problem resolution.",
        icon: "/icons/warning.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Comprehensive ITSM Software Solutions",
    mainDescription:
      "Our ITSM solutions empower organizations to improve IT performance, ensure compliance, and enhance collaboration between technical and business teams.",
    items: [
      {
        id: "ticketing-system",
        icon: "Leaf",
        title: "Automated Ticketing System",
        subtitle: "Faster Response & Resolution",
        description:
          "Handle IT issues efficiently with automated ticket creation, assignment, and escalation based on predefined workflows.",
      },
      {
        id: "knowledge-base",
        icon: "Leaf",
        title: "Knowledge Base & Self-Service Portal",
        subtitle: "Empower End Users",
        description:
          "Provide a centralized knowledge base and AI chatbot integration to help users resolve common issues without IT intervention.",
      },
      {
        id: "change-management",
        icon: "Leaf",
        title: "Change & Release Management",
        subtitle: "Minimize Risk in IT Changes",
        description:
          "Plan, approve, and track IT infrastructure changes with complete audit trails and automated rollback options.",
      },
      {
        id: "performance-analytics",
        icon: "Leaf",
        title: "Performance & SLA Analytics",
        subtitle: "Measure IT Success",
        description:
          "Monitor KPIs, SLA compliance, and service performance through dynamic dashboards and real-time analytics.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Third-Party Integration",
        subtitle: "Connect with Enterprise Tools",
        description:
          "Integrate ITSM with CRM, ERP, and DevOps tools like Jira, ServiceNow, and Microsoft Teams for seamless workflow synchronization.",
      },
      {
        id: "ai-automation",
        icon: "Leaf",
        title: "AI-Powered Automation",
        subtitle: "Smarter Service Operations",
        description:
          "Leverage AI for predictive issue detection, automated triage, and smart recommendations to reduce human intervention.",
      },
    ],
    linkText: "Explore ITSM Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Enterprise IT Management Platforms",
    subtitle:
      "Centralize IT operations, monitor performance, and manage digital assets from a single integrated platform.",
    subtitleLink: { text: "enterprise IT platforms", url: "#" },
    laptopImage: "/images/itsm-laptop.jpg",
    mobileImage: "/images/itsm-mobile.jpg",
    topFeatures: [
      {
        id: "monitoring",
        icon: "map",
        title: "Real-Time IT Monitoring",
        description:
          "Gain complete visibility over your IT infrastructure, networks, and applications with live status tracking.",
      },
      {
        id: "workflow",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate service requests, approvals, and escalations to ensure fast response and consistent IT performance.",
      },
      {
        id: "security",
        icon: "map",
        title: "Security & Compliance",
        description:
          "Enforce access control, data protection, and compliance with ITIL, ISO, and GDPR standards.",
      },
    ],
    bottomFeatures: [
      {
        id: "integration",
        icon: "map",
        title: "Integration with Cloud Platforms",
        description:
          "Connect ITSM tools with AWS, Azure, and Google Cloud for hybrid IT infrastructure management.",
      },
      {
        id: "reporting",
        icon: "map",
        title: "Advanced Reporting",
        description:
          "Generate detailed reports on service performance, downtime analysis, and team productivity.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Robotic Process Automation (RPA)",
        description:
          "Reduce manual work and improve efficiency with bots handling repetitive IT service tasks automatically.",
      },
      {
        id: "backup",
        icon: "map",
        title: "Data Backup & Disaster Recovery",
        description:
          "Ensure business continuity with automated backups and fast recovery systems for critical IT assets.",
      },
    ],
    ctaText: "Get ITSM Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is IT Service Management (ITSM)?",
        answer:
          "ITSM is a framework that helps organizations manage IT services efficiently — including incident response, asset management, and workflow automation.",
      },
      {
        id: "2",
        question: "Do you develop custom ITSM platforms?",
        answer:
          "Yes. We design and develop custom ITSM software tailored to your company’s processes, roles, and service workflows.",
      },
      {
        id: "3",
        question: "Can your ITSM integrate with existing tools?",
        answer:
          "Absolutely. We can integrate ITSM systems with platforms like ServiceNow, Jira, Zendesk, and Microsoft Teams for a unified experience.",
      },
      {
        id: "4",
        question: "How does automation improve ITSM efficiency?",
        answer:
          "Automation reduces manual intervention, accelerates ticket resolution, improves SLA adherence, and frees up IT teams for strategic initiatives.",
      },
      {
        id: "5",
        question: "Do you offer analytics in ITSM systems?",
        answer:
          "Yes. Our ITSM dashboards include performance analytics, SLA tracking, and trend prediction for proactive IT management.",
      },
      {
        id: "6",
        question: "Is your ITSM cloud-based?",
        answer:
          "Yes, our ITSM solutions support cloud, on-premise, and hybrid deployments for scalable and secure IT operations.",
      },
    ],
  },
};
