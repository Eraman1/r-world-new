import { ServiceConfig } from "./services";

export const ecommerceDevelopment: ServiceConfig = {
  slug: "ecommerce-development",
  banner: {
    title: "Grow Your Online Business with",
    highlight: "Custom E-commerce Development Solutions",
    subtitle:
      "Build high-performing, secure, and user-friendly e-commerce platforms that drive sales and enhance customer experience. We create tailored solutions for B2C, B2B, and marketplace models.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get E-commerce Solutions",
  },

  developerDetails: {
    heading: "Expert E-commerce Developers",
    subheading:
      "Our developers build scalable and conversion-focused e-commerce platforms using the latest frameworks and integrations to deliver seamless shopping experiences.",
    mainTitle: "Professional E-commerce Development Services",
    mainDescription:
      "We design and develop custom e-commerce solutions for startups and enterprises. From intuitive storefronts to secure payment systems, we help you build platforms that increase engagement and boost sales.",
    image: "/images/ecommerce-development-laptop.png",
    services: [
      {
        id: 1,
        title: "Custom E-commerce Website Development",
        description:
          "Build high-quality, feature-rich online stores with tailored designs. Ensure mobile responsiveness and seamless navigation. Integrate shopping carts, payment gateways, and inventory systems.",
        icon: "/icons/ecommerce-web.svg",
      },
      {
        id: 2,
        title: "Marketplace Platform Development",
        description:
          "Create multi-vendor marketplace platforms with advanced product management. Enable secure transactions, vendor dashboards, and real-time analytics. Support multiple currencies and languages.",
        icon: "/icons/marketplace.svg",
      },
      {
        id: 3,
        title: "Mobile Commerce App Development",
        description:
          "Develop intuitive e-commerce apps for iOS and Android. Support product browsing, wishlists, and secure checkout. Integrate push notifications and loyalty programs. Enhance user engagement through AI recommendations.",
        icon: "/icons/mobile-commerce.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive E-commerce Solutions",
  mainDescription:
    "Our e-commerce development services empower businesses with scalable, secure, and conversion-focused digital stores. We build custom platforms that elevate customer experience and business growth.",
  linkText: "Get E-commerce Solutions",
  linkUrl: "/contact-us",
  items: [
    {
      id: "storefront-design",
      icon: "Leaf",
      title: "Storefront Design & Development",
      subtitle: "Engaging Shopping Interfaces",
      description:
        "Design visually captivating and mobile-friendly storefronts. \nImplement intuitive layouts for effortless product browsing. \nIncorporate dynamic product filters and recommendations. \nCustomize themes that strengthen your brand identity. \nDeliver smooth, enjoyable, and engaging shopping journeys.",
    },
    {
      id: "payment-security",
      icon: "Leaf",
      title: "Payment Gateway Integration",
      subtitle: "Secure & Seamless Transactions",
      description:
        "Integrate global payment gateways like PayPal, Stripe, and Razorpay. \nMaintain strict PCI-DSS compliance for secure transactions. \nSupport diverse currencies and local payment methods. \nSimplify checkout to reduce abandonment rates. \nEnsure customer trust with encrypted, frictionless payments.",
    },
    {
      id: "inventory-management",
      icon: "Leaf",
      title: "Inventory & Order Management",
      subtitle: "Efficient Backend Operations",
      description:
        "Automate real-time inventory tracking and stock management. \nSimplify order processing and delivery coordination. \nIntegrate with ERP or POS systems for seamless operations. \nMinimize errors through smart stock monitoring tools. \nEnsure fast fulfillment and improved customer satisfaction.",
    },
    {
      id: "analytics",
      icon: "Leaf",
      title: "E-commerce Analytics & Insights",
      subtitle: "Data-Driven Decision Making",
      description:
        "Monitor customer activity and purchasing behaviors in detail. \nAnalyze conversion rates, sales growth, and engagement metrics. \nLeverage insights to improve marketing campaigns. \nGenerate visual dashboards for performance tracking. \nMake smarter business decisions powered by real-time analytics.",
    },
    {
      id: "seo-optimization",
      icon: "Leaf",
      title: "SEO & Conversion Optimization",
      subtitle: "Increase Traffic & Sales",
      description:
        "Implement advanced SEO strategies for higher search visibility. \nEnhance product metadata and mobile site performance. \nConduct A/B testing to refine conversion elements. \nReduce cart abandonment through UX optimization. \nBoost traffic, engagement, and long-term sales growth.",
    },
    {
      id: "crm-integration",
      icon: "Leaf",
      title: "CRM & ERP Integration",
      subtitle: "Connected Business Operations",
      description:
        "Integrate top CRM tools like HubSpot or Salesforce seamlessly. \nEnable ERP synchronization for real-time data updates. \nEnhance customer engagement through personalized marketing. \nMaintain unified data across business platforms. \nSimplify workflows and improve operational visibility.",
    },
  ],
},


  managementSolutions: {
    title: "E-commerce Management Tools",
    subtitle:
      "Streamline your store management, analytics, and customer engagement with our advanced e-commerce tools.",
    subtitleLink: { text: "e-commerce management software", url: "#" },
    laptopImage: "/images/ecommerce-management.jpg",
    mobileImage: "/images/ecommerce-management-mobile.jpg",
    topFeatures: [
      {
        id: "order-tracking",
        icon: "map",
        title: "Order Tracking & Fulfillment",
        description:
          "Manage order processing and shipment tracking in real time. Automate notifications and updates. Enhance customer satisfaction with transparent delivery information. Reduce errors through centralized tracking.",
      },
      {
        id: "customer-engagement",
        icon: "map",
        title: "Customer Engagement Tools",
        description:
          "Boost retention with loyalty programs, personalized offers, and chat support. Collect feedback to improve experiences. Enable targeted email marketing. Increase repeat purchases through rewards.",
      },
      {
        id: "sales-analytics",
        icon: "map",
        title: "Sales & Performance Analytics",
        description:
          "Monitor real-time sales and marketing KPIs. Identify high-performing products and channels. Track revenue, ROI, and conversion rates. Optimize campaigns with actionable insights. Make data-driven business decisions efficiently.",
      },
    ],
    ctaText: "Get E-commerce Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - E-commerce Development Services",
    items: [
      {
        id: "1",
        question: "What e-commerce platforms do you work with?",
        answer:
          "We develop stores on Shopify, WooCommerce, Magento, BigCommerce, and custom-built e-commerce solutions tailored to your business model.",
      },
      {
        id: "2",
        question: "Do you offer mobile-friendly e-commerce websites?",
        answer:
          "Yes, all our e-commerce websites and apps are fully responsive, ensuring a seamless shopping experience across devices.",
      },
      {
        id: "3",
        question: "Can you integrate payment gateways and CRMs?",
        answer:
          "Absolutely. We integrate secure payment systems, CRM tools, and third-party APIs for smooth operations and customer management.",
      },
      {
        id: "4",
        question: "Do you provide SEO and marketing support?",
        answer:
          "Yes, we offer SEO optimization, analytics setup, and marketing tool integration to help drive traffic and improve conversions.",
      },
      {
        id: "5",
        question: "Can you develop multi-vendor marketplace platforms?",
        answer:
          "Yes, we build scalable multi-vendor marketplaces with advanced vendor dashboards, commission structures, and analytics.",
      },
      {
        id: "6",
        question: "Do you handle website maintenance and updates?",
        answer:
          "Yes, we provide ongoing support, updates, and performance monitoring to ensure your e-commerce platform remains secure and optimized.",
      },
      {
        id: "7",
        question: "Can you migrate my existing store to another platform?",
        answer:
          "Yes, we offer smooth and secure migration services from one e-commerce platform to another with zero data loss or downtime.",
      },
    ],
  },
};
