import { IndustryConfig } from "@/types/industries";
 
export const finance: IndustryConfig = {
  slug: "finance",
  banner: {
    title: "Empower Financial Services with",
    highlight: "AI-Driven Fintech & Banking Software Solutions",
    subtitle:
      "Transform the future of finance with intelligent, secure, and scalable software solutions. From digital banking to investment automation, our platforms help financial institutions deliver faster, smarter, and more customer-centric services.",
    image:
        "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Finance Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Fintech Software Developers",
    description:
      "Our fintech specialists build advanced digital finance solutions that drive innovation, security, and operational excellence. From AI-powered analytics to blockchain-backed transactions, we help you modernize and scale financial operations globally.",
    services: [
      {
        id: "digitalbanking",
        title: "Digital Banking Platforms",
        icon: "Tractor", //Building
        position: "left",
      },
      {
        id: "wealthmanagement",
        title: "Wealth & Investment Management Systems",
        icon: "Tractor", //BarChart3
        position: "left",
      },
      {
        id: "frauddetection",
        title: "AI-Based Fraud Detection Systems",
        icon: "Tractor", //ShieldCheck
        position: "left",
      },
      {
        id: "blockchain",
        title: "Blockchain Payment Solutions",
        icon: "Tractor", //Cube
        position: "left",
      },
      {
        id: "mobilebanking",
        title: "Mobile Banking & Wallet Apps",
        icon: "Tractor", //Smartphone
        position: "right",
      },
      {
        id: "riskanalytics",
        title: "Risk Analytics & Compliance Tools",
        icon: "Tractor", //Activity
        position: "right",
      },
      {
        id: "loanautomation",
        title: "Loan Origination & Servicing Systems",
        icon: "Tractor", //FileText
        position: "right",
      },
      {
        id: "tradingplatforms",
        title: "Trading & Investment Platforms",
        icon: "Tractor", //TrendingUp
        position: "right",
      },
    ],
  },
 
  solutions: {
    mainTitle: "AI & Blockchain Solutions for Modern Finance",
    mainDescription:
      "Revolutionize financial operations with advanced AI, automation, and blockchain integration. Our fintech solutions enhance transparency, reduce risks, and optimize decision-making for banks, lenders, and financial institutions worldwide.",
    items: [
      {
        id: "smart-banking",
        icon: "Leaf", //CreditCard
        title: "Smart Banking Platforms",
        subtitle: "",
        description:
          "Deliver seamless digital experiences through AI-powered banking systems with integrated payments, chatbots, and analytics-driven insights.",
      },
      {
        id: "payment-processing",
        icon: "Leaf", //Wallet
        title: "Secure Payment Processing Solutions",
        subtitle: "",
        description:
          "Enable faster, safer global transactions with blockchain and biometric verification that eliminate fraud and reduce processing times.",
      },
      {
        id: "investment-automation",
        icon: "Leaf", //LineChart
        title: "Automated Investment Management",
        subtitle: "",
        description:
          "Empower investors with AI-driven robo-advisors, portfolio tracking, and real-time analytics for smarter financial decisions.",
      },
      {
        id: "compliance",
        icon: "Leaf", //FileCheck
        title: "Regulatory & Compliance Management",
        subtitle: "",
        description:
          "Automate compliance workflows and reporting to meet financial regulations like AML, KYC, and GDPR efficiently and accurately.",
      },
      {
        id: "fraud-monitoring",
        icon: "Leaf", //AlertTriangle
        title: "Fraud Monitoring Systems",
        subtitle: "",
        description:
          "Detect and prevent fraudulent activities using machine learning algorithms that analyze transaction patterns in real time.",
      },
      {
        id: "credit-risk",
        icon: "Leaf", //BarChart
        title: "Credit Scoring & Risk Analytics",
        subtitle: "",
        description:
          "Use AI and big data to assess borrower credibility, predict defaults, and optimize lending decisions with precision.",
      },
    ],
    linkText: "Get AI-Powered Finance Solutions",
    linkUrl: "/contact-us",
  },
 
  managementSolutions: {
    title: "Financial Management Software Solutions",
    subtitle:
      "We build robust, compliant, and scalable financial software systems that enable data-driven decisions, reduce risks, and enhance profitability.",
    subtitleLink: { text: "financial management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "financial-analytics",
        icon: "map", //BarChart
        title: "Financial Analytics & Reporting",
        description:
          "Gain deep insights into cash flow, revenue trends, and performance metrics with real-time financial dashboards.",
        link: { text: "AI finance tools", url: "#" },
      },
      {
        id: "automation",
        icon: "map", //Settings
        title: "Accounting & Process Automation",
        description:
          "Automate accounting, reconciliation, and transaction processing to minimize errors and increase operational efficiency.",
      },
      {
        id: "integration",
        icon: "map", //Plug
        title: "ERP & CRM System Integration",
        description:
          "Integrate your financial software with ERP, CRM, and third-party tools for unified business management and reporting.",
      },
    ],
    bottomFeatures: [
      {
        id: "budgeting",
        icon: "map", //Calculator
        title: "Budgeting & Forecasting Tools",
        description:
          "Plan and manage budgets with predictive analytics that optimize spending and improve financial planning accuracy.",
      },
      {
        id: "security",
        icon: "map", //Lock
        title: "Data Security & Compliance",
        description:
          "Ensure secure handling of sensitive financial data with encryption, audit trails, and global compliance standards.",
      },
      {
        id: "multi-currency",
        icon: "map", //Globe
        title: "Multi-Currency & Global Payments",
        description:
          "Support seamless international transactions and exchanges with real-time currency conversion and localization features.",
      },
      {
        id: "reporting",
        icon: "map", //PieChart
        title: "Performance & Compliance Reporting",
        description:
          "Automate and visualize key financial reports to meet compliance and audit requirements with accuracy and transparency.",
      },
    ],
    ctaText: "BUILD YOUR FINANCE SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
};