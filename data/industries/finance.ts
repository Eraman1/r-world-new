import { IndustryConfig } from "@/types/industries";

export const finance: IndustryConfig = {
  slug: "finance",
  banner: {
    title: "Empower Financial Services with",
    highlight: "AI-Driven Fintech & Banking Software Solutions",
    subtitle:
      "Transform the future of finance with intelligent, secure, and scalable software solutions. From digital banking to investment automation, our platforms help financial institutions deliver faster, smarter, and more customer-centric services.",
    image: "/industry/industryFinanceBanner.webp",
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
    deviceImages: {
      laptop: "/industry/industryFinanceBanner.webp",
      tablet: "/industry/industryFinanceBanner.webp",
      mobile: "/industry/industryFinanceBanner.webp",
    },
  },

  solutions: {
<<<<<<< HEAD
  mainTitle: "AI & Blockchain Solutions for Modern Finance",
  mainDescription:
    "Revolutionize your financial ecosystem with AI automation, blockchain security, and advanced analytics. Our fintech innovations empower institutions to reduce operational risks, improve transparency, and make smarter, data-driven decisions across the global financial landscape.",
  items: [
    {
      id: "smart-banking",
      icon: "Leaf", //CreditCard
      title: "Smart Banking Platforms",
      subtitle: "",
      description:
        "Deliver seamless digital experiences through AI-powered banking systems. Integrate intelligent chatbots for customer support and instant payments. Leverage predictive analytics to enhance user engagement and loyalty. Automate core operations for efficiency and real-time monitoring. Build future-ready banks with agile, secure, and adaptive systems.",
    },
    {
      id: "payment-processing",
      icon: "Leaf", //Wallet
      title: "Secure Payment Processing Solutions",
      subtitle: "",
      description:
        "Empower global transactions with AI-backed blockchain validation. Use biometric authentication for identity assurance and fraud reduction. Streamline cross-border payments with real-time settlement tracking. Ensure data integrity and transparency across all financial channels. Deliver unmatched speed, security, and trust in every transaction.",
    },
    {
      id: "investment-automation",
      icon: "Leaf", //LineChart
      title: "Automated Investment Management",
      subtitle: "",
      description:
        "Leverage AI-driven robo-advisors for smarter portfolio allocation. Monitor assets and performance through real-time dashboards and insights. Enable investors to personalize risk tolerance and strategy preferences.  Automate rebalancing, profit optimization, and market predictions. Maximize returns through machine learning–powered financial intelligence.",
    },
    {
      id: "compliance",
      icon: "Leaf", //FileCheck
      title: "Regulatory & Compliance Management",
      subtitle: "",
      description:
        "Automate KYC, AML, and GDPR reporting through intelligent systems. Reduce manual errors with AI-based document verification workflows. Monitor compliance risks continuously with smart auditing tools.  Simplify cross-border regulatory updates and document processing. Achieve accuracy, accountability, and speed in compliance operations.",
    },
    {
      id: "fraud-monitoring",
      icon: "Leaf", //AlertTriangle
      title: "Fraud Monitoring Systems",
      subtitle: "",
      description:
        "Detect anomalies using machine learning algorithms and deep analytics. Monitor real-time transaction flows to identify suspicious behavior. Minimize financial loss through predictive fraud detection patterns. Integrate alerts and dashboards for faster decision-making. Protect institutions and customers with proactive fraud intelligence.",
    },
    {
      id: "credit-risk",
      icon: "Leaf", //BarChart
      title: "Credit Scoring & Risk Analytics",
      subtitle: "",
      description:
        "Assess borrower credibility using AI and predictive modeling. Combine big data insights to forecast loan repayment performance. Automate risk profiling and decision-making for financial accuracy. Enhance portfolio stability with adaptive scoring frameworks. Empower lenders to make smarter, data-verified lending decisions.",
    },
  ],
  linkText: "Get AI-Powered Finance Solutions",
  linkUrl: "/contact-us",
},

 
=======
    mainTitle: "AI & Blockchain Solutions for Modern Finance",
    mainDescription:
      "Revolutionize your financial ecosystem with AI automation, blockchain security, and advanced analytics. Our fintech innovations empower institutions to reduce operational risks, improve transparency, and make smarter, data-driven decisions across the global financial landscape.",
    items: [
      {
        id: "smart-banking",
        icon: "Leaf", //CreditCard
        title: "Smart Banking Platforms",
        subtitle: "",
        description:
          "Deliver seamless digital experiences through AI-powered banking systems. Integrate intelligent chatbots for customer support and instant payments. Leverage predictive analytics to enhance user engagement and loyalty. Automate core operations for efficiency and real-time monitoring. Build future-ready banks with agile, secure, and adaptive systems.",
      },
      {
        id: "payment-processing",
        icon: "Leaf", //Wallet
        title: "Secure Payment Processing Solutions",
        subtitle: "",
        description:
          "Empower global transactions with AI-backed blockchain validation. Use biometric authentication for identity assurance and fraud reduction. Streamline cross-border payments with real-time settlement tracking. Ensure data integrity and transparency across all financial channels. Deliver unmatched speed, security, and trust in every transaction.",
      },
      {
        id: "investment-automation",
        icon: "Leaf", //LineChart
        title: "Automated Investment Management",
        subtitle: "",
        description:
          "Leverage AI-driven robo-advisors for smarter portfolio allocation. Monitor assets and performance through real-time dashboards and insights. Enable investors to personalize risk tolerance and strategy preferences.  Automate rebalancing, profit optimization, and market predictions. Maximize returns through machine learning–powered financial intelligence.",
      },
      {
        id: "compliance",
        icon: "Leaf", //FileCheck
        title: "Regulatory & Compliance Management",
        subtitle: "",
        description:
          "Automate KYC, AML, and GDPR reporting through intelligent systems. Reduce manual errors with AI-based document verification workflows. Monitor compliance risks continuously with smart auditing tools.  Simplify cross-border regulatory updates and document processing. Achieve accuracy, accountability, and speed in compliance operations.",
      },
      {
        id: "fraud-monitoring",
        icon: "Leaf", //AlertTriangle
        title: "Fraud Monitoring Systems",
        subtitle: "",
        description:
          "Detect anomalies using machine learning algorithms and deep analytics. Monitor real-time transaction flows to identify suspicious behavior. Minimize financial loss through predictive fraud detection patterns. Integrate alerts and dashboards for faster decision-making. Protect institutions and customers with proactive fraud intelligence.",
      },
      {
        id: "credit-risk",
        icon: "Leaf", //BarChart
        title: "Credit Scoring & Risk Analytics",
        subtitle: "",
        description:
          "Assess borrower credibility using AI and predictive modeling. Combine big data insights to forecast loan repayment performance. Automate risk profiling and decision-making for financial accuracy. Enhance portfolio stability with adaptive scoring frameworks. Empower lenders to make smarter, data-verified lending decisions.",
      },
    ],
    linkText: "Get AI-Powered Finance Solutions",
    linkUrl: "/contact-us",
  },

