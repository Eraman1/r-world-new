import { IndustryConfig } from "@/types/industries";

export const hcm: IndustryConfig = {
  slug: "hcm",
  banner: {
    title: "Empower Workforce Performance with",
    highlight: "AI-Powered Human Capital Management Software Solutions",
    subtitle:
      "Revolutionize HR operations with intelligent automation, predictive analytics, and personalized employee engagement. From recruitment to retirement, optimize every aspect of workforce management with data-driven insights and smart technologies.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get HCM Solutions",
  },

  techHero: {
    heading: "Hire Expert HCM & HR Software Developers",
    description:
      "Our expert developers build advanced Human Capital Management platforms that streamline HR operations, enhance employee experience, and drive productivity. From AI-driven recruitment to workforce analytics, we empower organizations with digital transformation in HR.",
    services: [
      {
        id: "recruitment",
        title: "AI-Based Recruitment & Talent Acquisition",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "onboarding",
        title: "Employee Onboarding & Lifecycle Management",
        icon: "Tractor", //UserPlus
        position: "left",
      },
      {
        id: "payroll",
        title: "Payroll & Compensation Management",
        icon: "Tractor", //Wallet
        position: "left",
      },
      {
        id: "performance",
        title: "Performance & Appraisal Systems",
        icon: "Tractor", //BarChart
        position: "left",
      },
      {
        id: "learning",
        title: "Learning & Development Platforms (LMS)",
        icon: "Tractor", //BookOpen
        position: "right",
      },
      {
        id: "attendance",
        title: "Attendance & Workforce Scheduling Systems",
        icon: "Tractor", //CalendarDays
        position: "right",
      },
      {
        id: "employee-engagement",
        title: "Employee Engagement & Feedback Platforms",
        icon: "Tractor", //MessageSquare
        position: "right",
      },
      {
        id: "analytics",
        title: "HR Analytics & Predictive Insights",
        icon: "Tractor", //PieChart
        position: "right",
      },
    ],
  },

  solutions: {
    mainTitle: "AI, Cloud & Analytics Solutions for Human Capital Management",
    mainDescription:
      "We build intelligent HR platforms that automate workforce operations, enhance decision-making, and improve employee satisfaction. From predictive performance analytics to automated onboarding, our HCM solutions empower modern organizations to thrive.",
    items: [
      {
        id: "smart-recruitment",
        icon: "Leaf", //Brain
        title: "Smart Recruitment Systems",
        subtitle: "",
        description:
          "Leverage AI to screen resumes, match candidates, and predict cultural fit using NLP and behavioral data analytics.",
      },
      {
        id: "self-service",
        icon: "Leaf", //User
        title: "Employee Self-Service Portals",
        subtitle: "",
        description:
          "Enable employees to manage attendance, payroll, and leave requests independently through intuitive self-service platforms.",
      },
      {
        id: "performance-analytics",
        icon: "Leaf", //TrendingUp
        title: "Performance Management & Analytics",
        subtitle: "",
        description:
          "Track KPIs, set OKRs, and analyze workforce performance using data visualization and AI-driven feedback systems.",
      },
      {
        id: "training",
        icon: "Leaf", //GraduationCap
        title: "Learning & Skill Development Platforms",
        subtitle: "",
        description:
          "Deliver personalized training paths and certifications using AI-based learning management systems (LMS).",
      },
      {
        id: "predictive-retention",
        icon: "Leaf", //Activity
        title: "Predictive Retention & Workforce Planning",
        subtitle: "",
        description:
          "Use predictive analytics to identify attrition risks, optimize workforce planning, and improve retention strategies.",
      },
      {
        id: "compliance",
        icon: "Leaf", //ShieldCheck
        title: "Compliance & Document Management",
        subtitle: "",
        description:
          "Automate policy management, labor law compliance, and secure document workflows across the HR ecosystem.",
      },
    ],
    linkText: "Get AI-Powered HCM Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Human Capital Management Software Solutions",
    subtitle:
      "We build robust, scalable, and intelligent HCM systems that simplify HR operations, improve decision-making, and drive employee engagement.",
    subtitleLink: { text: "human capital management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "hr-automation",
        icon: "map", //Settings
        title: "HR Process Automation",
        description:
          "Automate core HR workflows like recruitment, attendance, payroll, and compliance to enhance operational efficiency.",
        link: { text: "automated HR systems", url: "#" },
      },
      {
        id: "workforce-analytics",
        icon: "map", //BarChart3
        title: "Workforce Analytics & BI Dashboards",
        description:
          "Visualize employee performance, productivity, and engagement data with AI-powered business intelligence dashboards.",
      },
      {
        id: "integration",
        icon: "map", //Plug
        title: "ERP, CRM & Payroll Integration",
        description:
          "Integrate your HR system with ERP, CRM, and payroll software for unified data visibility and control.",
      },
    ],
    bottomFeatures: [
      {
        id: "mobile-hcm",
        icon: "map", //Smartphone
        title: "Mobile HR & Self-Service Apps",
        description:
          "Empower employees and HR managers with mobile apps for attendance tracking, approvals, and performance reviews.",
      },
      {
        id: "security",
        icon: "map", //Lock
        title: "Data Security & GDPR Compliance",
        description:
          "Protect sensitive employee information with encryption, role-based access, and global data compliance features.",
      },
      {
        id: "ai-decision",
        icon: "map", //Cpu
        title: "AI-Powered Decision Support Systems",
        description:
          "Use AI-driven recommendations to improve hiring quality, training outcomes, and workforce allocation efficiency.",
      },
      {
        id: "employee-wellbeing",
        icon: "map", //Heart
        title: "Employee Wellbeing & Engagement Tools",
        description:
          "Promote healthy workplace culture and monitor employee wellbeing through integrated digital wellness programs.",
      },
    ],
    ctaText: "BUILD YOUR HCM SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
  faq : {
  title: "Human Capital Management (HCM) FAQ",
  items: [
    {
      id: "1",
      question: "What is Human Capital Management (HCM)?",
      answer:
        "HCM is a set of integrated practices and software solutions designed to manage an organization’s workforce. It covers recruitment, onboarding, payroll, performance management, learning, and employee engagement to optimize productivity and retention.",
    },
    {
      id: "2",
      question: "How does HCM software benefit organizations?",
      answer:
        "HCM software streamlines HR processes, reduces administrative overhead, and improves workforce insights. It enables better decision-making by providing real-time analytics on employee performance, engagement, and skill gaps.",
    },
    {
      id: "3",
      question: "What features are included in modern HCM solutions?",
      answer:
        "Modern HCM systems typically include core HR, payroll, talent acquisition, performance management, learning and development, workforce analytics, employee self-service, and mobile access.",
    },
    {
      id: "4",
      question: "Can HCM software help with employee engagement?",
      answer:
        "Yes. HCM platforms provide tools for performance feedback, recognition programs, surveys, and learning opportunities, helping to increase employee engagement, satisfaction, and retention.",
    },
    {
      id: "5",
      question: "How does HCM support compliance and data security?",
      answer:
        "HCM solutions help ensure regulatory compliance by automating recordkeeping, reporting, and payroll processes. They use encryption, access controls, and audit logs to protect sensitive employee information.",
    },
    {
      id: "6",
      question: "Is HCM software suitable for businesses of all sizes?",
      answer:
        "Absolutely. HCM platforms are scalable and can be customized to fit the needs of small, medium, and large enterprises, adapting to workforce size, industry, and HR complexity.",
    },
    {
      id: "7",
      question: "How does HCM integrate with other business systems?",
      answer:
        "HCM platforms can integrate with ERP, payroll, CRM, and productivity tools, enabling seamless data flow, unified reporting, and improved HR and business process efficiency.",
    },
    {
      id: "8",
      question: "Can HCM solutions support remote and hybrid work models?",
      answer:
        "Yes. HCM software provides tools for remote workforce management, time tracking, performance monitoring, and collaboration, ensuring productivity and engagement regardless of location.",
    },
    {
      id: "9",
      question: "How does HCM leverage AI and analytics?",
      answer:
        "AI in HCM systems helps with talent acquisition, predictive analytics for turnover, skill gap analysis, automated administrative tasks, and personalized learning recommendations, making workforce management more efficient.",
    },
    {
      id: "10",
      question: "What is the future of Human Capital Management?",
      answer:
        "The future of HCM focuses on intelligent automation, AI-driven workforce insights, personalized employee experiences, and continuous learning. Organizations will increasingly use HCM platforms to optimize talent, culture, and organizational agility.",
    },
  ],
},

};
