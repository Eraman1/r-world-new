import { IndustryConfig } from "@/types/industries";

export const foodbeverage: IndustryConfig = {
  slug: "food-beverage",
  banner: {
    title: "Digitize Food Operations with",
    highlight: "AI-Powered Food & Beverage Software Solutions",
    subtitle:
      "Revolutionize the food and beverage industry with intelligent automation, IoT monitoring, and predictive analytics. From production to delivery, ensure quality, efficiency, and sustainability across your entire value chain.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get FoodTech Solutions",
  },

  techHero: {
    heading: "Hire Expert Food & Beverage Software Developers",
    description:
      "Our developers specialize in building smart F&B software that streamlines production, enhances food safety, and optimizes supply chain visibility. We empower food manufacturers, distributors, and restaurants to embrace automation, traceability, and data-driven growth.",
    services: [
      {
        id: "inventory",
        title: "Inventory & Supply Chain Management",
        icon: "Tractor", //Boxes
        position: "left",
      },
      {
        id: "quality",
        title: "Quality & Safety Compliance Systems",
        icon: "Tractor", //ShieldCheck
        position: "left",
      },
      {
        id: "production",
        title: "Food Production Automation",
        icon: "Tractor", //Cog
        position: "left",
      },
      {
        id: "traceability",
        title: "Product Traceability Solutions",
        icon: "Tractor", //Search
        position: "left",
      },
      {
        id: "restaurant",
        title: "Restaurant & Franchise Management",
        icon: "Tractor", //Utensils
        position: "right",
      },
      {
        id: "supplyanalytics",
        title: "AI-Based Supply & Demand Forecasting",
        icon: "Tractor", //BarChart
        position: "right",
      },
      {
        id: "wastemanagement",
        title: "Food Waste Monitoring Systems",
        icon: "Tractor", //Recycle
        position: "right",
      },
      {
        id: "customerengagement",
        title: "Customer Experience & Loyalty Platforms",
        icon: "Tractor", //Gift
        position: "right",
      },
    ],
  },

  solutions: {
  mainTitle: "AI, IoT & Cloud Solutions for Food & Beverage Enterprises",
  mainDescription:
    "Harness the power of AI, IoT, and automation to streamline production, enhance safety, and reduce waste. Our F&B solutions enable predictive maintenance, real-time supply tracking, and sustainable operations that improve profitability and customer satisfaction.",
  items: [
    {
      id: "smart-manufacturing",
      icon: "Leaf", // Factory
      title: "Smart Food Manufacturing Systems",
      subtitle: "",
      description:
        "Automate your production lines using advanced AI-driven process optimization techniques. " +
        "Reduce machine downtime and improve output consistency across shifts. " +
        "Enhance worker efficiency with real-time monitoring and predictive alerts. " +
        "Integrate data analytics to identify bottlenecks and improve resource utilization. " +
        "Achieve higher product quality and maintain compliance with industry standards.",
    },
    {
      id: "iot-monitoring",
      icon: "Leaf", // Cpu
      title: "IoT-Enabled Quality Monitoring",
      subtitle: "",
      description:
        "Use IoT sensors to monitor temperature, humidity, and freshness continuously. " +
        "Ensure food safety and maintain regulatory compliance effortlessly. " +
        "Receive real-time alerts for any deviations in quality parameters. " +
        "Analyze historical data to predict potential quality issues before they occur. " +
        "Optimize storage and handling practices to reduce spoilage and losses.",
    },
    {
      id: "supply-forecast",
      icon: "Leaf", // TrendingUp
      title: "Demand & Supply Forecasting",
      subtitle: "",
      description:
        "Leverage machine learning to forecast customer demand with high accuracy. " +
        "Optimize inventory levels to reduce overstocking and shortages. " +
        "Minimize food waste by aligning production with actual demand patterns. " +
        "Identify seasonal trends and plan procurement efficiently. " +
        "Enhance decision-making with predictive analytics for smarter operations.",
    },
    {
      id: "distribution",
      icon: "Leaf", // Truck
      title: "Automated Distribution & Logistics",
      subtitle: "",
      description:
        "Track shipments and manage deliveries in real time with AI-powered tools. " +
        "Optimize delivery routes to save time and reduce fuel costs. " +
        "Ensure timely fulfillment and maintain high customer satisfaction. " +
        "Monitor carrier performance and shipment conditions continuously. " +
        "Integrate logistics data with production and inventory systems for end-to-end visibility.",
    },
    {
      id: "menu-analytics",
      icon: "Leaf", // PieChart
      title: "Menu & Pricing Optimization",
      subtitle: "",
      description:
        "Analyze customer behavior and purchasing patterns for actionable insights. " +
        "Adjust menu offerings dynamically based on profitability and demand. " +
        "Optimize pricing strategies to maximize revenue and customer satisfaction. " +
        "Leverage predictive analytics to plan seasonal menus and promotions. " +
        "Identify top-performing products and eliminate underperforming items efficiently.",
    },
    {
      id: "sustainability",
      icon: "Leaf", // Leaf
      title: "Sustainability & Waste Reduction Platforms",
      subtitle: "",
      description:
        "Implement green practices using software that tracks carbon emissions and energy consumption. " +
        "Monitor food waste at every stage of production and distribution. " +
        "Optimize resource usage to reduce environmental impact and costs. " +
        "Set sustainability goals and measure progress with actionable reports. " +
        "Support corporate responsibility initiatives while enhancing operational efficiency.",
    },
  ],
  linkText: "Get AI-Powered Food Solutions",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "Food & Beverage Management Software Solutions",
    subtitle:
      "We build end-to-end F&B software systems that enhance traceability, streamline production, and drive operational efficiency for global food enterprises.",
    subtitleLink: { text: "food management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "production-tracking",
        icon: "map", //BarChart
        title: "Production Tracking & Analytics",
        description:
          "Gain real-time visibility into production metrics, efficiency rates, and resource usage with interactive dashboards.",
        link: { text: "AI production systems", url: "#" },
      },
      {
        id: "order-automation",
        icon: "map", //Settings
        title: "Automated Order & Inventory Management",
        description:
          "Automate procurement and order fulfillment to ensure optimal stock levels and reduce wastage across your supply chain.",
      },
      {
        id: "integration",
        icon: "map", //Plug
        title: "ERP, POS & CRM Integration",
        description:
          "Integrate your food systems with ERP, POS, and CRM tools for unified control over finance, operations, and customer engagement.",
      },
    ],
    bottomFeatures: [
  {
    id: "labeling",
    icon: "map", // Tag
    title: "Smart Labeling & Packaging Systems",
    description:
      "Automate your labeling and packaging workflows to save time and reduce errors. \n" +
      "Ensure every package meets regulatory compliance and industry standards. \n" +
      "Improve traceability across the production and supply chain. \n" +
      "Enable real-time monitoring of packaging efficiency and output. \n" +
      "Integrate easily with existing ERP and warehouse systems for seamless operations.",
  },
  {
    id: "compliance",
    icon: "map", // FileCheck
    title: "Food Safety & Compliance Management",
    description:
      "Maintain strict adherence to global food safety standards such as HACCP and ISO 22000. \n" +
      "Leverage AI-powered tools for audits, reporting, and corrective actions. \n" +
      "Track compliance across all production and storage facilities in real time. \n" +
      "Reduce risk of violations and ensure consistent quality for consumers. \n" +
      "Generate detailed compliance reports for regulators, auditors, and management teams.",
  },
  {
    id: "supplier",
    icon: "map", // Users
    title: "Supplier & Vendor Management",
    description:
      "Centralize all supplier and vendor data to streamline procurement processes. \n" +
      "Monitor supplier performance, quality audits, and compliance status. \n" +
      "Evaluate suppliers with analytics and track historical performance trends. \n" +
      "Simplify communication and collaboration with all stakeholders digitally. \n" +
      "Reduce procurement risks while maintaining strong supply chain relationships.",
  },
  {
    id: "reporting",
    icon: "map", // ClipboardList
    title: "Performance Monitoring & Reporting",
    description:
      "Track key operational metrics like cost efficiency, delivery time, and product quality. \n" +
      "Use real-time dashboards to monitor performance across all departments. \n" +
      "Identify trends, anomalies, and areas for improvement quickly. \n" +
      "Generate automated reports for internal management and external stakeholders. \n" +
      "Make data-driven decisions to optimize efficiency and business growth.",
  },
],
ctaText: "BUILD YOUR FOOD & BEVERAGE SOLUTION",
onCtaClick: () => {},
  },

  managementSolutionsTwo: {
  title: "Food & Beverage Management Software Solutions",
  subtitle:
    "Our food & beverage software developers create smart platforms to manage restaurants, cafes, and delivery services efficiently while boosting revenue and customer satisfaction.",
  subtitleLink: { text: "restaurant management software", url: "#" },
  laptopImage: "/images/food-management.jpg",
  mobileImage: "/images/food-management-mobile.jpg",

  topFeatures: [
    {
      id: "order-management",
      icon: "map",
      title: "Order & Inventory Management Systems",
      description:
        "Track orders and manage inventory in real time. Optimize stock levels and reduce wastage for smooth operations.",
      link: { text: "order management software", url: "#" },
    },
    {
      id: "loyalty-programs",
      icon: "map",
      title: "Customer Loyalty & Rewards Platforms",
      description:
        "Build loyalty programs that engage customers. Offer personalized rewards and discounts to increase repeat visits.",
      link: { text: "loyalty management software", url: "#" },
    },
    {
      id: "payment-platforms",
      icon: "map",
      title: "Payment & Billing Management Systems",
      description:
        "Enable secure payments and fast billing. Integrate multiple gateways for seamless transactions online and offline.",
      link: { text: "payment management systems", url: "#" },
    },
    {
      id: "compliance-security",
      icon: "map",
      title: "Food Safety & Compliance Software",
      description:
        "Ensure compliance with health regulations. Monitor food safety and automate reporting for audits and inspections.",
      link: { text: "food compliance software", url: "#" },
    },
  ],

  bottomFeatures: [
    {
      id: "menu-management",
      icon: "map",
      title: "Custom Menu & Recipe Management",
      description:
        "Design and update menus effortlessly. Manage recipes, ingredients, and nutritional info for all dishes.",
    },
    {
      id: "real-time-monitoring",
      icon: "map",
      title: "Real-Time Kitchen & Delivery Monitoring",
      description:
        "Track kitchen orders, preparation times, and delivery status. Improve efficiency and reduce customer wait times.",
    },
    {
      id: "analytics-dashboard",
      icon: "leaf",
      title: "Sales & Analytics Dashboards",
      description:
        "Analyze sales trends, popular items, and customer behavior. Make data-driven decisions to boost revenue.",
    },
    {
      id: "admin-control",
      icon: "leaf",
      title: "Restaurant Administration Dashboards",
      description:
        "Manage staff, orders, and inventory from one dashboard. Streamline daily operations with full control.",
    },
  ],

  ctaText: "GET FOOD-BEVERAGE SOFTWARE DEVELOPERS",
  onCtaClick: "/contact-us",
},

 faq:{
  title: "Food & Beverage FAQ",
  items: [
    {
      id: "1",
      question: "What are Food & Beverage Management Solutions?",
      answer:
        "Food & Beverage Management Solutions are digital tools that streamline restaurant, catering, and manufacturing operations. They help manage inventory, orders, production, and quality control while improving efficiency and reducing waste.",
    },
    {
      id: "2",
      question: "How can technology improve food supply chain operations?",
      answer:
        "Modern technology enhances traceability, automates logistics, and ensures product freshness throughout the supply chain. IoT sensors and blockchain are increasingly used to track ingredients from farm to table for maximum transparency.",
    },
    {
      id: "3",
      question: "What software is essential for restaurants and food businesses?",
      answer:
        "Restaurants and food companies rely on Point-of-Sale (POS) systems, inventory management, ERP software, and customer engagement platforms to streamline daily operations and maintain consistency across multiple locations.",
    },
    {
      id: "4",
      question: "How can data analytics help food and beverage companies?",
      answer:
        "Data analytics provides insights into customer preferences, sales trends, and waste patterns. By analyzing this data, businesses can make smarter menu decisions, forecast demand, and reduce operational costs.",
    },
    {
      id: "5",
      question: "How does automation enhance food production efficiency?",
      answer:
        "Automation reduces human error, improves speed, and maintains consistent product quality. From packaging to quality testing, automated systems optimize production and ensure compliance with food safety standards.",
    },
    {
      id: "6",
      question: "What role does sustainability play in the food industry?",
      answer:
        "Sustainability is at the core of modern food operations. Companies are adopting eco-friendly packaging, energy-efficient production, and waste-reduction practices to align with environmental goals and consumer expectations.",
    },
    {
      id: "7",
      question: "Can food businesses use AI for better decision-making?",
      answer:
        "Yes. AI helps predict demand, personalize customer recommendations, and optimize delivery routes. It can also monitor food safety parameters and detect inefficiencies in real time for continuous improvement.",
    },
    {
      id: "8",
      question: "How do digital menus and online ordering benefit restaurants?",
      answer:
        "Digital menus and online ordering platforms expand reach, simplify order management, and increase revenue. They also allow restaurants to adapt quickly to customer preferences through real-time menu updates and analytics.",
    },
    {
      id: "9",
      question: "What measures ensure food safety and compliance?",
      answer:
        "Food businesses maintain compliance through automated temperature monitoring, quality tracking, and digital documentation. Regulatory reporting tools ensure adherence to FDA, FSSAI, and other safety standards.",
    },
    {
      id: "10",
      question: "What is the future of the food and beverage industry?",
      answer:
        "The industry’s future lies in smart kitchens, AI-driven personalization, and sustainable sourcing. As technology evolves, food and beverage companies will rely on digital ecosystems to deliver efficiency, transparency, and superior customer experiences.",
    },
  ],
},
};
