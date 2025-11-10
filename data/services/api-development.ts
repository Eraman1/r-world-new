import { ServiceConfig } from "./services";

export const apiDevelopment: ServiceConfig = {
  slug: "api-development",
  banner: {
    title: "Enhance Connectivity with",
    highlight: "Professional API Development Services",
    subtitle:
      "Build secure, scalable, and high-performance APIs to integrate applications, streamline workflows, and enable seamless data exchange across platforms.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get API Solutions",
  },
  developerDetails: {
    heading: "Expert API Developers",
    subheading:
      "Our developers specialize in building robust RESTful, GraphQL, and custom APIs to ensure smooth communication between applications and systems.",
    mainTitle: "Professional API Development Services",
    mainDescription:
      "We provide end-to-end API development for web, mobile, and enterprise applications. Our APIs ensure secure data exchange, high performance, and scalability for modern software ecosystems.",
    image: "/images/api-development-laptop.png",
    services: [
      {
        id: 1,
        title: "RESTful API Development",
        description:
          "Design and implement RESTful APIs for web and mobile applications. Ensure secure endpoints, proper authentication, and structured responses. Enable seamless communication between client and server. ",
        icon: "/icons/rest-api.svg",
      },
      {
        id: 2,
        title: "GraphQL API Development",
        description:
          "Develop flexible GraphQL APIs to fetch only required data efficiently. Improve client-server performance and reduce bandwidth usage. Ensure strong type safety and query validation. Implement authentication and role-based access control.",
        icon: "/icons/graphql.svg",
      },
      {
        id: 3,
        title: "Third-Party API Integration",
        description:
          "Integrate external APIs for payment gateways, social media, analytics, and other services. Handle authentication, error handling, and data mapping. Ensure secure and reliable data transfer. Optimize API calls for speed and efficiency.",
        icon: "/icons/integration.svg",
      },
    ],
  },
  solutions: {
  mainTitle: "Comprehensive API Solutions",
  mainDescription:
    "We deliver APIs that enable seamless connectivity between systems, improve data accessibility, and enhance application interoperability for businesses of all sizes.",
  linkText: "Get API Solutions",
  linkUrl: "/contact-us",
  items: [
    {
      id: "secure-api",
      icon: "Leaf",
      title: "Secure API Development",
      subtitle: "Protect Your Data",
      description:
        "Implement robust authentication and authorization mechanisms for every API call. \nEncrypt sensitive data both in transit and at rest using advanced protocols. \nFollow industry-standard security best practices and regulatory compliance. \nProtect against common vulnerabilities such as injection and XSS attacks. \nEnsure reliable and secure communication between systems at all times.",
    },
    {
      id: "scalable-api",
      icon: "Leaf",
      title: "Scalable API Architecture",
      subtitle: "Handle High Traffic",
      description:
        "Design APIs that grow seamlessly with increasing user demand. \nOptimize endpoints, caching, and database queries for performance. \nImplement load balancing, rate limiting, and horizontal scaling. \nEnsure high availability and fault tolerance across distributed systems. \nDeliver consistent and fast response times under heavy traffic conditions.",
    },
    {
      id: "api-monitoring",
      icon: "Leaf",
      title: "API Monitoring & Analytics",
      subtitle: "Track & Optimize Performance",
      description:
        "Monitor API usage, latency, and error rates in real time. \nDetect anomalies and proactively optimize performance. \nGenerate actionable analytics and reports for better decision-making. \nTrack user interactions, request patterns, and bottlenecks. \nMaintain continuous reliability and efficiency of API services.",
    },
    {
      id: "api-documentation",
      icon: "Leaf",
      title: "API Documentation & Support",
      subtitle: "Easy Integration",
      description:
        "Provide clear, structured, and interactive API documentation. \nInclude detailed examples, endpoints, and usage guidelines. \nSupport developer onboarding and troubleshooting efficiently. \nEnsure seamless integration for clients and third-party apps. \nMaintain updated documentation for every API version and release.",
    },
    {
      id: "api-automation",
      icon: "Leaf",
      title: "API Automation & Workflow",
      subtitle: "Streamline Operations",
      description:
        "Automate repetitive tasks using API-driven workflows. \nIntegrate APIs to connect multiple systems effortlessly. \nTrigger actions based on events and predefined rules. \nEnhance operational efficiency and reduce manual errors. \nEnsure smooth and consistent execution of business processes.",
    },
    {
      id: "api-integration",
      icon: "Leaf",
      title: "Third-Party API Integration",
      subtitle: "Connect & Expand",
      description:
        "Seamlessly integrate third-party APIs into your platform. \nEnable smooth data exchange between external services. \nSupport multiple API protocols and authentication methods. \nEnhance system capabilities by leveraging external functionalities. \nMaintain secure, reliable, and scalable integrations across platforms.",
    },
  ],
},

  managementSolutions: {
    title: "API Management Tools",
    subtitle:
      "Streamline API design, testing, deployment, and monitoring with our API management solutions for teams of any size.",
    subtitleLink: { text: "API management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "api-tracking",
        icon: "map",
        title: "API Tracking & Analytics",
        description:
          "Track API usage, performance, and errors in real-time. Monitor response times, requests, and throughput. Identify bottlenecks and optimize endpoints. Generate actionable insights for improvements.",
      },
      {
        id: "collaboration",
        icon: "map",
        title: "Team Collaboration Tools",
        description:
          "Enable seamless collaboration between developers, testers, and product managers. Share API specs, test results, and updates in real-time. Coordinate development tasks efficiently. Enhance team productivity and accountability.",
      },
      {
        id: "versioning",
        icon: "map",
        title: "API Versioning & Lifecycle Management",
        description:
          "Manage multiple API versions and ensure backward compatibility. Monitor deprecations and updates. Facilitate smooth transitions for client applications. Track API lifecycle from design to retirement.",
      },
    ],
    ctaText: "Get API Development Experts",
    onCtaClick: () => {},
  },
  faq: {
    title: "FAQ - API Development Services",
    items: [
      {
        id: "1",
        question: "What types of APIs do you develop?",
        answer:
          "We develop RESTful APIs, GraphQL APIs, and custom APIs tailored for web, mobile, and enterprise applications.",
      },
      {
        id: "2",
        question: "Can you integrate third-party APIs?",
        answer:
          "Yes, we integrate external APIs like payment gateways, social platforms, and analytics tools securely and efficiently.",
      },
      {
        id: "3",
        question: "Do you provide API documentation?",
        answer:
          "Absolutely. We create clear, structured, and interactive API documentation for easy integration and onboarding.",
      },
      {
        id: "4",
        question: "How do you ensure API security?",
        answer:
          "We implement authentication, authorization, encryption, and follow best security practices to protect data and endpoints.",
      },
      {
        id: "5",
        question: "Can you handle high traffic and scaling?",
        answer:
          "Yes, we design APIs with scalability, caching, load balancing, and fault-tolerance to handle high user demand reliably.",
      },
      {
        id: "6",
        question: "Do you offer API monitoring and support?",
        answer:
          "Yes, we provide monitoring, analytics, and post-deployment support to ensure consistent API performance and reliability.",
      },
      {
        id: "7",
        question: "Can you customize APIs for enterprise solutions?",
        answer:
          "Absolutely. We develop custom APIs tailored to your business workflows, ERP/CRM integration, and enterprise requirements.",
      },
    ],
  },
};
