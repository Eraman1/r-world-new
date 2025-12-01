import { SolutionConfig } from "@/types/solutions";

export const openSource: SolutionConfig = {
  slug: "open-source",

  banner: {
    title: "Empower Innovation with",
    highlight: "Open Source Solutions",
    subtitle:
      "Leverage the power of open source software to accelerate development, reduce costs, and enhance flexibility across your projects.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Open Source Solutions",
  },

  developerDetails: {
    heading: "Experts in Open Source Development",
    subheading:
      "We specialize in building scalable, secure, and customizable software solutions using the latest open source technologies.",
    mainTitle: "Professional Open Source Development Services",
    mainDescription:
      "Our team delivers tailored open source solutions that empower businesses to innovate faster. We work with frameworks, libraries, and platforms that are proven, reliable, and community-driven.",
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "Custom Open Source Development",
        description:
          "Build scalable and secure applications tailored to your business needs using open source technologies like Node.js, Django, Laravel, and more.",
        icon: "/icons/code.svg",
      },
      {
        id: 2,
        title: "Open Source Integration",
        description:
          "Integrate open source tools and libraries into your existing systems for better functionality, performance, and flexibility.",
        icon: "/icons/integration.svg",
      },
      {
        id: 3,
        title: "Support & Maintenance",
        description:
          "We provide ongoing support, updates, and security patches for open source software to ensure reliability and optimal performance.",
        icon: "/icons/support.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Open Source Solutions for Businesses",
    mainDescription:
      "Open source solutions reduce costs, increase flexibility, and allow rapid development. We provide services to build, integrate, and optimize open source software across platforms, helping businesses scale efficiently while maintaining control over their technology stack.",
    items: [
      {
        id: "web-apps",
        icon: "Leaf",
        title: "Open Source Web Applications",
        subtitle: "Flexible & Scalable",
        description:
          "Develop web applications with open source frameworks like Django, Laravel, React, and Angular for fast deployment. Ensure high performance, scalability, and cost efficiency. Customize features to meet your unique business requirements seamlessly.",
      },
      {
        id: "api-development",
        icon: "Leaf",
        title: "Open Source API Development",
        subtitle: "Secure & Reliable",
        description:
          "Build robust APIs using open source technologies to connect applications and services. Ensure secure and reliable communication with scalable endpoints. Enable seamless data exchange and integration across platforms for modern digital ecosystems.",
      },
      {
        id: "cms-solutions",
        icon: "Leaf",
        title: "Open Source CMS Solutions",
        subtitle: "Manage Content Efficiently",
        description:
          "Deploy and customize CMS platforms like WordPress, Joomla, or Drupal for dynamic websites. Simplify content management and streamline updates. Enhance website functionality while maintaining full control over design and content workflow.",
      },
      {
        id: "ecommerce-solutions",
        icon: "Leaf",
        title: "Open Source eCommerce Platforms",
        subtitle: "Scalable Online Stores",
        description:
          "Create scalable and customizable eCommerce platforms with Magento, WooCommerce, or PrestaShop. Optimize product management, payments, and checkout experiences. Provide a seamless and engaging shopping experience for customers across devices.",
      },
      {
        id: "cloud-solutions",
        icon: "Leaf",
        title: "Open Source Cloud Solutions",
        subtitle: "Flexible & Cost-Effective",
        description:
          "Leverage platforms like OpenStack or Kubernetes for scalable cloud infrastructure. Reduce operational costs while improving system flexibility. Ensure secure, efficient, and easily maintainable cloud-based deployments for your applications.",
      },
      {
        id: "analytics-tools",
        icon: "Leaf",
        title: "Open Source Analytics Tools",
        subtitle: "Data-Driven Insights",
        description:
          "Integrate open source analytics tools to monitor performance and gain actionable insights. Make informed business decisions using data-driven analysis. Track metrics, visualize trends, and optimize operations efficiently across teams.",
      },
    ],
    linkText: "Explore Open Source Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Open Source Management Platforms",
    subtitle:
      "Centralize, monitor, and optimize your open source software ecosystem with comprehensive management solutions.",
    subtitleLink: { text: "open source management", url: "#" },
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/1200x/e5/63/82/e5638269aae8f80871dd0d14c3ef4893.jpg",
    mobileImage: "https://i.pinimg.com/736x/95/2f/e6/952fe6563aaf20fb2e5359a9721ad156.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/1200x/e5/63/82/e5638269aae8f80871dd0d14c3ef4893.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/95/2f/e6/952fe6563aaf20fb2e5359a9721ad156.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
    topFeatures: [
      {
        id: "centralized-dashboard",
        icon: "map",
        title: "Centralized Dashboard",
        description:
          "Monitor open source applications, integrations, and services from a single dashboard for operational efficiency.",
      },
      {
        id: "analytics-reporting",
        icon: "map",
        title: "Analytics & Reporting",
        description:
          "Track performance metrics, usage, and system health with automated reporting and actionable insights.",
      },
      {
        id: "security-compliance",
        icon: "map",
        title: "Security & Compliance",
        description:
          "Ensure security, licensing compliance, and updates for all your open source software components.",
      },
    ],
    bottomFeatures: [
      {
        id: "workflow-automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Automate deployment, updates, and maintenance tasks for open source software to boost efficiency. Reduce manual intervention and minimize human errors in repetitive tasks. Ensure consistent performance and faster delivery across your development pipeline.",
      },
      {
        id: "integration-tools",
        icon: "map",
        title: "Integration Tools",
        description:
          "Seamlessly integrate open source tools, APIs, and libraries into your existing ecosystem. Enable smooth communication between different software components. Maximize productivity and maintain a unified development workflow across platforms.",
      },
      {
        id: "cloud-deployment",
        icon: "map",
        title: "Cloud Deployment",
        description:
          "Deploy and manage open source software on cloud platforms for scalability and cost efficiency. Easily scale resources up or down based on workload demands. Maintain high availability and ensure optimal performance for your applications.",
      },
      {
        id: "alerts-notifications",
        icon: "map",
        title: "Alerts & Notifications",
        description:
          "Receive real-time notifications for system updates, failures, or performance anomalies. Stay proactive with timely alerts to address issues before they escalate. Improve system reliability and reduce downtime with automated monitoring.",
      },
    ],
    ctaText: "Get Open Source Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is open source software?",
        answer:
          "Open source software is software whose source code is freely available for modification, distribution, and use by anyone.",
      },
      {
        id: "2",
        question: "Why should businesses use open source solutions?",
        answer:
          "Open source solutions reduce costs, enhance flexibility, speed up development, and benefit from community-driven innovations.",
      },
      {
        id: "3",
        question: "Can open source software be customized?",
        answer:
          "Yes, open source software can be fully customized to meet the specific needs and workflows of your business.",
      },
      {
        id: "4",
        question: "Do you provide support for open source solutions?",
        answer:
          "Absolutely. We offer maintenance, updates, and technical support to ensure reliable and secure operations.",
      },
      {
        id: "5",
        question: "Can open source software integrate with existing systems?",
        answer:
          "Yes, open source software can be integrated with proprietary and other open source systems for seamless workflows.",
      },
      {
        id: "6",
        question: "Do you develop custom open source applications?",
        answer:
          "Yes, our team develops custom open source applications tailored to your requirements and industry standards.",
      },
    ],
  },
};
