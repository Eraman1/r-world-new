import { SolutionConfig } from "@/types/solutions";

export const arvr: SolutionConfig = {
  slug: "arvr",

  banner: {
    title: "Innovate Smarter with",
    highlight: "IBM Cloud & AI-Powered Solutions",
    subtitle:
      "Drive digital transformation through IBM’s cloud, AI, and automation technologies. Empower your business with intelligent, scalable, and secure enterprise solutions.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore IBM Solutions",
  },

  developerDetails: {
    heading: "IBM Technology Experts in Cloud, AI & Automation",
    subheading:
      "We help enterprises leverage IBM’s powerful ecosystem — Watson, Cloud Pak, and AI automation — to optimize workflows, modernize infrastructure, and unlock new insights.",
    mainTitle: "Enterprise-Grade IBM Cloud & AI Services",
    mainDescription:
      "From AI-driven decision-making to cloud migration and automation, our IBM-certified specialists deliver intelligent enterprise solutions built for scalability, security, and innovation.",
    image: "/images/ibm-laptop.png",
    services: [
      {
        id: 1,
        title: "IBM Cloud Migration",
        description:
          "Seamlessly migrate workloads to IBM Cloud with minimal downtime, enabling cost efficiency, flexibility, and performance.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 2,
        title: "Watson AI & Machine Learning",
        description:
          "Integrate IBM Watson for NLP, predictive analytics, and automation to enhance decision-making and customer engagement.",
        icon: "/icons/ai.svg",
      },
      {
        id: 3,
        title: "Business Automation Solutions",
        description:
          "Automate manual tasks and streamline processes using IBM Cloud Pak for Business Automation, reducing time and operational cost.",
        icon: "/icons/robot.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "IBM Cloud, AI, and Automation Solutions",
    mainDescription:
      "Unlock your enterprise’s potential with IBM’s suite of intelligent tools. From AI models to hybrid cloud systems, our solutions enable smarter decisions and sustainable growth.",
    items: [
      {
        id: "ai-automation",
        icon: "Leaf",
        title: "AI-Powered Automation",
        subtitle: "Enhance Operational Efficiency",
        description:
          "Implement AI-driven workflows with IBM Watson Orchestrate to automate tasks, optimize resources, and boost productivity.",
      },
      {
        id: "cloud-infrastructure",
        icon: "Leaf",
        title: "Hybrid Cloud Infrastructure",
        subtitle: "Scalable Enterprise Cloud",
        description:
          "Build and manage a hybrid cloud architecture using IBM Cloud Pak to balance performance, flexibility, and security.",
      },
      {
        id: "data-analytics",
        icon: "Leaf",
        title: "Advanced Data Analytics",
        subtitle: "Turn Data into Business Insights",
        description:
          "Leverage IBM Cognos and Watson Studio for real-time analytics, predictive modeling, and strategic intelligence.",
      },
      {
        id: "cybersecurity",
        icon: "Shield",
        title: "Enterprise Security",
        subtitle: "Protect Data & Infrastructure",
        description:
          "Deploy IBM Security Verify and QRadar to detect threats, prevent breaches, and ensure compliance across digital assets.",
      },
      {
        id: "automation-tools",
        icon: "Leaf",
        title: "Process Automation Tools",
        subtitle: "Simplify Complex Workflows",
        description:
          "Use IBM Cloud Pak for Automation to automate document processing, approvals, and customer workflows.",
      },
      {
        id: "ai-chatbot",
        icon: "Leaf",
        title: "Watson Chatbots & Virtual Agents",
        subtitle: "Enhance Customer Experience",
        description:
          "Integrate Watson Assistant to power intelligent, conversational chatbots that improve customer support 24/7.",
      },
    ],
    linkText: "Get IBM-Powered Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "IBM Enterprise Management Platforms",
    subtitle:
      "Empowering organizations with AI-powered management systems for analytics, automation, and seamless collaboration.",
    subtitleLink: { text: "IBM enterprise systems", url: "#" },
    laptopImage: "/images/management-ibm.jpg",
    mobileImage: "/images/management-ibm-mobile.jpg",
    topFeatures: [
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Enable smart automation for repetitive business operations using IBM Cloud Pak solutions.",
      },
      {
        id: "collaboration",
        icon: "map",
        title: "Cloud Collaboration",
        description:
          "Facilitate real-time collaboration and project tracking with IBM Cloud services and integrated dashboards.",
      },
      {
        id: "insights",
        icon: "map",
        title: "AI-Driven Insights",
        description:
          "Turn unstructured data into actionable insights with Watson AI’s advanced analytics and natural language capabilities.",
      },
    ],
    bottomFeatures: [
      {
        id: "integration",
        icon: "map",
        title: "Multi-System Integration",
        description:
          "Integrate IBM platforms with ERP, CRM, and DevOps systems for unified enterprise data management.",
      },
      {
        id: "cloud-security",
        icon: "map",
        title: "Cloud Security & Compliance",
        description:
          "Ensure regulatory compliance and secure cloud environments using IBM Cloud Security and QRadar tools.",
      },
      {
        id: "backup",
        icon: "map",
        title: "Data Backup & Recovery",
        description:
          "Implement robust data protection strategies with automated backup, redundancy, and recovery systems.",
      },
      {
        id: "ai-optimization",
        icon: "map",
        title: "AI-Driven Optimization",
        description:
          "Use Watson Machine Learning to predict maintenance, optimize workflows, and reduce costs through automation.",
      },
    ],
    ctaText: "Talk to IBM Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What IBM services do you offer?",
        answer:
          "We offer cloud migration, Watson AI integration, automation, analytics, and IBM Cloud Pak deployment for enterprise solutions.",
      },
      {
        id: "2",
        question: "Can you integrate IBM solutions with existing enterprise systems?",
        answer:
          "Yes, our team integrates IBM tools with ERP, CRM, and DevOps systems to create a connected and efficient IT environment.",
      },
      {
        id: "3",
        question: "Do you provide Watson AI chatbot development?",
        answer:
          "Absolutely. We build intelligent virtual assistants using IBM Watson Assistant to improve customer experience and automate support.",
      },
      {
        id: "4",
        question: "Is IBM Cloud secure for enterprise data?",
        answer:
          "Yes. IBM Cloud provides enterprise-grade encryption, access control, and compliance tools to ensure data protection.",
      },
      {
        id: "5",
        question: "Do you assist with IBM Cloud Pak setup?",
        answer:
          "Yes. We provide installation, configuration, and workflow automation for IBM Cloud Pak modules across hybrid cloud environments.",
      },
      {
        id: "6",
        question: "Can IBM AI help automate business workflows?",
        answer:
          "Yes, IBM’s AI and Cloud Pak for Automation optimize workflows, reduce manual work, and improve overall business efficiency.",
      },
    ],
  },
};
