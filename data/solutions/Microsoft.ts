import { SolutionConfig } from "@/types/solutions";

export const Microsoft: SolutionConfig = {
  slug: "microsoft",

  banner: {
    title: "Empower Productivity with",
    highlight: "Microsoft Cloud & Business Solutions",
    subtitle:
      "Unlock efficiency, collaboration, and innovation through Microsoft’s powerful ecosystem — from Azure and Dynamics 365 to Power Platform and Office 365.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Microsoft Solutions",
  },

  developerDetails: {
    heading: "Microsoft-Certified Experts in Cloud, Data & Productivity",
    subheading:
      "Our certified developers help businesses leverage Microsoft technologies to accelerate digital transformation, enhance security, and streamline operations.",
    mainTitle: "Comprehensive Microsoft Development & Integration Services",
    mainDescription:
      "We provide end-to-end Microsoft solutions including Azure Cloud, Dynamics 365 CRM/ERP, Power BI analytics, and custom app development using .NET and Power Platform — tailored to your business needs.",
    image: "/images/microsoft-laptop.png",
    services: [
      {
        id: 1,
        title: "Azure Cloud Solutions",
        description:
          "Migrate, deploy, and manage scalable applications on Microsoft Azure — with high availability, security, and global reach.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "Microsoft 365 Integration",
        description:
          "Boost productivity with seamless integration of Microsoft Teams, SharePoint, and Office 365 into your daily workflows.",
        icon: "/icons/office.svg",
      },
      {
        id: 3,
        title: "Dynamics 365 Development",
        description:
          "Enhance customer engagement and automate business operations with customized Dynamics 365 CRM and ERP solutions.",
        icon: "/icons/settings.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Modern Business Solutions Powered by Microsoft",
    mainDescription:
      "We harness Microsoft’s cloud-first ecosystem to build intelligent, secure, and scalable solutions that drive innovation and digital excellence.",
    items: [
      {
        id: "azure-cloud",
        icon: "Shield",
        title: "Azure Cloud Infrastructure",
        subtitle: "Reliable & Scalable Cloud Solutions",
        description:
          "Leverage Microsoft Azure to design, deploy, and manage powerful cloud infrastructures. Support enterprise-grade workloads, AI models, and IoT environments seamlessly. Achieve high availability, scalability, and cost efficiency for modern businesses.",
      },
      {
        id: "power-bi",
        icon: "Shield",
        title: "Power BI & Data Analytics",
        subtitle: "Transform Data into Insights",
        description:
          "Turn raw data into actionable insights with interactive Power BI dashboards and reports. Empower teams with real-time data visualization and predictive analytics. Make smarter, data-driven decisions with unified, secure access to key metrics.",
      },
      {
        id: "microsoft-teams",
        icon: "Shield",
        title: "Microsoft Teams Collaboration",
        subtitle: "Connect People & Workflows",
        description:
          "Enhance teamwork with Microsoft Teams' seamless communication and file-sharing tools. Host meetings, manage projects, and integrate apps within a unified workspace. Foster productivity and collaboration across departments and geographies.",
      },
      {
        id: "dynamics-crm",
        icon: "Shield",
        title: "Dynamics 365 CRM/ERP",
        subtitle: "Empower Business Operations",
        description:
          "Unify your business processes through Microsoft Dynamics 365 CRM and ERP solutions. Manage customers, finances, and operations with real-time data intelligence. Improve efficiency, automate workflows, and accelerate organizational growth.",
      },
      {
        id: "power-platform",
        icon: "Shield",
        title: "Power Platform Automation",
        subtitle: "No-Code/Low-Code Development",
        description:
          "Build and automate applications quickly using Power Apps, Power Automate, and Power Virtual Agents. Empower non-developers to streamline repetitive workflows effortlessly. Innovate faster with secure, low-code tools designed for enterprise use.",
      },
      {
        id: "security-compliance",
        icon: "Shield",
        title: "Security & Compliance",
        subtitle: "Enterprise-Grade Protection",
        description:
          "Safeguard your digital ecosystem with Microsoft Defender and Entra ID frameworks. Implement identity management, threat detection, and compliance solutions. Ensure data privacy, resilience, and adherence to global regulatory standards.",
      },
    ],
    linkText: "Get Microsoft Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Microsoft Enterprise Management Systems",
    subtitle:
      "Empower your teams with cloud-connected tools that simplify management, collaboration, and analytics across departments.",
    subtitleLink: { text: "Microsoft enterprise systems", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/e0/ad/dd/e0addddc9e16a650e06cb233a7f326ac.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/90/b9/a9/90b9a9f837e7ed5678b271da77aa844e.jpg",
    topFeatures: [
      {
        id: "integration",
        icon: "map",
        title: "Seamless App Integration",
        description:
          "Connect Microsoft tools like Outlook, Teams, SharePoint, and Dynamics into unified workflows for better collaboration.",
      },
      {
        id: "cloud-collaboration",
        icon: "map",
        title: "Cloud Collaboration Environment",
        description:
          "Enable real-time teamwork with synchronized file sharing, version control, and secure document management.",
      },
      {
        id: "data-analytics",
        icon: "map",
        title: "Advanced Analytics & Reporting",
        description:
          "Track performance and generate AI-driven insights using Power BI and Microsoft Fabric analytics solutions.",
      },
    ],
    bottomFeatures: [
      {
        id: "workflow-automation",
        icon: "map",
        title: "Automated Workflows",
        description:
          "Simplify daily operations with Power Automate by eliminating repetitive manual tasks. Integrate business apps effortlessly without writing complex code. Boost efficiency and consistency across teams with automated, rule-based workflows.",
      },
      {
        id: "multi-device",
        icon: "map",
        title: "Multi-Device Accessibility",
        description:
          "Stay connected to your business anywhere using Microsoft 365’s secure cloud ecosystem. Access, edit, and share files seamlessly from desktop, web, or mobile devices. Ensure uninterrupted collaboration and productivity on every platform.",
      },
      {
        id: "backup-security",
        icon: "map",
        title: "Data Backup & Security",
        description:
          "Safeguard your organization’s critical information with Azure Backup and Microsoft Defender. Utilize enterprise-grade encryption and compliance standards to prevent breaches. Ensure business continuity with automated recovery and data protection protocols.",
      },
      {
        id: "api-support",
        icon: "map",
        title: "API & Integration Support",
        description:
          "Unify your digital ecosystem by connecting Microsoft tools with APIs and third-party platforms. Enable smooth data flow between legacy systems and modern cloud apps. Drive digital transformation with secure, scalable, and efficient integrations.",
      },
    ],
    ctaText: "Talk to Microsoft Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What Microsoft services do you offer?",
        answer:
          "We provide services across Azure Cloud, Microsoft 365, Dynamics 365, Power Platform, and enterprise integration.",
      },
      {
        id: "2",
        question: "Can you migrate our infrastructure to Azure?",
        answer:
          "Yes, we offer complete Azure migration services — including architecture planning, data transfer, and post-deployment optimization.",
      },
      {
        id: "3",
        question: "Do you customize Dynamics 365 for businesses?",
        answer:
          "Absolutely. We customize Dynamics 365 CRM and ERP modules to align with your organization’s unique workflows and goals.",
      },
      {
        id: "4",
        question: "Can you integrate Microsoft tools with third-party apps?",
        answer:
          "Yes. We integrate Microsoft solutions with Salesforce, SAP, Slack, and other systems for unified business operations.",
      },
      {
        id: "5",
        question: "Do you provide Microsoft licensing and support?",
        answer:
          "We assist with Microsoft product licensing, deployment, configuration, and ongoing technical support.",
      },
      {
        id: "6",
        question: "Is data secure in Microsoft Cloud?",
        answer:
          "Yes. Microsoft’s cloud infrastructure complies with global standards including ISO, GDPR, and HIPAA for top-tier data protection.",
      },
    ],
  },
};
