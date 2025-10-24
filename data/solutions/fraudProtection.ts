import { SolutionConfig } from "@/types/solutions";

export const fraudProtection: SolutionConfig = {
  slug: "fraud-protection",

  banner: {
    title: "Secure Your Business with",
    highlight: "AI-Powered Fraud Protection Systems",
    subtitle:
      "Detect, prevent, and mitigate financial and digital fraud in real-time using advanced analytics, machine learning, and behavioral intelligence.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Fraud Detection Solutions",
  },

  developerDetails: {
    heading: "AI-Driven Fraud Detection Experts",
    subheading:
      "We develop intelligent fraud prevention systems that safeguard your transactions and data with real-time risk analytics and automation.",
    mainTitle: "Comprehensive Fraud Protection Software Development",
    mainDescription:
      "Our fraud detection platforms leverage artificial intelligence, data analytics, and user behavior tracking to identify suspicious activity, prevent financial loss, and ensure compliance with global security standards.",
    image: "/images/fraud-detection-laptop.png",
    services: [
      {
        id: 1,
        title: "Transaction Monitoring Systems",
        description:
          "Monitor and analyze every transaction in real-time to detect anomalies, unusual spending patterns, or suspicious activities.",
        icon: "/icons/activity.svg",
      },
      {
        id: 2,
        title: "Identity Verification & KYC Automation",
        description:
          "Integrate automated Know Your Customer (KYC) and identity verification systems to validate user identities instantly.",
        icon: "/icons/id-card.svg",
      },
      {
        id: 3,
        title: "AI-Based Risk Scoring",
        description:
          "Assign dynamic risk scores to users and transactions using predictive machine learning models and fraud intelligence data.",
        icon: "/icons/ai.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Fraud Detection & Prevention Solutions",
    mainDescription:
      "We build scalable fraud protection platforms that combine AI, analytics, and automation to protect businesses from cyber threats, identity theft, and payment fraud.",
    items: [
      {
        id: "payment-fraud",
        icon: "Leaf",
        title: "Payment Fraud Detection",
        subtitle: "Monitor Every Transaction",
        description:
          "Detect credit card, wire transfer, and online payment fraud through pattern recognition and anomaly detection.",
      },
      {
        id: "kyc-compliance",
        icon: "Leaf",
        title: "KYC & AML Compliance",
        subtitle: "Verify & Comply",
        description:
          "Automate KYC and AML (Anti-Money Laundering) checks with real-time data validation and identity verification workflows.",
      },
      {
        id: "behavioral-analysis",
        icon: "Leaf",
        title: "Behavioral Analytics",
        subtitle: "Detect Abnormal Behavior",
        description:
          "Analyze user behavior across sessions to flag suspicious login patterns or unusual activity in digital ecosystems.",
      },
      {
        id: "biometric-authentication",
        icon: "Leaf",
        title: "Biometric Authentication Systems",
        subtitle: "Multi-Layered Security",
        description:
          "Implement facial, voice, and fingerprint recognition systems to secure user access and prevent account takeovers.",
      },
      {
        id: "transaction-risk-engine",
        icon: "Leaf",
        title: "Real-Time Risk Engine",
        subtitle: "Instant Threat Detection",
        description:
          "Use real-time decision engines powered by AI to score, block, or verify transactions within milliseconds.",
      },
      {
        id: "cyber-threat-intelligence",
        icon: "Leaf",
        title: "Cyber Threat Intelligence Integration",
        subtitle: "Proactive Threat Defense",
        description:
          "Integrate your system with global fraud databases, IP reputation networks, and dark web monitoring tools for advanced protection.",
      },
    ],
    linkText: "Talk to a Security Expert",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Fraud Management Platforms",
    subtitle:
      "Our fraud management systems empower financial institutions to monitor, detect, and mitigate fraud risks across all digital touchpoints.",
    subtitleLink: { text: "fraud management systems", url: "#" },
    laptopImage: "/images/fraud-management-laptop.jpg",
    mobileImage: "/images/fraud-management-mobile.jpg",
    topFeatures: [
      {
        id: "dashboard",
        icon: "map",
        title: "Centralized Monitoring Dashboard",
        description:
          "Gain full visibility into fraud alerts, investigations, and system performance from one intuitive dashboard.",
      },
      {
        id: "alerts",
        icon: "map",
        title: "Automated Fraud Alerts",
        description:
          "Get real-time alerts for suspicious transactions and trigger automated responses to prevent potential losses.",
      },
      {
        id: "reporting",
        icon: "map",
        title: "Regulatory Reporting Tools",
        description:
          "Generate instant AML, SAR, and compliance reports to meet global financial regulatory requirements.",
      },
    ],
    bottomFeatures: [
      {
        id: "ml-engine",
        icon: "map",
        title: "Machine Learning Decision Engine",
        description:
          "Continuously improve detection accuracy using self-learning algorithms that adapt to new fraud trends.",
      },
      {
        id: "case-management",
        icon: "map",
        title: "Case Management Automation",
        description:
          "Automate investigation workflows and track case resolution with built-in audit trails and collaboration tools.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API Integration",
        description:
          "Easily integrate fraud detection systems with banking, ERP, and payment gateways for seamless operations.",
      },
      {
        id: "data-security",
        icon: "map",
        title: "End-to-End Data Security",
        description:
          "Protect sensitive financial data with encryption, tokenization, and compliance with PCI DSS and GDPR standards.",
      },
    ],
    ctaText: "Get Fraud Protection Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What industries can benefit from fraud protection systems?",
        answer:
          "Our fraud detection platforms are ideal for banking, insurance, fintech, e-commerce, and government sectors where transaction and identity security are critical.",
      },
      {
        id: "2",
        question: "How does AI help in fraud detection?",
        answer:
          "AI analyzes vast amounts of transaction and behavioral data to identify suspicious patterns and predict fraud before it occurs.",
      },
      {
        id: "3",
        question: "Can your system integrate with our existing payment gateway?",
        answer:
          "Yes, our fraud detection APIs can seamlessly integrate with popular payment gateways, CRMs, and core banking systems.",
      },
      {
        id: "4",
        question: "Do you provide real-time fraud alerts?",
        answer:
          "Absolutely. Our systems monitor transactions in real time and trigger instant alerts for unusual or high-risk activities.",
      },
      {
        id: "5",
        question: "Is your fraud protection platform customizable?",
        answer:
          "Yes, we tailor our fraud detection engines, workflows, and dashboards based on your organization’s size, risk level, and compliance needs.",
      },
      {
        id: "6",
        question: "How do you ensure data privacy and compliance?",
        answer:
          "We comply with GDPR, PCI DSS, and ISO 27001 standards, ensuring secure data handling and transparent privacy policies across all processes.",
      },
    ],
  },
};
