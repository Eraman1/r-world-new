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
    "We build intelligent lending ecosystems that simplify every phase of the loan lifecycle — from origination to collection. Our AI-powered tools, predictive analytics, and automated workflows empower lenders to approve faster, reduce risks, and personalize borrower experiences effortlessly.",
  items: [
    {
      id: "loan-origination-ai",
      icon: "Leaf", //FilePlus
      title: "AI-Driven Loan Origination Systems",
      subtitle: "",
      description:
        "Automate the loan origination journey from initial application to final approval. \n" +
        "Streamline KYC checks, document verification, and credit scoring using AI models. \n" +
        "Reduce manual errors and accelerate decision-making with intelligent data validation. \n" +
        "Enable real-time collaboration between applicants and underwriters. \n" +
        "Deliver a seamless, paperless onboarding experience for borrowers.",
    },
    {
      id: "credit-risk-modeling",
      icon: "Leaf", //BarChart
      title: "Credit Risk & Scoring Analytics",
      subtitle: "",
      description:
        "Leverage predictive analytics to assess borrower creditworthiness more accurately. \n" +
        "Use behavioral, financial, and transaction-based data for dynamic scoring. \n" +
        "Identify early risk indicators and minimize potential loan defaults. \n" +
        "Continuously refine models through AI-driven feedback loops. \n" +
        "Make smarter, data-backed lending decisions with real-time insights.",
    },
    {
      id: "loan-servicing-platforms",
      icon: "Leaf", //Settings
      title: "Loan Servicing & Portfolio Management",
      subtitle: "",
      description:
        "Automate loan repayment tracking and customer account management. \n" +
        "Use AI-powered dashboards to monitor portfolio health and profitability. \n" +
        "Detect delinquency risks early through predictive data analysis. \n" +
        "Simplify interest adjustments, EMIs, and renewals using workflow automation. \n" +
        "Ensure transparent reporting and effortless servicing operations.",
    },
    {
      id: "collection-automation",
      icon: "Leaf", //TrendingUp
      title: "AI Collection & Recovery Systems",
      subtitle: "",
      description:
        "Revolutionize loan recovery through predictive delinquency management. \n" +
        "Use AI to segment borrowers based on repayment probability and intent. \n" +
        "Automate reminders, communication, and follow-ups across multiple channels. \n" +
        "Empower agents with smart dashboards and real-time debt analytics. \n" +
        "Reduce non-performing assets and enhance collection efficiency.",
    },
    {
      id: "compliance-regtech",
      icon: "Leaf", //ShieldAlert
      title: "Compliance Automation & RegTech",
      subtitle: "",
      description:
        "Ensure end-to-end compliance with KYC, AML, and other financial regulations. \n" +
        "Deploy automated monitoring systems for suspicious activity detection. \n" +
        "Maintain digital audit trails and regulatory reporting dashboards. \n" +
        "Simplify risk management through intelligent alert systems. \n" +
        "Safeguard your lending operations with zero compliance gaps.",
    },
    {
      id: "customer-engagement",
      icon: "Leaf", //User
      title: "Customer Experience & Engagement Portals",
      subtitle: "",
      description:
        "Enhance borrower interaction through intuitive digital experiences. \n" +
        "Provide personalized dashboards and mobile loan management tools. \n" +
        "Integrate AI chatbots for instant loan inquiries and 24/7 assistance. \n" +
        "Enable omnichannel engagement across web, mobile, and social platforms. \n" +
        "Build long-term loyalty with transparent, borrower-centric communication.",
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
    laptopImage: "https://i.pinimg.com/736x/8e/c1/c1/8ec1c15bacb36678797d8eae6cfc5739.jpg",
    mobileImage: "https://i.pinimg.com/1200x/9c/21/5f/9c215f4d19b4ca56098cbe2e856ac9ea.jpg",
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
      "Empower borrowers with mobile-first lending experiences that simplify loan applications and tracking. Provide real-time notifications for approvals, disbursements, and repayments. Integrate chatbots for instant query resolution and customer support. Offer personalized loan recommendations based on financial behavior. Deliver secure, user-friendly interfaces to enhance borrower satisfaction.",
  },
  {
    id: "analytics-ai",
    icon: "map", //Cpu
    title: "Predictive Analytics & Loan Forecasting",
    description:
      "Use artificial intelligence to analyze borrower histories and repayment trends. Predict loan default probabilities and improve lending decisions. Detect fraudulent activities through anomaly and behavior analysis. Identify cross-selling and upselling opportunities across borrower segments. Enhance operational efficiency through data-driven loan forecasting models.",
  },
  {
    id: "collections-ai",
    icon: "map", //TrendingUp
    title: "AI Collections & Recovery Optimization",
    description:
      "Automate repayment reminders through AI-driven communication tools. Use predictive insights to segment defaulters and optimize recovery workflows. Track repayment patterns and adjust strategies dynamically. Improve efficiency of collection teams with intelligent dashboards. Minimize loan defaults while maintaining positive customer relationships.",
  },
  {
    id: "security",
    icon: "map", //Lock
    title: "Data Security & Encryption Standards",
    description:
      "Ensure end-to-end encryption for sensitive borrower and financial data. Implement multi-factor authentication and advanced access controls. Comply with global data protection regulations and standards. Continuously monitor systems for unauthorized access or breaches. Maintain trust through secure, compliant, and transparent operations.",
  },
],
ctaText: "BUILD YOUR LENDING SOFTWARE SOLUTION",
onCtaClick: () => {},
},

