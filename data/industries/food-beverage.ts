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
        icon: "Leaf", //Factory
        title: "Smart Food Manufacturing Systems",
        subtitle: "",
        description:
          "Automate production lines with AI-driven process optimization, reducing downtime and improving output consistency.",
      },
      {
        id: "iot-monitoring",
        icon: "Leaf", //Cpu
        title: "IoT-Enabled Quality Monitoring",
        subtitle: "",
        description:
          "Monitor temperature, humidity, and freshness in real-time using IoT sensors to ensure consistent food safety and compliance.",
      },
      {
        id: "supply-forecast",
        icon: "Leaf", //TrendingUp
        title: "Demand & Supply Forecasting",
        subtitle: "",
        description:
          "Predict market demand accurately using machine learning to optimize inventory and minimize food waste across your network.",
      },
      {
        id: "distribution",
        icon: "Leaf", //Truck
        title: "Automated Distribution & Logistics",
        subtitle: "",
        description:
          "Track shipments, manage deliveries, and optimize routes with AI-powered logistics software for on-time and efficient fulfillment.",
      },
      {
        id: "menu-analytics",
        icon: "Leaf", //PieChart
        title: "Menu & Pricing Optimization",
        subtitle: "",
        description:
          "Analyze customer behavior and cost patterns to dynamically adjust menu pricing and product offerings for maximum profitability.",
      },
      {
        id: "sustainability",
        icon: "Leaf", //Leaf
        title: "Sustainability & Waste Reduction Platforms",
        subtitle: "",
        description:
          "Implement green practices with software that tracks carbon emissions, food waste, and energy consumption for a sustainable future.",
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
        icon: "map", //Tag
        title: "Smart Labeling & Packaging Systems",
        description:
          "Automate labeling and packaging processes to meet compliance standards while improving efficiency and traceability.",
      },
      {
        id: "compliance",
        icon: "map", //FileCheck
        title: "Food Safety & Compliance Management",
        description:
          "Ensure compliance with global food safety standards (HACCP, ISO 22000) using AI-driven audit and reporting tools.",
      },
      {
        id: "supplier",
        icon: "map", //Users
        title: "Supplier & Vendor Management",
        description:
          "Manage supplier performance, quality audits, and procurement using centralized digital supplier management platforms.",
      },
      {
        id: "reporting",
        icon: "map", //ClipboardList
        title: "Performance Monitoring & Reporting",
        description:
          "Monitor key KPIs such as cost efficiency, delivery time, and quality metrics with real-time business intelligence tools.",
      },
    ],
    ctaText: "BUILD YOUR FOOD & BEVERAGE SOLUTION",
    onCtaClick: () => {},
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
