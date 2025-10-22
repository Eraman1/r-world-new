import { SolutionConfig } from "@/types/solutions";

export const Salesforce: SolutionConfig = {
  slug: "salesforce",

  banner: {
    title: "Boost Sales & Engagement with",
    highlight: "Salesforce CRM Solutions",
    subtitle:
      "Optimize your business processes, customer relationships, and sales performance with our Salesforce implementation and customization services.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Salesforce Solutions",
  },

  developerDetails: {
    heading: "Expert Salesforce Developers & Consultants",
    subheading:
      "Our certified Salesforce professionals design, implement, and optimize Salesforce platforms to automate workflows, enhance sales pipelines, and improve customer engagement.",
    mainTitle: "Professional Salesforce Services",
    mainDescription:
      "From Salesforce Sales Cloud to Service Cloud and Marketing Cloud, we help businesses integrate and customize Salesforce to maximize ROI. We handle data migration, process automation, custom app development, and analytics dashboards tailored to your needs.",
    image: "/images/salesforce-laptop.png",
    services: [
      {
        id: 1,
        title: "Salesforce CRM Implementation",
        description:
          "We implement Sales Cloud, Service Cloud, and Marketing Cloud to improve customer relationship management and drive revenue growth.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "Custom Salesforce App Development",
        description:
          "Develop custom applications and modules within Salesforce to automate unique business processes and enhance productivity.",
        icon: "/icons/app.svg",
      },
      {
        id: 3,
        title: "Integration & Automation",
        description:
          "Integrate Salesforce with ERP, marketing tools, and other software systems while automating workflows for efficiency.",
        icon: "/icons/settings.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Salesforce Solutions to Transform Your Business",
    mainDescription:
      "Our Salesforce solutions enable businesses to streamline operations, track leads, manage customer relationships, and gain actionable insights through dashboards and analytics.",
    items: [
      {
        id: "sales-automation",
        icon: "Leaf",
        title: "Sales Automation",
        subtitle: "Streamline Sales Processes",
        description:
          "Automate lead management, opportunity tracking, and sales forecasting to improve sales efficiency and revenue.",
      },
      {
        id: "customer-service",
        icon: "Leaf",
        title: "Customer Service & Support",
        subtitle: "Enhance Customer Experience",
        description:
          "Leverage Service Cloud to manage cases, improve response times, and provide a seamless customer support experience.",
      },
      {
        id: "marketing-cloud",
        icon: "Leaf",
        title: "Marketing Automation",
        subtitle: "Targeted Campaigns",
        description:
          "Utilize Marketing Cloud to create personalized email campaigns, social media automation, and customer journey mapping.",
      },
      {
        id: "analytics-dashboard",
        icon: "Leaf",
        title: "Analytics & Reporting",
        subtitle: "Data-Driven Decisions",
        description:
          "Create dashboards, reports, and KPIs to gain insights into sales performance, customer behavior, and business growth.",
      },
      {
        id: "custom-apps",
        icon: "Leaf",
        title: "Custom App Development",
        subtitle: "Tailored Business Solutions",
        description:
          "Build custom Salesforce apps and modules to address unique business challenges and automate workflows effectively.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Third-Party Integrations",
        subtitle: "Connect Your Systems",
        description:
          "Integrate Salesforce with ERP, marketing tools, payment gateways, and other software to create a unified business ecosystem.",
      },
    ],
    linkText: "Get Salesforce Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Salesforce Management & Optimization",
    subtitle:
      "We help businesses manage, monitor, and optimize Salesforce platforms for maximum efficiency and ROI.",
    subtitleLink: { text: "Salesforce management", url: "#" },
    laptopImage: "/images/management-salesforce.jpg",
    mobileImage: "/images/management-salesforce-mobile.jpg",
    topFeatures: [
      {
        id: "user-management",
        icon: "map",
        title: "User & Role Management",
        description:
          "Manage users, roles, and permissions to ensure secure and organized access to Salesforce data.",
      },
      {
        id: "workflow-automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks, approvals, and notifications to boost productivity and reduce errors.",
      },
      {
        id: "data-management",
        icon: "map",
        title: "Data Management & Security",
        description:
          "Ensure accurate data entry, backup, and secure access while maintaining compliance with regulatory standards.",
      },
    ],
    bottomFeatures: [
      {
        id: "reporting",
        icon: "map",
        title: "Advanced Reporting & Analytics",
        description:
          "Generate actionable insights through customizable reports, dashboards, and KPIs.",
      },
      {
        id: "integration-support",
        icon: "map",
        title: "Integration & API Support",
        description:
          "Seamlessly connect Salesforce with external apps and third-party systems for a unified business workflow.",
      },
      {
        id: "training",
        icon: "map",
        title: "Training & Consultation",
        description:
          "Provide Salesforce training and best-practice guidance to ensure your team gets the most out of the platform.",
      },
      {
        id: "automation",
        icon: "map",
        title: "AI & Automation Tools",
        description:
          "Leverage Salesforce AI features like Einstein to automate insights, predictive analytics, and lead scoring.",
      },
    ],
    ctaText: "Talk to Salesforce Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What Salesforce products do you work with?",
        answer:
          "We work with Salesforce Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud, and Salesforce Platform for custom apps.",
      },
      {
        id: "2",
        question: "Can you integrate Salesforce with existing software?",
        answer:
          "Yes, we integrate Salesforce with ERP, marketing tools, accounting software, and other business applications.",
      },
      {
        id: "3",
        question: "Do you offer Salesforce customization services?",
        answer:
          "Absolutely. We customize Salesforce objects, fields, workflows, dashboards, and user interfaces based on your business needs.",
      },
      {
        id: "4",
        question: "Can Salesforce help improve sales performance?",
        answer:
          "Yes. Salesforce automates lead management, opportunity tracking, and provides real-time analytics to improve sales and revenue.",
      },
      {
        id: "5",
        question: "Do you provide Salesforce training and support?",
        answer:
          "Yes. We offer training, consulting, and ongoing support to ensure your team maximizes Salesforce efficiency.",
      },
      {
        id: "6",
        question: "Can Salesforce workflows be automated?",
        answer:
          "Absolutely. Salesforce automation allows repetitive tasks, approvals, and notifications to run automatically, saving time and reducing errors.",
      },
    ],
  },
};
