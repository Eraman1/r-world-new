import { IndustryConfig } from "@/types/industries";
 
export const payments: IndustryConfig = {
  slug: "payments",
  banner: {
    title: "Revolutionize Digital Transactions with",
    highlight: "AI-Powered Payment & Fintech Solutions",
    subtitle:
      "Accelerate payment innovation with secure, scalable, and intelligent systems for banks, fintech startups, and enterprises. Automate transaction processing, enhance fraud prevention, and deliver seamless global payment experiences.",
    image:
      "/industry/industryPaymentBanner.webp",
    linkText: "Get Payment Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Payment Software Developers",
    description:
      "We develop advanced fintech platforms that support real-time payments, fraud detection, and global transactions. Our experts integrate AI, blockchain, and cloud technologies to ensure security, compliance, and efficiency across the payment ecosystem.",
    services: [
      {
        id: "payment-gateway",
        title: "Custom Payment Gateway Development",
        icon: "Tractor", //CreditCard
        position: "left",
      },
      {
        id: "fraud-detection",
        title: "AI-Powered Fraud Detection Systems",
        icon: "Tractor", //ShieldCheck
        position: "left",
      },
      {
        id: "wallet-integration",
        title: "Digital Wallet & Mobile Payment Integration",
        icon: "Tractor", //Smartphone
        position: "left",
      },
      {
        id: "crypto-payments",
        title: "Blockchain & Cryptocurrency Payments",
        icon: "Tractor", //Bitcoin
        position: "left",
      },
      {
        id: "transaction-analytics",
        title: "Transaction Analytics & Insights",
        icon: "Tractor",  //BarChart
        position: "right",
      },
      {
        id: "cross-border",
        title: "Cross-Border Payment Solutions",
        icon: "Tractor", //Globe
        position: "right",
      },
      {
        id: "compliance",
        title: "Regulatory Compliance & KYC Automation",
        icon: "Tractor", //FileText
        position: "right",
      },
      {
        id: "api-integration",
        title: "Payment API & Platform Integration",
        icon: "Tractor", //Link
        position: "right",
      },
    ],
     deviceImages: {
      laptop: "/industry/industryPaymentBanner.webp",
      tablet: "/industry/industryPaymentBanner.webp",
      mobile: "/industry/industryPaymentBanner.webp",
    },
  },
 
  solutions: {
  mainTitle: "Fintech, Blockchain & AI Solutions for Payments",
  mainDescription:
    "We deliver secure, high-performance payment platforms that integrate with banks, PSPs, and financial systems. Our solutions enable faster transactions, lower costs, and superior fraud protection through data intelligence and automation.",
  items: [
    {
      id: "gateway-solutions",
      icon: "Shield", //CreditCard
      title: "Custom Payment Gateway Solutions",
      subtitle: "",
      description:
        "Develop robust, multi-currency payment gateways for global transactions.\n" +
        "Ensure PCI DSS compliance with advanced encryption and tokenization.\n" +
        "Integrate 3D Secure authentication to reduce fraud and chargebacks.\n" +
        "Enable smart routing and real-time payment reconciliation.\n" +
        "Deliver a seamless checkout experience across all devices and platforms.",
    },
    {
      id: "fraud-ai",
      icon: "Shield",
      title: "Fraud Detection & Risk Scoring",
      subtitle: "",
      description:
        "Leverage AI and machine learning to detect transaction anomalies instantly.\n" +
        "Implement behavioral analytics for continuous fraud prevention.\n" +
        "Reduce false positives with dynamic risk-based scoring models.\n" +
        "Monitor every transaction in real time with automated alerts.\n" +
        "Protect user trust and ensure regulatory compliance effortlessly.",
    },
    {
      id: "wallet-platforms",
      icon: "Shield", //Smartphone
      title: "Digital Wallet Platforms",
      subtitle: "",
      description:
        "Launch secure, feature-rich mobile wallets with advanced user interfaces.\n" +
        "Support QR code, NFC, and peer-to-peer payment functionalities.\n" +
        "Integrate biometric verification for seamless authentication.\n" +
        "Allow users to manage cards, crypto, and loyalty points in one app.\n" +
        "Deliver instant transfers, cashback, and transaction transparency.",
    },
    {
      id: "crypto-integration",
      icon: "Shield", //Bitcoin
      title: "Crypto Payment Integration",
      subtitle: "",
      description:
        "Integrate cryptocurrency payments with instant fiat conversions.\n" +
        "Use blockchain for secure, transparent, and immutable settlements.\n" +
        "Leverage smart contracts for automated escrow and dispute handling.\n" +
        "Expand your reach with multi-chain and token support.\n" +
        "Ensure compliance with evolving global crypto payment regulations.",
    },
    {
      id: "analytics-dashboard",
      icon: "Shield", //BarChart2
      title: "Payment Analytics Dashboards",
      subtitle: "",
      description:
        "Visualize key performance metrics with AI-powered dashboards.\n" +
        "Track transaction trends, conversion rates, and fraud patterns.\n" +
        "Enable predictive analytics for better business decision-making.\n" +
        "Generate automated compliance and performance reports.\n" +
        "Empower financial teams with data-driven operational intelligence.",
    },
    {
      id: "kyc-compliance",
      icon: "Shield", //UserCheck
      title: "KYC, AML & Compliance Automation",
      subtitle: "",
      description:
        "Automate customer onboarding with AI-driven KYC verification tools.\n" +
        "Perform real-time AML screening using global watchlists and databases.\n" +
        "Maintain full audit trails for transparent regulatory compliance.\n" +
        "Reduce manual intervention through workflow automation.\n" +
        "Strengthen risk control and ensure seamless compliance operations.",
    },
  ],
  linkText: "Explore Fintech Solutions",
  linkUrl: "/contact-us",
},

 
  managementSolutions: {
    title: "End-to-End Payment Management Systems",
    subtitle:
      "Transform payment infrastructure with intelligent automation, fraud analytics, and seamless integrations that drive business growth.",
    subtitleLink: { text: "payment management software", url: "#" },
    laptopImage: "https://i.pinimg.com/736x/1d/29/f6/1d29f64b1ebf132ba08687cf0ed0f121.jpg",
    mobileImage: "https://i.pinimg.com/736x/fe/21/89/fe21894015d2044fc06cb67a408ff931.jpg",
    topFeatures: [
      {
        id: "transaction-automation",
        icon: "map", //Repeat
        title: "Automated Transaction Processing",
        description:
          "Streamline settlement, reconciliation, and payment processing using AI and cloud-based automation.",
      },
      {
        id: "reporting-analytics",
        icon: "map", //BarChart
        title: "Real-Time Reporting & Analytics",
        description:
          "Track transactions, revenue, and fraud alerts with live data visualization and instant reporting tools.",
      },
      {
        id: "mobile-payments",
        icon: "map", //Smartphone
        title: "Mobile-First Payment Solutions",
        description:
          "Deliver secure mobile payment experiences with multi-device compatibility and global reach.",
      },
    ],
    bottomFeatures: [
  {
    id: "ai-risk",
    icon: "map", //Cpu
    title: "AI Risk Assessment & Scoring",
    description:
      "Leverage AI-driven models to evaluate transaction risks in real time. Detect fraud and anomalies through behavioral pattern analysis. Improve decision-making with predictive scoring and automation. Minimize losses by identifying high-risk activities early. Strengthen compliance while maintaining operational efficiency.",
  },
  {
    id: "security-compliance",
    icon: "map", //Shield
    title: "Data Security & PCI DSS Compliance",
    description:
      "Protect sensitive data through end-to-end encryption and tokenization. Maintain compliance with PCI DSS and international standards. Prevent unauthorized access with layered security protocols. Automate auditing, reporting, and breach monitoring systems. Build customer trust through transparent data protection measures.",
  },
  {
    id: "api-platforms",
    icon: "map", //Link
    title: "Open Banking API Platforms",
    description:
      "Enable seamless integration with third-party financial applications. Support real-time payments and account aggregation securely. Empower customers with greater control over financial data. Foster innovation through open and interoperable systems. Enhance transparency and connectivity across banking networks.",
  },
  {
    id: "customer-engagement",
    icon: "map", //Users
    title: "Customer Engagement & Loyalty Systems",
    description:
      "Deliver personalized experiences using AI-based insights and analytics. Create loyalty programs that reward meaningful customer behavior. Boost retention with omnichannel communication strategies. Gain actionable insights from engagement and satisfaction data. Strengthen relationships through consistent, value-driven interactions.",
  },
],
ctaText: "BUILD YOUR PAYMENT PLATFORM",
onCtaClick: () => {},
},

managementSolutionsTwo: {
  title: "Payments Management Software Solutions",
  subtitle:
    "Our payment software experts build secure, scalable, and intelligent platforms that streamline transactions, automate reconciliation, and ensure financial compliance.",
  subtitleLink: { text: "payment processing software", url: "#" },
  laptopImage: "https://i.pinimg.com/1200x/ae/3a/55/ae3a55d15d6fbf02b713e80057e8e11b.jpg",
  mobileImage: "/images/payments-management-mobile.jpg",

  topFeatures: [
    {
      id: "payment-processing",
      icon: "CreditCard",
      title: "Payment Processing & Gateway Integration",
      description:
        "Enable fast, secure multi-currency transactions worldwide. Integrate major gateways for seamless online payments.",
      link: { text: "payment gateway integration", url: "#" },
    },
    {
      id: "billing-automation",
      icon: "FileText",
      title: "Automated Billing & Invoicing Systems",
      description:
        "Generate and manage invoices automatically with real-time tracking. Simplify recurring payments and subscription billing.",
      link: { text: "automated billing systems", url: "#" },
    },
    {
      id: "fraud-detection",
      icon: "Shield",
      title: "Fraud Detection & Risk Management",
      description:
        "Use AI-driven tools to monitor and flag fraudulent activities. Strengthen security with multi-layer authentication and AML checks.",
      link: { text: "fraud detection software", url: "#" },
    },
    {
      id: "reporting-analytics",
      icon: "BarChart3",
      title: "Financial Reporting & Analytics Dashboards",
      description:
        "Gain full visibility into transactions and settlements. Generate real-time financial insights for better decision-making.",
      link: { text: "payment analytics dashboards", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "mobile-wallets",
      icon: "Smartphone",
      title: "Digital Wallet & Mobile Payment Solutions",
      description:
        "Launch branded wallets for peer-to-peer payments. Offer contactless and QR-based transactions across devices.",
    },
    {
      id: "settlement-systems",
      icon: "Coins",
      title: "Automated Settlement & Reconciliation Tools",
      description:
        "Reconcile transactions automatically with instant verification. Reduce human errors and ensure accounting accuracy.",
    },
    {
      id: "subscription-platforms",
      icon: "Repeat",
      title: "Subscription & Recurring Payment Platforms",
      description:
        "Manage recurring billing with smart payment scheduling. Support flexible pricing models for SaaS and fintech apps.",
    },
    {
      id: "compliance-tools",
      icon: "Lock",
      title: "Regulatory Compliance & Audit Systems",
      description:
        "Maintain PCI DSS, KYC, and AML compliance easily. Automate audits and data validation across all payment workflows.",
    },
  ],

  ctaText: "GET PAYMENT SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
},

  faq : {
  title: "Payments & FinTech FAQ",
  items: [
    {
      id: "1",
      question: "What are digital payment solutions?",
      answer:
        "Digital payment solutions enable businesses and consumers to send and receive money electronically. These include online banking, mobile wallets, payment gateways, and contactless card payments, making transactions fast, secure, and convenient.",
    },
    {
      id: "2",
      question: "How do payment gateways work?",
      answer:
        "A payment gateway securely processes online transactions by transmitting customer payment information to banks or financial networks. It ensures encryption, authorization, and settlement of payments while protecting sensitive data.",
    },
    {
      id: "3",
      question: "What is the difference between a wallet and a bank transfer?",
      answer:
        "Digital wallets store payment information securely and allow instant transactions without sharing bank details. Bank transfers move funds directly between accounts and may take longer depending on the network and transaction type.",
    },
    {
      id: "4",
      question: "How is payment security maintained?",
      answer:
        "Payment platforms use encryption, tokenization, two-factor authentication, and PCI-DSS compliance to protect transactions. These measures prevent fraud, data breaches, and unauthorized access to sensitive financial information.",
    },
    {
      id: "5",
      question: "Can payment systems integrate with eCommerce platforms?",
      answer:
        "Yes. Modern payment gateways and APIs can seamlessly integrate with online stores, mobile apps, and marketplaces. This enables automated checkout, recurring billing, and support for multiple payment methods and currencies.",
    },
    {
      id: "6",
      question: "What are recurring payments and subscription billing?",
      answer:
        "Recurring payments are automatic, scheduled transactions for subscription-based services. Payment platforms handle invoicing, payment reminders, and automated collection, reducing administrative effort for businesses and improving customer convenience.",
    },
    {
      id: "7",
      question: "How do fintech solutions enhance payments?",
      answer:
        "Fintech solutions leverage AI, machine learning, and blockchain to optimize transaction speed, detect fraud, personalize financial services, and offer advanced analytics for businesses to manage payments efficiently.",
    },
    {
      id: "8",
      question: "Are cross-border payments supported?",
      answer:
        "Yes. Modern payment platforms support international transactions with multi-currency processing, real-time FX conversion, and compliance with global regulatory standards, ensuring smooth and transparent cross-border payments.",
    },
    {
      id: "9",
      question: "What is the role of APIs in payment systems?",
      answer:
        "Payment APIs allow businesses to integrate transaction processing, wallet services, and banking features directly into their applications. APIs provide flexibility, automation, and real-time reporting for streamlined payment operations.",
    },
    {
      id: "10",
      question: "What is the future of digital payments?",
      answer:
        "The future of payments includes contactless, mobile-first transactions, AI-driven fraud prevention, blockchain-based settlements, and seamless integration of financial services into everyday apps, making payments faster, safer, and more personalized.",
    },
  ],
},

};