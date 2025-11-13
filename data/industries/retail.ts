import { IndustryConfig } from "@/types/industries";
 
export const retail: IndustryConfig = {
  slug: "retail",
  banner: {
    title: "Transform Your Retail Business with",
    highlight: "AI-Powered Retail & eCommerce Solutions",
    subtitle:
      "Reimagine the shopping experience with intelligent inventory management, customer analytics, and omnichannel retail systems. From POS automation to personalized marketing, we empower brands to deliver smarter, faster, and more connected retail experiences.",
    image: "https://stockit.rworldsoftware.in/images/industryRetailBanner.webp",
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
        icon: "Tractor", //Cpu
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
        icon: "Tractor", //BarChart
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
          "Predict customer demand with precision using real-time data analytics. " +
          "Automate stock replenishment across multiple warehouses for efficiency. " +
          "Reduce overstock and shortages through smart forecasting models. " +
          "Improve shelf availability to enhance shopping satisfaction. " +
          "Optimize supply chain decisions for higher profitability.",
      },
      {
        id: "crm-platforms",
        icon: "Leaf", //Users
        title: "Customer Relationship Management Platforms",
        subtitle: "",
        description:
          "Centralize all customer interactions in one intelligent CRM system. " +
          "Automate engagement workflows for personalized communication. " +
          "Leverage AI insights to segment and target customers effectively. " +
          "Enhance loyalty programs with real-time behavioral tracking. " +
          "Build lasting relationships that increase retention and revenue.",
      },
      {
        id: "omnichannel",
        icon: "Leaf", //Globe
        title: "Omnichannel Retail Integration",
        subtitle: "",
        description:
          "Connect your online store, mobile app, and in-store systems seamlessly. " +
          "Ensure unified pricing, promotions, and inventory visibility everywhere. " +
          "Deliver consistent customer experiences across all touchpoints. " +
          "Enable smooth order management and returns across channels. " +
          "Empower customers to shop conveniently however they prefer.",
      },
      {
        id: "pricing-tools",
        icon: "Leaf", //TrendingUp
        title: "Dynamic Pricing & Promotions Engine",
        subtitle: "",
        description:
          "Use AI to analyze competitor trends and market fluctuations instantly. " +
          "Set optimal prices to maximize sales and profit margins dynamically. " +
          "Automate discount strategies based on demand and purchase behavior. " +
          "Personalize promotions to target specific customer segments. " +
          "Stay competitive with real-time, data-driven pricing updates.",
      },
      {
        id: "pos-innovation",
        icon: "Leaf", //CreditCard
        title: "Next-Gen POS Solutions",
        subtitle: "",
        description:
          "Deliver fast and frictionless checkout experiences in every store. " +
          "Integrate multiple payment gateways for customer convenience. " +
          "Include loyalty rewards and digital receipts within transactions. " +
          "Enhance security with encryption and fraud detection tools. " +
          "Empower staff with user-friendly POS interfaces and insights.",
      },
      {
        id: "retail-analytics",
        icon: "Leaf", //BarChart2
        title: "Retail Analytics & Insights",
        subtitle: "",
        description:
          "Access real-time dashboards showing store and sales performance. " +
          "Track key KPIs like revenue, conversion, and customer trends. " +
          "Use predictive analytics to plan future sales and inventory. " +
          "Identify high-performing products and optimize promotions. " +
          "Make data-backed business decisions with AI-driven insights.",
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
        icon: "map", // TrendingUp
        title: "Predictive Analytics & Forecasting",
        description:
          "Leverage AI-driven models to forecast sales performance and market shifts. Identify emerging patterns that guide smarter decision-making. Adjust pricing, promotions, and inventory based on real-time data. Improve accuracy through continuous data correction and learning. Strengthen your business forecasting for long-term stability.",
      },
      {
        id: "cybersecurity",
        icon: "map", // Shield
        title: "Cybersecurity & Payment Protection",
        description:
          "Protect critical systems from fraud, breaches, and unauthorized access. Implement multi-layered encryption and AI-based threat detection. Continuously monitor transactions to ensure compliance and safety. Correct vulnerabilities through automated security patching. Build lasting customer trust with resilient payment safeguards.",
      },
      {
        id: "mobile-shopping",
        icon: "map", // Smartphone
        title: "Mobile Shopping & In-App Experiences",
        description:
          "Deliver smooth, secure, and error-free mobile commerce experiences. Use analytics to correct performance lags and optimize usability. Personalize recommendations using behavioral data insights. Enable instant payments with seamless backend integration. Keep customers engaged through fast, responsive design updates.",
      },
      {
        id: "supply-chain",
        icon: "map", // Truck
        title: "Supply Chain & Vendor Management",
        description:
          "Digitize procurement and logistics to ensure transparent operations. Use predictive data to correct supply delays and inefficiencies. Collaborate with vendors in real time for process synchronization. Automate inventory tracking with AI-powered forecasting tools. Improve delivery accuracy and overall operational precision.",
      },
    ],
    ctaText: "BUILD YOUR RETAIL PLATFORM",
    onCtaClick: () => {},
  },
  managementSolutionsTwo: {
    title: "Retail Management Software Solutions",
    subtitle:
      "Our retail software developers design intelligent platforms that streamline store operations, enhance customer experience, and boost sales through data-driven automation.",
    subtitleLink: { text: "retail management systems", url: "#" },
    laptopImage: "/images/retail-management.jpg",
    mobileImage: "/images/retail-management-mobile.jpg",

    topFeatures: [
      {
        id: "inventory-management",
        icon: "Boxes",
        title: "Inventory & Stock Management Systems",
        description:
          "Automate stock tracking and manage real-time inventory updates. Reduce waste and improve product availability across stores.",
        link: { text: "inventory management software", url: "#" },
      },
      {
        id: "pos-solutions",
        icon: "CreditCard",
        title: "Point of Sale (POS) Solutions",
        description:
          "Enable fast, secure, and unified checkouts in-store and online. Sync transactions, invoices, and receipts across multiple channels.",
        link: { text: "pos software systems", url: "#" },
      },
      {
        id: "customer-loyalty",
        icon: "Users",
        title: "Customer Loyalty & Engagement Platforms",
        description:
          "Build personalized reward programs and offers. Track buying patterns to improve retention and brand loyalty.",
        link: { text: "customer loyalty software", url: "#" },
      },
      {
        id: "analytics-insights",
        icon: "BarChart3",
        title: "Retail Analytics & Business Intelligence",
        description:
          "Gain insights from real-time sales and customer data. Make smarter business decisions through predictive analytics.",
        link: { text: "retail analytics tools", url: "#" },
      },
    ],

    bottomFeatures: [
      {
        id: "supply-chain",
        icon: "Truck",
        title: "Supply Chain & Order Management",
        description:
          "Optimize order processing and supplier coordination. Track logistics in real time to ensure timely product delivery.",
      },
      {
        id: "omnichannel",
        icon: "Globe",
        title: "Omnichannel Retail Integration",
        description:
          "Unify online and offline sales channels effortlessly. Deliver consistent shopping experiences across web, app, and store.",
      },
      {
        id: "employee-tools",
        icon: "Briefcase",
        title: "Employee Scheduling & Workforce Tools",
        description:
          "Simplify staff scheduling and task assignments. Improve workforce efficiency with automated shift and performance tracking.",
      },
      {
        id: "crm-systems",
        icon: "Handshake",
        title: "CRM & Customer Relationship Management",
        description:
          "Centralize customer data and communication history. Drive personalized marketing and improve sales team productivity.",
      },
    ],

    ctaText: "GET RETAIL SOFTWARE DEVELOPERS",
    onCtaClick: "/contact-us",
  },

  faq: {
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
        question:
          "How can small retailers compete with large e-commerce brands?",
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