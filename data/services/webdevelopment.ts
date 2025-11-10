import { ServiceConfig } from "./services";

export const webdevelopment: ServiceConfig = {
  slug: "webdevelopment",
  banner: {
    title: "Empower Your Business with",
    highlight: "Custom Web Development",
    subtitle:
      "Build scalable, secure, and high-performance websites and web applications tailored to your business needs. Our expert developers deliver modern, responsive, and SEO-friendly solutions.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Web Development Solutions",
  },
  developerDetails: {
    heading: "Expert Developers for Web Solutions",
    subheading:
      "Our team specializes in creating responsive, secure, and high-performing websites and web applications using modern frameworks and best practices.",
    mainTitle: "Professional Web Development Services",
    mainDescription:
      "We design, develop, and maintain websites and web apps that improve efficiency, engagement, and business growth. From corporate websites to complex web platforms, we deliver seamless functionality and scalability.",
    image: "/images/web-development-laptop.png",
    services: [
      {
        id: 1,
        title: "Frontend Web Development",
        description:
          "Build responsive and interactive user interfaces using React, Angular, or Vue. Ensure cross-browser compatibility and seamless performance.",
        icon: "/icons/frontend.svg",
      },
      {
        id: 2,
        title: "Backend Web Development",
        description:
          "Develop secure and scalable server-side applications using Node.js, Django, or Laravel. Implement RESTful APIs and database integration.",
        icon: "/icons/backend.svg",
      },
      {
        id: 3,
        title: "Full-Stack Web Development",
        description:
          "Deliver complete web solutions combining frontend and backend expertise. Ensure smooth data flow across UI, server, and database. Implement modern frameworks for scalability.",
        icon: "/icons/fullstack.svg",
      },
    ],
  },
  solutions: {
  mainTitle: "Custom Web Development Solutions",
  mainDescription:
    "We provide end-to-end web development services for businesses of all sizes. Our solutions enhance productivity, streamline processes, and deliver a superior user experience through innovative technology.",
  linkText: "Get Web Development Solutions",
  linkUrl: "/contact-us",
  items: [
    {
      id: "responsive-design",
      icon: "Leaf",
      title: "Responsive Web Design",
      subtitle: "Seamless Across Devices",
      description:
        "Design mobile-friendly and responsive websites that work perfectly across all devices. \nEnsure optimal layout, readability, and usability. \nImprove engagement with user-centric designs. \nMaintain consistent branding across screens. \nDeliver intuitive and visually appealing web experiences.",
    },
    {
      id: "ecommerce-development",
      icon: "Leaf",
      title: "E-commerce Development",
      subtitle: "Robust Online Stores",
      description:
        "Build scalable e-commerce platforms with secure payment integrations. \nImplement product management, cart, and checkout functionalities. \nOptimize for SEO and performance. \nEnable personalized shopping experiences. \nEnsure secure and seamless online transactions for customers.",
    },
    {
      id: "web-application",
      icon: "Leaf",
      title: "Web Application Development",
      subtitle: "Feature-Rich & Interactive",
      description:
        "Develop interactive and scalable web applications for businesses. \nIntegrate with APIs, databases, and third-party services. \nEnsure security, performance, and high availability. \nOptimize user experience and functionality. \nDeliver reliable web solutions for complex business workflows.",
    },
    {
      id: "cms-solutions",
      icon: "Leaf",
      title: "Content Management Systems",
      subtitle: "Flexible & Scalable",
      description:
        "Implement powerful CMS platforms for easy content updates. \nEnable non-technical users to manage website content seamlessly. \nSupport multi-language and multi-site capabilities. \nEnsure fast, secure, and responsive performance. \nDeliver scalable solutions that grow with your business needs.",
    },
    {
      id: "ui-ux-design",
      icon: "Leaf",
      title: "UI/UX Design Services",
      subtitle: "Engaging User Interfaces",
      description:
        "Create visually appealing and intuitive user interfaces. \nEnhance user journeys with research-driven design principles. \nOptimize navigation, accessibility, and overall experience. \nMaintain brand consistency across all touchpoints. \nDeliver designs that boost engagement and conversions.",
    },
    {
      id: "seo-optimization",
      icon: "Leaf",
      title: "SEO & Performance Optimization",
      subtitle: "Boost Visibility & Speed",
      description:
        "Optimize websites for search engines to increase organic traffic. \nImplement on-page and technical SEO strategies. \nEnhance site speed, responsiveness, and accessibility. \nMonitor performance with analytics and reporting tools. \nEnsure websites rank higher and perform efficiently across devices.",
    },
  ],
},

  managementSolutions: {
    title: "Web Development Management Tools",
    subtitle:
      "Our web development management solutions streamline project tracking, team collaboration, and deployment efficiency for web development teams of any size.",
    subtitleLink: { text: "web project management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "project-tracking",
        icon: "map",
        title: "Web Project Tracking & Monitoring",
        description:
          "Track web development progress, milestones, and deadlines in real-time. Allocate resources efficiently across frontend, backend, and full-stack projects. ",
      },
      {
        id: "team-collaboration",
        icon: "map",
        title: "Team Collaboration Tools",
        description:
          "Enable seamless communication between web developers, designers, and testers. Share updates, code snippets, and project documents in real-time.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Performance Analytics & Reporting",
        description:
          "Analyze web app KPIs, server performance, and user engagement consistently. Identify bottlenecks and optimize development workflows. Monitor resource utilization across teams.",
      },
    ],
    ctaText: "Get Web Development Experts",
    onCtaClick: () => {},
  },
  faq: {
    title: "FAQ - Web Development Services",
    items: [
      {
        id: "1",
        question: "What types of websites do you develop?",
        answer:
          "We develop corporate websites, e-commerce platforms, web applications, and custom web solutions tailored to your business needs.",
      },
      {
        id: "2",
        question: "Can you handle backend integration for web apps?",
        answer:
          "Yes, we integrate web applications with APIs, databases, cloud services, and enterprise systems for seamless functionality.",
      },
      {
        id: "3",
        question: "Do you provide post-launch support for websites?",
        answer:
          "Absolutely. We offer ongoing maintenance, updates, and monitoring to ensure websites remain secure, fast, and fully functional.",
      },
      {
        id: "4",
        question: "How long does it take to develop a website?",
        answer:
          "Timeline depends on project complexity and features, but we follow agile practices for timely and efficient delivery.",
      },
      {
        id: "5",
        question: "Can you develop responsive and mobile-friendly websites?",
        answer:
          "Yes, all websites are fully responsive and optimized for desktops, tablets, and mobile devices to ensure the best user experience.",
      },
      {
        id: "6",
        question: "Do you offer SEO-friendly web development?",
        answer:
          "Yes, we implement SEO best practices during development to enhance visibility, ranking, and traffic for your website.",
      },
      {
        id: "7",
        question: "Can you integrate third-party services and APIs?",
        answer:
          "Absolutely. We integrate third-party APIs, payment gateways, analytics tools, and enterprise systems seamlessly into your website.",
      },
    ],
  },
};
