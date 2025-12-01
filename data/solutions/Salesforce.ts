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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
      "Our Salesforce solutions empower businesses to automate workflows, strengthen customer relationships, and make data-driven decisions. We help you unlock efficiency, improve engagement, and accelerate growth through tailored CRM implementations.",
    items: [
      {
        id: "sales-automation",
        icon: "Leaf",
        title: "Sales Automation",
        subtitle: "Streamline Sales Processes",
        description:
          "Automate lead tracking, deal management, and sales forecasting to boost productivity and accuracy. Eliminate manual tasks and focus on closing more deals faster. Gain visibility into your entire sales pipeline with real-time insights.",
      },
      {
        id: "customer-service",
        icon: "Leaf",
        title: "Customer Service & Support",
        subtitle: "Enhance Customer Experience",
        description:
          "Deliver exceptional customer support with intelligent case management and omni-channel communication. Improve resolution times through automation and AI-driven assistance. Strengthen customer loyalty by offering personalized service experiences.",
      },
      {
        id: "marketing-cloud",
        icon: "Leaf",
        title: "Marketing Automation",
        subtitle: "Targeted Campaigns",
        description:
          "Design personalized marketing journeys that reach customers at the right moment. Automate campaigns across email, social, and mobile for maximum engagement. Analyze customer interactions to refine targeting and increase conversions.",
      },
      {
        id: "analytics-dashboard",
        icon: "Leaf",
        title: "Analytics & Reporting",
        subtitle: "Data-Driven Decisions",
        description:
          "Unlock valuable insights with customized dashboards and predictive reports. Monitor KPIs, customer trends, and performance metrics in real time. Empower leadership teams to make informed, strategic business decisions faster.",
      },
      {
        id: "custom-apps",
        icon: "Leaf",
        title: "Custom App Development",
        subtitle: "Tailored Business Solutions",
        description:
          "Develop custom Salesforce apps that address your company’s unique workflows and challenges. Extend CRM functionality to meet evolving business goals. Automate routine processes while maintaining scalability and performance.",
      },
      {
        id: "integration",
        icon: "Leaf",
        title: "Third-Party Integrations",
        subtitle: "Connect Your Systems",
        description:
          "Seamlessly connect Salesforce with ERP systems, marketing tools, and payment gateways. Ensure unified data flow across departments for improved collaboration. Build a connected ecosystem that enhances efficiency and decision-making.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/736x/81/f1/8e/81f18ed8afb2d377deebf9e351c323b8.jpg",
    mobileImage: "https://i.pinimg.com/736x/e9/8a/dc/e98adc1cbd8ba6b3efc7fcee47df08f9.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/736x/81/f1/8e/81f18ed8afb2d377deebf9e351c323b8.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/e9/8a/dc/e98adc1cbd8ba6b3efc7fcee47df08f9.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Gain deep visibility into performance with real-time dashboards and custom KPIs. Transform complex data into meaningful insights for informed decision-making. Track sales trends, customer behavior, and team productivity with precision.",
      },
      {
        id: "integration-support",
        icon: "map",
        title: "Integration & API Support",
        description:
          "Connect Salesforce seamlessly with external apps, CRMs, and ERP systems for a unified workflow. Automate data synchronization across departments to eliminate silos. Enable smoother collaboration and faster execution with robust API integration.",
      },
      {
        id: "training",
        icon: "map",
        title: "Training & Consultation",
        description:
          "Empower your team with hands-on Salesforce training tailored to your business processes. Gain expert guidance on automation, workflows, and best practices. Ensure long-term adoption and ROI with ongoing consulting support.",
      },
      {
        id: "automation",
        icon: "map",
        title: "AI & Automation Tools",
        description:
          "Enhance productivity using Salesforce Einstein for intelligent automation and predictive analytics. Streamline lead scoring, task assignment, and follow-ups with AI-driven insights. Boost efficiency by reducing manual effort and maximizing data accuracy.",
      },
    ],
    ctaText: "Talk to Salesforce Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
