import { IndustryConfig } from "@/types/industries";

export const mortgage: IndustryConfig = {
  slug: "mortgage",
  banner: {
    title: "Transform Mortgage Operations with",
    highlight: "AI-Powered Mortgage & Lending Software Solutions",
    subtitle:
      "Reimagine how lenders manage mortgage origination, servicing, and portfolio management with intelligent automation, real-time analytics, and digital borrower experiences.",
    image:
      "/industry/industryMortgageBanner.webp",
    linkText: "Get Mortgage Software Solutions",
  },

  techHero: {
    heading: "Hire Expert Mortgage Software Developers",
    description:
      "We build AI-driven platforms that streamline mortgage processing, credit scoring, and servicing. From retail to commercial lending, our solutions ensure compliance, reduce defaults, and improve borrower satisfaction.",
    services: [
      {
        id: "mortgage-origination",
        title: "Mortgage Origination & Onboarding Platforms",
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
        title: "Loan Servicing & Portfolio Management",
        icon: "Tractor", //Settings
        position: "left",
      },
      {
        id: "document-verification",
        title: "Automated Document Verification & eSigning",
        icon: "Tractor", //Search
        position: "left",
      },
      {
        id: "compliance-reporting",
        title: "Regulatory Compliance & Reporting",
        icon: "Tractor", //ShieldCheck
        position: "right",
      },
      {
        id: "borrower-portal",
        title: "Customer Portals & Self-Service Dashboards",
        icon: "Tractor", //User
        position: "right",
      },
      {
        id: "collections-recovery",
        title: "AI-Powered Collections & Recovery Tools",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "mobile-lending",
        title: "Mobile Mortgage Apps & Chatbots",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
     deviceImages: {
      laptop: "/industry/industryMortgageBanner.webp",
      tablet: "/industry/industryMortgageBanner.webp",
      mobile: "/industry/industryMortgageBanner.webp",
    },
  },

  solutions: {
  mainTitle: "AI, Cloud & Automation Solutions for Mortgage Lending",
  mainDescription:
    "Our platforms automate the entire mortgage lifecycle — from origination and underwriting to servicing and compliance. Leverage AI, digital KYC, and predictive analytics to accelerate approvals, reduce risk, and enhance borrower experience.",
  items: [
    {
      id: "mortgage-origination-ai",
      icon: "Leaf", //FilePlus
      title: "AI-Driven Mortgage Origination Systems",
      subtitle: "",
      description:
        "Automate the entire borrower onboarding process with intelligent data extraction and AI verification tools. Speed up credit checks and underwriting using machine learning algorithms. Reduce manual errors and improve decision accuracy through digital workflows. Seamlessly integrate with CRMs and document repositories for end-to-end automation. Deliver faster loan approvals while maintaining full regulatory compliance.",
    },
    {
      id: "credit-risk-modeling",
      icon: "Leaf", //BarChart
      title: "Credit Risk Analytics & Scoring",
      subtitle: "",
      description:
        "Harness predictive analytics to evaluate borrower creditworthiness with precision. Use machine learning models to detect potential defaults before they occur. Continuously refine risk parameters through adaptive AI-driven scoring systems. Gain real-time insights into portfolio health and exposure management. Strengthen lending confidence by minimizing credit losses and risk bias.",
    },
    {
      id: "loan-servicing-platforms",
      icon: "Leaf", //Settings
      title: "Loan Servicing & Portfolio Management",
      subtitle: "",
      description:
        "Automate repayment tracking, escrow management, and amortization schedules. Provide lenders and borrowers with transparent, real-time performance dashboards. Streamline portfolio monitoring through cloud-based reporting tools. Enable early identification of delinquency trends and portfolio risks. Enhance operational efficiency while ensuring data-driven servicing decisions.",
    },
    {
      id: "collections-automation",
      icon: "Leaf", //TrendingUp
      title: "AI-Powered Collections & Recovery",
      subtitle: "",
      description:
        "Transform collections with intelligent workflows that predict borrower intent. Automate payment reminders, escalations, and follow-ups through digital channels. Leverage AI-based segmentation to personalize recovery strategies effectively. Analyze behavioral data to prioritize high-impact recovery cases. Improve overall recovery rates and reduce operational overheads.",
    },
    {
      id: "compliance-regtech",
      icon: "Leaf", //ShieldAlert
      title: "RegTech & Compliance Automation",
      subtitle: "",
      description:
        "Ensure continuous adherence to KYC, AML, and mortgage lending standards. Automate rule checks, audit trails, and compliance documentation workflows. Use AI to detect anomalies and flag potential regulatory breaches early. Simplify complex reporting with automated dashboards and alerts. Reduce compliance costs while maintaining full transparency and control.",
    },
    {
      id: "borrower-engagement",
      icon: "Leaf", //User
      title: "Customer Experience & Engagement Portals",
      subtitle: "",
      description:
        "Create personalized borrower experiences through AI-powered digital portals. Provide instant loan updates, document uploads, and support through chatbots. Increase engagement with mobile-first tools and intuitive user dashboards. Integrate omnichannel communication for consistent borrower interaction. Build trust and loyalty with responsive, transparent lending experiences.",
    },
  ],
  linkText: "Get AI-Powered Mortgage Solutions",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "End-to-End Mortgage Management Software",
    subtitle:
      "We design intelligent mortgage ecosystems that integrate origination, servicing, collections, and compliance to help lenders scale efficiently.",
    subtitleLink: { text: "mortgage management software", url: "#" },
    laptopImage: "https://i.pinimg.com/736x/7f/68/7f/7f687f2a2afb3bfd841af60e7ab62db7.jpg",
    mobileImage: "https://i.pinimg.com/736x/9f/24/cf/9f24cf4b72520746f76ce24c5b943e2d.jpg",
    topFeatures: [
      {
        id: "loan-lifecycle",
        icon: "map", //RefreshCcw
        title: "Full Mortgage Lifecycle Automation",
        description:
          "Automate every stage of the mortgage process — application, underwriting, approval, and repayment — with seamless workflows.",
        link: { text: "mortgage lifecycle automation", url: "#" },
      },
      {
        id: "risk-dashboard",
        icon: "map", //BarChart3
        title: "Credit Risk & Portfolio Dashboards",
        description:
          "Monitor loan portfolio health, delinquency trends, and predictive risk scores in real time.",
      },
      {
        id: "compliance-automation",
        icon: "map", //ShieldCheck
        title: "Compliance & Audit Automation",
        description:
          "Simplify regulatory audits, KYC, and AML compliance with automated reporting and verification tools.",
      },
    ],
    bottomFeatures: [
  {
    id: "mobile-borrower-apps",
    icon: "map", //Smartphone
    title: "Mobile Mortgage Apps & Portals",
    description:
      "Enable borrowers to apply, track, and manage their loans anytime, anywhere. " +
      "Offer a seamless mobile experience with intuitive dashboards and smart notifications. " +
      "Integrate digital document uploads, loan calculators, and chatbot support. " +
      "Provide real-time loan status updates to increase borrower transparency. " +
      "Empower lenders with data-driven insights for faster loan processing.",
  },
  {
    id: "analytics-forecasting",
    icon: "map", //Cpu
    title: "Predictive Analytics & Forecasting",
    description:
      "Harness AI and data analytics to predict repayment behavior and loan performance. " +
      "Identify potential defaults early and refine credit risk models proactively. " +
      "Gain visibility into borrower patterns for informed lending decisions. " +
      "Leverage data visualization to monitor trends and financial forecasts. " +
      "Drive profitability through accurate, predictive financial insights.",
  },
  {
    id: "collections-optimization",
    icon: "map", //TrendingUp
    title: "Collections & Recovery Optimization",
    description:
      "Automate borrower reminders, payment scheduling, and recovery workflows. " +
      "Utilize machine learning to identify high-risk accounts and prioritize actions. " +
      "Streamline communication with borrowers using omnichannel engagement tools. " +
      "Monitor recovery effectiveness through real-time analytics dashboards. " +
      "Reduce delinquencies and improve portfolio health with data-backed strategies.",
  },
  {
    id: "data-security",
    icon: "map", //Lock
    title: "Data Security & Encryption",
    description:
      "Protect borrower and lender information with multi-layered encryption systems. " +
      "Comply with global data protection standards such as GDPR and PCI DSS. " +
      "Implement two-factor authentication and role-based access control. " +
      "Detect and mitigate threats through automated security monitoring. " +
      "Ensure trust and compliance with secure, auditable data frameworks.",
  },
],
ctaText: "BUILD YOUR MORTGAGE SOFTWARE SOLUTION",
onCtaClick: () => {},
  },
  managementSolutionsTwo: {
  title: "Mortgage Management Software Solutions",
  subtitle:
    "Our mortgage software developers create intelligent platforms to streamline loan processes, improve borrower experiences, and drive operational efficiency for financial institutions.",
  subtitleLink: { text: "mortgage software solutions", url: "#" },
  laptopImage: "https://i.pinimg.com/1200x/ae/0e/5e/ae0e5e4f5273cbbb428b3d3ec4afa497.jpg",
  mobileImage: "/images/mortgage-management-mobile.jpg",

  topFeatures: [
    {
      id: "loan-origination",
      icon: "FileText",
      title: "Loan Origination & Processing Systems",
      description:
        "Automate loan applications, credit checks, and approvals. Accelerate processing while ensuring data accuracy and compliance.",
      link: { text: "loan origination systems", url: "#" },
    },
    {
      id: "servicing-platforms",
      icon: "ClipboardList",
      title: "Loan Servicing & Payment Platforms",
      description:
        "Manage repayments, escrow, and account adjustments easily. Enhance borrower communication through digital self-service portals.",
      link: { text: "loan servicing software", url: "#" },
    },
    {
      id: "compliance-security",
      icon: "Shield",
      title: "Compliance & Risk Management Systems",
      description:
        "Ensure adherence to mortgage regulations with automation. Identify risks early using audit trails and real-time reporting tools.",
      link: { text: "mortgage compliance software", url: "#" },
    },
    {
      id: "analytics-insights",
      icon: "BarChart3",
      title: "Analytics & Forecasting Dashboards",
      description:
        "Track portfolio performance and borrower trends visually. Use predictive analytics to make smarter lending decisions.",
      link: { text: "mortgage analytics software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "crm-solutions",
      icon: "Users",
      title: "Mortgage CRM & Client Portals",
      description:
        "Build borrower portals for applications, tracking, and updates. Improve satisfaction with transparent and real-time engagement.",
    },
    {
      id: "document-automation",
      icon: "FileCheck2",
      title: "Document Automation & E-Signatures",
      description:
        "Digitize loan documents and approvals securely online. Reduce paperwork with integrated e-signature and document workflows.",
    },
    {
      id: "cloud-integration",
      icon: "Cloud",
      title: "Cloud-Based Mortgage Solutions",
      description:
        "Deploy scalable mortgage systems on AWS, Azure, or GCP. Enable remote access, faster updates, and enhanced data protection.",
    },
    {
      id: "reporting-tools",
      icon: "PieChart",
      title: "Financial Reporting & Audit Tools",
      description:
        "Generate accurate loan performance and revenue reports. Simplify audits with automated data exports and dashboards.",
    },
  ],

  ctaText: "GET MORTGAGE SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
},

  faq : {
  title: "Mortgage & Home Loan FAQ",
  items: [
    {
      id: "1",
      question: "What is a mortgage?",
      answer:
        "A mortgage is a loan provided by a bank or financial institution to help individuals purchase a home. The borrower repays the loan over a set period, typically with interest, while the property acts as collateral.",
    },
    {
      id: "2",
      question: "What types of mortgage loans are available?",
      answer:
        "Common mortgage types include fixed-rate mortgages, adjustable-rate mortgages (ARMs), interest-only loans, and government-backed loans such as FHA, VA, and USDA mortgages. Each has unique repayment terms and eligibility criteria.",
    },
    {
      id: "3",
      question: "How do I qualify for a mortgage?",
      answer:
        "Qualification depends on factors such as credit score, income, debt-to-income ratio, employment history, and the value of the property. Lenders assess these to determine loan eligibility and interest rates.",
    },
    {
      id: "4",
      question: "What is the difference between pre-qualification and pre-approval?",
      answer:
        "Pre-qualification is an initial assessment of your mortgage eligibility based on self-reported financial information. Pre-approval is a more rigorous process where the lender verifies your credit, income, and debts, providing a conditional commitment for a loan.",
    },
    {
      id: "5",
      question: "What are the closing costs for a mortgage?",
      answer:
        "Closing costs include fees for loan processing, appraisal, title insurance, taxes, and legal services. Typically, they range from 2% to 5% of the home’s purchase price and are paid at the time of closing.",
    },
    {
      id: "6",
      question: "Can I refinance my mortgage?",
      answer:
        "Yes, refinancing allows you to replace your existing mortgage with a new loan, often to lower interest rates, reduce monthly payments, or change loan terms. Lenders evaluate your current equity, credit score, and market conditions for approval.",
    },
    {
      id: "7",
      question: "What is mortgage insurance and do I need it?",
      answer:
        "Mortgage insurance protects the lender if the borrower defaults. It is usually required for loans with down payments less than 20%. Some loan types, like FHA loans, require upfront and monthly mortgage insurance premiums.",
    },
    {
      id: "8",
      question: "How is my mortgage interest rate determined?",
      answer:
        "Interest rates are influenced by market conditions, the type of mortgage, your credit score, down payment, loan term, and the lender’s policies. A higher credit score and larger down payment usually result in lower rates.",
    },
    {
      id: "9",
      question: "What happens if I miss a mortgage payment?",
      answer:
        "Missing a payment can result in late fees, negative credit reporting, and eventually foreclosure if unpaid over time. Contacting your lender immediately may help you arrange a repayment plan or loan modification.",
    },
    {
      id: "10",
      question: "Can I pay off my mortgage early?",
      answer:
        "Yes, many mortgages allow early repayment, which can reduce interest costs. However, some loans may include prepayment penalties, so it’s important to check your mortgage terms before paying off the loan early.",
    },
  ],
},

};
