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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Handle IT issues efficiently with automated ticket creation, assignment, and escalation based on predefined workflows. Improve response times by prioritizing critical issues automatically. Ensure accountability and transparency across your IT support team.",
      },
      {
        id: "knowledge-base",
        icon: "Leaf",
        title: "Knowledge Base & Self-Service Portal",
        subtitle: "Empower End Users",
        description:
          "Provide a centralized knowledge base and AI-powered self-service portal to help users resolve common issues independently. Reduce repetitive IT requests and improve support efficiency. Enhance end-user satisfaction with quick access to accurate solutions.",
      },
      {
        id: "change-management",
        icon: "Leaf",
        title: "Change & Release Management",
        subtitle: "Minimize Risk in IT Changes",
        description:
          "Plan, approve, and track IT infrastructure changes with detailed audit trails and automated rollback options. Ensure compliance and reduce downtime during updates. Improve overall change visibility for IT managers and stakeholders.",
      },
      {
        id: "performance-analytics",
        icon: "Leaf",
        title: "Performance & SLA Analytics",
        subtitle: "Measure IT Success",
        description:
          "Monitor KPIs, SLA compliance, and IT service performance through dynamic dashboards and real-time analytics. Identify trends, bottlenecks, and areas for improvement. Enable data-driven decisions that optimize IT operations and efficiency.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Third-Party Integration",
        subtitle: "Connect with Enterprise Tools",
        description:
          "Integrate ITSM seamlessly with CRM, ERP, and DevOps tools such as Jira, ServiceNow, and Microsoft Teams. Enable smooth workflow synchronization across platforms. Enhance productivity and reduce manual data entry between systems.",
      },
      {
        id: "ai-automation",
        icon: "Leaf",
        title: "AI-Powered Automation",
        subtitle: "Smarter Service Operations",
        description:
          "Leverage AI for predictive issue detection, automated ticket triage, and smart recommendations. Reduce manual intervention and human error in IT operations. Improve response times while enhancing overall service reliability.",
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
    laptopImage:
      "https://i.pinimg.com/1200x/10/bd/ce/10bdcee5acece5da5ea77a89d61ee653.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/cd/28/b0/cd28b04e6358671bd9f36e0bd1ca76c6.jpg",
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
          "Seamlessly connect ITSM tools with AWS, Azure, and Google Cloud for efficient hybrid IT infrastructure management. Enable automated workflows across cloud services and on-premises systems. Simplify deployment, monitoring, and scaling of IT resources for improved operational agility.",
      },
      {
        id: "reporting",
        icon: "map",
        title: "Advanced Reporting",
        description:
          "Generate comprehensive reports on service performance, system downtime, and team productivity. Gain actionable insights through detailed analytics and real-time dashboards. Make informed decisions to optimize IT processes and enhance overall service delivery.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Robotic Process Automation (RPA)",
        description:
          "Automate repetitive IT service tasks with intelligent bots to reduce manual effort and errors. Improve efficiency, speed, and consistency in routine operations. Free up your team to focus on high-value strategic initiatives and problem-solving.",
      },
      {
        id: "backup",
        icon: "map",
        title: "Data Backup & Disaster Recovery",
        description:
          "Ensure business continuity with automated backups and rapid recovery solutions for critical IT assets. Protect data against accidental loss, cyber threats, or system failures. Maintain uptime and reliability through robust disaster recovery planning and monitoring.",
      },
    ],
    ctaText: "Get ITSM Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
