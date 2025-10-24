import { SolutionConfig } from "@/types/solutions";

export const crm: SolutionConfig = {
  slug: "crm",

  banner: {
    title: "Enhance Customer Engagement with",
    highlight: "Intelligent CRM Solutions",
    subtitle:
      "Empower your sales, marketing, and support teams with powerful CRM platforms designed to improve customer experience, automate workflows, and drive business growth.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore CRM Solutions",
  },

  developerDetails: {
    heading: "CRM Experts for Digital Transformation",
    subheading:
      "We design and implement scalable CRM systems that help businesses automate customer management, track performance, and build stronger relationships.",
    mainTitle: "Custom CRM Development & Integration Services",
    mainDescription:
      "Our CRM experts build tailored solutions using Salesforce, HubSpot, Zoho, and Microsoft Dynamics to help businesses streamline communication, marketing, and customer support. From automation to analytics, we ensure your CRM empowers growth.",
    image: "/images/crm-dashboard.png",
    services: [
      {
        id: 1,
        title: "CRM Implementation & Migration",
        description:
          "Seamlessly transition from legacy systems to modern CRM platforms with complete data migration and setup support.",
        icon: "/icons/data-transfer.svg",
      },
      {
        id: 2,
        title: "Sales Automation",
        description:
          "Automate lead generation, follow-ups, and opportunity tracking to improve sales efficiency and close deals faster.",
        icon: "/icons/sales.svg",
      },
      {
        id: 3,
        title: "Customer Support Integration",
        description:
          "Integrate ticketing systems, chatbots, and helpdesk tools to enhance real-time customer service and response tracking.",
        icon: "/icons/support.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Comprehensive CRM Software Solutions",
    mainDescription:
      "We develop intelligent CRM systems that unify sales, marketing, and customer support, giving businesses complete visibility across the customer journey.",
    items: [
      {
        id: "lead-management",
        icon: "Leaf",
        title: "Lead Management System",
        subtitle: "Track & Convert Leads Efficiently",
        description:
          "Capture, qualify, and nurture leads with smart automation and insights to improve conversion rates.",
      },
      {
        id: "sales-pipeline",
        icon: "Leaf",
        title: "Sales Pipeline Automation",
        subtitle: "Visualize Every Opportunity",
        description:
          "Manage opportunities and forecast revenue with an intuitive pipeline and real-time analytics.",
      },
      {
        id: "marketing-automation",
        icon: "Leaf",
        title: "Marketing Automation",
        subtitle: "Personalized Campaigns at Scale",
        description:
          "Launch targeted email and SMS campaigns, track engagement, and measure ROI automatically.",
      },
      {
        id: "customer-analytics",
        icon: "Leaf",
        title: "Customer Data Analytics",
        subtitle: "Make Informed Decisions",
        description:
          "Gain actionable insights into customer behavior and preferences to drive retention and satisfaction.",
      },
      {
        id: "multi-channel",
        icon: "Leaf",
        title: "Multi-Channel Communication",
        subtitle: "Engage Across Platforms",
        description:
          "Integrate CRM with WhatsApp, email, live chat, and social media for a unified communication experience.",
      },
      {
        id: "ai-insights",
        icon: "Leaf",
        title: "AI-Powered Insights",
        subtitle: "Predictive Sales & Smart Forecasting",
        description:
          "Use AI models to predict sales trends, customer churn, and personalized engagement opportunities.",
      },
    ],
    linkText: "Get CRM Consultation",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "CRM Management & Analytics Systems",
    subtitle:
      "Manage customer data, automate workflows, and gain real-time insights through centralized CRM dashboards.",
    subtitleLink: { text: "CRM data management", url: "#" },
    laptopImage: "/images/crm-management.jpg",
    mobileImage: "/images/crm-management-mobile.jpg",
    topFeatures: [
      {
        id: "workflow",
        icon: "map",
        title: "Automated Workflow Engine",
        description:
          "Streamline repetitive processes like follow-ups and onboarding with rule-based CRM automation.",
      },
      {
        id: "dashboard",
        icon: "map",
        title: "Dynamic Dashboard & Reports",
        description:
          "Visualize key performance metrics with interactive dashboards for sales, marketing, and support teams.",
      },
      {
        id: "integration",
        icon: "map",
        title: "Third-Party Integrations",
        description:
          "Integrate your CRM with ERP, email marketing, accounting, and customer service platforms.",
      },
    ],
    bottomFeatures: [
      {
        id: "mobile",
        icon: "map",
        title: "Mobile CRM Access",
        description:
          "Access and update customer information anytime through a mobile-friendly CRM interface.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Compliance",
        description:
          "Ensure customer data is secured and compliant with GDPR, HIPAA, and ISO standards.",
      },
      {
        id: "api",
        icon: "map",
        title: "Custom API Development",
        description:
          "Extend CRM capabilities with custom-built APIs and third-party software integrations.",
      },
      {
        id: "notifications",
        icon: "map",
        title: "Real-Time Notifications",
        description:
          "Stay updated with instant alerts for customer inquiries, sales milestones, and campaign performance.",
      },
    ],
    ctaText: "Talk to Our CRM Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What CRM platforms do you support?",
        answer:
          "We work with Salesforce, Zoho, HubSpot, Pipedrive, and Microsoft Dynamics, along with fully custom-built CRM solutions.",
      },
      {
        id: "2",
        question: "Can you integrate CRM with my existing systems?",
        answer:
          "Yes, we integrate CRM with ERP, accounting, eCommerce, and customer service tools for a unified workflow.",
      },
      {
        id: "3",
        question: "Do you offer CRM customization?",
        answer:
          "Absolutely. We customize CRM modules, dashboards, and reports based on your business goals and team structure.",
      },
      {
        id: "4",
        question: "Is CRM accessible on mobile devices?",
        answer:
          "Yes, all our CRM solutions come with mobile access, enabling teams to manage customers on the go.",
      },
      {
        id: "5",
        question: "Do you provide training after CRM implementation?",
        answer:
          "We offer comprehensive user training, documentation, and ongoing support post-implementation.",
      },
      {
        id: "6",
        question: "Can AI be integrated into CRM workflows?",
        answer:
          "Yes, AI can enhance lead scoring, customer segmentation, and predictive analytics within your CRM platform.",
      },
    ],
  },
};
