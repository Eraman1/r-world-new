import { IndustryConfig } from "@/types/industries";
 
export const legal: IndustryConfig = {
  slug: "legal",
  banner: {
    title: "Modernize Legal Operations with",
    highlight: "AI-Powered LegalTech Software Solutions",
    subtitle:
      "Transform legal practices with intelligent automation, contract analytics, and case management systems. From document review to compliance, our legal software solutions enhance efficiency, accuracy, and decision-making for modern law firms and corporate legal departments.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get LegalTech Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Legal Software Developers",
    description:
      "We develop AI-driven legal technology platforms that automate documentation, streamline case workflows, and enhance compliance management. Empower your legal team with advanced analytics, secure cloud storage, and real-time collaboration tools.",
    services: [
      {
        id: "case-management",
        title: "Case & Matter Management Systems",
        icon: "Tractor", //Folder
        position: "left",
      },
      {
        id: "contract-automation",
        title: "AI-Powered Contract Automation Platforms",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "document-review",
        title: "Automated Document Review & eDiscovery",
        icon: "Tractor", //Search
        position: "left",
      },
      {
        id: "legal-analytics",
        title: "Legal Research & Analytics Tools",
        icon: "Tractor", //BarChart
        position: "left",
      },
      {
        id: "compliance",
        title: "Compliance & Risk Management Systems",
        icon: "Tractor", //Shield
        position: "right",
      },
      {
        id: "client-portals",
        title: "Client Portals & Collaboration Platforms",
        icon: "Tractor", //Users
        position: "right",
      },
      {
        id: "billing",
        title: "Billing, Invoicing & Time Tracking Software",
        icon: "Tractor", //Clock
        position: "right",
      },
      {
        id: "ai-assistants",
        title: "AI Legal Assistants & Chatbots",
        icon: "Tractor", //Bot
        position: "right",
      },
    ],
  },
 
  solutions: {
    mainTitle: "AI, Cloud & Automation Solutions for the Legal Industry",
    mainDescription:
      "We design intelligent, secure, and cloud-based legal software solutions that automate document workflows, streamline case management, and ensure regulatory compliance. Our systems help legal professionals save time, reduce errors, and focus on delivering client value.",
    items: [
      {
        id: "contract-management",
        icon: "Leaf", //FileText
        title: "Contract Lifecycle Management (CLM)",
        subtitle: "",
        description:
          "Digitize and automate the entire contract lifecycle — from drafting to negotiation and renewal — with AI-based templates and analytics.",
      },
      {
        id: "document-automation",
        icon: "Leaf", //Copy
        title: "Intelligent Document Automation",
        subtitle: "",
        description:
          "Automate document creation, storage, and version control with AI-powered tools to ensure accuracy and efficiency.",
      },
      {
        id: "ediscovery",
        icon: "Leaf", //Search
        title: "AI-Based eDiscovery Platforms",
        subtitle: "",
        description:
          "Leverage NLP and machine learning to search, filter, and analyze massive legal document repositories quickly and securely.",
      },
      {
        id: "legal-analytics",
        icon: "Leaf", //TrendingUp
        title: "Predictive Legal Analytics",
        subtitle: "",
        description:
          "Use predictive modeling to anticipate case outcomes, assess risks, and improve litigation strategies with data-driven insights.",
      },
      {
        id: "compliance-automation",
        icon: "Leaf", //ShieldCheck
        title: "Compliance Automation Systems",
        subtitle: "",
        description:
          "Monitor evolving regulations, automate compliance workflows, and ensure adherence to legal standards across jurisdictions.",
      },
      {
        id: "client-experience",
        icon: "Leaf", //User
        title: "Client Experience & Portal Solutions",
        subtitle: "",
        description:
          "Deliver transparency and collaboration through secure portals where clients can track cases, share documents, and communicate in real time.",
      },
    ],
    linkText: "Get AI-Powered Legal Solutions",
    linkUrl: "/contact-us",
  },
 
  managementSolutions: {
    title: "Legal Practice Management Software Solutions",
    subtitle:
      "We develop custom LegalTech platforms that streamline case tracking, automate billing, and enhance compliance for law firms, in-house teams, and legal service providers.",
    subtitleLink: { text: "legal management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "workflow-automation",
        icon: "map", //Settings
        title: "Workflow & Case Automation",
        description:
          "Automate case assignments, notifications, and document routing to enhance team productivity and collaboration.",
        link: { text: "AI legal workflow automation", url: "#" },
      },
      {
        id: "document-insight",
        icon: "map", //FileSearch
        title: "Document Intelligence & Search Tools",
        description:
          "Use AI-powered search and OCR tools to instantly find key clauses, contracts, or precedents within your legal database.",
      },
      {
        id: "billing-systems",
        icon: "map", //CreditCard
        title: "Billing & Time Tracking Management",
        description:
          "Simplify invoicing, billing, and time tracking with automated tools that integrate seamlessly with case management systems.",
      },
    ],
    bottomFeatures: [
      {
        id: "secure-storage",
        icon: "map", //Lock
        title: "Secure Cloud Storage & Access Control",
        description:
          "Protect sensitive legal data with encryption, access controls, and role-based permissions for internal and client users.",
      },
      {
        id: "analytics",
        icon: "map", //PieChart
        title: "Legal Analytics & Performance Dashboards",
        description:
          "Visualize case outcomes, team performance, and billing insights through dynamic dashboards and custom reports.",
      },
      {
        id: "client-engagement",
        icon: "map", //Users
        title: "Client Engagement & Collaboration Tools",
        description:
          "Enable real-time collaboration between lawyers and clients through secure communication and document-sharing portals.",
      },
      {
        id: "ai-assistants",
        icon: "map", //Cpu
        title: "AI Legal Assistants & Virtual Paralegals",
        description:
          "Deploy AI assistants that summarize cases, draft legal documents, and provide research support to lawyers in real time.",
      },
    ],
    ctaText: "BUILD YOUR LEGAL SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
  faq : {
  title: "Legal Services FAQ",
  items: [
    {
      id: "1",
      question: "What types of legal services do law firms provide?",
      answer:
        "Law firms offer a wide range of services including corporate law, intellectual property, litigation, employment law, family law, and regulatory compliance. They provide advisory, representation, and documentation services to individuals, businesses, and organizations.",
    },
    {
      id: "2",
      question: "How can technology improve legal services?",
      answer:
        "Legal technology streamlines case management, document automation, research, and client communication. AI-powered tools can assist in contract analysis, legal research, and predicting case outcomes, allowing lawyers to provide faster and more accurate services.",
    },
    {
      id: "3",
      question: "What is legal compliance, and why is it important?",
      answer:
        "Legal compliance ensures that businesses and individuals adhere to applicable laws, regulations, and industry standards. Compliance reduces the risk of fines, lawsuits, and reputational damage while promoting ethical business practices.",
    },
    {
      id: "4",
      question: "How do law firms handle client confidentiality?",
      answer:
        "Law firms maintain strict confidentiality through secure communication channels, encrypted document storage, and adherence to professional ethical standards. Client information is only shared on a need-to-know basis or as required by law.",
    },
    {
      id: "5",
      question: "What should I look for when hiring a lawyer?",
      answer:
        "Consider the lawyer's area of expertise, experience, track record, communication skills, and fees. It's also important to check their reputation, client reviews, and whether they understand your specific legal needs.",
    },
    {
      id: "6",
      question: "How can legal services support businesses?",
      answer:
        "Legal services help businesses with contract drafting and review, intellectual property protection, risk management, regulatory compliance, dispute resolution, and corporate governance. This support enables businesses to operate efficiently while minimizing legal risks.",
    },
    {
      id: "7",
      question: "What is the difference between litigation and alternative dispute resolution?",
      answer:
        "Litigation involves resolving disputes through court proceedings, while alternative dispute resolution (ADR) includes methods like mediation and arbitration. ADR is often faster, more cost-effective, and less adversarial than traditional litigation.",
    },
    {
      id: "8",
      question: "Can legal services be delivered online?",
      answer:
        "Yes. Many law firms provide virtual consultations, digital contract drafting, and remote legal research. Online platforms also facilitate secure document sharing and electronic signatures, enabling efficient legal services without physical meetings.",
    },
    {
      id: "9",
      question: "What role does intellectual property law play in business?",
      answer:
        "Intellectual property law protects creations such as patents, trademarks, copyrights, and trade secrets. It ensures businesses can monetize and safeguard their innovations, brand identity, and creative content.",
    },
    {
      id: "10",
      question: "How do legal services evolve with regulatory changes?",
      answer:
        "Legal services continuously adapt by monitoring new laws, industry regulations, and court rulings. Law firms provide guidance to clients, update contracts, and implement compliance strategies to keep businesses aligned with evolving legal requirements.",
    },
  ],
}

};