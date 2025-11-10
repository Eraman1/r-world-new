import { ServiceConfig } from "./services";

export const customSoftwareDevelopment: ServiceConfig = {
  slug: "custom-software-development",
  banner: {
    title: "Empower Your Business with",
    highlight: "Custom Software Development Solutions",
    subtitle:
      "Build scalable, secure, and high-performance software tailored to your business needs. Our expert developers deliver web, mobile, desktop, and enterprise applications efficiently.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Custom Software",
  },
  developerDetails: {
    heading: "Expert Developers for Custom Software Solutions",
    subheading:
      "Our team specializes in creating tailored software applications, combining industry expertise, modern technologies, and best practices to solve real-world business challenges.",
    mainTitle: "Professional Custom Software Development Services",
    mainDescription:
      "We design, develop, and maintain software solutions that improve efficiency, reduce costs, and drive innovation. From enterprise systems to mobile apps, we create software aligned with your goals.",
    image: "/images/software-development-laptop.png",
    services: [
  {
    id: 1,
    title: "Web Application Development",
    description:
      "Build robust, responsive, and scalable web applications using modern frameworks. Ensure high performance, security, and seamless integration with APIs and databases.",
    icon: "/icons/web.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Develop native and cross-platform mobile apps for iOS and Android. Deliver intuitive user experiences with optimized performance and backend integration.",
    icon: "/icons/mobile.svg",
  },
  {
    id: 3,
    title: "Enterprise Software Solutions",
    description:
      "Create scalable enterprise applications to streamline operations and automate workflows. Ensure security, compliance, and seamless integration with ERP and CRM systems.",
    icon: "/icons/enterprise.svg",
  },
],
  },
  solutions: {
    mainTitle: "Custom Software Solutions",
    mainDescription:
      "We provide end-to-end software development services for businesses of all sizes. Our solutions enhance productivity, streamline operations, and improve customer engagement through innovative technology.",
    items: [
      {
        id: "web-dev",
        icon: "Leaf",
        title: "Web Application Development",
        subtitle: "Responsive & Scalable Apps",
        description:
          "Develop feature-rich, scalable web apps using React, Angular, or Vue. Ensure robust performance, security, and user experience. Integrate with APIs, databases, and third-party services. Optimize load times, accessibility, and cross-platform support. Maintain modular and reusable code for future scalability.",
      },
      {
        id: "mobile-dev",
        icon: "Leaf",
        title: "Mobile App Development",
        subtitle: "Native & Cross-Platform Apps",
        description:
          "Create high-performing mobile apps for iOS and Android. Implement smooth, intuitive user interfaces and UX flows. Integrate real-time features and backend services seamlessly. Optimize performance, memory usage, and battery efficiency. Ensure secure data handling and analytics tracking.",
      },
      {
        id: "enterprise",
        icon: "Leaf",
        title: "Enterprise Software Solutions",
        subtitle: "Optimize Business Operations",
        description:
          "Design scalable enterprise software to improve workflow and efficiency. Integrate with CRM, ERP, and third-party systems. Automate reporting, data analysis, and operational tasks. Ensure security, compliance, and data integrity across systems. Provide actionable insights for better decision-making.",
      },
      {
        id: "custom-solutions",
        icon: "Leaf",
        title: "Custom Software Solutions",
        subtitle: "Tailored to Your Business Needs",
        description:
          "Build software solutions designed to meet unique business requirements. Combine cutting-edge technologies with industry best practices. Enhance productivity, efficiency, and collaboration. Deliver secure, maintainable, and scalable applications. Support long-term growth with continuous updates and improvements.",
      },
      {
      id: "cloud-integration",
      icon: "Leaf",
      title: "Cloud & DevOps Solutions",
      subtitle: "Scalable & Reliable Architecture",
      description:
        "Deploy applications on cloud platforms like AWS, Azure, and GCP. Implement DevOps practices for continuous integration and delivery. Ensure high availability, scalability, and fault tolerance. Monitor performance and optimize resource utilization. Streamline deployment and operational workflows across teams.",
    },
    {
      id: "ai-ml-solutions",
      icon: "Leaf",
      title: "AI & Machine Learning Solutions",
      subtitle: "Intelligent Automation & Insights",
      description:
        "Integrate AI and ML to automate complex processes and workflows. Build predictive models to enhance business decision-making. Analyze large datasets to uncover patterns and trends. Deploy intelligent features in web, mobile, and enterprise applications. Enhance user experiences through personalized and data-driven insights.",
    },
    ],
    linkText: "Get Custom Software Solutions",
    linkUrl: "/contact-us",
  },

  

  managementSolutions: {
    title: "Software Project Management Tools",
    subtitle:
      "Our software management solutions streamline project tracking, team collaboration, and operational efficiency for development teams of any size.",
    subtitleLink: { text: "project management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "project-tracking",
        icon: "map",
        title: "Project Tracking & Monitoring",
        description:
          "Track project progress, milestones, and deadlines in real-time. Enable managers to allocate resources efficiently. Monitor team performance and task completion. Generate reports and insights for informed decision-making. Reduce project delays and improve overall productivity.",
      },
      {
        id: "team-collaboration",
        icon: "map",
        title: "Team Collaboration Tools",
        description:
          "Enable seamless communication between developers, testers, and managers. Share documents, code, and updates in real-time. Facilitate efficient task assignment and progress tracking. Enhance teamwork and accountability across departments. Reduce miscommunication and streamline project workflows.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Performance Analytics & Reporting",
        description:
          "Measure software performance and project KPIs effectively. Monitor bottlenecks, resource usage, and team productivity. Analyze trends to improve future project planning. Generate actionable insights to enhance software quality. Optimize processes for higher efficiency and faster delivery.",
      },
    ],
    ctaText: "Get Custom Software Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - Custom Software Development Services",
    items: [
      {
        id: "1",
        question: "What types of software can you develop?",
        answer:
          "We develop web, mobile, desktop, and enterprise applications, tailored to your unique business requirements and industry needs.",
      },
      {
        id: "2",
        question: "Do you provide end-to-end software development?",
        answer:
          "Yes, we offer full-cycle development from planning, design, and coding to deployment, testing, and maintenance.",
      },
      {
        id: "3",
        question: "Can you integrate software with existing systems?",
        answer:
          "Absolutely. We specialize in integrating new software with legacy systems, APIs, databases, and third-party services.",
      },
      {
        id: "4",
        question: "Do you offer post-launch support?",
        answer:
          "Yes, we provide ongoing support, updates, and maintenance to ensure your software runs smoothly and securely.",
      },
      {
        id: "5",
        question: "How long does it take to develop custom software?",
        answer:
          "Timeline depends on project complexity and requirements, but our agile approach ensures efficient development and timely delivery.",
      },
    ],
  },
};
