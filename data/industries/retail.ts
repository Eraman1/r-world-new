import { IndustryConfig } from "@/types/industries";
 
export const retail: IndustryConfig = {
  slug: "retail",
  banner: {
    title: "Transform Your Retail Business with",
    highlight: "AI-Powered Retail & eCommerce Solutions",
    subtitle:
      "Reimagine the shopping experience with intelligent inventory management, customer analytics, and omnichannel retail systems. From POS automation to personalized marketing, we empower brands to deliver smarter, faster, and more connected retail experiences.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Retail Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Developers for Retail & eCommerce Software",
    description:
      "We build intelligent retail systems that connect your online and offline operations. Our solutions streamline inventory, boost customer loyalty, and enhance decision-making with AI-driven insights.",
    services: [
      {
        id: "inventory-management",
        title: "Smart Inventory Management Systems",
        icon: "Tractor", //Package
        position: "left",
      },
      {
        id: "crm-loyalty",
        title: "Retail CRM & Loyalty Platforms",
        icon: "Tractor", //Users
        position: "left",
      },
      {
        id: "pos-systems",
        title: "Point of Sale (POS) System Development",
        icon: "Tractor", //CreditCard
        position: "left",
      },
      {
        id: "ai-pricing",
        title: "AI-Powered Dynamic Pricing Engines",
        icon: "Tractor",  //Cpu
        position: "left",
      },
      {
        id: "ecommerce-automation",
        title: "eCommerce Automation & Integration",
        icon: "Tractor", //ShoppingCart
        position: "right",
      },
      {
        id: "analytics-dashboard",
        title: "Retail Data Analytics & BI Dashboards",
        icon: "Tractor",  //BarChart
        position: "right",
      },
      {
        id: "security",
        title: "Secure Payment & Fraud Detection Systems",
        icon: "Tractor", //Shield
        position: "right",
      },
      {
        id: "mobile-commerce",
        title: "Mobile Commerce & Retail Apps",
        icon: "Tractor", //Smartphone
        position: "right",
      },
    ],
  },
 
  solutions: {
    mainTitle: "Smart Retail & eCommerce Technology Solutions",
    mainDescription:
      "We deliver data-driven retail platforms that enhance customer experience, streamline operations, and drive revenue growth. Integrate AI, cloud, and analytics for a seamless shopping journey across all channels.",
    items: [
      {
        id: "inventory-ai",
        icon: "Leaf", //Package
        title: "AI-Powered Inventory Optimization",
        subtitle: "",
        description:
          "Predict demand and automate stock replenishment to minimize waste and improve profitability.",
      },
      {
        id: "crm-platforms",
        icon: "Leaf", //Users
        title: "Customer Relationship Management Platforms",
        subtitle: "",
        description:
          "Centralize customer data, automate engagement, and personalize marketing for improved retention and loyalty.",
      },
      {
        id: "omnichannel",
        icon: "Leaf", //Globe
        title: "Omnichannel Retail Integration",
        subtitle: "",
        description:
          "Unify online, in-store, and mobile channels for consistent branding, pricing, and inventory visibility.",
      },
      {
        id: "pricing-tools",
        icon: "Leaf", //TrendingUp
        title: "Dynamic Pricing & Promotions Engine",
        subtitle: "",
        description:
          "Leverage AI to set optimal prices and discounts based on market trends, competitor analysis, and customer behavior.",
      },
      {
        id: "pos-innovation",
        icon: "Leaf", //CreditCard
        title: "Next-Gen POS Solutions",
        subtitle: "",
        description:
          "Deliver fast, secure, and intuitive checkout experiences with integrated payment gateways and loyalty programs.",
      },
      {
        id: "retail-analytics",
        icon: "Leaf", //BarChart2
        title: "Retail Analytics & Insights",
        subtitle: "",
        description:
          "Gain a 360° view of store performance, sales trends, and customer insights through AI-powered analytics dashboards.",
      },
    ],
    linkText: "Explore Retail Solutions",
    linkUrl: "/contact-us",
  },
 
  managementSolutions: {
    title: "Complete Retail Management Ecosystem",
    subtitle:
      "Digitally transform your retail business with AI, automation, and data-driven insights to optimize every step from supplier to shopper.",
    subtitleLink: { text: "retail management software", url: "#" },
    laptopImage: "/images/retail-laptop.jpg",
    mobileImage: "/images/retail-mobile.jpg",
    topFeatures: [
      {
        id: "stock-control",
        icon: "map", //ClipboardList
        title: "Real-Time Stock & Order Management",
        description:
          "Automate stock updates, order tracking, and warehouse operations with real-time synchronization.",
      },
      {
        id: "sales-analytics",
        icon: "map", //BarChart
        title: "Sales Analytics & Performance Tracking",
        description:
          "Monitor daily sales, profit margins, and product performance using visual dashboards and KPI insights.",
      },
      {
        id: "customer-engagement",
        icon: "map", //MessageSquare
        title: "Customer Engagement Platforms",
        description:
          "Enhance shopper engagement with AI chatbots, personalized offers, and interactive digital experiences.",
      },
    ],
    bottomFeatures: [
      {
        id: "predictive-insights",
        icon: "map", //TrendingUp
        title: "Predictive Analytics & Forecasting",
        description:
          "Use AI to forecast demand, seasonal sales, and consumer trends to optimize business strategy.",
      },
      {
        id: "cybersecurity",
        icon: "map", //Shield
        title: "Cybersecurity & Payment Protection",
        description:
          "Safeguard customer data and transactions with advanced encryption and fraud monitoring systems.",
      },
      {
        id: "mobile-shopping",
        icon: "map", //Smartphone
        title: "Mobile Shopping & In-App Experiences",
        description:
          "Offer seamless, personalized shopping experiences through mobile apps and progressive web stores.",
      },
      {
        id: "supply-chain",
        icon: "map", //Truck
        title: "Supply Chain & Vendor Management",
        description:
          "Digitize procurement, logistics, and vendor collaboration to ensure faster deliveries and reduced costs.",
      },
    ],
    ctaText: "BUILD YOUR RETAIL PLATFORM",
    onCtaClick: () => {},
  },
  faq : {
  title: "Retail Industry FAQ",
  items: [
    {
      id: "1",
      question: "What is Retail Digital Transformation?",
      answer:
        "Retail digital transformation involves adopting technologies like AI, IoT, and cloud solutions to streamline operations, improve customer engagement, and enhance supply chain efficiency for both online and offline stores.",
    },
    {
      id: "2",
      question: "How can technology improve the retail customer experience?",
      answer:
        "Technology enables personalized recommendations, faster checkouts, real-time inventory tracking, and omnichannel engagement — ensuring a seamless and satisfying shopping experience across digital and physical platforms.",
    },
    {
      id: "3",
      question: "What are the benefits of retail automation?",
      answer:
        "Retail automation reduces manual errors, optimizes stock levels, and accelerates order fulfillment. Automated systems also enhance data accuracy and allow businesses to focus more on customer service and sales growth.",
    },
    {
      id: "4",
      question: "How does data analytics help in retail management?",
      answer:
        "Data analytics helps retailers understand buying trends, forecast demand, and optimize pricing strategies. By leveraging customer insights, businesses can make smarter decisions and improve profitability.",
    },
    {
      id: "5",
      question: "Can AI be used in retail operations?",
      answer:
        "Yes, AI powers intelligent product recommendations, demand forecasting, and automated customer service through chatbots. It also enables predictive maintenance and smarter marketing strategies for increased ROI.",
    },
    {
      id: "6",
      question: "What is omnichannel retailing and why is it important?",
      answer:
        "Omnichannel retailing connects all sales channels — physical stores, websites, apps, and social platforms — to create a unified shopping experience. It ensures consistency and convenience for modern consumers.",
    },
    {
      id: "7",
      question: "How can inventory management systems benefit retailers?",
      answer:
        "Smart inventory systems track stock in real time, automate replenishment, and prevent overstock or stockouts. This improves efficiency, reduces waste, and enhances overall customer satisfaction.",
    },
    {
      id: "8",
      question: "What role does mobile commerce play in retail growth?",
      answer:
        "Mobile commerce allows customers to shop conveniently through smartphones and apps. It drives engagement, supports location-based promotions, and contributes significantly to retail revenue growth.",
    },
    {
      id: "9",
      question: "How can small retailers compete with large e-commerce brands?",
      answer:
        "Small retailers can leverage digital tools like online storefronts, social media marketing, and data-driven insights to reach targeted audiences, personalize services, and build customer loyalty.",
    },
    {
      id: "10",
      question: "What is the future of retail technology?",
      answer:
        "The future of retail includes AI-driven personalization, AR/VR shopping experiences, cashier-less stores, and blockchain-enabled supply chain transparency — transforming how customers interact and shop.",
    },
  ],
},

};