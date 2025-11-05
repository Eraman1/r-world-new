import { SolutionConfig } from "@/types/solutions";

export const uiUx: SolutionConfig = {
  slug: "ui-ux",

  banner: {
    title: "Enhance User Experiences with",
    highlight: "Professional UI/UX Design Solutions",
    subtitle:
      "Create intuitive, engaging, and visually stunning interfaces that delight users and drive engagement across digital platforms.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get UI/UX Solutions",
  },

  developerDetails: {
    heading: "Experts in UI/UX & Interaction Design",
    subheading:
      "Our designers craft user-centered interfaces and seamless experiences that combine aesthetics with functionality for web, mobile, and enterprise apps.",
    mainTitle: "Professional UI/UX Design Services",
    mainDescription:
      "We specialize in designing interfaces that are visually appealing, highly functional, and optimized for usability. From wireframes and prototypes to full-scale designs, we deliver experiences that engage and convert users.",
    image: "/images/ui-ux-laptop.png",
    services: [
      {
        id: 1,
        title: "User Interface Design",
        description:
          "Design clean, modern, and responsive interfaces that are intuitive and visually compelling across devices.",
        icon: "/icons/interface.svg",
      },
      {
        id: 2,
        title: "User Experience Optimization",
        description:
          "Analyze user behavior and optimize flows, navigation, and interactions to enhance satisfaction and retention.",
        icon: "/icons/ux.svg",
      },
      {
        id: 3,
        title: "Prototyping & Testing",
        description:
          "Build interactive prototypes to validate design concepts and perform usability testing before development.",
        icon: "/icons/prototype.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive UI/UX Solutions",
  mainDescription:
    "Our UI/UX solutions help businesses deliver delightful user experiences, increase engagement, and improve conversions across all digital touchpoints. We focus on creating intuitive interfaces, seamless navigation, and aesthetically appealing designs. Each solution is tailored to enhance user satisfaction and business goals.",
  items: [
    {
      id: "wireframing",
      icon: "Leaf",
      title: "Wireframing & Mockups",
      subtitle: "Visual Blueprint for Apps",
      description:
        "Create clear wireframes and mockups to visualize app layouts, structure, and functionality before development. Reduce development errors by planning early and ensuring alignment with stakeholders. Provide a tangible design blueprint for both designers and developers.",
    },
    {
      id: "interactive-design",
      icon: "Leaf",
      title: "Interactive Design",
      subtitle: "Engaging User Interactions",
      description:
        "Implement micro-interactions, animations, and transitions to guide users and enhance their experience. Increase user engagement by making interactions intuitive and enjoyable. Build interactive elements that communicate feedback and system responses effectively.",
    },
    {
      id: "usability-testing",
      icon: "Leaf",
      title: "Usability Testing",
      subtitle: "Optimized for Real Users",
      description:
        "Test designs with real users to identify pain points and ensure the interface is intuitive and efficient. Collect actionable feedback to iterate and improve design solutions. Validate that your product meets user expectations and accessibility standards.",
    },
    {
      id: "responsive-design",
      icon: "Leaf",
      title: "Responsive & Mobile-First Design",
      subtitle: "Seamless Across Devices",
      description:
        "Design interfaces that adapt beautifully to different screen sizes, ensuring consistent experiences on desktop, tablet, and mobile. Optimize touch interactions, layouts, and typography for various devices. Enhance user satisfaction by delivering flawless experiences on all platforms.",
    },
    {
      id: "ui-guidelines",
      icon: "Leaf",
      title: "UI Style Guides & Design Systems",
      subtitle: "Consistency Across Platforms",
      description:
        "Develop comprehensive design systems and style guides to maintain visual consistency and streamline development. Define reusable components, typography, and color palettes for scalability. Ensure brand cohesion across web, mobile, and other digital platforms.",
    },
    {
      id: "analytics-integration",
      icon: "Leaf",
      title: "UX Analytics Integration",
      subtitle: "Data-Driven Experience Improvements",
      description:
        "Integrate analytics tools to track user behavior, optimize flows, and make informed design decisions. Measure user engagement, conversion paths, and interaction patterns. Use actionable insights to continuously refine and enhance the user experience.",
    },
  ],
  linkText: "Get UI/UX Solutions",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "UI/UX Project Management Tools",
    subtitle:
      "Manage design assets, workflows, and team collaboration efficiently with centralized tools and dashboards.",
    subtitleLink: { text: "UI/UX management software", url: "#" },
    laptopImage: "/images/ui-ux-management-laptop.jpg",
    mobileImage: "/images/ui-ux-management-mobile.jpg",
    topFeatures: [
      {
        id: "asset-management",
        icon: "map",
        title: "Design Asset Management",
        description:
          "Organize, store, and version all design assets in one place for efficient collaboration and reuse.",
      },
      {
        id: "collaboration",
        icon: "map",
        title: "Team Collaboration",
        description:
          "Enable designers, developers, and stakeholders to review, comment, and approve designs in real-time.",
      },
      {
        id: "workflow-automation",
        icon: "map",
        title: "Workflow Automation",
        description:
          "Streamline repetitive tasks, approvals, and notifications to accelerate project delivery.",
      },
    ],
    bottomFeatures: [
  {
    id: "prototyping-tools",
    icon: "map",
    title: "Integrated Prototyping Tools",
    description:
      "Create interactive prototypes directly within the platform for faster validation and testing. Enable stakeholders to experience designs in real-time before development. Streamline feedback collection and iterate efficiently to save time and resources.",
  },
  {
    id: "analytics-dashboard",
    icon: "map",
    title: "UX Analytics Dashboard",
    description:
      "Track user engagement, clicks, and behavior across your digital products. Gain insights to make data-driven improvements to UI and UX designs. Monitor performance metrics continuously to optimize conversion rates and user satisfaction.",
  },
  {
    id: "version-control",
    icon: "map",
    title: "Version Control & History",
    description:
      "Maintain a complete history of design changes to revert or audit at any time. Collaborate safely across teams without fear of losing work. Ensure secure project management and maintain consistency across multiple design iterations.",
  },
  {
    id: "notifications",
    icon: "map",
    title: "Real-Time Notifications",
    description:
      "Receive instant alerts on design updates, approvals, or comments to keep projects moving. Stay informed about team activities and deadlines in real-time. Enhance collaboration efficiency and minimize delays by addressing feedback immediately.",
  },
],
ctaText: "Get UI/UX Design Experts",
onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is the difference between UI and UX?",
        answer:
          "UI (User Interface) focuses on the visual design and layout of an app, while UX (User Experience) ensures the app is intuitive, usable, and satisfying for users.",
      },
      {
        id: "2",
        question: "Do you design for mobile apps and websites?",
        answer:
          "Yes, we design responsive interfaces for web, mobile, and tablet applications with a mobile-first approach.",
      },
      {
        id: "3",
        question: "Can you create interactive prototypes?",
        answer:
          "Absolutely. We develop interactive prototypes to validate workflows, user journeys, and interactions before development.",
      },
      {
        id: "4",
        question: "Do you offer UX testing services?",
        answer:
          "Yes, we conduct usability testing, analyze results, and optimize interfaces based on real user feedback.",
      },
      {
        id: "5",
        question: "Can you help with branding and visual consistency?",
        answer:
          "Yes, we provide UI style guides and design systems to maintain consistency across digital platforms.",
      },
      {
        id: "6",
        question: "Do you integrate analytics for UX improvement?",
        answer:
          "Yes, we integrate UX analytics tools to track user behavior and make data-driven design decisions.",
      },
    ],
  },
};
