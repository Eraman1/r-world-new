import { IndustryConfig } from "@/types/industries";
 
export const banking: IndustryConfig = {
    slug: "banking",
    banner: {
      title: "Empower Banking with",
      highlight: "Next-Gen Financial Software Solutions",
      subtitle:
        "Collaborate with top-tier developers to build powerful, scalable software that fuels innovation and accelerates your business success.",
      image:
        "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
      linkText: "Get Banking Solutions",
    },
    techHero: {
      heading: "Hire Expert Banking & FinTech Software Developers",
      description:
        "We create intelligent, secure, and compliant software solutions that redefine how banks operate and engage with their customers in the digital era.",
      services: [
        {
          id: "land",
          title: "Core Banking Systems",
          icon: "Tractor",
          position: "left",
        },
        {
          id: "livestock",
          title: "EMV Card Processing ",
          icon: "Beef",
          position: "left",
        },
        {
          id: "farm",
          title: "ACH & EFT Transactions",
          icon: "Warehouse",
          position: "left",
        },
        {
          id: "precision",
          title: "SWIFT & Cross-Border Payments",
          icon: "Wheat",
          position: "left",
        },
        {
          id: "aquaculture",
          title: "Mobile & Internet Banking Apps",
          icon: "Fish",
          position: "right",
        },
        {
          id: "seed",
          title: "Automated Reconciliation",
          icon: "ShoppingCart",
          position: "right",
        },
        {
          id: "drone",
          title: "Open Banking API Development",
          icon: "PlaneTakeoff",
          position: "right",
        },
        {
          id: "food",
          title: "KYC & AML Compliance",
          icon: "FileCheck",
          position: "right",
        },
      ],
      // deviceImages: {
      //   laptop: "/images/devices/laptop-agri.png",
      //   tablet: "/images/devices/tablet-agri.png",
      //   mobile: "/images/devices/mobile-agri.png",
      // },
    },
    solutions: {
      mainTitle: "AI Solutions for Smart Banking",
      mainDescription:
        "Our expert developers integrate Artificial Intelligence (AI) into banking systems to deliver intelligent automation, predictive analytics, and personalized customer experiences. AI-driven insights analyze transaction data, spending patterns, and credit behavior to enhance decision-making and risk management. Transform your banking operations with cutting-edge AI technologies that improve fraud detection, automate loan processing, and streamline compliance. Empower your institution with real-time analytics, smarter customer engagement, and data-driven innovation for a secure and efficient digital future.",
      items: [
        {
          id: "crop-yield",
          icon: "Warehouse",
          title: "Predictive Financial Analytics",
          subtitle: "",
          description:
            "Our AI-driven predictive analytics transforms financial data into actionable insights. By analyzing transaction history, market trends, and customer behavior, banks can forecast risks and opportunities accurately. This empowers smarter lending, investment, and portfolio decisions. Ultimately, it reduces defaults, optimizes returns, and strengthens financial performance.",
        },
        {
          id: "chemical-spraying",
          icon: "Sprout",
          title: "Smart Loan Management",
          subtitle: "",
          description:
           "Our AI-powered Smart Loan Management streamlines the lending process from application to repayment. It evaluates credit risk, predicts borrower behavior, and automates approvals efficiently. Banks can optimize interest rates, reduce defaults, and improve customer satisfaction. This intelligent system ensures faster, safer, and smarter lending decisions.",
        },
        {
          id: "seed-sowing",
          icon: "Leaf",
          title: "Digital Banking Security",
          subtitle: "",
          description:
          "Our advanced AI solutions protect digital banking platforms from fraud and cyber threats in real time. By monitoring transactions and user behavior, suspicious activities are detected instantly. This ensures secure, seamless banking experiences for customers. Banks can minimize risk, build trust, and safeguard financial assets effectively.",
      },
        {
          id: "autonomous-harvesting",
          icon: "Tractor",
          title: "Credit Risk Prediction",
          subtitle: "",
          description:
            "Our AI-driven system analyzes credit history, financial behavior, and market trends to accurately predict borrower risk. It helps banks make smarter lending decisions and optimize interest rates. By identifying potential defaults early, financial losses are minimized. This ensures safer loans, healthier portfolios, and stronger customer trust.",
        },
        {
          id: "crop-monitoring",
          icon: "Shield",
          title: "Wealth Management Banking Services",
          subtitle: "",
          description:
            "Our AI-powered wealth management solutions provide personalized financial strategies tailored to each client. By analyzing market trends, investment performance, and risk profiles, banks can optimize portfolio growth. Clients receive smart guidance for wealth preservation and expansion. This ensures better returns, informed decisions, and long-term financial security.",
        },
        {
          id: "disease-diagnosis",
          icon: "Bug",
          title: "Intelligent Payment Verification",
          subtitle: "",
          description:
            "Our AI-driven payment verification system monitors transactions in real time to detect fraud and anomalies instantly. It ensures every payment is accurate, secure, and compliant with regulations. Banks can reduce financial risk and operational errors effectively. This builds customer trust while streamlining secure digital transactions.",
        },
      ],
      linkText: "Get AI-Powered Banking Solutions",
      linkUrl: "/contact-us",
    },
    managementSolutions: {
      title: "Banking Management Software Solutions",
      subtitle:
        "R-World’s expert banking software developers bring deep fintech experience and innovation to create secure, intelligent, and scalable banking management systems. Our tailored solutions streamline operations, enhance digital banking experiences, and empower financial institutions to perform efficiently in a dynamic market.",
      subtitleLink: { text: "land management software", url: "#" },
      laptopImage: "https://i.pinimg.com/736x/74/ad/5c/74ad5caa313ef13c7d55bc66ce4a1906.jpg",
      mobileImage: "https://i.pinimg.com/1200x/f6/c3/f2/f6c3f2a835dc8558ebcfd2faba7d4d40.jpg",
      topFeatures: [
        {
          id: "mapping",
          icon: "map",
          title: "Account Reconciliation & Ledger Automation",
          description:
           "Our AI automation streamlines account reconciliation and ledger management with real-time accuracy, detecting discrepancies and matching transactions instantly. It eliminates manual effort, reduces errors, and ensures transparent, audit-ready banking operations.",
          link: { text: "GIS & GPS technologies", url: "#" },
        },
        {
          id: "3d-design",
          icon: "box",
          title: "Customer Onboarding & KYC Automation",
          description:
            "Our AI-driven KYC automation accelerates customer onboarding with speed and precision. It verifies identities, validates documents, and ensures compliance effortlessly. Banks can reduce onboarding time, enhance security, and deliver a seamless customer experience.",
        },
        {
          id: "sensors",
          icon: "sliders",
          title: "Digital Wallet & Transaction Management Solutions",
          description:
            "Our AI-powered digital wallet solutions enable secure, real-time payments and effortless fund management. They track spending patterns, detect anomalies, and enhance transaction transparency. Banks can offer faster, safer, and smarter digital payment experiences.",
        },
      ],
      bottomFeatures: [
        {
          id: "autonomous",
          icon: "monitor",
          title: "Regulatory Compliance & Reporting Tools",
          description:
            "Our AI-powered tools simplify regulatory compliance and automate financial reporting with precision. They help banks stay audit-ready, reduce risks, and ensure adherence to evolving regulations effortlessly.",
        },
        {
          id: "irrigation",
          icon: "droplets",
          title: "Smart Loan Settlement Software",
          description:
            "Our AI-powered software automates loan settlements with precision and speed, ensuring accurate repayments and clear records. It reduces manual effort, minimizes errors, and enhances operational efficiency for banks.",
          link: { text: "irrigation software", url: "#" },
        },
        {
          id: "agronomy",
          icon: "testTube",
          title: "Digital Payment Processing Systems",
          description:
            "Our AI-powered digital payment systems enable fast, secure, and seamless transactions across all platforms. They enhance efficiency, prevent fraud, and ensure a smooth cashless banking experience.",
        },
        {
          id: "operations",
          icon: "settings",
          title: "Risk Modeling & Stress Testing Tools",
          description:
            "Our AI-powered tools simulate market scenarios to assess financial resilience and risk exposure. They help banks predict vulnerabilities, optimize capital planning, and ensure regulatory compliance with confidence.",
        },
      ],
      ctaText: "BUILD YOUR BANKING SOLUTION",
      onCtaClick: () => {},
    },

    managementSolutionsTwo: {
  title: "Banking Management Software Solutions",
  subtitle:
    "Our banking software developers build secure, scalable, and efficient digital solutions to streamline operations, improve compliance, and enhance customer experience across financial services.",
  subtitleLink: { text: "banking management software", url: "#" },
  laptopImage: "https://i.pinimg.com/1200x/42/05/67/4205672c22c8c6ffd60ab8e947748ae1.jpg",
  mobileImage: "/images/management-solutions-mobile.jpg",

  topFeatures: [
    {
      id: "loan-servicing",
      icon: "CreditCard",
      title: "Loan Servicing & Management Systems",
      description:
        "Automate loan tracking, repayments, and compliance workflows. Improve portfolio visibility and reduce processing time.",
      link: { text: "loan servicing software", url: "#" },
    },
    {
      id: "risk-compliance",
      icon: "Shield",
      title: "Risk & Compliance Management Platforms",
      description:
        "Monitor regulatory compliance with real-time dashboards. Detect fraud, manage risks, and ensure audit readiness.",
      link: { text: "compliance management software", url: "#" },
    },
    {
      id: "customer-onboarding",
      icon: "Users",
      title: "Customer Onboarding & KYC Solutions",
      description:
        "Digitize onboarding with secure KYC and AML verification. Deliver faster account setup with seamless data validation.",
      link: { text: "kyc onboarding software", url: "#" },
    },
    {
      id: "treasury-management",
      icon: "Database",
      title: "Treasury & Cash Flow Management Systems",
      description:
        "Optimize liquidity and automate fund transfers securely. Gain real-time insights into transactions and cash positions.",
      link: { text: "treasury management systems", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "core-banking",
      icon: "Building",
      title: "Core Banking Modernization Platforms",
      description:
        "Upgrade legacy systems with cloud-native architectures. Improve scalability, integration, and transaction processing.",
    },
    {
      id: "digital-payments",
      icon: "Wallet",
      title: "Digital Payment Processing Solutions",
      description:
        "Enable secure payment gateways, mobile wallets, and UPI integration. Enhance speed and reliability of digital payments.",
    },
    {
      id: "credit-scoring",
      icon: "BarChart",
      title: "Credit Scoring & Analytics Engines",
      description:
        "Use AI-driven models to assess creditworthiness accurately. Automate loan approvals and reduce default risks efficiently.",
    },
    {
      id: "fraud-detection",
      icon: "AlertTriangle",
      title: "Fraud Detection & Prevention Systems",
      description:
        "Implement real-time fraud monitoring with AI algorithms. Protect transactions and customer data from cyber threats.",
    },
  ],

  ctaText: "GET BANKING SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
},

    faq : {
  title: "Banking FAQ",
  items: [
    {
      id: "1",
      question: "What is digital banking transformation?",
      answer:
        "Digital banking transformation involves modernizing traditional banking processes using technologies such as mobile apps, AI, cloud computing, and blockchain. It enhances customer experience, operational efficiency, and financial transparency through seamless digital services.",
    },
    {
      id: "2",
      question: "How is AI revolutionizing the banking industry?",
      answer:
        "AI is transforming banking by enabling personalized financial advice, fraud detection, credit scoring, and automated customer service through chatbots. It also supports predictive analytics for smarter lending and investment decisions.",
    },
    {
      id: "3",
      question: "What is the role of blockchain in modern banking?",
      answer:
        "Blockchain technology provides a secure, transparent, and decentralized platform for financial transactions. It reduces fraud, enhances data integrity, and enables faster cross-border payments and smart contracts between institutions.",
    },
    {
      id: "4",
      question: "How do banks ensure data security and compliance?",
      answer:
        "Banks employ advanced encryption, multi-factor authentication, and regulatory compliance frameworks like PCI DSS and GDPR. Regular audits and cybersecurity monitoring protect customer data and maintain system integrity.",
    },
    {
      id: "5",
      question: "What are core banking systems?",
      answer:
        "Core banking systems are centralized digital platforms that manage essential operations such as account management, transactions, loans, and deposits. They enable real-time processing, customer data management, and service automation across branches.",
    },
    {
      id: "6",
      question: "How do digital wallets and payment gateways work?",
      answer:
        "Digital wallets and payment gateways securely store and process payment information, allowing customers to make quick, contactless transactions online or in-store. They use encryption and tokenization to ensure financial safety.",
    },
    {
      id: "7",
      question: "What is open banking and how does it benefit customers?",
      answer:
        "Open banking allows secure data sharing between financial institutions and third-party apps through APIs. It enables customers to access innovative financial services such as budgeting tools, loan comparisons, and investment management from multiple providers in one place.",
    },
    {
      id: "8",
      question: "How do banks use data analytics to improve services?",
      answer:
        "Banks use data analytics to understand customer behavior, detect fraud patterns, assess credit risk, and personalize offerings. This data-driven approach helps in improving retention, enhancing marketing, and optimizing financial operations.",
    },
    {
      id: "9",
      question: "What are neobanks and how do they differ from traditional banks?",
      answer:
        "Neobanks are fully digital financial institutions that operate without physical branches. They provide online-only services like payments, savings, and loans, often offering lower fees and faster onboarding compared to traditional banks.",
    },
    {
      id: "10",
      question: "What is the future of banking technology?",
      answer:
        "The future of banking lies in AI-driven personalization, blockchain-based security, open banking ecosystems, and digital-only customer experiences. Institutions adopting these innovations will lead the next generation of financial services.",
    },
  ],
},

  };