import { IndustryConfig } from "@/types/industries";

export const nonprofit: IndustryConfig = {
  slug: "nonprofit",
  banner: {
    title: "Transform Nonprofit Operations with",
    highlight: "AI-Powered Nonprofit Management Software",
    subtitle:
      "Empower nonprofits with intelligent automation, donor management, and operational analytics. Streamline fundraising, volunteer management, and program tracking to maximize impact.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Nonprofit Solutions",
  },

  techHero: {
    heading: "Hire Expert Nonprofit Software Developers",
    description:
      "We build AI-driven platforms that streamline donor management, fundraising campaigns, and volunteer coordination. Enable your nonprofit to optimize operations, engage supporters, and measure impact effectively.",
    services: [
      {
        id: "donor-management",
        title: "Donor Management & CRM Platforms",
        icon: "Tractor", //User
        position: "left",
      },
      {
        id: "fundraising-automation",
        title: "AI-Powered Fundraising Campaigns",
        icon: "Tractor", //Gift
        position: "left",
      },
      {
        id: "volunteer-management",
        title: "Volunteer Coordination & Tracking",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "grant-management",
        title: "Grant & Program Management Systems",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "analytics-reporting",
        title: "Impact Analytics & Reporting Dashboards",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "compliance-security",
        title: "Nonprofit Compliance & Data Security",
        icon: "Tractor", //ShieldCheck
        position: "right",
      },
      {
        id: "event-management",
        title: "Event & Campaign Management Tools",
        icon: "Tractor", //Calendar
        position: "right",
      },
      {
        id: "mobile-apps",
        title: "Mobile Donor & Volunteer Apps",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI, Cloud & Automation Solutions for Nonprofits",
    mainDescription:
      "We create intelligent nonprofit platforms that streamline donor engagement, fundraising, program management, and compliance. Leverage AI, analytics, and digital tools to improve efficiency and maximize social impact.",
    items: [
      {
        id: "donor-crm",
        icon: "Leaf", //User
        title: "Donor Management & CRM Systems",
        subtitle: "",
        description:
          "Track donor profiles, giving history, and engagement to strengthen relationships and increase contributions.",
      },
      {
        id: "fundraising-automation",
        icon: "Leaf", //Gift
        title: "AI-Powered Fundraising Campaigns",
        subtitle: "",
        description:
          "Automate campaign planning, email outreach, and targeted fundraising with predictive analytics to boost donations.",
      },
      {
        id: "volunteer-platform",
        icon: "Leaf", //Users
        title: "Volunteer Management Platforms",
        subtitle: "",
        description:
          "Schedule, track, and coordinate volunteers efficiently while providing real-time updates and communication tools.",
      },
      {
        id: "grant-tracking",
        icon: "Leaf", //FileText
        title: "Grant & Program Management",
        subtitle: "",
        description:
          "Manage grant applications, reporting, and program outcomes with centralized dashboards and AI-powered insights.",
      },
      {
        id: "analytics-reporting",
        icon: "Leaf", //BarChart
        title: "Impact Analytics & Reporting",
        subtitle: "",
        description:
          "Measure program effectiveness, donor engagement, and fundraising success with real-time analytics dashboards.",
      },
      {
        id: "event-management",
        icon: "Leaf", //Calendar
        title: "Event & Campaign Management",
        subtitle: "",
        description:
          "Plan, execute, and track virtual or in-person events, campaigns, and fundraisers with seamless automation.",
      },
    ],
    linkText: "Get AI-Powered Nonprofit Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "End-to-End Nonprofit Management Software",
    subtitle:
      "We design intelligent nonprofit ecosystems that integrate donor management, fundraising, volunteer coordination, and analytics to help organizations scale impact efficiently.",
    subtitleLink: { text: "nonprofit management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "workflow-automation",
        icon: "map", //Settings
        title: "Workflow Automation & Task Management",
        description:
          "Automate daily operations, volunteer assignments, and campaign tasks to improve efficiency and reduce manual effort.",
        link: { text: "nonprofit workflow automation", url: "#" },
      },
      {
        id: "analytics-dashboard",
        icon: "map", //BarChart3
        title: "Real-Time Analytics & Performance Dashboards",
        description:
          "Monitor fundraising KPIs, donor engagement, and program impact through dynamic dashboards.",
      },
      {
        id: "mobile-access",
        icon: "map", //Smartphone
        title: "Mobile Apps & Volunteer Portals",
        description:
          "Enable donors and volunteers to engage, donate, and participate via mobile platforms with real-time updates.",
      },
    ],
    bottomFeatures: [
      {
        id: "ai-assistants",
        icon: "map", //Cpu
        title: "AI Chatbots & Donor Assistants",
        description:
          "Provide instant support to donors and volunteers using AI-powered chatbots and virtual assistants.",
      },
      {
        id: "compliance-security",
        icon: "map", //Shield
        title: "Compliance & Data Security",
        description:
          "Ensure donor and volunteer data protection with GDPR compliance, secure storage, and role-based access control.",
      },
      {
        id: "fundraising-optimization",
        icon: "map", //TrendingUp
        title: "Fundraising & Campaign Optimization",
        description:
          "Leverage AI insights to optimize donation campaigns, identify high-value supporters, and maximize contributions.",
      },
      {
        id: "impact-reporting",
        icon: "map", //PieChart
        title: "Impact Reporting & Transparency",
        description:
          "Generate comprehensive reports on programs, donations, and organizational impact to enhance credibility and accountability.",
      },
    ],
    ctaText: "BUILD YOUR NONPROFIT SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
};
