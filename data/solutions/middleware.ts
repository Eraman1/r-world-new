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
      "Our middleware solutions enable seamless connectivity, improved system performance, and real-time data processing. We help businesses integrate, automate, and scale efficiently while reducing complexity.",
    items: [
      {
        id: "app-integration",
        icon: "Leaf",
        title: "Application Integration",
        subtitle: "Connect Disparate Systems",
        description:
          "Integrate multiple applications to ensure smooth data flow, reduce redundancy, and provide a unified experience across platforms.",
      },
      {
        id: "event-driven",
        icon: "Leaf",
        title: "Event-Driven Middleware",
        subtitle: "Real-Time Communication",
        description:
          "Enable systems to respond to events in real-time using event brokers and messaging queues, improving responsiveness and reliability.",
      },
      {
        id: "api-management",
        icon: "Leaf",
        title: "API Gateway & Management",
        subtitle: "Secure & Scalable API Access",
        description:
          "Control and monitor API traffic, enforce security, and provide developer access through scalable API gateways and management solutions.",
      },
      {
        id: "cloud-integration",
        icon: "Leaf",
        title: "Cloud Middleware",
        subtitle: "Hybrid & Multi-Cloud Integration",
        description:
          "Integrate on-premise systems with cloud applications to create hybrid solutions that scale seamlessly and support modern business needs.",
      },
      {
        id: "data-synchronization",
        icon: "Leaf",
        title: "Data Synchronization",
        subtitle: "Consistency Across Platforms",
        description:
          "Ensure consistent, reliable data replication and synchronization between databases, applications, and cloud services.",
      },
      {
        id: "monitoring-analytics",
        icon: "Leaf",
        title: "Middleware Monitoring & Analytics",
        subtitle: "Proactive Performance Insights",
        description:
          "Monitor middleware performance, track message flows, and get analytics to optimize workflows and detect issues before they impact users.",
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
          "Automate repetitive tasks and integrate processes between applications for increased operational efficiency.",
      },
      {
        id: "api-gateway",
        icon: "map",
        title: "API Gateway Integration",
        description:
          "Manage APIs, enforce security policies, and ensure scalable API usage across multiple systems.",
      },
      {
        id: "cloud-sync",
        icon: "map",
        title: "Cloud & Hybrid Integration",
        description:
          "Seamlessly connect on-premise applications with cloud services for hybrid or multi-cloud middleware solutions.",
      },
      {
        id: "alerts",
        icon: "map",
        title: "Real-Time Alerts & Notifications",
        description:
          "Receive notifications for workflow failures, integration errors, or critical system events to minimize downtime.",
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