>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
  managementSolutions: {
    title: "Financial Management Software Solutions",
    subtitle:
      "We build robust, compliant, and scalable financial software systems that enable data-driven decisions, reduce risks, and enhance profitability.",
    subtitleLink: { text: "financial management software", url: "#" },
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/1200x/a0/c8/4e/a0c84ef049280e56d671e59ac620cdc1.jpg",
    mobileImage: "https://i.pinimg.com/736x/c5/81/cf/c581cff6c1f74b1ae203329138289569.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/1200x/a0/c8/4e/a0c84ef049280e56d671e59ac620cdc1.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/c5/81/cf/c581cff6c1f74b1ae203329138289569.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
<<<<<<< HEAD
  {
    id: "budgeting",
    icon: "map", //Calculator
    title: "Budgeting & Forecasting Tools",
    description:
      "Gain complete control over your financial strategy with advanced budgeting tools. Leverage AI-driven forecasting models to predict expenses and revenue trends. Analyze performance through detailed scenario planning and simulations. Adjust spending dynamically to align with evolving business goals. Ensure precise financial decisions that drive consistent profitability.",
  },
  {
    id: "security",
    icon: "map", //Lock
    title: "Data Security & Compliance",
    description:
      "Protect sensitive financial information with enterprise-grade encryption. Implement role-based access and real-time security monitoring systems. Maintain complete audit trails for transparent data management.  Stay compliant with GDPR, PCI DSS, and global financial regulations. Build user trust with secure, verified, and compliant operations.",
  },
  {
    id: "multi-currency",
    icon: "map", //Globe
    title: "Multi-Currency & Global Payments",
    description:
      "Enable seamless cross-border transactions with global payment integrations. Support multiple currencies with live exchange rate synchronization. Simplify international settlements through automated reconciliation tools.  Improve accuracy with localized payment gateways and tax compliance. Expand your business reach through efficient, borderless operations.",
  },
  {
    id: "reporting",
    icon: "map", //PieChart
    title: "Performance & Compliance Reporting",
    description:
      "Generate real-time insights through interactive dashboards and analytics. Automate report generation for audits, performance, and compliance needs. Track KPIs, revenue flows, and expenditure patterns effortlessly.  Ensure accuracy with data-driven reporting and version control. Empower leadership decisions with transparent financial intelligence.",
  },
],
ctaText: "BUILD YOUR FINANCE SOFTWARE SOLUTION",
onCtaClick: () => {},

  },

  managementSolutionsTwo: {
  title: "Finance Management Software Solutions",
  subtitle:
    "Our finance software experts design intelligent systems that automate accounting, enhance compliance, and drive smarter financial decisions with real-time analytics.",
  subtitleLink: { text: "financial software development", url: "#" },
  laptopImage: "https://i.pinimg.com/1200x/69/37/8d/69378df03a6c057de690eb5a55350366.jpg",
  mobileImage: "/images/finance-management-mobile.jpg",

  topFeatures: [
    {
      id: "financial-analytics",
      icon: "BarChart3",
      title: "Financial Analytics & Reporting Systems",
      description:
        "Gain real-time insights into revenue, expenses, and cash flow. Make data-driven decisions with automated financial dashboards.",
      link: { text: "financial analytics software", url: "#" },
    },
    {
      id: "accounting-automation",
      icon: "Calculator",
      title: "Accounting & Bookkeeping Automation",
      description:
        "Simplify bookkeeping, invoicing, and reconciliation tasks. Ensure accuracy and compliance with automated accounting workflows.",
      link: { text: "accounting automation systems", url: "#" },
    },
    {
      id: "investment-management",
      icon: "PieChart",
      title: "Investment & Portfolio Management Platforms",
      description:
        "Track, analyze, and optimize investment portfolios. Enable secure asset management with AI-driven financial insights.",
      link: { text: "portfolio management software", url: "#" },
    },
    {
      id: "risk-compliance",
      icon: "ShieldCheck",
      title: "Risk Management & Compliance Software",
      description:
        "Monitor financial risks and ensure global regulatory compliance. Automate KYC, AML, and audit workflows for transparency.",
      link: { text: "financial compliance software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "budget-planning",
      icon: "Wallet",
      title: "Budgeting & Expense Planning Tools",
      description:
        "Plan and control budgets with AI-powered forecasts. Improve spending visibility and long-term financial strategy.",
    },
    {
      id: "payment-solutions",
      icon: "CreditCard",
      title: "Payment & Transaction Management Systems",
      description:
        "Process global transactions securely and efficiently. Support multi-currency payments with fraud prevention layers.",
    },
    {
      id: "client-management",
      icon: "Users",
      title: "Client Account & Loan Management Platforms",
      description:
        "Manage customer accounts, credit scoring, and loan tracking. Simplify finance workflows through automated dashboards.",
    },
    {
      id: "audit-tools",
      icon: "FileCheck",
      title: "Audit & Compliance Monitoring Tools",
      description:
        "Conduct financial audits with intelligent reporting. Ensure accuracy and traceability across all financial operations.",
    },
  ],

  ctaText: "GET FINANCE SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
},

 faq :{
  title: "Finance FAQ",
  items: [
    {
      id: "1",
      question: "What are financial software solutions?",
      answer:
        "Financial software solutions help organizations manage accounting, investments, budgeting, and risk assessment. They automate financial operations, ensure regulatory compliance, and deliver data-driven insights for better decision-making.",
    },
    {
      id: "2",
      question: "How can digital finance platforms improve business efficiency?",
      answer:
        "Digital finance platforms streamline workflows by automating invoicing, expense tracking, and reporting. They minimize errors, enhance transparency, and provide real-time visibility into financial performance and cash flow.",
    },
    {
      id: "3",
      question: "What technologies are shaping modern finance?",
      answer:
        "Technologies like Artificial Intelligence, Blockchain, and Big Data are transforming finance. They enable fraud detection, automated trading, predictive analytics, and secure digital transactions for individuals and enterprises.",
    },
    {
      id: "4",
      question: "How does AI impact financial management?",
      answer:
        "AI enhances financial management by automating repetitive tasks such as reconciliation, forecasting, and customer service. It also delivers intelligent insights through predictive analytics to improve investment and credit decisions.",
    },
    {
      id: "5",
      question: "Is data security important in financial applications?",
      answer:
        "Yes. Financial software employs encryption, secure APIs, and compliance with standards like GDPR and PCI DSS to protect sensitive data. Multi-factor authentication and access control further strengthen data security.",
    },
    {
      id: "6",
      question: "Can financial software be customized for specific business needs?",
      answer:
        "Absolutely. Financial solutions can be tailored for industries like banking, insurance, real estate, or fintech startups, offering features such as custom reporting, payment integration, and regulatory compliance tools.",
    },
    {
      id: "7",
      question: "What is the role of blockchain in financial services?",
      answer:
        "Blockchain ensures secure, transparent, and tamper-proof financial transactions. It reduces fraud, simplifies settlements, and improves trust in areas like payments, digital identity, and asset tokenization.",
    },
    {
      id: "8",
      question: "How can finance automation benefit organizations?",
      answer:
        "Finance automation reduces manual effort in accounting, payroll, and auditing. It enhances accuracy, speeds up closing cycles, and allows teams to focus on strategic financial planning rather than routine tasks.",
    },
    {
      id: "9",
      question: "Do financial platforms support mobile and cloud access?",
      answer:
        "Yes. Modern finance platforms are cloud-based and mobile-friendly, allowing users to manage transactions, view dashboards, and generate reports securely from any device, anytime.",
    },
    {
      id: "10",
      question: "What is the future of finance technology?",
      answer:
        "The future of finance lies in AI-driven analytics, decentralized finance (DeFi), open banking APIs, and real-time risk management. These innovations will make financial services more personalized, transparent, and accessible worldwide.",
    },
  ],
},
=======
      {
        id: "budgeting",
        icon: "map", //Calculator
        title: "Budgeting & Forecasting Tools",
        description:
          "Gain complete control over your financial strategy with advanced budgeting tools. Leverage AI-driven forecasting models to predict expenses and revenue trends. Analyze performance through detailed scenario planning and simulations. Adjust spending dynamically to align with evolving business goals. Ensure precise financial decisions that drive consistent profitability.",
      },
      {
        id: "security",
        icon: "map", //Lock
        title: "Data Security & Compliance",
        description:
          "Protect sensitive financial information with enterprise-grade encryption. Implement role-based access and real-time security monitoring systems. Maintain complete audit trails for transparent data management.  Stay compliant with GDPR, PCI DSS, and global financial regulations. Build user trust with secure, verified, and compliant operations.",
      },
      {
        id: "multi-currency",
        icon: "map", //Globe
        title: "Multi-Currency & Global Payments",
        description:
          "Enable seamless cross-border transactions with global payment integrations. Support multiple currencies with live exchange rate synchronization. Simplify international settlements through automated reconciliation tools.  Improve accuracy with localized payment gateways and tax compliance. Expand your business reach through efficient, borderless operations.",
      },
      {
        id: "reporting",
        icon: "map", //PieChart
        title: "Performance & Compliance Reporting",
        description:
          "Generate real-time insights through interactive dashboards and analytics. Automate report generation for audits, performance, and compliance needs. Track KPIs, revenue flows, and expenditure patterns effortlessly.  Ensure accuracy with data-driven reporting and version control. Empower leadership decisions with transparent financial intelligence.",
      },
    ],
    ctaText: "BUILD YOUR FINANCE SOFTWARE SOLUTION",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6

  managementSolutionsTwo: {
    title: "Finance Management Software Solutions",
    subtitle:
      "Our finance software experts design intelligent systems that automate accounting, enhance compliance, and drive smarter financial decisions with real-time analytics.",
    subtitleLink: { text: "financial software development", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/69/37/8d/69378df03a6c057de690eb5a55350366.jpg",
    mobileImage: "/images/finance-management-mobile.jpg",

    topFeatures: [
      {
        id: "financial-analytics",
        icon: "BarChart3",
        title: "Financial Analytics & Reporting Systems",
        description:
          "Gain real-time insights into revenue, expenses, and cash flow. Make data-driven decisions with automated financial dashboards.",
        link: { text: "financial analytics software", url: "#" },
      },
      {
        id: "accounting-automation",
        icon: "Calculator",
        title: "Accounting & Bookkeeping Automation",
        description:
          "Simplify bookkeeping, invoicing, and reconciliation tasks. Ensure accuracy and compliance with automated accounting workflows.",
        link: { text: "accounting automation systems", url: "#" },
      },
      {
        id: "investment-management",
        icon: "PieChart",
        title: "Investment & Portfolio Management Platforms",
        description:
          "Track, analyze, and optimize investment portfolios. Enable secure asset management with AI-driven financial insights.",
        link: { text: "portfolio management software", url: "#" },
      },
      {
        id: "risk-compliance",
        icon: "ShieldCheck",
        title: "Risk Management & Compliance Software",
        description:
          "Monitor financial risks and ensure global regulatory compliance. Automate KYC, AML, and audit workflows for transparency.",
        link: { text: "financial compliance software", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "budget-planning",
        icon: "Wallet",
        title: "Budgeting & Expense Planning Tools",
        description:
          "Plan and control budgets with AI-powered forecasts. Improve spending visibility and long-term financial strategy.",
      },
      {
        id: "payment-solutions",
        icon: "CreditCard",
        title: "Payment & Transaction Management Systems",
        description:
          "Process global transactions securely and efficiently. Support multi-currency payments with fraud prevention layers.",
      },
      {
        id: "client-management",
        icon: "Users",
        title: "Client Account & Loan Management Platforms",
        description:
          "Manage customer accounts, credit scoring, and loan tracking. Simplify finance workflows through automated dashboards.",
      },
      {
        id: "audit-tools",
        icon: "FileCheck",
        title: "Audit & Compliance Monitoring Tools",
        description:
          "Conduct financial audits with intelligent reporting. Ensure accuracy and traceability across all financial operations.",
      },
    ],

    ctaText: "GET FINANCE SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
    title: "Finance FAQ",
    items: [
      {
        id: "1",
        question: "What are financial software solutions?",
        answer:
          "Financial software solutions help organizations manage accounting, investments, budgeting, and risk assessment. They automate financial operations, ensure regulatory compliance, and deliver data-driven insights for better decision-making.",
      },
      {
        id: "2",
        question:
          "How can digital finance platforms improve business efficiency?",
        answer:
          "Digital finance platforms streamline workflows by automating invoicing, expense tracking, and reporting. They minimize errors, enhance transparency, and provide real-time visibility into financial performance and cash flow.",
      },
      {
        id: "3",
        question: "What technologies are shaping modern finance?",
        answer:
          "Technologies like Artificial Intelligence, Blockchain, and Big Data are transforming finance. They enable fraud detection, automated trading, predictive analytics, and secure digital transactions for individuals and enterprises.",
      },
      {
        id: "4",
        question: "How does AI impact financial management?",
        answer:
          "AI enhances financial management by automating repetitive tasks such as reconciliation, forecasting, and customer service. It also delivers intelligent insights through predictive analytics to improve investment and credit decisions.",
      },
      {
        id: "5",
        question: "Is data security important in financial applications?",
        answer:
          "Yes. Financial software employs encryption, secure APIs, and compliance with standards like GDPR and PCI DSS to protect sensitive data. Multi-factor authentication and access control further strengthen data security.",
      },
      {
        id: "6",
        question:
          "Can financial software be customized for specific business needs?",
        answer:
          "Absolutely. Financial solutions can be tailored for industries like banking, insurance, real estate, or fintech startups, offering features such as custom reporting, payment integration, and regulatory compliance tools.",
      },
      {
        id: "7",
        question: "What is the role of blockchain in financial services?",
        answer:
          "Blockchain ensures secure, transparent, and tamper-proof financial transactions. It reduces fraud, simplifies settlements, and improves trust in areas like payments, digital identity, and asset tokenization.",
      },
      {
        id: "8",
        question: "How can finance automation benefit organizations?",
        answer:
          "Finance automation reduces manual effort in accounting, payroll, and auditing. It enhances accuracy, speeds up closing cycles, and allows teams to focus on strategic financial planning rather than routine tasks.",
      },
      {
        id: "9",
        question: "Do financial platforms support mobile and cloud access?",
        answer:
          "Yes. Modern finance platforms are cloud-based and mobile-friendly, allowing users to manage transactions, view dashboards, and generate reports securely from any device, anytime.",
      },
      {
        id: "10",
        question: "What is the future of finance technology?",
        answer:
          "The future of finance lies in AI-driven analytics, decentralized finance (DeFi), open banking APIs, and real-time risk management. These innovations will make financial services more personalized, transparent, and accessible worldwide.",
      },
    ],
  },
};
