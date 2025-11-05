import { SolutionConfig } from "@/types/solutions";

export const middleware: SolutionConfig = {
  slug: "middleware",

  banner: {
    title: "Optimize Your Systems with",
    highlight: "Robust Middleware Solutions",
    subtitle:
      "Connect applications, streamline workflows, and ensure smooth data flow across your enterprise with powerful middleware technologies.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Middleware Solutions",
  },

  developerDetails: {
    heading: "Experts in Middleware & Enterprise Integration",
    subheading:
      "Our team builds scalable middleware solutions that connect, automate, and optimize your applications and services for high-performance operations.",
    mainTitle: "Professional Middleware Development Services",
    mainDescription:
      "We design, develop, and deploy middleware solutions to enable seamless communication between software applications, databases, and cloud services. Our expertise ensures data consistency, reliability, and optimal performance across your technology stack.",
    image: "/images/middleware-laptop.png",
    services: [
      {
        id: 1,
        title: "API & Service Integration",
        description:
          "Integrate applications using APIs and service-oriented architectures (SOA) to enable smooth data exchange across platforms.",
        icon: "/icons/api.svg",
      },
      {
        id: 2,
        title: "Message Queues & Event Brokers",
        description:
          "Implement message brokers like RabbitMQ, Kafka, or ActiveMQ to ensure reliable asynchronous communication and event-driven processing.",
        icon: "/icons/message.svg",
      },
      {
        id: 3,
        title: "Enterprise Workflow Automation",
        description:
          "Automate complex business workflows across applications with middleware orchestration tools and custom integrations.",
        icon: "/icons/automation.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Innovative Middleware Solutions",
  mainDescription:
    "Our middleware solutions enable seamless connectivity, improve system performance, and process data in real-time. We help businesses integrate, automate, and scale efficiently while reducing operational complexity. Empower your enterprise with robust middleware architecture that supports growth and innovation.",
  items: [
    {
      id: "app-integration",
      icon: "Leaf",
      title: "Application Integration",
      subtitle: "Connect Disparate Systems",
      description:
        "Integrate multiple applications to enable smooth and secure data flow across platforms. Reduce redundancy and improve operational efficiency by centralizing communication. Deliver a unified user experience and consistent system behavior across all enterprise tools.",
    },
    {
      id: "event-driven",
      icon: "Leaf",
      title: "Event-Driven Middleware",
      subtitle: "Real-Time Communication",
      description:
        "Implement event-driven architectures to respond instantly to business events. Utilize message queues and event brokers for reliable and scalable communication. Enhance system responsiveness and operational agility in real-time scenarios.",
    },
    {
      id: "api-management",
      icon: "Leaf",
      title: "API Gateway & Management",
      subtitle: "Secure & Scalable API Access",
      description:
        "Manage and monitor API traffic efficiently with advanced gateway solutions. Enforce robust security protocols and authentication for safe data exchange. Provide developers with scalable and reliable access to critical system endpoints.",
    },
    {
      id: "cloud-integration",
      icon: "Leaf",
      title: "Cloud Middleware",
      subtitle: "Hybrid & Multi-Cloud Integration",
      description:
        "Seamlessly integrate on-premise and cloud-based applications for hybrid environments. Enable scalable and flexible architecture to meet modern business demands. Ensure continuous data flow and high availability across multiple cloud platforms.",
    },
    {
      id: "data-synchronization",
      icon: "Leaf",
      title: "Data Synchronization",
      subtitle: "Consistency Across Platforms",
      description:
        "Guarantee reliable data replication and synchronization across databases and applications. Prevent data conflicts and ensure accuracy in multi-system environments. Maintain consistent information across enterprise platforms for real-time decision-making.",
    },
    {
      id: "monitoring-analytics",
      icon: "Leaf",
      title: "Middleware Monitoring & Analytics",
      subtitle: "Proactive Performance Insights",
      description:
        "Track middleware performance metrics, message flows, and system health continuously. Gain actionable insights to optimize processes and preempt potential issues. Ensure high availability, reliability, and smooth operation of your integrated systems.",
    },
  ],
  linkText: "Get Middleware Solutions",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "Enterprise Middleware Management",
    subtitle:
      "Manage integrations, workflows, and middleware infrastructure efficiently with monitoring, dashboards, and automation.",
    subtitleLink: { text: "middleware management software", url: "#" },
    laptopImage: "/images/middleware-management-laptop.jpg",
    mobileImage: "/images/middleware-management-mobile.jpg",
    topFeatures: [
      {
        id: "monitoring",
        icon: "map",
        title: "Centralized Monitoring Dashboard",
        description:
          "Visualize all integrations, message queues, and workflows from a single dashboard for real-time insights and alerts.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Automated Reporting & Analytics",
        description:
          "Generate reports on system performance, integration health, and workflow efficiency automatically.",
      },
      {
        id: "security",
        icon: "map",
        title: "Secure Data & Access Controls",
        description:
          "Ensure all data transactions are secure, encrypted, and access-controlled across your enterprise systems.",
      },
    ],
    bottomFeatures: [
  {
    id: "workflow-automation",
    icon: "map",
    title: "Workflow Automation",
    description:
      "Automate repetitive business tasks and standardize processes to save time and reduce human error. Integrate workflows across multiple applications for seamless operations. Enhance efficiency and consistency across your enterprise systems.",
  },
  {
    id: "api-gateway",
    icon: "map",
    title: "API Gateway Integration",
    description:
      "Centralize the management of APIs to ensure secure, scalable, and reliable communication between systems. Enforce authentication, throttling, and routing policies for controlled API usage. Streamline connectivity and reduce integration complexity across multiple platforms.",
  },
  {
    id: "cloud-sync",
    icon: "map",
    title: "Cloud & Hybrid Integration",
    description:
      "Connect on-premise applications with cloud and hybrid environments for seamless data flow. Enable interoperability between multiple cloud providers and legacy systems. Facilitate real-time data access, scalability, and flexible IT infrastructure management.",
  },
  {
    id: "alerts",
    icon: "map",
    title: "Real-Time Alerts & Notifications",
    description:
      "Receive instant notifications for workflow failures, integration issues, or critical system events. Monitor and respond to problems quickly to minimize downtime and business impact. Ensure proactive system management with automated alerts and comprehensive reporting.",
  },
],
ctaText: "Get Middleware Experts",
onCtaClick: () => {},
  },
  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is middleware and why is it important?",
        answer:
          "Middleware is software that connects different applications and systems, enabling data exchange, workflow automation, and seamless communication between components.",
      },
      {
        id: "2",
        question: "Which industries can benefit from middleware?",
        answer:
          "Enterprises in finance, healthcare, logistics, e-commerce, and manufacturing can leverage middleware to integrate applications and automate workflows.",
      },
      {
        id: "3",
        question: "Can middleware handle cloud and on-premise systems?",
        answer:
          "Yes, modern middleware solutions can integrate hybrid environments, connecting on-premise systems with cloud services seamlessly.",
      },
      {
        id: "4",
        question: "Do you provide real-time monitoring for middleware?",
        answer:
          "Absolutely. We provide monitoring dashboards, alerting systems, and analytics for proactive middleware performance management.",
      },
      {
        id: "5",
        question: "Can middleware improve system performance?",
        answer:
          "Yes, by optimizing communication between applications, automating workflows, and ensuring reliable data transfer, middleware can improve overall system efficiency.",
      },
      {
        id: "6",
        question: "Do you offer custom middleware development?",
        answer:
          "Yes, our team builds custom middleware solutions tailored to your business needs, including API integration, workflow automation, and hybrid cloud connectivity.",
      },
    ],
  },
};
