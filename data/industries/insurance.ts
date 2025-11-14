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
      icon: "Leaf",
      title: "Digital Underwriting Platforms",
      subtitle: "",
      description:
        "Empower insurers with AI and advanced analytics for automated risk assessment. Eliminate manual tasks through intelligent rule engines and predictive scoring. Enhance underwriting speed with integrated data validation and reporting. Reduce human errors while maintaining full transparency in policy approval. Deliver faster, data-backed underwriting decisions with improved accuracy.",
    },
    {
      id: "claims-automation",
      icon: "Leaf",
      title: "Claims Automation Systems",
      subtitle: "",
      description:
        "Automate claims processing with AI, image recognition, and workflow bots. Identify fraudulent claims instantly using behavior-based anomaly detection. Reduce settlement times through end-to-end digital claim routing. Provide real-time status tracking and transparency for policyholders. Improve operational efficiency while ensuring accurate claim resolutions.",
    },
    {
      id: "fraud-detection-ai",
      icon: "Leaf",
      title: "AI-Based Fraud Detection & Risk Scoring",
      subtitle: "",
      description:
        "Leverage AI and machine learning to detect unusual claim behaviors early. Use predictive analytics to evaluate transaction authenticity in real time. Assign dynamic risk scores based on policyholder and claim history. Prevent fraudulent payouts and financial losses through smart alerts. Build trust and integrity in your insurance ecosystem with secure oversight.",
    },
    {
      id: "policyholder-engagement",
      icon: "Leaf",
      title: "Customer Portals & Engagement Systems",
      subtitle: "",
      description:
        "Empower customers with 24/7 self-service access for policies and renewals. Simplify policy updates and claims submissions via personalized dashboards. Deliver AI-powered recommendations for tailored insurance plans. Integrate omnichannel communication for seamless service experiences. Strengthen retention and loyalty through data-driven customer engagement.",
    },
    {
      id: "predictive-analytics",
      icon: "Leaf",
      title: "Predictive Analytics for Loss Prevention",
      subtitle: "",
      description:
        "Utilize machine learning models to forecast potential claim risks early. Analyze policyholder behavior patterns to predict loss probability. Design optimized premium structures based on predictive insights. Enable proactive interventions to minimize financial exposure. Enhance decision-making with clear, data-backed risk intelligence.",
    },
    {
      id: "regtech",
      icon: "Leaf",
      title: "RegTech & Compliance Automation",
      subtitle: "",
      description:
        "Stay compliant with evolving insurance laws using automation frameworks. Monitor policy activities and transactions for real-time compliance alerts. Simplify audit trails with auto-generated documentation and reports. Ensure consistent adherence to KYC, AML, and regulatory mandates. Reduce compliance costs while strengthening governance efficiency.",
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
    laptopImage: "https://i.pinimg.com/1200x/12/8d/a2/128da2fa9de271ca3db65c6ba957f68f.jpg",
    mobileImage: "https://i.pinimg.com/736x/04/c5/5d/04c55d30e921b1b74cf1fc44fed0bbae.jpg",
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
      "Empower customers with secure mobile access to manage their insurance policies anytime, anywhere. " +
      "Allow seamless claim submissions and document uploads through an intuitive interface. " +
      "Offer instant notifications for policy renewals and claim updates. " +
      "Enable real-time chat support to resolve customer queries efficiently. " +
      "Deliver convenience and transparency through a unified digital insurance experience.",
  },
  {
    id: "security",
    icon: "map", //ShieldCheck
    title: "Data Security & Regulatory Compliance",
    description:
      "Ensure complete protection of sensitive policyholder data through advanced encryption protocols. " +
      "Maintain detailed audit logs for all transactions and user interactions. " +
      "Comply with international regulations such as GDPR, HIPAA, and ISO standards. " +
      "Detect and prevent fraud with AI-driven risk monitoring systems. " +
      "Build customer trust by enforcing secure and transparent insurance operations.",
  },
  {
    id: "analytics",
    icon: "map", //PieChart
    title: "Business Intelligence & Predictive Insights",
    description:
      "Leverage analytics to visualize policy performance, premium growth, and claims efficiency. " +
      "Use predictive modeling to anticipate risks and optimize pricing strategies. " +
      "Identify high-value customers through behavior and purchase pattern analysis. " +
      "Generate automated reports for underwriting, claims, and financial teams. " +
      "Empower executives with data-backed decisions using dynamic dashboards.",
  },
  {
    id: "ai-assist",
    icon: "map", //Bot
    title: "AI Assistants & Chatbots",
    description:
      "Integrate AI-driven chatbots to assist customers with instant policy quotes and claim updates. " +
      "Automate repetitive support tasks to enhance service speed and accuracy. " +
      "Provide 24/7 availability for claim tracking and policy renewals. " +
      "Analyze customer interactions to improve future communication and offerings. " +
      "Deliver personalized insurance experiences using intelligent virtual agents.",
  },
],
ctaText: "BUILD YOUR INSURANCE SOFTWARE SOLUTION",
onCtaClick: () => {},
  },

