import { IndustryConfig } from "@/types/industries";
 
export const casinogames: IndustryConfig = {
    slug: "casino-games",
    banner: {
      title: "Drive Innovation with",
      highlight: "World-Class Casino Software Development",
      subtitle:
      "Partner with expert developers to build custom, scalable, and reliable gaming solutions that enhance player engagement and accelerate your business growth.",
      image:
        "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
      linkText: "Get Casino Solutions",
    },
    techHero: {
      heading: "Hire Experienced Casino & Gaming Software Developers",
      description:
        "Our casino software solutions leverage innovative technologies to create secure, interactive, and scalable gaming platforms that boost player engagement and revenue.",
      services: [
        {
          id: "land",
          title: "Casino Platform Development",
          icon: "Tractor",
          position: "left",
        },
        {
          id: "livestock",
          title: "Slot Game Development",
          icon: "Beef",
          position: "left",
        },
        {
          id: "farm",
          title: "Table Game Solutions",
          icon: "Warehouse",
          position: "left",
        },
        {
          id: "precision",
          title: "Live Casino Integration",
          icon: "Wheat",
          position: "left",
        },
        {
          id: "aquaculture",
          title: "Payment & Wallet Systems",
          icon: "Fish",
          position: "right",
        },
        {
          id: "seed",
          title: "Bonus & Loyalty Programs",
          icon: "ShoppingCart",
          position: "right",
        },
        {
          id: "drone",
          title: "Player Analytics & Reporting",
          icon: "PlaneTakeoff",
          position: "right",
        },
        {
          id: "food",
          title: "Fraud & Security Systems",
          icon: "FileCheck",
          position: "right",
        },
      ],
      // deviceImages: {
      //   laptop: "/images/devices/laptop-agri.png",
      //   tablet: "/images/devices/tablet-agri.png",
      //   mobile: "/images/devices/mobile-agri.png",
      // },
    },
    solutions: {
      mainTitle: "AI & Blockchain Solutions for Casino Gaming",
      mainDescription:
              "Our developers implement AI and blockchain technologies to deliver secure, fair, and engaging casino experiences. From real-time player analytics to smart payment processing, we ensure your platform is scalable, compliant, and optimized for high player retention. Enhance game performance, streamline operations, and increase revenue with cutting-edge casino software solutions.",
 
      items: [
        {
          id: "crop-yield",
          icon: "Warehouse",
          title: "AI-Powered Game Recommendations",
          subtitle: "",
          description:
            "Our AI analyzes player behavior to deliver personalized game recommendations. It enhances engagement, extends session duration, and improves overall player satisfaction. Drive retention and loyalty with smarter, tailored gaming experiences.",
        },
        {
          id: "chemical-spraying",
          icon: "Sprout",
          title: "Blockchain-Based Transactions",
          subtitle: "",
          description:
            "We integrate blockchain to enable secure, tamper-proof transactions and transparent operations. Players can trust that their funds and game outcomes are fully protected. Ensure fairness, compliance, and reliability across your platform."
        },
        {
          id: "seed-sowing",
          icon: "Leaf",
          title: "Fraud Detection & Security",
          subtitle: "",
          description:
            "Our AI-driven systems continuously monitor transactions and gameplay to detect suspicious activity in real time. They prevent fraud and protect both players and your platform. Ensure a secure, fair, and trustworthy gaming environment for all users."
 
 
        },
        {
          id: "autonomous-harvesting",
          icon: "Tractor",
          title: "Live Casino Integration",
          subtitle: "",
          description:
           "Integrate live dealer games with low-latency streaming and real-time interaction. Deliver immersive, realistic casino experiences that keep players engaged. Enhance platform interactivity and replicate the excitement of a physical casino online."
 
        },
        {
          id: "crop-monitoring",
          icon: "Shield",
          title: "Player Analytics Dashboard",
          subtitle: "",
          description:
            "Gain insights into player behavior, popular games, and betting trends with real-time dashboards. Make informed decisions to optimize engagement and revenue. Monitor key metrics efficiently across your platform.",
 
        },
        {
          id: "disease-diagnosis",
          icon: "Bug",
          title: "Bonus & Loyalty Program Management",
          subtitle: "",
          description:
            "Design and manage dynamic bonus schemes and loyalty programs to reward players. Boost engagement and long-term retention with personalized incentives. Maximize revenue while keeping your players motivated.",
        },
      ],
      linkText: "Get AI-Powered Casino Solutions",
      linkUrl: "/contact-us",
    },
    managementSolutions: {
      title: "Casino Platform Management Solutions",
      subtitle:
        "Our developers provide full-cycle casino software management solutions, from game development to operational optimization.",
      subtitleLink: { text: "land management software", url: "#" },
      laptopImage: "/images/management-solutions.jpg",
      mobileImage: "/images/management-solutions-mobile.jpg",
      topFeatures: [
        {
          id: "mapping",
          icon: "map",
          title: "Game Library Management",
          description:
            "Manage all casino games with easy integration, updates, and configuration for seamless player access.",
          link: { text: "GIS & GPS technologies", url: "#" },
        },
        {
          id: "3d-design",
          icon: "box",
          title: "Payment Gateway Integration",
          description:
            "Integrate multiple payment methods with secure, fast, and compliant processing for deposits and withdrawals.",
        },
        {
          id: "sensors",
          icon: "sliders",
          title: "Player Analytics & Insights",
          description:
            "Track player behavior, game popularity, and revenue metrics to make informed operational decisions.",
        },
      ],
      bottomFeatures: [
        {
          id: "autonomous",
          icon: "monitor",
          title: "Bonus & Loyalty Programs",
          description:
            "Design and manage dynamic bonus schemes and loyalty programs to maximize player retention.",
        },
        {
          id: "irrigation",
          icon: "droplets",
          title: "Fraud Detection Systems",
          description:
            "Automate monitoring of suspicious activity and protect both players and platform from fraud.",
          link: { text: "irrigation software", url: "#" },
        },
        {
          id: "agronomy",
          icon: "testTube",
          title: "Customer Support Management",
          description:
            "Integrate CRM and live support tools to ensure smooth player interactions and issue resolution.",
        },
        {
          id: "operations",
          icon: "settings",
          title: "Sports & Race Betting",
          description:
            "Our Sports and Race Betting solutions deliver real-time odds, secure transactions, and engaging user experiences. Advanced analytics and AI-driven insights help optimize betting operations and player engagement. Ensure fair, scalable, and exciting platforms that maximize revenue and customer loyalty.",
        },
      ],
      ctaText: "GET CASINO SOFTWARE DEVELOPERS",
      onCtaClick: () => {},
    },
  };