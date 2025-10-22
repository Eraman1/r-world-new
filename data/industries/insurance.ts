import { IndustryConfig } from "@/types/industries";
 
export const insurance: IndustryConfig = {
  slug: "insurance",
  banner: {
    title: "Revolutionize Policy Operations with",
    highlight: "AI-Powered Insurance Software Solutions",
    subtitle:
      "Empower insurers with intelligent automation, advanced analytics, and seamless claim management systems. From underwriting to customer service, our solutions enhance operational efficiency, minimize risk, and deliver exceptional policyholder experiences.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Insurance Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Insurance Software Developers",
    description:
      "Our developers build AI-driven insurance platforms that automate policy management, risk analysis, and claims processing. We help insurers adopt digital transformation to deliver faster, smarter, and more customer-centric experiences.",
    services: [
      {
        id: "policy-management",
        title: "Policy Administration & Management Systems",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "claims-processing",
        title: "AI-Powered Claims Processing Platforms",
        icon: "Tractor", //CheckSquare
        position: "left",
      },
      {
        id: "underwriting",
        title: "Automated Underwriting Systems",
        icon: "Tractor", //ClipboardCheck
        position: "left",
      },
      {
        id: "fraud-detection",
        title: "Fraud Detection & Risk Analytics",
        icon: "Tractor", //Shield
        position: "left",
      },
      {
        id: "customer-portals",
        title: "Customer Self-Service & Portals",
        icon: "Tractor", //User
        position: "right",
      },
      {
        id: "crm",
        title: "Insurance CRM & Policyholder Engagement",
        icon: "Tractor", //Users
        position: "right",
      },
      {
        id: "predictive-modeling",
        title: "Predictive Analytics & Risk Modeling",
        icon: "Tractor", //TrendingUp
        position: "right",
      },
      {
        id: "mobile-apps",
        title: "Mobile Insurance Apps & Chatbots",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
  },
 
  solutions: {
    mainTitle: "AI, Cloud & Automation Solutions for the Insurance Industry",
    mainDescription:
      "We develop secure, scalable, and AI-driven insurance platforms to transform policy administration, enhance underwriting precision, and accelerate claim settlements. Our solutions enable insurers to optimize workflows, reduce costs, and improve customer satisfaction.",
    items: [
      {
        id: "digital-underwriting",
        icon: "Leaf", //ClipboardCheck
        title: "Digital Underwriting Platforms",
        subtitle: "",
        description:
          "Leverage AI and data analytics to automate underwriting decisions, reduce manual work, and improve risk evaluation accuracy.",
      },
      {
        id: "claims-automation",
        icon: "Leaf", //CheckSquare
        title: "Claims Automation Systems",
        subtitle: "",
        description:
          "Accelerate claim settlements using AI, image recognition, and process automation to minimize delays and fraud risks.",
      },
      {
        id: "fraud-detection-ai",
        icon: "Leaf", //ShieldAlert
        title: "AI-Based Fraud Detection & Risk Scoring",
        subtitle: "",
        description:
          "Identify suspicious claims, transactions, or policy anomalies using predictive analytics and behavioral modeling.",
      },
      {
        id: "policyholder-engagement",
        icon: "Leaf", //User
        title: "Customer Portals & Engagement Systems",
        subtitle: "",
        description:
          "Enhance customer experience with self-service policy management, automated renewals, and omnichannel support.",
      },
      {
        id: "predictive-analytics",
        icon: "Leaf", //BarChart
        title: "Predictive Analytics for Loss Prevention",
        subtitle: "",
        description:
          "Use machine learning to forecast risk trends, prevent losses, and design more accurate premium models.",
      },
      {
        id: "regtech",
        icon: "Leaf", //FileCheck
        title: "RegTech & Compliance Automation",
        subtitle: "",
        description:
          "Ensure full compliance with evolving insurance regulations using automated monitoring and documentation systems.",
      },
    ],
    linkText: "Get AI-Powered Insurance Solutions",
    linkUrl: "/contact-us",
  },
 
  managementSolutions: {
    title: "Insurance Management Software Solutions",
    subtitle:
      "We build comprehensive digital insurance ecosystems that streamline policy management, claims automation, and customer engagement while ensuring compliance and security.",
    subtitleLink: { text: "insurance software solutions", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "claims-intelligence",
        icon: "map", //Cpu
        title: "Claims Intelligence & Workflow Automation",
        description:
          "Automate claim processing, documentation, and settlements using AI to minimize turnaround time and improve accuracy.",
        link: { text: "AI claims systems", url: "#" },
      },
      {
        id: "policy-admin",
        icon: "map", //FileText
        title: "Policy Administration & Renewal Management",
        description:
          "Simplify policy creation, renewal, and compliance tracking with integrated administrative tools.",
      },
      {
        id: "risk-analytics",
        icon: "map", //BarChart3
        title: "Risk Analytics & Underwriting Dashboards",
        description:
          "Empower insurers with predictive dashboards to assess, price, and manage risk with precision.",
      },
    ],
    bottomFeatures: [
      {
        id: "mobile-portal",
        icon: "map", //Smartphone
        title: "Mobile Insurance Apps & Customer Portals",
        description:
          "Offer seamless mobile access for policy management, claims tracking, and real-time communication.",
      },
      {
        id: "security",
        icon: "map", //ShieldCheck
        title: "Data Security & Regulatory Compliance",
        description:
          "Protect sensitive policyholder and claim data with encryption, audit trails, and global compliance standards.",
      },
      {
        id: "analytics",
        icon: "map", //PieChart
        title: "Business Intelligence & Predictive Insights",
        description:
          "Visualize key insurance KPIs like claims ratio, premium growth, and customer churn using interactive dashboards.",
      },
      {
        id: "ai-assist",
        icon: "map", //Bot
        title: "AI Assistants & Chatbots",
        description:
          "Provide instant policy quotes, claim updates, and support through AI-powered chatbots and virtual agents.",
      },
    ],
    ctaText: "BUILD YOUR INSURANCE SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
  faq : {
  title: "Insurance FAQ",
  items: [
    {
      id: "1",
      question: "What types of insurance policies are available?",
      answer:
        "Insurance policies cover a wide range of needs including life insurance, health insurance, auto insurance, home insurance, and business insurance. Each policy type offers specific protection and benefits tailored to your personal or business requirements.",
    },
    {
      id: "2",
      question: "How do I choose the right insurance policy?",
      answer:
        "Choosing the right policy depends on your financial goals, risk tolerance, and coverage needs. Consult with insurance advisors, compare quotes, and review the policy terms to select a plan that provides adequate protection and value.",
    },
    {
      id: "3",
      question: "What is the process for filing an insurance claim?",
      answer:
        "To file a claim, notify your insurance provider as soon as possible, provide necessary documentation such as policy details and incident reports, and follow the instructions for assessment and approval. Digital claim submission options are often available for faster processing.",
    },
    {
      id: "4",
      question: "How are insurance premiums calculated?",
      answer:
        "Premiums are determined based on factors like the type and level of coverage, age, health condition, property value, risk exposure, and claim history. Insurers use actuarial data and risk models to calculate a fair and competitive premium.",
    },
    {
      id: "5",
      question: "Can I customize my insurance coverage?",
      answer:
        "Yes, many insurance providers offer customizable policies with add-ons or riders. This allows you to enhance coverage for specific risks, such as critical illness, accidental damage, or business liability, according to your unique needs.",
    },
    {
      id: "6",
      question: "What is the difference between term and whole life insurance?",
      answer:
        "Term insurance provides coverage for a specific period and pays a benefit only if the insured passes away during that term. Whole life insurance offers lifetime coverage with an investment component that builds cash value over time.",
    },
    {
      id: "7",
      question: "How does health insurance work?",
      answer:
        "Health insurance helps cover medical expenses including hospitalization, consultations, prescriptions, and preventive care. Depending on the plan, it may include cashless treatment at network hospitals, co-payments, and reimbursement options.",
    },
    {
      id: "8",
      question: "What is the role of an insurance agent or broker?",
      answer:
        "Insurance agents and brokers guide clients through policy selection, provide expert advice, assist with claims, and ensure that coverage aligns with client needs. Agents typically represent a single insurer, while brokers may offer policies from multiple providers.",
    },
    {
      id: "9",
      question: "Are there digital solutions for managing insurance policies?",
      answer:
        "Yes, modern InsurTech platforms provide mobile apps and online portals to manage policies, pay premiums, track claims, and access customer support. Digital tools enhance convenience, transparency, and efficiency in insurance management.",
    },
    {
      id: "10",
      question: "How can I reduce my insurance costs?",
      answer:
        "You can reduce premiums by comparing quotes, bundling multiple policies, maintaining a healthy lifestyle, improving home or vehicle safety, and opting for higher deductibles where appropriate. Insurers often provide discounts for loyalty and low-risk profiles.",
    },
  ],
},

};
 