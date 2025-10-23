import { SolutionConfig } from "@/types/solutions";

export const businessIntelligence: SolutionConfig = {
  slug: "business-intelligence-analytics",

  banner: {
    title: "Empower Decisions with",
    highlight: "Business Intelligence & Analytics Solutions",
    subtitle:
      "Turn raw data into actionable insights with advanced BI tools, interactive dashboards, and predictive analytics to accelerate business growth.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore BI Solutions",
  },

  developerDetails: {
    heading: "Expert BI Developers & Data Analysts",
    subheading:
      "We help organizations transform data into strategy with modern analytics platforms, visualization tools, and real-time reporting systems.",
    mainTitle: "Comprehensive Business Intelligence Services",
    mainDescription:
      "Our BI experts design and implement end-to-end analytics ecosystems — from data integration and warehousing to visualization and AI-driven insights — empowering you to make smarter, faster, data-backed decisions.",
    image: "/images/bi-dashboard-laptop.png",
    services: [
      {
        id: 1,
        title: "Data Visualization & Dashboards",
        description:
          "We create intuitive dashboards using Power BI, Tableau, and Looker to help teams monitor KPIs and performance in real time.",
        icon: "/icons/bar-chart.svg",
      },
      {
        id: 2,
        title: "Predictive Analytics",
        description:
          "Our analytics models forecast trends and customer behavior using AI and machine learning to guide strategic decisions.",
        icon: "/icons/line-chart.svg",
      },
      {
        id: 3,
        title: "ETL & Data Integration",
        description:
          "We design ETL pipelines that extract, transform, and load data seamlessly from multiple sources into a unified analytics system.",
        icon: "/icons/database.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Business Intelligence & Analytics Solutions",
    mainDescription:
      "Unlock the full potential of your enterprise data. Our BI solutions help you visualize trends, identify opportunities, and make evidence-based business decisions with precision and speed.",
    items: [
      {
        id: "data-warehousing",
        icon: "Leaf",
        title: "Data Warehousing",
        subtitle: "Unified & Scalable Storage",
        description:
          "We build robust data warehouses to store structured and unstructured data from diverse business sources securely.",
      },
      {
        id: "kpi-dashboards",
        icon: "Leaf",
        title: "KPI Dashboards",
        subtitle: "Real-Time Business Insights",
        description:
          "Track performance metrics and operational trends with dynamic dashboards powered by Power BI, Tableau, or Google Data Studio.",
      },
      {
        id: "ai-analytics",
        icon: "Leaf",
        title: "AI & Machine Learning Analytics",
        subtitle: "Predictive Business Insights",
        description:
          "Integrate AI models to detect anomalies, predict outcomes, and optimize operations using data-driven intelligence.",
      },
      {
        id: "reporting-automation",
        icon: "Leaf",
        title: "Automated Reporting",
        subtitle: "Save Time, Gain Clarity",
        description:
          "Automate data aggregation and reporting processes with customized BI solutions integrated into your ERP and CRM systems.",
      },
      {
        id: "customer-analytics",
        icon: "Leaf",
        title: "Customer Behavior Analytics",
        subtitle: "Understand & Engage Customers",
        description:
          "Analyze customer journeys and buying patterns to drive personalized marketing and improve customer retention.",
      },
      {
        id: "data-governance",
        icon: "Leaf",
        title: "Data Governance & Compliance",
        subtitle: "Trusted & Secure Data Management",
        description:
          "Ensure data quality, compliance, and accessibility across departments with robust governance frameworks.",
      },
    ],
    linkText: "Get Analytics Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Enterprise Data Management Platforms",
    subtitle:
      "Streamline analytics operations with secure, scalable data management and visualization solutions for enterprise use.",
    subtitleLink: { text: "data management", url: "#" },
    laptopImage: "/images/management-bi.jpg",
    mobileImage: "/images/management-bi-mobile.jpg",
    topFeatures: [
      {
        id: "cloud-analytics",
        icon: "map",
        title: "Cloud-Based BI",
        description:
          "Deploy analytics systems on AWS, Azure, or Google Cloud for scalability and accessibility across departments.",
      },
      {
        id: "collaboration",
        icon: "map",
        title: "Cross-Team Collaboration",
        description:
          "Empower teams with shared dashboards and live reporting tools for unified decision-making.",
      },
      {
        id: "integration",
        icon: "map",
        title: "ERP/CRM Integration",
        description:
          "Connect BI systems with SAP, Salesforce, or Microsoft Dynamics to centralize insights and reporting.",
      },
    ],
    bottomFeatures: [
      {
        id: "automation",
        icon: "map",
        title: "Data Automation",
        description:
          "Reduce manual work with automated data collection, transformation, and visualization processes.",
      },
      {
        id: "performance-tracking",
        icon: "map",
        title: "Performance Tracking",
        description:
          "Monitor organization-wide performance in real-time using role-based BI dashboards.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security",
        description:
          "Implement encryption, access controls, and compliance policies to protect sensitive analytics data.",
      },
      {
        id: "api-connectivity",
        icon: "map",
        title: "API Connectivity",
        description:
          "Integrate BI systems with third-party APIs for seamless data import/export and automated syncs.",
      },
    ],
    ctaText: "Talk to BI Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is Business Intelligence (BI)?",
        answer:
          "Business Intelligence (BI) involves using data analytics, visualization, and reporting tools to help organizations make informed business decisions.",
      },
      {
        id: "2",
        question: "Which BI tools do you support?",
        answer:
          "We work with Power BI, Tableau, Looker, Qlik Sense, and Google Data Studio — integrating them with your existing data systems.",
      },
      {
        id: "3",
        question: "Can you integrate BI with ERP or CRM systems?",
        answer:
          "Yes, our BI solutions integrate seamlessly with ERP and CRM platforms like SAP, Salesforce, and Microsoft Dynamics for unified reporting.",
      },
      {
        id: "4",
        question: "Do you provide predictive analytics services?",
        answer:
          "Yes, we develop predictive analytics models using AI and ML to forecast trends, demand, and customer behaviors.",
      },
      {
        id: "5",
        question: "Is cloud-based BI available?",
        answer:
          "Absolutely. We deploy BI solutions on AWS, Azure, or Google Cloud for scalable, secure, and globally accessible analytics.",
      },
      {
        id: "6",
        question: "Can I customize my BI dashboards?",
        answer:
          "Yes, we create fully customized, interactive dashboards tailored to your business goals, metrics, and data sources.",
      },
    ],
  },
};
