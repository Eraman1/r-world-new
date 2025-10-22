import { SolutionConfig } from "@/types/solutions";

export const autodesk: SolutionConfig = {
  slug: "autodesk",

  banner: {
    title: "Transform Ideas with",
    highlight: "Autodesk Design & Animation Solutions",
    subtitle:
      "Empower your creative process with Autodesk’s industry-leading software suite for 3D design, animation, architecture, and visualization.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore Autodesk Solutions",
  },

  developerDetails: {
    heading: "Autodesk Experts in Design, Animation & Visualization",
    subheading:
      "We provide end-to-end Autodesk services including modeling, rendering, and animation to streamline your creative and engineering workflows.",
    mainTitle: "Comprehensive Autodesk Software Services",
    mainDescription:
      "Our team helps you maximize the potential of Autodesk tools like AutoCAD, Revit, Maya, Fusion 360, and 3ds Max to create stunning visualizations, animations, and precise 3D models for architecture, engineering, and entertainment.",
    image: "/images/autodesk-laptop.png",
    services: [
      {
        id: 1,
        title: "3D Modeling & Rendering",
        description:
          "We create detailed, photorealistic 3D models and renders using Autodesk tools to bring your projects to life before production.",
        icon: "/icons/3d-cube.svg",
      },
      {
        id: 2,
        title: "Architectural Visualization",
        description:
          "Our team designs immersive architectural visualizations using Revit and 3ds Max for enhanced project presentations.",
        icon: "/icons/building.svg",
      },
      {
        id: 3,
        title: "Animation & Simulation",
        description:
          "We produce dynamic simulations and animations that communicate design intent effectively across industries.",
        icon: "/icons/play.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Autodesk-Based Design & Innovation Solutions",
    mainDescription:
      "Leverage Autodesk’s ecosystem to power your design, architecture, and animation projects. From BIM modeling to 3D rendering and simulation, we deliver creative and technical excellence.",
    items: [
      {
        id: "bim-modeling",
        icon: "Leaf",
        title: "BIM Modeling & Documentation",
        subtitle: "Precision-Driven Construction Design",
        description:
          "We create Building Information Models using Autodesk Revit, enabling accurate planning, coordination, and documentation for construction teams.",
      },
      {
        id: "mechanical-design",
        icon: "Leaf",
        title: "Mechanical Design Automation",
        subtitle: "Streamline Engineering Workflows",
        description:
          "Using Autodesk Fusion 360 and Inventor, we design mechanical parts, assemblies, and simulations for manufacturing and product design.",
      },
      {
        id: "animation-vfx",
        icon: "Leaf",
        title: "Animation & VFX",
        subtitle: "Engaging Visual Storytelling",
        description:
          "We develop high-quality 3D animations and visual effects using Maya and 3ds Max for media, gaming, and advertising industries.",
      },
      {
        id: "architectural-rendering",
        icon: "Leaf",
        title: "Architectural Rendering",
        subtitle: "Photorealistic Project Visualization",
        description:
          "Our Autodesk 3ds Max and Revit workflows deliver stunning renders for real estate and infrastructure projects.",
      },
      {
        id: "industrial-design",
        icon: "Leaf",
        title: "Industrial & Product Design",
        subtitle: "From Concept to Prototype",
        description:
          "We use Autodesk Fusion 360 for conceptual design, 3D modeling, and simulation of innovative industrial products.",
      },
      {
        id: "ai-integration",
        icon: "Leaf",
        title: "AI-Integrated Design Systems",
        subtitle: "Smart Automation & Optimization",
        description:
          "Integrate AI with Autodesk tools for predictive modeling, generative design, and workflow optimization.",
      },
    ],
    linkText: "Get Autodesk Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Autodesk Project Management Platforms",
    subtitle:
      "Enhance project collaboration and asset tracking through Autodesk’s integrated management systems.",
    subtitleLink: { text: "Autodesk project management", url: "#" },
    laptopImage: "/images/management-autodesk.jpg",
    mobileImage: "/images/management-autodesk-mobile.jpg",
    topFeatures: [
      {
        id: "collaboration",
        icon: "map",
        title: "Team Collaboration & Review",
        description:
          "Collaborate seamlessly with cloud-based Autodesk tools to share models, drawings, and visual assets in real-time.",
      },
      {
        id: "data-management",
        icon: "map",
        title: "Centralized Data Management",
        description:
          "Store and manage all Autodesk project data in one secure location with version control and permissions management.",
      },
      {
        id: "integration",
        icon: "map",
        title: "Multi-Software Integration",
        description:
          "Integrate Autodesk with project tools like BIM 360, Navisworks, and AutoCAD for an end-to-end workflow.",
      },
    ],
    bottomFeatures: [
      {
        id: "cloud-workflows",
        icon: "map",
        title: "Cloud-Based Workflows",
        description:
          "Access and update project files from any device with Autodesk Docs and BIM Collaborate Pro.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Design Analytics & Insights",
        description:
          "Monitor design efficiency and identify optimization opportunities using Autodesk Construction Cloud analytics.",
      },
      {
        id: "security",
        icon: "map",
        title: "Enterprise-Grade Security",
        description:
          "Ensure all project data and visual assets are encrypted and backed up with Autodesk’s secure cloud solutions.",
      },
      {
        id: "api-support",
        icon: "map",
        title: "API & Automation Support",
        description:
          "Customize Autodesk workflows with API integrations and automated data processing tools.",
      },
    ],
    ctaText: "Talk to Autodesk Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What Autodesk tools do you specialize in?",
        answer:
          "We specialize in AutoCAD, Revit, Maya, Fusion 360, 3ds Max, and Inventor — offering comprehensive design, modeling, and animation services.",
      },
      {
        id: "2",
        question: "Can you integrate Autodesk tools with existing workflows?",
        answer:
          "Yes, we integrate Autodesk solutions with your current systems to streamline collaboration and automate repetitive design processes.",
      },
      {
        id: "3",
        question: "Do you offer 3D visualization for architecture projects?",
        answer:
          "Absolutely. Our Autodesk experts deliver photorealistic renders and walkthroughs using Revit, 3ds Max, and V-Ray for client presentations.",
      },
      {
        id: "4",
        question: "Can Autodesk tools be used for mechanical design?",
        answer:
          "Yes. Autodesk Fusion 360 and Inventor are ideal for product modeling, simulation, and manufacturing design automation.",
      },
      {
        id: "5",
        question: "Do you provide Autodesk training or consultation?",
        answer:
          "We offer Autodesk software training, workflow optimization consulting, and support for project-specific implementations.",
      },
      {
        id: "6",
        question: "Is cloud collaboration available for Autodesk projects?",
        answer:
          "Yes, Autodesk Docs and BIM Collaborate Pro allow teams to work together on shared models and drawings in real-time from anywhere.",
      },
    ],
  },
};
