import { IndustryConfig } from "@/types/industries";

export const mortgage: IndustryConfig = {
  slug: "mortgage",
  banner: {
    title: "Transform Mortgage Operations with",
    highlight: "AI-Powered Mortgage & Lending Software Solutions",
    subtitle:
      "Reimagine how lenders manage mortgage origination, servicing, and portfolio management with intelligent automation, real-time analytics, and digital borrower experiences.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Mortgage Software Solutions",
  },

  techHero: {
    heading: "Hire Expert Mortgage Software Developers",
    description:
      "We build AI-driven platforms that streamline mortgage processing, credit scoring, and servicing. From retail to commercial lending, our solutions ensure compliance, reduce defaults, and improve borrower satisfaction.",
    services: [
      {
        id: "mortgage-origination",
        title: "Mortgage Origination & Onboarding Platforms",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "credit-risk",
        title: "AI-Powered Credit Risk Assessment",
        icon: "Tractor", //Shield
        position: "left",
      },
      {
        id: "loan-servicing",
        title: "Loan Servicing & Portfolio Management",
        icon: "Tractor", //Settings
        position: "left",
      },
      {
        id: "document-verification",
        title: "Automated Document Verification & eSigning",
        icon: "Tractor", //Search
        position: "left",
      },
      {
        id: "compliance-reporting",
        title: "Regulatory Compliance & Reporting",
        icon: "Tractor", //ShieldCheck
        position: "right",
      },
      {
        id: "borrower-portal",
        title: "Customer Portals & Self-Service Dashboards",
        icon: "Tractor", //User
        position: "right",
      },
      {
        id: "collections-recovery",
        title: "AI-Powered Collections & Recovery Tools",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "mobile-lending",
        title: "Mobile Mortgage Apps & Chatbots",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI, Cloud & Automation Solutions for Mortgage Lending",
    mainDescription:
      "Our platforms automate the entire mortgage lifecycle — from origination and underwriting to servicing and compliance. Leverage AI, digital KYC, and predictive analytics to accelerate approvals, reduce risk, and enhance borrower experience.",
    items: [
      {
        id: "mortgage-origination-ai",
        icon: "Leaf", //FilePlus
        title: "AI-Driven Mortgage Origination Systems",
        subtitle: "",
        description:
          "Automate borrower onboarding, credit evaluation, and document verification for faster approvals and lower risk.",
      },
      {
        id: "credit-risk-modeling",
        icon: "Leaf", //BarChart
        title: "Credit Risk Analytics & Scoring",
        subtitle: "",
        description:
          "Use AI and machine learning to assess borrower creditworthiness and optimize lending decisions.",
      },
      {
        id: "loan-servicing-platforms",
        icon: "Leaf", //Settings
        title: "Loan Servicing & Portfolio Management",
        subtitle: "",
        description:
          "Manage repayments, amortization schedules, and portfolio tracking with real-time dashboards and automated workflows.",
      },
      {
        id: "collections-automation",
        icon: "Leaf", //TrendingUp
        title: "AI-Powered Collections & Recovery",
        subtitle: "",
        description:
          "Optimize delinquency management with predictive analytics, reminders, and intelligent recovery workflows.",
      },
      {
        id: "compliance-regtech",
        icon: "Leaf", //ShieldAlert
        title: "RegTech & Compliance Automation",
        subtitle: "",
        description:
          "Ensure adherence to KYC, AML, and mortgage regulations with automated compliance monitoring.",
      },
      {
        id: "borrower-engagement",
        icon: "Leaf", //User
        title: "Customer Experience & Engagement Portals",
        subtitle: "",
        description:
          "Deliver a seamless digital borrower journey through portals, mobile apps, and AI chatbots for support and updates.",
      },
    ],
    linkText: "Get AI-Powered Mortgage Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "End-to-End Mortgage Management Software",
    subtitle:
      "We design intelligent mortgage ecosystems that integrate origination, servicing, collections, and compliance to help lenders scale efficiently.",
    subtitleLink: { text: "mortgage management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "loan-lifecycle",
        icon: "map", //RefreshCcw
        title: "Full Mortgage Lifecycle Automation",
        description:
          "Automate every stage of the mortgage process — application, underwriting, approval, and repayment — with seamless workflows.",
        link: { text: "mortgage lifecycle automation", url: "#" },
      },
      {
        id: "risk-dashboard",
        icon: "map", //BarChart3
        title: "Credit Risk & Portfolio Dashboards",
        description:
          "Monitor loan portfolio health, delinquency trends, and predictive risk scores in real time.",
      },
      {
        id: "compliance-automation",
        icon: "map", //ShieldCheck
        title: "Compliance & Audit Automation",
        description:
          "Simplify regulatory audits, KYC, and AML compliance with automated reporting and verification tools.",
      },
    ],
    bottomFeatures: [
      {
        id: "mobile-borrower-apps",
        icon: "map", //Smartphone
        title: "Mobile Mortgage Apps & Portals",
        description:
          "Allow borrowers to apply, track, and manage loans from mobile platforms with AI-powered assistance.",
      },
      {
        id: "analytics-forecasting",
        icon: "map", //Cpu
        title: "Predictive Analytics & Forecasting",
        description:
          "Leverage AI to forecast repayment probabilities, identify defaults, and discover cross-selling opportunities.",
      },
      {
        id: "collections-optimization",
        icon: "map", //TrendingUp
        title: "Collections & Recovery Optimization",
        description:
          "Automate collection reminders, optimize recovery strategies, and minimize defaults using machine learning.",
      },
      {
        id: "data-security",
        icon: "map", //Lock
        title: "Data Security & Encryption",
        description:
          "Protect sensitive borrower and lender data with advanced encryption, authentication, and compliance frameworks.",
      },
    ],
    ctaText: "BUILD YOUR MORTGAGE SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
};
