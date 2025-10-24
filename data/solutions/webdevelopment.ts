import { SolutionConfig } from "@/types/solutions";

export const webDevelopment: SolutionConfig = {
  slug: "web-development",

  banner: {
    title: "Build Scalable & Engaging",
    highlight: "Web Development Solutions",
    subtitle:
      "Deliver modern, responsive, and high-performance websites and web applications that drive engagement, conversions, and business growth.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Web Development Solutions",
  },

  developerDetails: {
    heading: "Expert Web Developers & Designers",
    subheading:
      "Our team specializes in creating robust web platforms that combine cutting-edge technologies with exceptional user experiences.",
    mainTitle: "Professional Web Development Services",
    mainDescription:
      "We build scalable websites, web applications, and e-commerce platforms using modern technologies. Our solutions are optimized for performance, accessibility, and SEO to help your business succeed online.",
    image: "/images/web-development-laptop.png",
    services: [
      {
        id: 1,
        title: "Frontend Development",
        description:
          "Create visually appealing, responsive, and interactive user interfaces using React, Angular, Vue, and modern web technologies.",
        icon: "/icons/frontend.svg",
      },
      {
        id: 2,
        title: "Backend Development",
        description:
          "Build scalable, secure, and high-performance server-side applications with Node.js, Python, PHP, or .NET.",
        icon: "/icons/backend.svg",
      },
      {
        id: 3,
        title: "Full-Stack Web Development",
        description:
          "Deliver end-to-end web solutions combining both frontend and backend expertise to build complete web applications.",
        icon: "/icons/fullstack.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Comprehensive Web Solutions",
    mainDescription:
      "We offer full-cycle web development services including custom web applications, e-commerce platforms, and progressive web apps to meet diverse business needs.",
    items: [
      {
        id: "custom-web-apps",
        icon: "Leaf",
        title: "Custom Web Applications",
        subtitle: "Tailored for Your Business",
        description:
          "Develop web applications with custom features, integrations, and workflows specific to your business requirements.",
      },
      {
        id: "e-commerce-development",
        icon: "Leaf",
        title: "E-Commerce Development",
        subtitle: "Sell Online Effectively",
        description:
          "Create feature-rich online stores with secure payment gateways, inventory management, and optimized UX for higher conversions.",
      },
      {
        id: "responsive-design",
        icon: "Leaf",
        title: "Responsive & Mobile-First Design",
        subtitle: "Seamless Across Devices",
        description:
          "Design websites optimized for all devices, ensuring smooth navigation, faster load times, and improved user experience.",
      },
      {
        id: "cms-solutions",
        icon: "Leaf",
        title: "CMS Development & Integration",
        subtitle: "Easily Manage Content",
        description:
          "Build or integrate CMS solutions like WordPress, Drupal, or custom CMS platforms for effortless content management.",
      },
      {
        id: "pwa-development",
        icon: "Leaf",
        title: "Progressive Web Apps (PWAs)",
        subtitle: "Modern App Experience",
        description:
          "Deliver app-like experiences on the web with offline capabilities, push notifications, and fast loading times.",
      },
      {
        id: "api-integration",
        icon: "Leaf",
        title: "API Integration",
        subtitle: "Connect Seamlessly",
        description:
          "Integrate third-party APIs for payments, CRM, analytics, and more to enhance the functionality of your web platform.",
      },
    ],
    linkText: "Explore Web Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Web Platform Management",
    subtitle:
      "Manage, monitor, and optimize your web applications with dashboards, analytics, and automation tools.",
    subtitleLink: { text: "web management platforms", url: "#" },
    laptopImage: "/images/web-management-laptop.jpg",
    mobileImage: "/images/web-management-mobile.jpg",
    topFeatures: [
      {
        id: "analytics",
        icon: "map",
        title: "Analytics & Performance Tracking",
        description:
          "Track traffic, user behavior, and performance metrics to optimize your website continuously.",
      },
      {
        id: "seo-optimization",
        icon: "map",
        title: "SEO Optimization",
        description:
          "Implement on-page and technical SEO to improve search visibility and attract organic traffic.",
      },
      {
        id: "security",
        icon: "map",
        title: "Security & Data Protection",
        description:
          "Ensure your web applications are secure with SSL, encryption, and regular vulnerability checks.",
      },
    ],
    bottomFeatures: [
      {
        id: "content-management",
        icon: "map",
        title: "Content Management",
        description:
          "Easily manage website content with CMS dashboards and automated publishing workflows.",
      },
      {
        id: "updates-maintenance",
        icon: "map",
        title: "Updates & Maintenance",
        description:
          "Keep your web applications up-to-date with regular updates, patches, and performance optimization.",
      },
      {
        id: "cloud-deployment",
        icon: "map",
        title: "Cloud Deployment",
        description:
          "Deploy websites and web apps on cloud platforms for scalability, reliability, and performance.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Automated Monitoring & Alerts",
        description:
          "Receive notifications for downtime, errors, or performance issues to ensure seamless web operations.",
      },
    ],
    ctaText: "Get Web Development Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What technologies do you use for web development?",
        answer:
          "We use modern web technologies including React, Angular, Vue, Node.js, Python, PHP, .NET, and cloud services for scalable solutions.",
      },
      {
        id: "2",
        question: "Can you build e-commerce websites?",
        answer:
          "Yes, we develop fully-featured e-commerce platforms with secure payment gateways, inventory management, and optimized user experience.",
      },
      {
        id: "3",
        question: "Do you provide responsive design?",
        answer:
          "Absolutely. All websites are mobile-first and responsive, ensuring seamless experience across all devices.",
      },
      {
        id: "4",
        question: "Can you integrate third-party APIs?",
        answer:
          "Yes, we integrate APIs for payments, CRM, analytics, social media, and other services to extend your website functionality.",
      },
      {
        id: "5",
        question: "Do you offer maintenance and support?",
        answer:
          "Yes, we provide ongoing website maintenance, updates, monitoring, and technical support.",
      },
      {
        id: "6",
        question: "Can you build progressive web apps?",
        answer:
          "Yes, we create PWAs that combine web and mobile app experiences with offline access and push notifications.",
      },
    ],
  },
};