managementSolutionsTwo: {
  title: "Lending Management Software Solutions",
  subtitle:
    "Our lending software developers build smart platforms to automate loan origination, underwriting, and servicing. Enhance customer experience and streamline financial workflows through digital innovation.",
  subtitleLink: { text: "loan management software", url: "#" },
  laptopImage: "https://i.pinimg.com/1200x/ea/9b/0b/ea9b0b8e163dd22d59c15f942040f632.jpg",
  mobileImage: "/images/lending-management-mobile.jpg",

  topFeatures: [
    {
      id: "loan-origination",
      icon: "FileText",
      title: "Loan Origination & Application Systems",
      description:
        "Automate borrower onboarding and loan approval workflows. Simplify documentation and speed up credit assessment processes.",
      link: { text: "loan origination systems", url: "#" },
    },
    {
      id: "credit-risk",
      icon: "TrendingUp",
      title: "Credit Scoring & Risk Analytics",
      description:
        "Use AI-driven analytics to evaluate borrower risk profiles. Improve decision-making with predictive scoring and trend insights.",
      link: { text: "credit risk analytics", url: "#" },
    },
    {
      id: "payment-collections",
      icon: "Wallet",
      title: "Payment & Collections Management",
      description:
        "Enable automated EMI scheduling and real-time tracking. Integrate payment gateways for seamless collections and reconciliation.",
      link: { text: "loan payment management", url: "#" },
    },
    {
      id: "compliance-security",
      icon: "ShieldCheck",
      title: "Compliance & Data Security Software",
      description:
        "Ensure full KYC, AML, and regulatory compliance. Protect sensitive data with encryption and audit-ready reporting tools.",
      link: { text: "lending compliance systems", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "servicing",
      icon: "Settings",
      title: "Loan Servicing & Management Tools",
      description:
        "Manage repayments, renewals, and delinquency tracking. Maintain transparency across customer accounts and reports.",
    },
    {
      id: "partner-portals",
      icon: "Users",
      title: "Partner & Agent Management Portals",
      description:
        "Provide agents with dashboards to manage borrowers. Streamline lead tracking, performance insights, and commissions.",
    },
    {
      id: "analytics-dashboard",
      icon: "BarChart",
      title: "Lending Analytics & Insights Dashboard",
      description:
        "Monitor portfolio health and customer trends in real time. Gain actionable insights to improve lending strategies.",
    },
    {
      id: "mobile-borrower",
      icon: "Smartphone",
      title: "Mobile Borrower Applications",
      description:
        "Offer borrowers mobile access to apply, repay, and track loans. Enhance engagement with notifications and chat support.",
    },
  ],

  ctaText: "GET LENDING SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
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
