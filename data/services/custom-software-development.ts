import { ServiceConfig } from "./services";


export const customSoftwareDevelopment: ServiceConfig = {
  slug: "custom-software-development",
  banner: {
    title: "Empower Creativity with",
    highlight: "Cutting-Edge Animation & Graphic Design",
    subtitle:
      "Bring your brand vision to life with our expert 2D, 3D, and motion graphics design solutions that captivate audiences and drive engagement.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Animation Solutions",
  },
  developerDetails: {
    heading: "Expert Designers in Animation & Visual Storytelling",
    subheading:
      "Our talented team specializes in creating immersive visual experiences through dynamic animations and innovative graphic design, blending art and technology seamlessly.",
    mainTitle: "Professional Animation & Graphic Design Services",
    mainDescription:
      "We deliver visually stunning and technically refined designs for brands, businesses, and entertainment. From 3D motion graphics to logo animation, our services enhance brand identity and captivate audiences across platforms.",
    image: "/images/web-animation-laptop.png",
    services: [
      {
        id: 1,
        title: "Motion Graphics Design",
        description:
          "Our designers create high-impact motion graphics that communicate complex ideas visually — ideal for advertising, social media, and corporate presentations.",
        icon: "/icons/video.svg",
      },
      {
        id: 2,
        title: "Logo & Brand Animation",
        description:
          "We transform static logos into stunning animated assets that leave a lasting impression and strengthen your brand’s visual identity.",
        icon: "/icons/trademark.svg",
      },
      {
        id: 3,
        title: "Explainer & Promotional Videos",
        description:
          "We design engaging explainer videos that simplify your message and increase viewer retention through storytelling and motion design.",
        icon: "/icons/play.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Creative Digital Design & Animation Solutions",
    mainDescription:
      "We craft innovative visual experiences that merge creativity with technology. Our animation and graphic design solutions empower brands to connect emotionally with their audiences through stunning visuals, motion, and interactivity.",
    items: [
      {
        id: "visual-branding",
        icon: "Leaf",
        title: "Visual Branding",
        subtitle: "Consistency Across Platforms",
        description:
          "We build cohesive brand visuals that ensure your identity is instantly recognizable across websites, apps, videos, and print materials.",
      },
      {
        id: "3d-modeling",
        icon: "Leaf",
        title: "3D Modeling & Animation",
        subtitle: "Realistic Product Visuals",
        description:
          "Our 3D artists design and animate realistic objects and environments for commercials, films, games, and virtual product showcases.",
      },
      {
        id: "ui-motion",
        icon: "Leaf",
        title: "UI Motion Design",
        subtitle: "Enhance User Experience",
        description:
          "We integrate smooth motion into user interfaces to guide user attention, improve navigation, and create delightful digital experiences.",
      },
      {
        id: "illustration",
        icon: "Leaf",
        title: "Custom Illustration Design",
        subtitle: "Unique Art for Every Brand",
        description:
          "Our illustrators design distinctive artwork that brings your brand’s personality to life through a blend of creativity and storytelling.",
      },
      {
        id: "video-production",
        icon: "Leaf",
        title: "Video Production & Editing",
        subtitle: "Professional Multimedia Creations",
        description:
          "From scripting to editing, we handle the full video production process to deliver professional-grade promotional and corporate videos.",
      },
      {
        id: "ai-enhancement",
        icon: "Leaf",
        title: "AI-Assisted Design",
        subtitle: "Next-Gen Creative Workflow",
        description:
          "We leverage AI tools for faster design workflows, from automated background removal to generative art and animation enhancement.",
      },
    ],
    linkText: "Get Custom Design Solutions",
    linkUrl: "/contact-us",
  },
  solutionsTwo: {
    mainTitle: "Creative Digital Design & Animation Solutions",
    mainDescription:
      "We craft innovative visual experiences that merge creativity with technology. Our animation and graphic design solutions empower brands to connect emotionally with their audiences through stunning visuals, motion, and interactivity.",
    items: [
      {
        id: "visual-branding",
        icon: "Leaf",
        title: "Visual Branding",
        subtitle: "Consistency Across Platforms",
        description:
          "We build cohesive brand visuals that ensure your identity is instantly recognizable across websites, apps, videos, and print materials.",
      },
      {
        id: "3d-modeling",
        icon: "Leaf",
        title: "3D Modeling & Animation",
        subtitle: "Realistic Product Visuals",
        description:
          "Our 3D artists design and animate realistic objects and environments for commercials, films, games, and virtual product showcases.",
      },
      {
        id: "ui-motion",
        icon: "Leaf",
        title: "UI Motion Design",
        subtitle: "Enhance User Experience",
        description:
          "We integrate smooth motion into user interfaces to guide user attention, improve navigation, and create delightful digital experiences.",
      },
      {
        id: "illustration",
        icon: "Leaf",
        title: "Custom Illustration Design",
        subtitle: "Unique Art for Every Brand",
        description:
          "Our illustrators design distinctive artwork that brings your brand’s personality to life through a blend of creativity and storytelling.",
      },
      {
        id: "video-production",
        icon: "Leaf",
        title: "Video Production & Editing",
        subtitle: "Professional Multimedia Creations",
        description:
          "From scripting to editing, we handle the full video production process to deliver professional-grade promotional and corporate videos.",
      },
      {
        id: "ai-enhancement",
        icon: "Leaf",
        title: "AI-Assisted Design",
        subtitle: "Next-Gen Creative Workflow",
        description:
          "We leverage AI tools for faster design workflows, from automated background removal to generative art and animation enhancement.",
      },
    ],
    linkText: "Get Custom Design Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Creative Asset Management Systems hhh",
    subtitle:
      "Our creative asset management software helps design teams organize, manage, and deliver assets efficiently across platforms and campaigns.",
    subtitleLink: { text: "creative asset management", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "storage",
        icon: "map",
        title: "Cloud-Based Asset Storage",
        description:
          "Store and access all your design files and animations securely from anywhere, ensuring collaboration without limits.",
        link: { text: "cloud-based design tools", url: "#" },
      },
      {
        id: "collaboration",
        icon: "map",
        title: "Team Collaboration Tools",
        description:
          "Enable designers, editors, and clients to review, comment, and approve designs in real-time for faster production cycles.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Creative Performance Analytics",
        description:
          "Monitor how your visuals perform across channels and make data-driven improvements to future campaigns.",
      },
    ],
   
    ctaText: "Get Creative Software Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - Creative Design & Animation Services",
    items: [
      {
        id: "1",
        question: "What types of animation services do you provide?",
        answer:
          "We offer 2D and 3D animation, motion graphics, explainer videos, logo animations, and interactive UI animations for businesses and media projects.",
      },
      {
        id: "2",
        question: "Can you design brand visuals from scratch?",
        answer:
          "Yes, we specialize in full brand identity creation — from logo and typography to color palettes and visual guidelines.",
      },
      {
        id: "3",
        question: "Do you provide custom illustrations for businesses?",
        answer:
          "Absolutely. Our design team creates unique illustrations tailored to your brand’s tone, products, and storytelling needs.",
      },
      {
        id: "4",
        question: "What tools do you use for animation and design?",
        answer:
          "We use industry-leading tools like Adobe After Effects, Illustrator, Photoshop, Blender, Maya, and Figma for high-quality results.",
      },
      {
        id: "5",
        question: "Can animation help improve website engagement?",
        answer:
          "Yes. Motion graphics and micro-animations enhance user experience, capture attention, and improve interaction on websites and apps.",
      },
      {
        id: "6",
        question: "Do you create AI-generated or AI-enhanced designs?",
        answer:
          "Yes, we integrate AI-driven creative tools to accelerate workflows and enhance visual design precision, creativity, and speed.",
      },
    ],
  },
};
