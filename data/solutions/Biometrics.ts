import { SolutionConfig } from "@/types/solutions";

export const Biometrics: SolutionConfig = {
  slug: "Biometrics",

  banner: {
    title: "Enhance Security with",
    highlight: "Advanced Biometric Identification Systems",
    subtitle:
      "Revolutionize access control and identity management through biometric authentication using facial recognition, fingerprint, and iris scanning technologies.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Biometric Solutions",
  },

  developerDetails: {
    heading: "Experts in Biometric Technology & Digital Identity",
    subheading:
      "We develop secure, scalable biometric solutions that deliver accurate identity verification for enterprises, banks, and government systems.",
    mainTitle: "Comprehensive Biometric Software Development",
    mainDescription:
      "Our biometric systems use advanced AI and ML algorithms for identity validation, facial recognition, and multi-factor authentication. We build reliable and compliant platforms for access control, KYC, and fraud prevention.",
    image: "/images/biometric-laptop.png",
    services: [
      {
        id: 1,
        title: "Facial Recognition Systems",
        description:
          "We design AI-powered facial recognition software that provides real-time identity verification and attendance tracking.",
        icon: "/icons/face-scan.svg",
      },
      {
        id: 2,
        title: "Fingerprint & Iris Authentication",
        description:
          "Our fingerprint and iris scanning modules offer high-speed and accurate user authentication across mobile and desktop applications.",
        icon: "/icons/fingerprint.svg",
      },
      {
        id: 3,
        title: "Multi-Factor Biometric Security",
        description:
          "We integrate biometrics with PIN, OTP, or device-based authentication for stronger, layered security systems.",
        icon: "/icons/lock.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Next-Gen Biometric & Identity Management Solutions",
    mainDescription:
      "We deliver tailored biometric platforms for banking, enterprise, and government institutions — improving accuracy, efficiency, and security in every interaction.",
    items: [
      {
        id: "identity-verification",
        icon: "Leaf",
        title: "Digital Identity Verification",
        subtitle: "Seamless Onboarding Experience",
        description:
          "Automate customer onboarding with biometric KYC processes integrated into your web or mobile platforms.",
      },
      {
        id: "access-control",
        icon: "Leaf",
        title: "Access Control Systems",
        subtitle: "Secure Entry & Exit Points",
        description:
          "Implement biometric access systems using facial, fingerprint, or palm recognition to restrict unauthorized entry.",
      },
      {
        id: "attendance-monitoring",
        icon: "Leaf",
        title: "Biometric Attendance Management",
        subtitle: "Accurate Workforce Tracking",
        description:
          "Automate employee attendance with biometric authentication — eliminating proxy attendance and improving compliance.",
      },
      {
        id: "mobile-integration",
        icon: "Leaf",
        title: "Mobile Biometric SDKs",
        subtitle: "Integration for Android & iOS",
        description:
          "We provide SDKs for mobile biometric authentication, allowing seamless integration into apps and digital wallets.",
      },
      {
        id: "fraud-detection",
        icon: "Leaf",
        title: "Fraud Detection & Prevention",
        subtitle: "AI-Powered Security",
        description:
          "Leverage AI-driven facial and behavioral biometrics to detect anomalies and prevent identity fraud in real-time.",
      },
      {
        id: "cloud-biometrics",
        icon: "Leaf",
        title: "Cloud-Based Biometric Platform",
        subtitle: "Scalable & Secure Architecture",
        description:
          "Deploy cloud-hosted biometric systems with encrypted data storage and compliance to GDPR, HIPAA, and ISO standards.",
      },
    ],
    linkText: "Get Secure Biometric Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Biometric Identity Management Platforms",
    subtitle:
      "Our biometric identity management systems integrate with enterprise and government databases to deliver seamless, cross-platform verification.",
    subtitleLink: { text: "biometric identity systems", url: "#" },
    laptopImage: "/images/management-biometrics.jpg",
    mobileImage: "/images/management-biometrics-mobile.jpg",
    topFeatures: [
      {
        id: "database",
        icon: "map",
        title: "Centralized Biometric Database",
        description:
          "Store and manage encrypted biometric data with strong compliance and real-time verification capabilities.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API & SDK Integration",
        description:
          "Easily integrate biometric modules into your existing systems with our API and SDK support for multiple platforms.",
      },
      {
        id: "ai-analytics",
        icon: "map",
        title: "AI-Based Identity Analytics",
        description:
          "Analyze biometric data trends and detect unusual access patterns with advanced analytics dashboards.",
      },
    ],
    bottomFeatures: [
      {
        id: "compliance",
        icon: "map",
        title: "Data Privacy & Compliance",
        description:
          "Our biometric systems comply with global security standards including GDPR, ISO 27001, and NIST guidelines.",
      },
      {
        id: "multi-device",
        icon: "map",
        title: "Cross-Device Compatibility",
        description:
          "Authenticate users across desktops, kiosks, and mobile devices with unified biometric profiles.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate access logs, visitor registration, and security approvals through intelligent biometric workflow systems.",
      },
      {
        id: "cloud-backup",
        icon: "map",
        title: "Secure Cloud Backup",
        description:
          "Ensure uninterrupted access and disaster recovery through automated biometric data backups.",
      },
    ],
    ctaText: "Talk to Biometric Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What biometric technologies do you support?",
        answer:
          "We support facial recognition, fingerprint scanning, iris detection, voice recognition, and behavioral biometrics for multi-layer security.",
      },
      {
        id: "2",
        question: "Can biometric systems integrate with existing applications?",
        answer:
          "Yes, our biometric APIs and SDKs can be integrated into your web, mobile, and desktop applications seamlessly.",
      },
      {
        id: "3",
        question: "Is biometric data storage secure?",
        answer:
          "Absolutely. All biometric data is encrypted using AES-256 and stored in compliance with GDPR and ISO standards.",
      },
      {
        id: "4",
        question: "Do you offer cloud-based biometric solutions?",
        answer:
          "Yes, we offer both on-premises and cloud-based biometric solutions for flexible deployment and scalability.",
      },
      {
        id: "5",
        question: "Can biometrics help reduce fraud?",
        answer:
          "Yes, biometric verification eliminates impersonation risks and prevents unauthorized access, ensuring identity authenticity.",
      },
      {
        id: "6",
        question: "Do you provide custom biometric development?",
        answer:
          "We develop fully customized biometric solutions tailored to your organization’s needs, including branding, data management, and device integration.",
      },
    ],
  },
};
