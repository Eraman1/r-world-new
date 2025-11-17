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
        "We design robust, scalable data warehouses that consolidate information from multiple business sources. Ensure fast access, accuracy, and long-term data integrity. Empower teams with a centralized repository built for growth and secure analytics.",
    },
    {
      id: "kpi-dashboards",
      icon: "Leaf",
      title: "KPI Dashboards",
      subtitle: "Real-Time Business Insights",
      description:
        "Monitor key performance indicators with dynamic, real-time dashboards using Power BI, Tableau, or Google Data Studio. Visualize complex data through interactive charts and graphs. Enable leaders to make quick, informed business decisions anytime.",
    },
    {
      id: "ai-analytics",
      icon: "Leaf",
      title: "AI & Machine Learning Analytics",
      subtitle: "Predictive Business Insights",
      description:
        "Leverage artificial intelligence to uncover hidden trends and forecast future outcomes. Use machine learning models to detect anomalies and optimize resource allocation. Turn raw data into predictive insights that drive smarter strategies.",
    },
    {
      id: "reporting-automation",
      icon: "Leaf",
      title: "Automated Reporting",
      subtitle: "Save Time, Gain Clarity",
      description:
        "Eliminate manual data processing with automated report generation and distribution. Seamlessly integrate with ERP, CRM, and cloud systems for real-time updates. Deliver clear, accurate insights faster to enhance strategic decision-making.",
    },
    {
      id: "customer-analytics",
      icon: "Leaf",
      title: "Customer Behavior Analytics",
      subtitle: "Understand & Engage Customers",
      description:
        "Gain deep insights into customer journeys, preferences, and buying behavior. Use analytics to personalize campaigns, improve satisfaction, and strengthen loyalty. Drive measurable results through data-backed engagement strategies.",
    },
    {
      id: "data-governance",
      icon: "Leaf",
      title: "Data Governance & Compliance",
      subtitle: "Trusted & Secure Data Management",
      description:
        "Maintain data accuracy, consistency, and compliance across all business units. Implement robust governance policies and access controls. Safeguard sensitive information while ensuring transparency and regulatory adherence.",
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
    laptopImage: "https://i.pinimg.com/1200x/ed/88/e1/ed88e14ad70676e71153190c15e90e9a.jpg",
    mobileImage: "https://i.pinimg.com/1200x/b0/3f/81/b03f815fb319ce720eea730cf59ff111.jpg",
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
      "Eliminate repetitive manual tasks with end-to-end data automation processes. Automatically collect, clean, and transform data from multiple sources. Improve accuracy and efficiency in analytics with minimal human intervention.",
  },
  {
    id: "performance-tracking",
    icon: "map",
    title: "Performance Tracking",
    description:
      "Gain real-time visibility into KPIs with interactive, role-based dashboards. Track departmental performance and identify trends effortlessly. Empower leaders to make informed decisions through data-driven insights.",
  },
  {
    id: "security",
    icon: "map",
    title: "Data Security",
    description:
      "Safeguard your business intelligence environment with enterprise-grade encryption. Apply strict access controls and adhere to compliance frameworks. Maintain data integrity and confidentiality across all analytical operations.",
  },
  {
    id: "api-connectivity",
    icon: "map",
    title: "API Connectivity",
    description:
      "Seamlessly integrate BI tools with third-party APIs and cloud services. Enable automated data imports, exports, and synchronization in real time. Enhance interoperability across your analytics ecosystem for faster insights.",
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