managementSolutionsTwo: {
  title: "Insurance Management Software Solutions",
  subtitle:
    "Our insurance software developers build modern platforms that streamline operations, enhance customer experience, and ensure regulatory compliance for insurers worldwide.",
  subtitleLink: { text: "insurance management systems", url: "#" },
  laptopImage: "https://i.pinimg.com/1200x/be/d8/eb/bed8eb873a8c5ee7f43ef6445b7fb578.jpg",
  mobileImage: "/images/insurance-management-mobile.jpg",

  topFeatures: [
    {
      id: "policy-admin",
      icon: "FileText",
      title: "Policy Administration & Underwriting Systems",
      description:
        "Automate policy creation, renewal, and risk assessment with smart underwriting tools. Improve accuracy and operational efficiency.",
      link: { text: "policy management software", url: "#" },
    },
    {
      id: "claims-processing",
      icon: "ClipboardCheck",
      title: "Claims Processing & Settlement Platforms",
      description:
        "Digitize claim submissions, validation, and payouts. Reduce processing time and enhance customer satisfaction through automation.",
      link: { text: "claims management systems", url: "#" },
    },
    {
      id: "agent-portals",
      icon: "Users",
      title: "Agent & Customer Self-Service Portals",
      description:
        "Empower agents and policyholders with secure access to quotes, policies, and claims. Enable 24/7 support with real-time updates.",
      link: { text: "insurance agent portals", url: "#" },
    },
    {
      id: "compliance-security",
      icon: "Shield",
      title: "Regulatory Compliance & Data Security",
      description:
        "Ensure complete data protection and compliance with industry regulations. Implement KYC, AML, and fraud detection features.",
      link: { text: "insurance compliance software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "crm-integration",
      icon: "Link",
      title: "CRM & Third-Party Integration Tools",
      description:
        "Integrate with CRMs, payment gateways, and analytics tools. Achieve seamless data flow across your insurance ecosystem.",
    },
    {
      id: "analytics-dashboard",
      icon: "BarChart3",
      title: "Analytics & Performance Dashboards",
      description:
        "Track business KPIs, policy performance, and customer trends. Make informed decisions using real-time visual analytics.",
    },
    {
      id: "mobile-insurance",
      icon: "Smartphone",
      title: "Mobile Insurance Apps",
      description:
        "Offer customers intuitive mobile access for policy management, claims, and renewals. Improve engagement and satisfaction.",
    },
    {
      id: "support-services",
      icon: "Headphones",
      title: "Ongoing Support & Maintenance",
      description:
        "Receive continuous technical support and updates. Ensure your insurance platform runs smoothly with peak reliability.",
    },
  ],

  ctaText: "GET INSURANCE SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
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
 