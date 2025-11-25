import { ServiceConfig } from "./services";

export const cybersecurity: ServiceConfig = {
  slug: "cybersecurity",
  banner: {
    title: "Protect Your Digital Infrastructure with",
    highlight: "Advanced Cybersecurity Solutions",
    subtitle:
      "Safeguard your business from evolving cyber threats with our comprehensive security services, including risk assessment, threat detection, and compliance management.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Cybersecurity Solutions",
  },

  developerDetails: {
    heading: "Certified Cybersecurity Experts",
    subheading:
      "Our cybersecurity specialists help organizations detect, prevent, and respond to digital threats while ensuring data privacy, regulatory compliance, and business continuity.",
    mainTitle: "Comprehensive Cybersecurity Services",
    mainDescription:
      "We provide end-to-end cybersecurity services to protect your systems, networks, and data. From penetration testing to threat intelligence, our experts help you stay ahead of cyber risks and ensure robust digital defense.",
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "Network Security",
        description:
          "Protect enterprise networks from unauthorized access and attacks. Implement firewalls, IDS/IPS, and secure VPNs. Monitor network traffic for anomalies. Enforce strict access controls.",
        icon: "/icons/network-security.svg",
      },
      {
        id: 2,
        title: "Penetration Testing",
        description:
          "Simulate real-world cyberattacks to uncover vulnerabilities. Assess application, network, and cloud environments. Provide detailed risk reports and mitigation strategies. Strengthen system defenses proactively.",
        icon: "/icons/penetration-testing.svg",
      },
      {
        id: 3,
        title: "Cloud Security",
        description:
          "Secure your cloud infrastructure with advanced encryption, access control, and continuous monitoring. Prevent misconfigurations and data breaches. Ensure compliance with industry regulations.",
        icon: "/icons/cloud-security.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Cybersecurity Solutions for Modern Businesses",
    mainDescription:
      "Our cybersecurity solutions protect your infrastructure, data, and reputation from evolving threats. We empower organizations to detect risks, respond swiftly, and maintain compliance with global security standards.",

    items: [
      {
        id: "risk-assessment",
        icon: "Shield",
        title: "Risk Assessment & Compliance",
        subtitle: "",
        description:
          "Evaluate IT systems for vulnerabilities and security gaps. \nImplement proactive risk assessment and compliance checks. \nEnsure adherence to GDPR, HIPAA, ISO, and PCI DSS standards. \nRegularly audit security measures to prevent data breaches. \nBuild a strong, compliant foundation for business growth.",
      },
      {
        id: "threat-detection",
        icon: "Shield",
        title: "Threat Detection & Response",
        subtitle: "",
        description:
          "Deploy AI-driven tools to monitor suspicious activity in real time. \nDetect, isolate, and neutralize emerging cyber threats instantly. \nAutomate responses to minimize downtime and system disruption. \nAnalyze incident patterns for proactive defense strategies. \nEnsure operational resilience through rapid threat recovery.",
      },
      {
        id: "data-protection",
        icon: "Shield",
        title: "Data Protection & Encryption",
        subtitle: "",
        description:
          "Encrypt critical data during storage and transmission. \nImplement multi-layer access controls and identity verification. \nPrevent data leaks through advanced encryption algorithms. \nProtect intellectual property and confidential information. \nComply with international privacy and protection frameworks.",
      },
      {
        id: "endpoint-security",
        icon: "Shield",
        title: "Endpoint & Device Security",
        subtitle: "",
        description:
          "Secure all endpoints including desktops, laptops, and IoT devices. \nDeploy EDR, antivirus, and mobile device management systems. \nIdentify and block unauthorized apps or activities instantly. \nReduce attack surfaces with automated patch management. \nMaintain full visibility and control across your network.",
      },
      {
        id: "incident-management",
        icon: "Shield",
        title: "Incident Management & Recovery",
        subtitle: "",
        description:
          "Develop structured response plans for security incidents. \nDetect and contain breaches quickly to reduce impact. \nConduct detailed forensics and root-cause analysis. \nImplement remediation actions to prevent future attacks. \nRestore systems rapidly and maintain business continuity.",
      },
      {
        id: "security-awareness",
        icon: "Shield",
        title: "Security Awareness Training",
        subtitle: "",
        description:
          "Educate employees on phishing, malware, and data safety. \nRun real-world simulations to strengthen readiness. \nPromote secure practices and reduce insider threats. \nEncourage active participation in threat prevention. \nFoster a culture of security awareness company-wide.",
      },
    ],
    linkText: "Get Cybersecurity Solutions",
    linkUrl: "/contact-us",
  },
  solutionsTwo: {
    mainTitle: "Advanced Cybersecurity Software Solutions",
    mainDescription:
      "We build next-generation cybersecurity systems that protect digital infrastructure, secure data, and mitigate evolving threats. Our solutions combine AI, automation, and analytics to deliver continuous, proactive defense across networks, applications, and cloud environments.",

    items: [
      {
        id: "threat-intelligence",
        icon: "Shield",
        title: "Threat Intelligence & Incident Response",
        subtitle: "",
        description:
          "Identify and respond to cyber threats with real-time intelligence. \nOur systems collect, analyze, and prioritize potential vulnerabilities. \nAutomate alerts to accelerate detection and response workflows. \nEnable rapid containment and recovery from security breaches. \nEmpower your SOC team with actionable, AI-driven insights.",
      },
      {
        id: "network-protection",
        icon: "Shield",
        title: "Network Security & Intrusion Prevention",
        subtitle: "",
        description:
          "Safeguard network infrastructure with multi-layered defense protocols. \nDetect unauthorized access and malicious traffic instantly. \nWe deploy firewalls, IDS/IPS, and anomaly detection systems. \nEnhance performance without compromising data protection. \nKeep your organization’s network resilient against evolving attacks.",
      },
      {
        id: "cloud-security",
        icon: "Shield",
        title: "Cloud Security & Data Protection",
        subtitle: "",
        description:
          "Protect sensitive assets stored in hybrid and multi-cloud environments. \nImplement encryption, access control, and compliance monitoring. \nPrevent data breaches with continuous vulnerability scanning. \nEnsure secure migration and real-time threat visibility. \nMaintain integrity and privacy across all digital ecosystems.",
      },
      {
        id: "identity-access",
        icon: "Shield",
        title: "Identity & Access Management (IAM)",
        subtitle: "",
        description:
          "Manage user identities and control system access with precision. \nImplement single sign-on, MFA, and zero-trust frameworks. \nPrevent credential misuse and insider threats effectively. \nAutomate role-based access policies across enterprise systems. \nEnsure compliance while simplifying authentication experiences.",
      },
      {
        id: "endpoint-protection",
        icon: "Shield",
        title: "Endpoint Security & Device Monitoring",
        subtitle: "",
        description:
          "Protect every device in your organization’s digital ecosystem. \nMonitor desktops, servers, and mobile endpoints in real time. \nBlock ransomware, phishing, and unauthorized application activity. \nLeverage behavioral analytics for proactive threat detection. \nSecure your endpoints as the first line of cyber defense.",
      },
      {
        id: "governance-compliance",
        icon: "Shield",
        title: "Cyber Governance & Compliance Automation",
        subtitle: "",
        description:
          "Streamline regulatory compliance with automated frameworks. \nTrack, audit, and report security metrics in real time. \nReduce manual effort in maintaining ISO, GDPR, and SOC 2 standards. \nEnable transparency with centralized compliance dashboards. \nFoster accountability and resilience through governance automation.",
      },
    ],

    linkText: "Secure Your Digital Future",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Cybersecurity Management Tools",
    subtitle:
      "Our cybersecurity management solutions help organizations monitor, control, and protect their IT environments through advanced analytics and automation.",
    subtitleLink: { text: "cybersecurity management platform", url: "#" },
    laptopImage:
      "https://i.pinimg.com/736x/0a/74/ba/0a74bae45bd5a441d8259bd75b8b4abe.jpg",
    mobileImage: "/images/cybersecurity-mobile.jpg",
    topFeatures: [
      {
        id: "threat-monitoring",
        icon: "map",
        title: "Real-Time Threat Monitoring",
        description:
          "Continuously monitor systems for suspicious activity. Detect malware, ransomware, and phishing attempts instantly. Use AI-driven analytics to identify risks. Generate instant alerts and reports. Enhance visibility into network security posture.",
      },
      {
        id: "compliance-tracking",
        icon: "map",
        title: "Compliance Tracking & Reporting",
        description:
          "Ensure adherence to data protection and security regulations. Track compliance metrics across departments. Automate audits and risk reports. Maintain transparency for regulators. Simplify governance and policy enforcement.",
      },
      {
        id: "incident-response",
        icon: "map",
        title: "Automated Incident Response",
        description:
          "Respond to threats in real-time using automated workflows. Isolate affected systems and neutralize risks quickly. Maintain forensic logs for investigations. Reduce downtime and recovery time. Strengthen organization-wide security resilience.",
      },
    ],
    ctaText: "Get Cybersecurity Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ - Cybersecurity Services",
    items: [
      {
        id: "1",
        question: "What cybersecurity services do you offer?",
        answer:
          "We offer network security, penetration testing, cloud security, threat detection, incident response, data encryption, and compliance solutions.",
      },
      {
        id: "2",
        question: "Can you help with data protection compliance?",
        answer:
          "Yes, we ensure compliance with global data protection standards like GDPR, HIPAA, ISO 27001, and PCI DSS through audits and policy implementation.",
      },
      {
        id: "3",
        question: "Do you provide 24/7 threat monitoring?",
        answer:
          "Absolutely. Our security operations center (SOC) provides round-the-clock monitoring to detect, analyze, and respond to potential cyber threats in real-time.",
      },
      {
        id: "4",
        question: "What industries do you serve?",
        answer:
          "We provide cybersecurity services across industries like banking, healthcare, manufacturing, eCommerce, and IT, ensuring industry-specific protection.",
      },
      {
        id: "5",
        question: "Can you perform security audits and penetration tests?",
        answer:
          "Yes, our experts conduct regular vulnerability assessments, penetration testing, and system audits to identify and patch security weaknesses.",
      },
      {
        id: "6",
        question: "Do you offer employee cybersecurity training?",
        answer:
          "Yes, we provide awareness programs to train employees on phishing prevention, password hygiene, and safe digital practices.",
      },
      {
        id: "7",
        question: "How do you handle incident response and recovery?",
        answer:
          "Our team follows a structured incident response plan — detecting, isolating, investigating, and recovering systems while preventing future breaches.",
      },
    ],
  },
};
