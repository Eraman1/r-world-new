import { SolutionConfig } from "@/types/solutions";

export const SAP: SolutionConfig = {
  slug: "SAP",

  banner: {
    title: "Empower Enterprises with",
    highlight: "Intelligent SAP Business Solutions",
    subtitle:
      "Streamline operations, drive innovation, and make data-driven decisions with SAP’s robust ERP, CRM, and analytics platforms tailored to your business goals.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore SAP Solutions",
  },

  developerDetails: {
    heading: "SAP-Certified Experts in Enterprise Transformation",
    subheading:
      "We help organizations harness the full potential of SAP software — from digital transformation to business process automation — ensuring seamless performance and scalability.",
    mainTitle: "Comprehensive SAP Implementation & Consulting Services",
    mainDescription:
      "Our SAP specialists design and implement tailored enterprise systems for finance, supply chain, human resources, and analytics. We deliver end-to-end support, including integration, migration, and maintenance of SAP ecosystems.",
    image: "/images/sap-dashboard.png",
    services: [
      {
        id: 1,
        title: "SAP ERP Implementation",
        description:
          "Deploy and customize SAP ERP modules like finance, logistics, HR, and manufacturing to align with your organization’s workflows.",
        icon: "/icons/gear.svg",
      },
      {
        id: 2,
        title: "SAP S/4HANA Migration",
        description:
          "Transition seamlessly from legacy systems to SAP S/4HANA for real-time data processing, automation, and advanced analytics.",
        icon: "/icons/server.svg",
      },
      {
        id: 3,
        title: "SAP Analytics & Reporting",
        description:
          "Empower decision-makers with SAP Analytics Cloud, predictive models, and business intelligence dashboards.",
        icon: "/icons/bar-chart.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive SAP Business Solutions",
  mainDescription:
    "We deliver enterprise-grade SAP solutions that unify departments, automate workflows, and provide real-time business insights — improving agility and profitability.",
  items: [
    {
      id: "erp",
      icon: "Leaf",
      title: "Enterprise Resource Planning (ERP)",
      subtitle: "Integrated Business Management",
      description:
        "Streamline core business operations with SAP ERP for finance, logistics, procurement, and HR. Improve cross-departmental visibility through centralized data. Enhance efficiency and decision-making with automation and unified reporting tools.",
    },
    {
      id: "crm",
      icon: "Leaf",
      title: "Customer Relationship Management (CRM)",
      subtitle: "Enhance Customer Engagement",
      description:
        "Leverage SAP CRM and Sales Cloud to manage leads, opportunities, and campaigns effectively. Deliver personalized customer experiences through data-driven insights. Strengthen loyalty by aligning marketing, sales, and support strategies.",
    },
    {
      id: "analytics",
      icon: "Leaf",
      title: "SAP Analytics Cloud",
      subtitle: "Data-Driven Decision Making",
      description:
        "Unify data visualization, planning, and predictive analytics in one powerful cloud solution. Access real-time business intelligence to identify growth opportunities. Empower teams with interactive dashboards for faster, smarter decisions.",
    },
    {
      id: "supply-chain",
      icon: "Leaf",
      title: "Supply Chain Management (SCM)",
      subtitle: "End-to-End Visibility",
      description:
        "Gain complete control and transparency across your supply chain using SAP IBP, Ariba, and TM. Predict disruptions and optimize demand planning with real-time analytics. Enhance collaboration between suppliers, partners, and logistics teams.",
    },
    {
      id: "hr",
      icon: "Leaf",
      title: "Human Capital Management (HCM)",
      subtitle: "Empower Your Workforce",
      description:
        "Simplify workforce management with SAP SuccessFactors for payroll, performance, and recruitment. Drive employee engagement through modern HR tools and analytics. Build a culture of growth by aligning people with organizational goals.",
    },
    {
      id: "integration",
      icon: "Leaf",
      title: "SAP Integration Suite",
      subtitle: "Seamless Data Connectivity",
      description:
        "Connect SAP and non-SAP systems using APIs, prebuilt connectors, and workflow automation. Enable secure, real-time data exchange across business platforms. Ensure smoother operations through unified application and process integration.",
    },
  ],
  linkText: "Get SAP Business Solutions",
  linkUrl: "/contact-us",
},

  managementSolutions: {
    title: "SAP Management & Cloud Systems",
    subtitle:
      "Simplify operations with SAP cloud management solutions for finance, supply chain, HR, and analytics — all under one secure platform.",
    subtitleLink: { text: "SAP Cloud Platform", url: "#" },
    laptopImage: "/images/management-sap.jpg",
    mobileImage: "/images/management-sap-mobile.jpg",
    topFeatures: [
      {
        id: "cloud",
        icon: "map",
        title: "Cloud-Ready Architecture",
        description:
          "Run SAP S/4HANA Cloud for real-time business management with flexible scalability and secure infrastructure.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Process Automation Tools",
        description:
          "Leverage SAP Build Process Automation to streamline repetitive tasks and improve efficiency across departments.",
      },
      {
        id: "compliance",
        icon: "map",
        title: "Compliance & Risk Management",
        description:
          "Ensure compliance with SAP GRC tools that monitor access, audit logs, and risk across your enterprise systems.",
      },
    ],
    bottomFeatures: [
  {
    id: "data-analytics",
    icon: "map",
    title: "Real-Time Data Analytics",
    description:
      "Gain actionable insights instantly with SAP BW/4HANA and SAP Analytics Cloud. Visualize performance metrics and KPIs across departments in real time. Empower leadership teams to make faster, data-driven business decisions with confidence.",
  },
  {
    id: "integration",
    icon: "map",
    title: "Integration with Third-Party Tools",
    description:
      "Connect SAP seamlessly with Salesforce, Microsoft 365, and other enterprise systems. Enable automated data exchange and unified workflows across platforms. Enhance productivity with synchronized operations and cross-application intelligence.",
  },
  {
    id: "security",
    icon: "map",
    title: "Advanced Security & Backup",
    description:
      "Protect enterprise data using SAP’s robust, multi-layered security framework. Implement automated backups, encryption, and access controls to prevent breaches. Ensure business continuity through disaster recovery and compliance management.",
  },
  {
    id: "performance",
    icon: "map",
    title: "Performance Optimization",
    description:
      "Continuously monitor and enhance system health using SAP Solution Manager. Improve load balancing, minimize downtime, and maximize processing efficiency. Maintain peak performance with predictive analytics and proactive system tuning.",
  },
],
ctaText: "Talk to SAP Experts",
onCtaClick: () => {},
  },
  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What SAP solutions do you specialize in?",
        answer:
          "We specialize in SAP S/4HANA, SAP ERP, SAP Analytics Cloud, SAP SuccessFactors, and SAP Ariba for end-to-end business transformation.",
      },
      {
        id: "2",
        question: "Can you migrate our existing ERP system to SAP?",
        answer:
          "Yes. We provide complete SAP migration services, including data migration, configuration, and user training to ensure a smooth transition.",
      },
      {
        id: "3",
        question: "Do you offer SAP integration with other tools?",
        answer:
          "Absolutely. Our SAP Integration Suite experts connect SAP systems with CRM, finance, and analytics platforms using APIs and middleware.",
      },
      {
        id: "4",
        question: "Is SAP suitable for small and mid-sized businesses?",
        answer:
          "Yes, SAP Business One and SAP S/4HANA Cloud are scalable solutions that suit businesses of all sizes, from startups to large enterprises.",
      },
      {
        id: "5",
        question: "Do you provide SAP maintenance and support?",
        answer:
          "Yes. We offer end-to-end SAP support — including upgrades, bug fixes, performance tuning, and ongoing system monitoring.",
      },
      {
        id: "6",
        question: "How does SAP improve business performance?",
        answer:
          "SAP unifies your business data, automates workflows, and provides predictive insights to enhance efficiency, accuracy, and agility.",
      },
    ],
  },
};
