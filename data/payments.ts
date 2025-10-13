import { IndustryConfig } from "@/types/industries";
 
export const payments: IndustryConfig = {
  slug: "payments",
  banner: {
    title: "Revolutionize Digital Transactions with",
    highlight: "AI-Powered Payment & Fintech Solutions",
    subtitle:
      "Accelerate payment innovation with secure, scalable, and intelligent systems for banks, fintech startups, and enterprises. Automate transaction processing, enhance fraud prevention, and deliver seamless global payment experiences.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Build scalable, multi-currency gateways with 3D Secure, PCI DSS compliance, and smart routing capabilities.",
      },
      {
        id: "fraud-ai",
        icon: "Shield",
        title: "Fraud Detection & Risk Scoring",
        subtitle: "",
        description:
          "Use AI to detect anomalies, flag suspicious transactions, and prevent chargebacks in real time.",
      },
      {
        id: "wallet-platforms",
        icon: "Shield", //Smartphone
        title: "Digital Wallet Platforms",
        subtitle: "",
        description:
          "Launch feature-rich wallets supporting QR, NFC, and peer-to-peer payments with biometric authentication.",
      },
      {
        id: "crypto-integration",
        icon: "Shield", //Bitcoin
        title: "Crypto Payment Integration",
        subtitle: "",
        description:
          "Enable seamless crypto-to-fiat transactions using blockchain and smart contract-based settlement engines.",
      },
      {
        id: "analytics-dashboard",
        icon: "Shield", //BarChart2
        title: "Payment Analytics Dashboards",
        subtitle: "",
        description:
          "Gain real-time insights into transactions, trends, and customer behavior with AI-powered dashboards.",
      },
      {
        id: "kyc-compliance",
        icon: "Shield", //UserCheck
        title: "KYC, AML & Compliance Automation",
        subtitle: "",
        description:
          "Automate user verification, screening, and compliance checks to ensure regulatory adherence globally.",
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
    laptopImage: "/images/payment-laptop.jpg",
    mobileImage: "/images/payment-mobile.jpg",
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
          "Assess transaction risks instantly using predictive algorithms and real-time behavioral analysis.",
      },
      {
        id: "security-compliance",
        icon: "map", //Shield
        title: "Data Security & PCI DSS Compliance",
        description:
          "Ensure full encryption, tokenization, and compliance with global financial security standards.",
      },
      {
        id: "api-platforms",
        icon: "map", //Link
        title: "Open Banking API Platforms",
        description:
          "Integrate banking APIs for faster payments, account aggregation, and secure third-party services.",
      },
      {
        id: "customer-engagement",
        icon: "map", //Users
        title: "Customer Engagement & Loyalty Systems",
        description:
          "Use data-driven personalization and rewards to enhance user experience and retention.",
      },
    ],
    ctaText: "BUILD YOUR PAYMENT PLATFORM",
    onCtaClick: () => {},
  },
};