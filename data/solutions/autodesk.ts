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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "We develop detailed Building Information Models using Autodesk Revit to streamline design accuracy and collaboration. Our BIM workflows ensure smooth project coordination and real-time updates. This results in efficient construction planning, reduced errors, and cost-effective delivery.",
      },
      {
        id: "mechanical-design",
        icon: "Leaf",
        title: "Mechanical Design Automation",
        subtitle: "Streamline Engineering Workflows",
        description:
          "Harnessing Autodesk Fusion 360 and Inventor, we automate complex mechanical design tasks with precision. Our models simulate real-world performance to validate functionality early in the process. This boosts innovation while reducing development time and manufacturing costs.",
      },
      {
        id: "animation-vfx",
        icon: "Leaf",
        title: "Animation & VFX",
        subtitle: "Engaging Visual Storytelling",
        description:
          "We craft cinematic-quality 3D animations and visual effects using Autodesk Maya and 3ds Max. Our creative team transforms ideas into immersive visuals for films, games, and advertisements. Each project blends technical skill and storytelling for impactful viewer experiences.",
      },
      {
        id: "architectural-rendering",
        icon: "Leaf",
        title: "Architectural Rendering",
        subtitle: "Photorealistic Project Visualization",
        description:
          "Using Autodesk 3ds Max and Revit, we create lifelike architectural renderings that bring designs to reality. Our visualizations help architects, builders, and clients envision projects before construction. This clarity enhances presentations, approvals, and marketing impact.",
      },
      {
        id: "industrial-design",
        icon: "Leaf",
        title: "Industrial & Product Design",
        subtitle: "From Concept to Prototype",
        description:
          "Our experts use Autodesk Fusion 360 to conceptualize, model, and simulate innovative industrial products. We translate creative ideas into functional prototypes with precision and scalability. This integrated approach shortens product development cycles while maintaining design integrity.",
      },
      {
        id: "ai-integration",
        icon: "Leaf",
        title: "AI-Integrated Design Systems",
        subtitle: "Smart Automation & Optimization",
        description:
          "We integrate artificial intelligence with Autodesk tools to enable predictive modeling and generative design. Our smart workflows enhance decision-making and optimize material usage and performance. This synergy between AI and CAD accelerates innovation and project outcomes.",
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
    laptopImage:
      "https://i.pinimg.com/1200x/73/83/6f/73836f450e8efdbb5f18ea83da73e359.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/a4/c5/97/a4c597415758c3e420ac4a0310af8c2e.jpg",
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
          "Access and manage project files securely from any device using Autodesk Docs and BIM Collaborate Pro. Enable real-time collaboration between design, engineering, and construction teams. Simplify project coordination with centralized data sharing and version control.",
      },
      {
        id: "analytics",
        icon: "map",
        title: "Design Analytics & Insights",
        description:
          "Gain valuable insights into project performance with Autodesk Construction Cloud analytics. Track design efficiency, detect bottlenecks, and make data-driven decisions. Optimize workflows to enhance productivity and reduce project costs over time.",
      },
      {
        id: "security",
        icon: "map",
        title: "Enterprise-Grade Security",
        description:
          "Protect all project data and visual assets with Autodesk’s advanced encryption protocols. Utilize secure cloud backups to safeguard against data loss and cyber threats. Maintain compliance with global industry standards for digital infrastructure security.",
      },
      {
        id: "api-support",
        icon: "map",
        title: "API & Automation Support",
        description:
          "Extend Autodesk capabilities through powerful API integrations and automation tools. Connect external platforms to streamline repetitive design tasks and data flows. Build custom solutions that enhance productivity and accelerate project delivery.",
      },
    ],
    ctaText: "Talk to Autodesk Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
