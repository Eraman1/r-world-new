import { IndustryConfig } from "@/types/industries";

export const lending: IndustryConfig = {
  slug: "lending",
  banner: {
    title: "Transform Lending Operations with",
    highlight: "AI-Powered Loan Management Software Solutions",
    subtitle:
      "Revolutionize lending with intelligent automation, real-time credit risk assessment, and seamless loan lifecycle management. Our solutions empower banks, fintechs, and credit institutions to improve efficiency, compliance, and customer experience across origination, servicing, and collections.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Lending Software Solutions",
  },

  techHero: {
    heading: "Hire Expert Lending Software Developers",
    description:
      "We build AI-driven lending platforms that automate underwriting, credit scoring, and loan servicing. From personal to enterprise lending, our technology ensures faster decisions, reduced defaults, and enhanced borrower engagement.",
    services: [
      {
        id: "loan-origination",
        title: "Loan Origination & Onboarding Systems",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "credit-risk",
        title: "AI-Powered Credit Risk Assessment",
        icon: "Tractor", //Shield
        position: "left",
      },
      {
        id: "loan-servicing",
        title: "Loan Servicing & Management Platforms",
        icon: "Tractor", //Settings
        position: "left",
      },
      {
        id: "document-verification",
        title: "Automated Document Verification Systems",
        icon: "Tractor", //Search
        position: "left",
      },
      {
        id: "collections",
        title: "AI-Based Collections & Recovery Tools",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "customer-portals",
        title: "Customer Portals & Self-Service Dashboards",
        icon: "Tractor", //User
        position: "right",
      },
      {
        id: "compliance",
        title: "Regulatory Compliance & Reporting Systems",
        icon: "Tractor", //ShieldCheck
        position: "right",
      },
      {
        id: "mobile-banking",
        title: "Mobile Lending Apps & Chatbots",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI, Cloud & Automation Solutions for the Lending Industry",
    mainDescription:
      "We create intelligent lending platforms that automate every stage of the loan lifecycle — from origination to servicing. With AI analytics, digital KYC, and predictive modeling, lenders can accelerate approvals, minimize risk, and enhance borrower satisfaction.",
    items: [
      {
        id: "loan-origination-ai",
        icon: "Leaf", //FilePlus
        title: "AI-Driven Loan Origination Systems",
        subtitle: "",
        description:
          "Digitize loan onboarding with automated credit checks, document uploads, and real-time risk scoring to speed up approvals.",
      },
      {
        id: "credit-risk-modeling",
        icon: "Leaf", //BarChart
        title: "Credit Risk & Scoring Analytics",
        subtitle: "",
        description:
          "Use machine learning to evaluate borrower risk based on behavioral, financial, and transactional data for smarter lending decisions.",
      },
      {
        id: "loan-servicing-platforms",
        icon: "Leaf", //Settings
        title: "Loan Servicing & Portfolio Management",
        subtitle: "",
        description:
          "Automate loan repayments, account tracking, and portfolio monitoring with AI-driven workflows and real-time dashboards.",
      },
      {
        id: "collection-automation",
        icon: "Leaf", //TrendingUp
        title: "AI Collection & Recovery Systems",
        subtitle: "",
        description:
          "Optimize delinquency management with predictive analytics, automated reminders, and smart recovery workflows.",
      },
      {
        id: "compliance-regtech",
        icon: "Leaf", //ShieldAlert
        title: "Compliance Automation & RegTech",
        subtitle: "",
        description:
          "Ensure full adherence to KYC, AML, and regulatory standards with automated audit trails and risk monitoring tools.",
      },
      {
        id: "customer-engagement",
        icon: "Leaf", //User
        title: "Customer Experience & Engagement Portals",
        subtitle: "",
        description:
          "Enhance borrower relationships through digital portals, mobile apps, and AI chatbots offering 24/7 loan support.",
      },
    ],
    linkText: "Get AI-Powered Lending Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "End-to-End Loan Management Software Solutions",
    subtitle:
      "We design intelligent loan ecosystems that integrate origination, servicing, collections, and analytics — helping lenders scale efficiently and stay compliant.",
    subtitleLink: { text: "loan management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "loan-lifecycle",
        icon: "map", //RefreshCcw
        title: "Full Loan Lifecycle Automation",
        description:
          "Automate every phase — from application and approval to disbursement and repayment — ensuring seamless operations.",
        link: { text: "loan lifecycle automation", url: "#" },
      },
      {
        id: "risk-dashboard",
        icon: "map", //BarChart3
        title: "Credit Risk & Performance Dashboards",
        description:
          "Visualize loan portfolio health, delinquency trends, and borrower risk scores through predictive analytics dashboards.",
      },
      {
        id: "smart-compliance",
        icon: "map", //ShieldCheck
        title: "Smart Compliance & Audit Systems",
        description:
          "Simplify regulatory audits and ensure ongoing KYC/AML compliance with automated tracking and digital verification tools.",
      },
    ],
    bottomFeatures: [
      {
        id: "mobile-apps",
        icon: "map", //Smartphone
        title: "Mobile Lending Apps & Borrower Portals",
        description:
          "Enable borrowers to apply, track, and repay loans via intuitive mobile platforms with integrated support chatbots.",
      },
      {
        id: "analytics-ai",
        icon: "map", //Cpu
        title: "Predictive Analytics & Loan Forecasting",
        description:
          "Leverage AI to predict repayment probabilities, detect fraud, and identify cross-selling opportunities.",
      },
      {
        id: "collections-ai",
        icon: "map", //TrendingUp
        title: "AI Collections & Recovery Optimization",
        description:
          "Automate collection reminders, optimize recovery strategies, and minimize loan defaults with machine learning insights.",
      },
      {
        id: "security",
        icon: "map", //Lock
        title: "Data Security & Encryption Standards",
        description:
          "Protect sensitive borrower data with advanced encryption, multi-factor authentication, and global compliance frameworks.",
      },
    ],
    ctaText: "BUILD YOUR LENDING SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
  faq : {
  title: "Lending & Financial Services FAQ",
  items: [
    {
      id: "1",
      question: "What types of loans are available through lending platforms?",
      answer:
        "Lending platforms offer various loan types including personal loans, business loans, mortgage loans, auto loans, and payday loans. Each loan type has specific eligibility criteria, interest rates, and repayment terms designed to meet different financial needs.",
    },
    {
      id: "2",
      question: "How does online loan application work?",
      answer:
        "Online loan applications simplify the borrowing process. Borrowers submit personal, financial, and employment information via a web or mobile platform. The system then evaluates creditworthiness and provides instant pre-approval or next steps for verification.",
    },
    {
      id: "3",
      question: "What is the role of credit scoring in lending?",
      answer:
        "Credit scoring helps lenders assess the risk of lending to an individual or business. It uses historical financial data, repayment history, and credit behavior to generate a score that influences loan approval, interest rates, and borrowing limits.",
    },
    {
      id: "4",
      question: "Are there digital tools for loan management?",
      answer:
        "Yes. Modern lending platforms offer dashboards for borrowers and lenders to manage loans. Features include automated payment reminders, repayment tracking, EMI calculators, and real-time statements, making loan management more transparent and convenient.",
    },
    {
      id: "5",
      question: "How do lenders ensure data security?",
      answer:
        "Lenders protect sensitive financial data using encryption, secure access protocols, and regulatory compliance measures like GDPR or PCI DSS. Advanced monitoring and authentication processes safeguard personal and transactional information.",
    },
    {
      id: "6",
      question: "What is the difference between secured and unsecured loans?",
      answer:
        "Secured loans require collateral such as property or assets, reducing the lender’s risk and usually offering lower interest rates. Unsecured loans do not require collateral but typically have higher interest rates due to increased risk to the lender.",
    },
    {
      id: "7",
      question: "Can lending platforms integrate with banking systems?",
      answer:
        "Yes. Lending software can integrate with banking APIs, payment gateways, and financial management systems to automate fund disbursement, repayment tracking, and account reconciliation for seamless operations.",
    },
    {
      id: "8",
      question: "How does AI improve lending decisions?",
      answer:
        "AI enhances lending by analyzing vast datasets for predictive credit scoring, fraud detection, and personalized loan offers. It allows lenders to make faster, more accurate, and risk-aware decisions while improving borrower experience.",
    },
    {
      id: "9",
      question: "What are common fees and charges in lending?",
      answer:
        "Loans may include interest, processing fees, late payment penalties, prepayment charges, or service fees. Transparent lending platforms clearly disclose these costs upfront to ensure borrowers understand total repayment obligations.",
    },
    {
      id: "10",
      question: "Is it possible to refinance a loan digitally?",
      answer:
        "Yes. Digital lending platforms enable refinancing by allowing borrowers to consolidate existing loans, adjust interest rates, or extend repayment periods. This helps improve cash flow and reduce financial stress through convenient online processes.",
    },
  ],
}

};
