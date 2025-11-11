import { ServiceConfig } from "./services";

export const technicalConsulting: ServiceConfig = {
  slug: "technical-consulting",
  banner: {
    title: "Accelerate Innovation with",
    highlight: "Expert Technical Consulting Services",
    subtitle:
      "Empower your business with expert guidance on technology strategy, architecture, and digital transformation. Our consultants help you build scalable, secure, and future-ready solutions.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Consulting Services",
  },

  developerDetails: {
    heading: "Professional Technical Consultants & Solution Architects",
    subheading:
      "Our consulting team helps businesses leverage modern technologies to optimize performance, reduce costs, and accelerate growth through strategic planning and technical execution.",
    mainTitle: "Comprehensive Technical Consulting Services",
    mainDescription:
      "We assist organizations in designing scalable architectures, choosing the right tech stack, and implementing robust IT strategies. Our experts bridge business goals with technology to ensure sustainable growth and innovation.",
    image: "/images/technical-consulting-laptop.png",
    services: [
      {
        id: 1,
        title: "Technology Strategy Consulting",
        description:
          "Develop a clear roadmap aligned with your business goals. Assess current IT infrastructure and identify modernization opportunities. Recommend suitable technologies and architectures. Improve scalability, performance, and efficiency.",
        icon: "/icons/strategy.svg",
      },
      {
        id: 2,
        title: "Cloud Architecture Consulting",
        description:
          "Design and optimize cloud infrastructure using AWS, Azure, or GCP. Build scalable, cost-effective, and secure cloud solutions. Migrate legacy systems smoothly.",
        icon: "/icons/cloud.svg",
      },
      {
        id: 3,
        title: "Digital Transformation Consulting",
        description:
          "Guide businesses through end-to-end digital transformation. Integrate automation, AI, and cloud technologies into core operations. Streamline workflows and data management. Improve agility and customer experience. ",
        icon: "/icons/digital.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Strategic Technical Consulting Solutions",
  mainDescription:
    "We provide expert consulting to align technology with business strategy. Our solutions cover IT modernization, system architecture, cloud transformation, and digital innovation initiatives.",
  linkText: "Get Technical Consulting",
  linkUrl: "/contact-us",
  items: [
    {
      id: "architecture-consulting",
      icon: "Leaf",
      title: "Architecture Consulting",
      subtitle: "Build Scalable & Secure Systems",
      description:
        "Design scalable, modular, and future-ready software architectures. \nEvaluate existing systems to enhance reliability and performance. \nOptimize integrations, APIs, and technology stack alignment. \nEnsure compliance with global security and data standards. \nEstablish a strong architectural foundation for long-term growth.",
    },
    {
      id: "cloud-consulting",
      icon: "Leaf",
      title: "Cloud Migration & Optimization",
      subtitle: "Leverage Cloud Efficiency",
      description:
        "Plan, migrate, and optimize workloads across cloud platforms. \nSelect the ideal infrastructure for cost and performance balance. \nAdopt DevOps automation for faster deployment cycles. \nEnhance system resilience and disaster recovery capabilities. \nAchieve long-term scalability through cloud-native transformation.",
    },
    {
      id: "data-strategy",
      icon: "Leaf",
      title: "Data Strategy & Analytics",
      subtitle: "Transform Data into Insights",
      description:
        "Develop a robust data strategy powered by analytics and AI. \nImprove governance, accuracy, and accessibility of information. \nCreate dashboards, KPIs, and predictive intelligence models. \nEmpower leadership with actionable, real-time insights. \nTurn raw data into a strategic advantage for decision-making.",
    },
    {
      id: "it-modernization",
      icon: "Leaf",
      title: "IT Modernization Consulting",
      subtitle: "Upgrade Legacy Systems",
      description:
        "Assess legacy systems to identify modernization opportunities. \nRefactor applications for cloud, API, and microservice readiness. \nEnhance interoperability, performance, and maintainability. \nReduce downtime and operational inefficiencies with automation. \nFuture-proof your IT ecosystem for digital transformation success.",
    },
    {
      id: "cybersecurity-consulting",
      icon: "Leaf",
      title: "Cybersecurity & Risk Consulting",
      subtitle: "Secure Your Digital Ecosystem",
      description:
        "Identify critical vulnerabilities across your IT landscape. \nDevelop risk mitigation strategies and compliance frameworks. \nImplement continuous monitoring and incident response protocols. \nSafeguard data integrity through advanced encryption practices. \nEnsure resilience and trust within your digital ecosystem.",
    },
    {
      id: "ai-consulting",
      icon: "Leaf",
      title: "AI & Automation Consulting",
      subtitle: "Enable Intelligent Innovation",
      description:
        "Integrate AI-driven systems to automate core business workflows. \nLeverage machine learning models for predictive efficiency gains. \nStreamline manual operations with robotic process automation. \nEnable smarter decision-making through data intelligence. \nUnlock innovation that drives measurable business outcomes.",
    },
  ],
},


  managementSolutions: {
    title: "Technical Project Management Solutions",
    subtitle:
      "Our consulting management tools help teams plan, execute, and deliver technology projects with greater efficiency and transparency.",
    subtitleLink: { text: "technical project management", url: "#" },
    laptopImage: "/images/management-consulting.jpg",
    mobileImage: "/images/management-consulting-mobile.jpg",
    topFeatures: [
      {
        id: "roadmap-planning",
        icon: "map",
        title: "Technology Roadmap Planning",
        description:
          "Define clear milestones for technology adoption. Align IT initiatives with business objectives. Prioritize key projects for maximum ROI. Track progress and outcomes. Ensure continuous alignment with strategic goals.",
      },
      {
        id: "team-alignment",
        icon: "map",
        title: "Cross-Team Collaboration",
        description:
          "Foster collaboration between developers, consultants, and business leaders. Improve communication and visibility across teams. Share insights in real-time. Align technical and operational goals. Enhance project execution efficiency.",
      },
      {
        id: "reporting-insights",
        icon: "map",
        title: "Performance & Reporting Dashboards",
        description:
          "Monitor technology performance metrics and project KPIs. Visualize progress and risks. Generate actionable insights for better decision-making. Identify optimization opportunities. Enable smarter, data-driven strategy execution.",
      },
    ],
    ctaText: "Get Consulting Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - Technical Consulting Services",
    items: [
      {
        id: "1",
        question: "What does your technical consulting service include?",
        answer:
          "We provide technology strategy, system architecture, cloud migration, data analytics, and digital transformation consulting to enhance business efficiency.",
      },
      {
        id: "2",
        question: "Do you assist in choosing the right technology stack?",
        answer:
          "Yes, we analyze your business goals and recommend the best technologies, frameworks, and architectures for scalable, secure, and future-ready systems.",
      },
      {
        id: "3",
        question: "Can you help modernize legacy systems?",
        answer:
          "Absolutely. We assess legacy infrastructure, identify upgrade paths, and implement modernization strategies using cloud and microservices architecture.",
      },
      {
        id: "4",
        question: "Do you offer cloud consulting and migration support?",
        answer:
          "Yes, we help plan and execute smooth cloud migrations, ensuring optimized performance, cost savings, and robust security.",
      },
      {
        id: "5",
        question: "How does technical consulting benefit my business?",
        answer:
          "Our consulting aligns technology with business goals, reduces operational risks, improves efficiency, and accelerates innovation through expert technical guidance.",
      },
      {
        id: "6",
        question: "Can you provide continuous advisory support?",
        answer:
          "Yes, we offer ongoing consulting to monitor performance, optimize systems, and support future technology upgrades as your business evolves.",
      },
      {
        id: "7",
        question: "Do you work with startups and enterprises?",
        answer:
          "Yes, we partner with both startups and large enterprises to deliver tailored consulting solutions that fit their scale, goals, and budgets.",
      },
    ],
  },
};
