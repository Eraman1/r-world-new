import { SolutionConfig } from "@/types/solutions";

export const UKG: SolutionConfig = {
  slug: "UKg",

  banner: {
    title: "Empower Your Workforce with",
    highlight: "UKG HR & Workforce Management Solutions",
    subtitle:
      "Streamline HR, payroll, and talent management with UKG’s intelligent workforce technology designed to enhance productivity and employee experience.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore UKG Solutions",
  },

  developerDetails: {
    heading: "Certified UKG Implementation & Integration Experts",
    subheading:
      "We deliver end-to-end UKG (Ultimate Kronos Group) solutions — from deployment to customization — ensuring seamless workforce and payroll management.",
    mainTitle: "Comprehensive UKG Services for Modern Enterprises",
    mainDescription:
      "Our team helps organizations transform HR operations using UKG’s advanced platforms. We integrate HR, payroll, scheduling, and analytics into one unified ecosystem that drives efficiency and employee engagement.",
    image: "/images/ukg-dashboard.png",
    services: [
      {
        id: 1,
        title: "UKG Pro Implementation",
        description:
          "We provide full-cycle UKG Pro implementation, including configuration, data migration, and user training for a smooth transition.",
        icon: "/icons/settings.svg",
      },
      {
        id: 2,
        title: "Payroll & Compliance Management",
        description:
          "Automate payroll processing, tax filing, and compliance with UKG’s robust reporting and auditing features.",
        icon: "/icons/money.svg",
      },
      {
        id: 3,
        title: "Workforce Scheduling Automation",
        description:
          "Optimize workforce scheduling using AI-driven forecasting and labor analytics to reduce costs and improve staffing accuracy.",
        icon: "/icons/calendar.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "UKG Workforce & HR Technology Solutions",
    mainDescription:
      "From HR automation to workforce analytics, our UKG-based solutions empower businesses to manage their people efficiently and strategically.",
    items: [
      {
        id: "hr-automation",
        icon: "Leaf",
        title: "HR Automation Systems",
        subtitle: "Simplify People Operations",
        description:
          "Automate onboarding, performance tracking, and employee lifecycle management through UKG’s intelligent HR modules.",
      },
      {
        id: "time-attendance",
        icon: "Leaf",
        title: "Time & Attendance Tracking",
        subtitle: "Accurate Workforce Insights",
        description:
          "Track employee time, attendance, and productivity in real-time with advanced analytics and compliance tools.",
      },
      {
        id: "payroll-system",
        icon: "Leaf",
        title: "Global Payroll Solutions",
        subtitle: "Compliance-Ready Payment Systems",
        description:
          "Streamline payroll processing across regions with automated deductions, tax handling, and secure digital payslips.",
      },
      {
        id: "analytics",
        icon: "Leaf",
        title: "Workforce Analytics & Reporting",
        subtitle: "Data-Driven HR Decisions",
        description:
          "Leverage data dashboards and predictive analytics to make informed workforce and performance management decisions.",
      },
      {
        id: "talent-management",
        icon: "Leaf",
        title: "Talent Management Platforms",
        subtitle: "Retain and Grow Top Talent",
        description:
          "Manage recruitment, learning, and performance in one place using UKG’s connected talent management ecosystem.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Third-Party Integration Support",
        subtitle: "Seamless System Connectivity",
        description:
          "Integrate UKG with ERP, CRM, and business intelligence platforms for unified workforce data visibility.",
      },
    ],
    linkText: "Get UKG Implementation Support",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "UKG Workforce Management Platforms",
    subtitle:
      "Leverage UKG’s cloud-based workforce solutions to optimize employee scheduling, engagement, and compliance.",
    subtitleLink: { text: "UKG Workforce Central", url: "#" },
    laptopImage: "/images/ukg-management.jpg",
    mobileImage: "/images/ukg-management-mobile.jpg",
    topFeatures: [
      {
        id: "ai-forecasting",
        icon: "map",
        title: "AI-Powered Forecasting",
        description:
          "Predict workforce needs and automate scheduling to meet business demands efficiently.",
      },
      {
        id: "real-time-analytics",
        icon: "map",
        title: "Real-Time Analytics Dashboard",
        description:
          "Gain actionable insights into labor utilization, overtime, and productivity with custom UKG analytics reports.",
      },
      {
        id: "compliance",
        icon: "map",
        title: "Regulatory Compliance Management",
        description:
          "Ensure compliance with labor laws, payroll regulations, and HR policies using automated tracking tools.",
      },
    ],
    bottomFeatures: [
      {
        id: "mobile-access",
        icon: "map",
        title: "Mobile Workforce Access",
        description:
          "Enable employees to view schedules, request time off, and track pay via mobile devices securely.",
      },
      {
        id: "data-integration",
        icon: "map",
        title: "Centralized Data Integration",
        description:
          "Unify HR and payroll data from multiple systems for transparent and accurate reporting.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Security & Privacy",
        description:
          "Protect sensitive employee data with UKG’s enterprise-grade security and encryption standards.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Reduce manual HR tasks and automate approvals, onboarding, and document workflows.",
      },
    ],
    ctaText: "Talk to UKG Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is UKG and how does it help businesses?",
        answer:
          "UKG (Ultimate Kronos Group) is a workforce management and HR platform that streamlines HR, payroll, and employee engagement using automation and analytics.",
      },
      {
        id: "2",
        question: "Can you integrate UKG with existing HR systems?",
        answer:
          "Yes. We integrate UKG with existing ERP, CRM, and HRMS systems to create a unified workforce ecosystem.",
      },
      {
        id: "3",
        question: "Do you provide support for UKG Pro and UKG Ready?",
        answer:
          "Absolutely. Our certified specialists implement and support both UKG Pro and UKG Ready platforms for different business needs.",
      },
      {
        id: "4",
        question: "Is UKG suitable for global organizations?",
        answer:
          "Yes, UKG supports global payroll, compliance, and multi-location workforce management across different countries and time zones.",
      },
      {
        id: "5",
        question: "Do you offer UKG customization services?",
        answer:
          "Yes, we tailor UKG workflows, reports, and dashboards to fit your organization’s specific HR and compliance requirements.",
      },
      {
        id: "6",
        question: "Can UKG improve employee engagement?",
        answer:
          "Definitely. UKG’s self-service tools, analytics, and engagement surveys help build stronger employee relationships and productivity.",
      },
    ],
  },
};
