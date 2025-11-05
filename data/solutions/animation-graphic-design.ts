import { SolutionConfig } from "@/types/solutions";

export const animationGraphicDesign: SolutionConfig = {
  slug: "animation-graphic-design",
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
    "We create visually stunning digital experiences that blend art, animation, and technology. Our solutions elevate brand storytelling through engaging motion, immersive 3D visuals, and powerful design. From concept to creation, we help brands inspire and connect with their audiences on every platform.",

  items: [
    {
      id: "visual-branding",
      icon: "Leaf",
      title: "Visual Branding",
      subtitle: "Consistency Across Platforms",
      description:
        "We craft cohesive brand visuals that reflect your identity across every digital and print channel. From color palettes to typography, we ensure consistency that strengthens recognition. Our designs build trust and make your brand instantly memorable.",
    },
    {
      id: "3d-modeling",
      icon: "Leaf",
      title: "3D Modeling & Animation",
      subtitle: "Realistic Product Visuals",
      description:
        "Our team creates lifelike 3D models and animations that showcase your products or concepts in stunning detail. We blend creativity and precision to produce visuals that inspire engagement. Perfect for films, commercials, and digital product demos.",
    },
    {
      id: "ui-motion",
      icon: "Leaf",
      title: "UI Motion Design",
      subtitle: "Enhance User Experience",
      description:
        "We bring digital interfaces to life with smooth motion and intuitive transitions. Subtle animations guide users seamlessly through your product experience. Our motion design enhances usability, engagement, and overall aesthetic appeal.",
    },
    {
      id: "illustration",
      icon: "Leaf",
      title: "Custom Illustration Design",
      subtitle: "Unique Art for Every Brand",
      description:
        "We design bespoke illustrations that capture your brand’s voice and emotion. Each artwork is tailored to your message, ensuring it stands out across campaigns. Our illustrations add creativity, warmth, and storytelling depth to your visuals.",
    },
    {
      id: "video-production",
      icon: "Leaf",
      title: "Video Production & Editing",
      subtitle: "Professional Multimedia Creations",
      description:
        "We produce high-quality videos that combine cinematic visuals with engaging storytelling. From concept scripting to final editing, every detail is handled with care. Our productions elevate your brand through emotion, clarity, and style.",
    },
    {
      id: "ai-enhancement",
      icon: "Leaf",
      title: "AI-Assisted Design",
      subtitle: "Next-Gen Creative Workflow",
      description:
        "We integrate AI-powered tools to accelerate design workflows and enhance creativity. From generative art to automated animation tuning, we blend tech with imagination. The result is faster production and higher design precision.",
    },
  ],

  linkText: "Get Custom Design Solutions",
  linkUrl: "/contact-us",
},


  managementSolutions: {
    title: "Creative Asset Management Systems",
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
    bottomFeatures: [
  {
    id: "workflow",
    icon: "map",
    title: "Automated Workflow Integration",
    description:
      "Optimize your creative process by integrating tools like Adobe Suite, Figma, and project management systems. Automate repetitive design tasks to save time and reduce human error. Achieve seamless collaboration across teams with synchronized updates and version control.",
  },
  {
    id: "delivery",
    icon: "map",
    title: "Multi-Format Delivery",
    description:
      "Deliver projects efficiently across web, mobile, and broadcast platforms in multiple optimized formats. Ensure consistent visual quality and resolution on every device. Simplify file conversions and speed up final content deployment for faster go-to-market results.",
  },
  {
    id: "security",
    icon: "map",
    title: "Data Security & Backup",
    description:
      "Keep your creative data safe with advanced encryption and real-time backup systems. Implement multi-layer access control to prevent unauthorized use. Protect sensitive design files through secure storage and disaster recovery mechanisms.",
  },
  {
    id: "integration",
    icon: "map",
    title: "API Integration Support",
    description:
      "Seamlessly connect your creative tools with content management and marketing platforms. Enable automated publishing, asset sharing, and analytics syncing. Maximize productivity through streamlined integration of third-party APIs and digital ecosystems.",
  },
],

    ctaText: "Get Creative Software Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
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
