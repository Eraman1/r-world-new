import { ServiceConfig } from "./services";

export const uiUxDesign: ServiceConfig = {
  slug: "ui-ux-design",
  banner: {
    title: "Enhance User Experience with",
    highlight: "Professional UI/UX Design Services",
    subtitle:
      "Create intuitive, visually appealing, and user-friendly digital experiences with our expert UI/UX design solutions for web, mobile, and enterprise applications.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get UI/UX Design",
  },
  developerDetails: {
    heading: "Expert UI/UX Designers",
    subheading:
      "Our design team specializes in creating engaging interfaces, seamless workflows, and responsive layouts that enhance user satisfaction and retention.",
    mainTitle: "Professional UI/UX Design Services",
    mainDescription:
      "We provide end-to-end UI/UX design solutions that improve usability, accessibility, and visual appeal. From wireframes to interactive prototypes, our designs drive engagement and business growth.",
    image: "/images/ui-ux-laptop.png",
    services: [
      {
        id: 1,
        title: "User Research & Analysis",
        description:
          "Conduct in-depth user research and competitor analysis. Identify user needs, pain points, and behavior patterns. Define personas and user journeys. Gather insights to inform design decisions.",
        icon: "/icons/user-research.svg",
      },
      {
        id: 2,
        title: "Wireframing & Prototyping",
        description:
          "Create low and high-fidelity wireframes and interactive prototypes. Map out layouts, navigation, and workflows. Test early concepts with users. Refine design iterations quickly.",
        icon: "/icons/prototype.svg",
      },
      {
        id: 3,
        title: "Visual Design & Branding",
        description:
          "Design engaging user interfaces that reflect your brand identity. Choose color schemes, typography, and imagery strategically. Maintain visual consistency across platforms. Enhance aesthetics while improving usability.",
        icon: "/icons/visual-design.svg",
      },
    ],
  },
  solutions: {
  mainTitle: "Comprehensive UI/UX Design Solutions",
  mainDescription:
    "We craft visually appealing and user-friendly digital experiences that increase engagement, satisfaction, and conversions. Our designs are tailored for web, mobile, and enterprise applications.",
  linkText: "Get UI/UX Design Solutions",
  linkUrl: "/contact-us",
  items: [
    {
      id: "interaction-design",
      icon: "Leaf",
      title: "Interaction Design",
      subtitle: "Intuitive User Interactions",
      description:
        "Design seamless user interactions and workflows. Focus on responsive controls and feedback. Optimize user paths for efficiency. Ensure easy navigation across screens. Enhance engagement and satisfaction.",
    },
    {
      id: "ui-design",
      icon: "Leaf",
      title: "UI Design",
      subtitle: "Visually Appealing Interfaces",
      description:
        "Create stunning user interfaces with consistent branding. Use color, typography, and layout to guide users. Ensure cross-platform and responsive designs. Maintain accessibility and usability standards. Deliver aesthetically pleasing digital experiences.",
    },
    {
      id: "ux-strategy",
      icon: "Leaf",
      title: "UX Strategy & Consulting",
      subtitle: "User-Centric Approach",
      description:
        "Analyze user behavior and market trends to inform UX strategy. Define goals, KPIs, and design priorities. Recommend improvements to enhance engagement. Align business objectives with user needs. Ensure meaningful and impactful user experiences.",
    },
    {
      id: "usability-testing",
      icon: "Leaf",
      title: "Usability Testing",
      subtitle: "Validate Design Effectiveness",
      description:
        "Conduct usability tests on prototypes and live products. Collect user feedback and identify pain points. Analyze results to refine design solutions. Improve navigation, accessibility, and overall satisfaction. Deliver intuitive and effective interfaces.",
    },
    {
      id: "prototyping",
      icon: "Leaf",
      title: "Prototyping & Wireframing",
      subtitle: "Visualize Ideas Quickly",
      description:
        "Create detailed wireframes and interactive prototypes for early validation. Test design concepts before development. Iterate quickly based on stakeholder feedback. Align design solutions with user expectations. Reduce development costs and improve final outcomes.",
    },
    {
      id: "visual-identity",
      icon: "Leaf",
      title: "Visual Identity & Branding",
      subtitle: "Consistent Brand Experience",
      description:
        "Develop cohesive visual identities across digital platforms. Use color, typography, and imagery to communicate brand values. Ensure consistency across web, mobile, and social channels. Strengthen recognition and trust with users. Enhance the overall aesthetic and brand perception.",
    },
  ],
},

  managementSolutions: {
    title: "UI/UX Design Project Management",
    subtitle:
      "Streamline design workflows, collaboration, and project tracking for UI/UX teams of any size.",
    subtitleLink: { text: "UI/UX management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "design-tracking",
        icon: "map",
        title: "Design Tracking & Workflow",
        description:
          "Plan and monitor UI/UX design tasks efficiently. Track progress, milestones, and approvals. Collaborate across design and development teams. Ensure timely completion of design deliverables.",
      },
      {
        id: "team-collaboration",
        icon: "map",
        title: "Team Collaboration Tools",
        description:
          "Facilitate real-time communication between designers, developers, and stakeholders. Share design files, feedback, and prototypes seamlessly. Assign tasks and track progress.",
      },
      {
        id: "analytics-reporting",
        icon: "map",
        title: "Analytics & Reporting",
        description:
          "Monitor project performance and design quality. Generate insights on user feedback, usability, and interface effectiveness. Identify areas for improvement. Support data-driven design decisions.",
      },
    ],
    ctaText: "Get UI/UX Design Experts",
    onCtaClick: () => {},
  },
  faq: {
    title: "FAQ - UI/UX Design Services",
    items: [
      {
        id: "1",
        question: "What services are included in UI/UX design?",
        answer:
          "Our UI/UX services include user research, wireframing, prototyping, visual design, interaction design, usability testing, and design strategy.",
      },
      {
        id: "2",
        question: "Do you design for both web and mobile platforms?",
        answer:
          "Yes, we create responsive and adaptive designs optimized for web, iOS, Android, and cross-platform applications.",
      },
      {
        id: "3",
        question: "Can you improve the usability of existing applications?",
        answer:
          "Absolutely. We analyze current workflows, identify pain points, and redesign interfaces to enhance user experience and satisfaction.",
      },
      {
        id: "4",
        question: "Do you provide interactive prototypes?",
        answer:
          "Yes, we develop interactive prototypes to test navigation, user flows, and design concepts before full-scale development.",
      },
      {
        id: "5",
        question: "How do you ensure accessibility in designs?",
        answer:
          "We follow WCAG and accessibility guidelines, ensuring that designs are usable for people with disabilities and provide inclusive experiences.",
      },
    ],
  },
};
