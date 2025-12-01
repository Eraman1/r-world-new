import { SolutionConfig } from "@/types/solutions";

export const ibm: SolutionConfig = {
  slug: "ibm",

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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Leverage IBM Watson Orchestrate to automate repetitive business tasks with precision and speed. Improve productivity through AI-based decision-making and dynamic workflow optimization. Empower teams to focus on innovation while automation handles routine operations.",
      },
      {
        id: "cloud-infrastructure",
        icon: "Leaf",
        title: "Hybrid Cloud Infrastructure",
        subtitle: "Scalable Enterprise Cloud",
        description:
          "Design and deploy a secure hybrid environment with IBM Cloud Pak to unify on-premises and cloud systems. Achieve high performance and flexibility while reducing operational complexity. Scale resources dynamically to meet evolving enterprise demands.",
      },
      {
        id: "data-analytics",
        icon: "Leaf",
        title: "Advanced Data Analytics",
        subtitle: "Turn Data into Business Insights",
        description:
          "Utilize IBM Cognos and Watson Studio for powerful analytics and predictive modeling. Transform raw data into actionable insights for informed strategic decisions. Gain real-time visibility into performance metrics and future trends.",
      },
      {
        id: "cybersecurity",
        icon: "Shield",
        title: "Enterprise Security",
        subtitle: "Protect Data & Infrastructure",
        description:
          "Strengthen your digital defenses with IBM Security Verify and QRadar technologies. Detect and respond to threats using AI-driven monitoring and analytics. Ensure end-to-end data protection, compliance, and risk management across all operations.",
      },
      {
        id: "automation-tools",
        icon: "Leaf",
        title: "Process Automation Tools",
        subtitle: "Simplify Complex Workflows",
        description:
          "Streamline enterprise operations using IBM Cloud Pak for Automation. Automate document handling, approvals, and process orchestration with ease. Enhance productivity and minimize errors with intelligent rule-based automation.",
      },
      {
        id: "ai-chatbot",
        icon: "Leaf",
        title: "Watson Chatbots & Virtual Agents",
        subtitle: "Enhance Customer Experience",
        description:
          "Deploy IBM Watson Assistant to build conversational AI agents for customer support. Deliver instant, personalized responses across chat, voice, and digital channels. Improve engagement, satisfaction, and service efficiency with 24/7 automation.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/1200x/e3/b2/80/e3b280b61776a14123ec8a0e8b24d49a.jpg",
    mobileImage: "https://i.pinimg.com/1200x/4b/63/b1/4b63b1fde6409f354bffafc03420a2ed.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/1200x/e3/b2/80/e3b280b61776a14123ec8a0e8b24d49a.jpg",
    mobileImage:
      "https://i.pinimg.com/1200x/4b/63/b1/4b63b1fde6409f354bffafc03420a2ed.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Integrate IBM platforms with ERP, CRM, and DevOps systems to enable seamless enterprise connectivity. Unify your data pipelines for improved visibility and operational efficiency. Enhance decision-making through synchronized, real-time business insights.",
      },
      {
        id: "cloud-security",
        icon: "map",
        title: "Cloud Security & Compliance",
        description:
          "Safeguard critical assets with IBM’s advanced cloud security architecture and compliance frameworks. Leverage QRadar and IBM Cloud Security for proactive threat detection. Maintain industry-standard compliance while ensuring data privacy and system resilience.",
      },
      {
        id: "backup",
        icon: "map",
        title: "Data Backup & Recovery",
        description:
          "Protect your business data with automated, redundant backup systems across hybrid environments. Ensure continuity with rapid disaster recovery and failover solutions. Minimize downtime and prevent data loss with IBM’s intelligent restoration tools.",
      },
      {
        id: "ai-optimization",
        icon: "map",
        title: "AI-Driven Optimization",
        description:
          "Utilize IBM Watson Machine Learning to automate and enhance performance across workflows. Predict maintenance needs, reduce operational costs, and improve resource allocation. Drive smarter decisions with AI-powered analytics and continuous optimization.",
      },
    ],
    ctaText: "Talk to IBM Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
        question:
          "Can you integrate IBM solutions with existing enterprise systems?",
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
