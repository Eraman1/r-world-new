import { ServiceConfig } from "./services";

export const businessIntelligence: ServiceConfig = {
  slug: "business-intelligence",
  banner: {
    title: "Transform Your Data into Insights with",
    highlight: "Business Intelligence Solutions",
    subtitle:
      "Leverage data-driven decision-making with our BI services. We design smart dashboards, analytics platforms, and reporting tools to empower your business growth.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get BI Solutions",
  },

  developerDetails: {
    heading: "Expert Business Intelligence Developers",
    subheading:
      "Our BI experts help organizations unlock the power of data with intelligent analytics, visualization, and reporting solutions.",
    mainTitle: "Professional Business Intelligence Development Services",
    mainDescription:
      "We deliver scalable BI solutions that turn complex data into actionable insights. From data warehousing to visualization, we help you make informed business decisions faster.",
    image: "/images/business-intelligence-dashboard.png",
    services: [
      {
        id: 1,
        title: "Data Warehousing",
        description:
          "Design and develop robust data warehouses to centralize your business data. Ensure data consistency, scalability, and performance for advanced analytics and reporting.",
        icon: "/icons/data-warehouse.svg",
      },
      {
        id: 2,
        title: "Data Visualization",
        description:
          "Create interactive dashboards and reports using Power BI, Tableau, or Looker. Simplify complex data into clear visual insights to support faster and smarter decisions.",
        icon: "/icons/data-visualization.svg",
      },
      {
        id: 3,
        title: "Predictive Analytics",
        description:
          "Use AI and machine learning to forecast trends and business outcomes. Analyze patterns and behaviors to improve planning, risk management, and decision-making.",
        icon: "/icons/predictive-analytics.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive Business Intelligence Solutions",
  mainDescription:
    "Our BI solutions empower organizations with real-time insights, predictive analytics, and interactive dashboards to drive better decisions and performance.",
  linkText: "Get BI Consultation",
  linkUrl: "/contact-us",
  items: [
    {
      id: "data-integration",
      icon: "Leaf",
      title: "Data Integration & ETL",
      subtitle: "Seamless Data Flow",
      description:
        "Integrate and consolidate data from multiple systems into a single source of truth. \nEnsure high data accuracy, consistency, and reliability across all departments. \nAutomate ETL workflows for efficient data transformation and transfer. \nEliminate data silos and manual errors using advanced connectors. \nEmpower teams with a unified, real-time view of business operations.",
    },
    {
      id: "dashboard-analytics",
      icon: "Leaf",
      title: "Dashboard & Reporting",
      subtitle: "Visual Insights that Drive Action",
      description:
        "Create interactive dashboards using tools like Power BI and Tableau. \nVisualize key metrics, KPIs, and performance indicators effectively. \nEnable data access controls for executives and department heads. \nMonitor performance trends in real time with automated updates. \nTransform complex data into clear, actionable business insights.",
    },
    {
      id: "predictive-insights",
      icon: "Leaf",
      title: "Predictive Analytics",
      subtitle: "Forecast with Confidence",
      description:
        "Leverage machine learning models to forecast future trends accurately. \nAnalyze customer patterns, operational risks, and market dynamics. \nGenerate predictive reports for smarter, data-backed planning. \nSupport proactive strategies that minimize risks and boost growth. \nEmpower decision-makers with real-time predictive intelligence.",
    },
    {
      id: "data-governance",
      icon: "Leaf",
      title: "Data Governance & Quality",
      subtitle: "Maintain Data Integrity",
      description:
        "Establish governance frameworks to ensure accuracy and reliability. \nSet access rules, validation checks, and quality standards organization-wide. \nMonitor and resolve data duplication, inconsistencies, and conflicts. \nMaintain compliance with regional and global data regulations. \nBuild stakeholder trust with transparent and auditable data systems.",
    },
    {
      id: "self-service-bi",
      icon: "Leaf",
      title: "Self-Service BI Solutions",
      subtitle: "Empower Business Users",
      description:
        "Enable business users to explore and visualize data independently. \nUse drag-and-drop tools for instant report creation and analysis. \nAccelerate time-to-insight without relying on IT intervention. \nPromote agility and innovation through data democratization. \nCultivate a data-driven culture across all business functions.",
    },
    {
      id: "cloud-bi",
      icon: "Leaf",
      title: "Cloud BI Solutions",
      subtitle: "Scalable & Secure BI Systems",
      description:
        "Deploy flexible BI environments on AWS, Azure, or Google Cloud. \nEnsure top-tier security, scalability, and uptime performance. \nEnable real-time collaboration and data access across teams. \nReduce infrastructure costs through cloud-based automation. \nUnlock faster insights with scalable, on-demand BI tools.",
    },
  ],
},


  managementSolutions: {
    title: "Business Intelligence Management Tools",
    subtitle:
      "Manage, monitor, and optimize BI systems with our management solutions for data analytics teams of any size.",
    subtitleLink: { text: "business intelligence software", url: "#" },
    laptopImage: "/images/bi-management.jpg",
    mobileImage: "/images/bi-management-mobile.jpg",
    topFeatures: [
      {
        id: "data-monitoring",
        icon: "map",
        title: "Real-Time Data Monitoring",
        description:
          "Track and monitor live data streams and KPIs. Identify anomalies and trends instantly. Ensure data accuracy and freshness. Empower leadership with live insights. Improve agility and responsiveness.",
      },
      {
        id: "collaboration",
        icon: "map",
        title: "Team Collaboration & Sharing",
        description:
          "Enable real-time collaboration among analysts and executives. Share dashboards and reports securely. Facilitate teamwork across departments. Improve communication and decision alignment. Increase productivity and transparency.",
      },
      {
        id: "reporting-automation",
        icon: "map",
        title: "Automated Reporting",
        description:
          "Automate routine reports and performance summaries. Schedule data refreshes and updates. Reduce manual efforts and errors. Deliver consistent insights across teams. Focus more on analysis and less on data prep.",
      },
    ],
    ctaText: "Get BI Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - Business Intelligence Services",
    items: [
      {
        id: "1",
        question: "What is Business Intelligence (BI)?",
        answer:
          "Business Intelligence is a set of tools and techniques used to transform data into actionable insights for smarter business decisions.",
      },
      {
        id: "2",
        question: "Which BI tools do you work with?",
        answer:
          "We specialize in Power BI, Tableau, Looker, Qlik Sense, and custom BI dashboards built using cloud platforms like AWS and Azure.",
      },
      {
        id: "3",
        question: "Can you integrate BI with our existing systems?",
        answer:
          "Yes, we integrate BI platforms with ERP, CRM, databases, and cloud systems to ensure seamless data flow and unified reporting.",
      },
      {
        id: "4",
        question: "Do you provide data visualization services?",
        answer:
          "Absolutely. We design interactive dashboards and reports that make complex data easy to interpret and act upon.",
      },
      {
        id: "5",
        question: "How secure are your BI solutions?",
        answer:
          "We implement role-based access control, data encryption, and compliance protocols to ensure your business data remains secure and confidential.",
      },
      {
        id: "6",
        question: "Do you offer cloud-based BI solutions?",
        answer:
          "Yes, we deploy BI systems on AWS, Azure, or GCP for scalability, reliability, and cost-efficiency.",
      },
      {
        id: "7",
        question: "Can you build predictive analytics dashboards?",
        answer:
          "Yes, we create predictive and AI-powered dashboards that analyze patterns and forecast outcomes to help you plan strategically.",
      },
    ],
  },
};
