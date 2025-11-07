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
        "Capture, qualify, and nurture leads through intelligent automation and data insights. Streamline follow-ups with reminders and scoring to focus on high-value prospects. Increase conversion rates by aligning sales efforts with customer intent.",
    },
    {
      id: "sales-pipeline",
      icon: "Leaf",
      title: "Sales Pipeline Automation",
      subtitle: "Visualize Every Opportunity",
      description:
        "Gain full visibility into your sales funnel with real-time analytics and forecasting. Track deals, monitor performance, and automate status updates effortlessly. Empower teams to close more deals through data-driven pipeline management.",
    },
    {
      id: "marketing-automation",
      icon: "Leaf",
      title: "Marketing Automation",
      subtitle: "Personalized Campaigns at Scale",
      description:
        "Automate your email, SMS, and social media campaigns with intelligent targeting. Measure engagement and ROI in real time with built-in analytics. Deliver personalized experiences that convert leads into loyal customers.",
    },
    {
      id: "customer-analytics",
      icon: "Leaf",
      title: "Customer Data Analytics",
      subtitle: "Make Informed Decisions",
      description:
        "Analyze customer behavior, purchase patterns, and preferences to make data-backed decisions. Identify trends that boost retention and lifetime value. Use visual dashboards to turn complex data into clear business insights.",
    },
    {
      id: "multi-channel",
      icon: "Leaf",
      title: "Multi-Channel Communication",
      subtitle: "Engage Across Platforms",
      description:
        "Connect effortlessly across WhatsApp, email, live chat, and social platforms. Manage all interactions in a single unified inbox for improved efficiency. Strengthen relationships through timely and consistent customer communication.",
    },
    {
      id: "ai-insights",
      icon: "Leaf",
      title: "AI-Powered Insights",
      subtitle: "Predictive Sales & Smart Forecasting",
      description:
        "Leverage machine learning to predict customer trends, sales outcomes, and churn risks. Get personalized recommendations for next-best actions in sales and marketing. Stay ahead with predictive insights that drive growth and loyalty.",
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
      "Manage your customer relationships anywhere with a responsive, mobile-optimized CRM interface. Update client records, monitor deals, and access insights in real-time. Empower your sales and support teams with on-the-go connectivity and productivity.",
  },
  {
    id: "security",
    icon: "map",
    title: "Data Security & Compliance",
    description:
      "Protect sensitive customer data with enterprise-grade encryption and role-based access control. Ensure full compliance with global standards like GDPR, HIPAA, and ISO. Maintain customer trust through robust data governance and regular audits.",
  },
  {
    id: "api",
    icon: "map",
    title: "Custom API Development",
    description:
      "Enhance your CRM functionality with tailor-made APIs built for flexibility and scalability. Integrate seamlessly with ERP, marketing, and analytics platforms. Enable unified workflows that streamline operations across all business tools.",
  },
  {
    id: "notifications",
    icon: "map",
    title: "Real-Time Notifications",
    description:
      "Receive instant alerts for leads, customer actions, and sales updates directly within your CRM. Stay informed about performance metrics and campaign progress. Improve response times and collaboration with smart, automated notifications.",
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
