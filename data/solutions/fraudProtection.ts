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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Identify and prevent fraudulent credit card, wire transfer, and digital payment activities in real time. Our system uses advanced machine learning models to recognize suspicious patterns. Minimize chargebacks and financial losses through continuous monitoring and instant alerts.",
      },
      {
        id: "kyc-compliance",
        icon: "Leaf",
        title: "KYC & AML Compliance",
        subtitle: "Verify & Comply",
        description:
          "Automate customer identity verification using global databases and document validation APIs. Ensure full compliance with KYC and AML regulations while reducing manual checks. Maintain a secure onboarding process with automated alerts for high-risk profiles.",
      },
      {
        id: "behavioral-analysis",
        icon: "Leaf",
        title: "Behavioral Analytics",
        subtitle: "Detect Abnormal Behavior",
        description:
          "Track user activity across platforms to detect unusual login or transaction behavior. AI models learn normal user habits and flag potential anomalies. Strengthen fraud prevention with behavioral insights that evolve as users and threats change.",
      },
      {
        id: "biometric-authentication",
        icon: "Leaf",
        title: "Biometric Authentication Systems",
        subtitle: "Multi-Layered Security",
        description:
          "Integrate facial, fingerprint, and voice recognition technologies for advanced identity protection. Prevent unauthorized account access and identity theft through multi-factor authentication. Deliver secure, frictionless user verification across digital channels.",
      },
      {
        id: "transaction-risk-engine",
        icon: "Leaf",
        title: "Real-Time Risk Engine",
        subtitle: "Instant Threat Detection",
        description:
          "Leverage AI-driven decision engines to evaluate transaction risk within milliseconds. Instantly block or verify suspicious activities based on configurable risk scores. Improve fraud prevention accuracy without compromising user experience.",
      },
      {
        id: "cyber-threat-intelligence",
        icon: "Leaf",
        title: "Cyber Threat Intelligence Integration",
        subtitle: "Proactive Threat Defense",
        description:
          "Connect to global fraud databases, IP reputation systems, and dark web intelligence feeds. Detect and neutralize threats before they impact your business operations. Stay ahead of evolving cyberattacks with continuous intelligence-driven protection.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/1200x/dc/1b/36/dc1b361ff7362f5939a0a7f03b932255.jpg",
    mobileImage: "https://i.pinimg.com/736x/1f/72/7c/1f727cbf8bbb440bd3a50f7143942fad.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/1200x/dc/1b/36/dc1b361ff7362f5939a0a7f03b932255.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/1f/72/7c/1f727cbf8bbb440bd3a50f7143942fad.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Enhance fraud detection accuracy with AI-driven algorithms that evolve from real-time data. The system continuously learns from emerging fraud patterns to reduce false positives. Stay ahead of cybercriminals with adaptive, predictive intelligence for financial safety.",
      },
      {
        id: "case-management",
        icon: "map",
        title: "Case Management Automation",
        description:
          "Streamline investigations with automated case creation, tracking, and resolution workflows. Collaborate efficiently through centralized dashboards and audit trails. Improve compliance, transparency, and response time for each detected fraud attempt.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API Integration",
        description:
          "Connect fraud detection engines seamlessly with banking systems, ERPs, and payment gateways. Enable smooth data exchange and real-time validation across digital channels. Simplify deployment while maintaining security and operational efficiency.",
      },
      {
        id: "data-security",
        icon: "map",
        title: "End-to-End Data Security",
        description:
          "Safeguard critical financial information with enterprise-grade encryption and tokenization. Ensure compliance with PCI DSS, GDPR, and global data protection standards. Maintain customer trust through secure, transparent, and auditable security frameworks.",
      },
    ],
    ctaText: "Get Fraud Protection Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
        question:
          "Can your system integrate with our existing payment gateway?",
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
