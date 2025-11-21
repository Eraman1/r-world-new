import { SolutionConfig } from "@/types/solutions";

export const arvr: SolutionConfig = {
  slug: "arvr",

  banner: {
    title: "Transform Experiences with",
    highlight: "Augmented & Virtual Reality Solutions",
    subtitle:
      "Reimagine interaction through immersive AR and VR technologies. Empower your business with engaging, interactive, and future-ready experiences across industries.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore AR/VR Innovations",
  },

  developerDetails: {
    heading: "AR/VR Experts in Immersive Experience Development",
    subheading:
      "We create cutting-edge AR and VR applications that blend creativity, technology, and real-world usability to deliver captivating digital experiences.",
    mainTitle: "Next-Gen Augmented & Virtual Reality Solutions",
    mainDescription:
      "Our AR/VR developers specialize in crafting immersive simulations, product visualizations, and training experiences using Unity, Unreal Engine, and WebXR. We bring ideas to life with interactive design and spatial computing.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    services: [
      {
        id: 1,
        title: "AR App Development",
        description:
          "Build augmented reality apps for mobile and wearable devices that enhance real-world experiences with interactive 3D visuals.",
        icon: "/icons/ar.svg",
      },
      {
        id: 2,
        title: "VR Simulation & Training",
        description:
          "Develop high-fidelity VR simulations for education, healthcare, construction, and enterprise training programs.",
        icon: "/icons/vr.svg",
      },
      {
        id: 3,
        title: "3D Content & Environment Design",
        description:
          "Design detailed 3D assets and virtual environments for immersive storytelling, gaming, and product demonstrations.",
        icon: "/icons/3d.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "Immersive AR/VR Applications & Development",
    mainDescription:
      "We deliver AR and VR solutions that help brands engage customers, train employees, and simulate real-world scenarios with precision and impact.",
    items: [
      {
        id: "ar-commerce",
        icon: "Leaf",
        title: "AR-Powered Retail Experiences",
        subtitle: "Interactive Shopping Solutions",
        description:
          "Transform shopping journeys with interactive AR tools that let users virtually try products in real-time. Enable customers to visualize items before purchase for increased confidence. Drive conversions through immersive, personalized retail experiences.",
      },
      {
        id: "vr-training",
        icon: "Leaf",
        title: "VR Training & Simulation",
        subtitle: "Realistic Learning Environments",
        description:
          "Empower employees with lifelike VR-based training modules that simulate real-world tasks and environments. Reduce operational risks and enhance engagement with hands-on learning. Improve knowledge retention through immersive, scenario-driven simulations.",
      },
      {
        id: "3d-visualization",
        icon: "Leaf",
        title: "3D Visualization Solutions",
        subtitle: "Architectural & Industrial Design",
        description:
          "Visualize designs with precision using AR/VR-powered 3D modeling tools. Present architectural concepts, engineering prototypes, and industrial layouts in realistic digital spaces. Reduce production errors and speed up project approvals through immersive previews.",
      },
      {
        id: "metaverse",
        icon: "Leaf",
        title: "Metaverse Development",
        subtitle: "Social & Collaborative Spaces",
        description:
          "Build engaging metaverse platforms where users can meet, collaborate, and interact in shared virtual environments. Enable real-time communication, digital commerce, and event hosting. Create branded metaverse ecosystems that redefine digital engagement.",
      },
      {
        id: "mixed-reality",
        icon: "Leaf",
        title: "Mixed Reality Integration",
        subtitle: "Blending Physical & Digital Worlds",
        description:
          "Combine AR and VR technologies to create hybrid experiences that fuse real-world elements with digital layers. Utilize devices like HoloLens and Magic Leap for interactive visualization. Deliver immersive enterprise and consumer experiences with next-gen MR solutions.",
      },
      {
        id: "interactive-marketing",
        icon: "Leaf",
        title: "Immersive Marketing Campaigns",
        subtitle: "Next-Level Brand Engagement",
        description:
          "Reimagine marketing with interactive AR filters, 360° product tours, and VR events. Capture audience attention through immersive storytelling that drives emotional connection. Boost brand loyalty with dynamic, tech-powered digital experiences.",
      },
    ],
    linkText: "Get AR/VR Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "AR/VR Experience Management Platforms",
    subtitle:
      "Empowering businesses to manage, monitor, and scale immersive experiences with intelligent visualization tools.",
    subtitleLink: { text: "Explore AR/VR Management", url: "#" },
    laptopImage:
      "https://i.pinimg.com/1200x/b3/be/3a/b3be3a3d7253c5e0d796574cae5a3391.jpg",
    mobileImage:
      "https://i.pinimg.com/1200x/da/9b/8b/da9b8bdf623094bbee3c6366de289faf.jpg",
    topFeatures: [
      {
        id: "analytics",
        icon: "map",
        title: "Immersive Analytics",
        description:
          "Track user engagement and interaction patterns in AR/VR environments to refine experience design and ROI measurement.",
      },
      {
        id: "real-time",
        icon: "map",
        title: "Real-Time Collaboration",
        description:
          "Enable remote collaboration within shared virtual spaces, ideal for design reviews, virtual offices, and digital classrooms.",
      },
      {
        id: "optimization",
        icon: "map",
        title: "Performance Optimization",
        description:
          "Optimize rendering, tracking, and motion performance for smooth, high-quality immersive experiences across devices.",
      },
    ],
    bottomFeatures: [
      {
        id: "integration",
        icon: "map",
        title: "Hardware Integration",
        description:
          "Ensure flawless performance with full compatibility across leading AR/VR devices such as Oculus, HTC Vive, and HoloLens. Integrate seamlessly with existing systems for smooth user interactions. Deliver consistent immersive experiences across multiple hardware platforms.",
      },
      {
        id: "security",
        icon: "map",
        title: "Data Privacy & Security",
        description:
          "Protect sensitive user information through end-to-end encryption and secure authentication protocols. Adhere to global data privacy standards to maintain user trust. Enable safe, compliant AR/VR environments with robust security frameworks.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Deployment",
        description:
          "Leverage cloud-based infrastructure for effortless app deployment and management. Scale resources dynamically to handle large user bases and high traffic. Monitor performance and ensure reliable global accessibility for every AR/VR experience.",
      },
      {
        id: "customization",
        icon: "map",
        title: "Custom Experience Design",
        description:
          "Craft immersive AR/VR environments that reflect your brand’s unique identity. Personalize every visual and interaction to maximize user engagement. Deliver experiences that captivate audiences and leave a lasting impression.",
      },
    ],
    ctaText: "Consult AR/VR Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What industries can benefit from AR and VR?",
        answer:
          "AR and VR technologies serve multiple industries including healthcare, real estate, retail, education, and manufacturing by improving engagement, training, and visualization.",
      },
      {
        id: "2",
        question: "Do you develop cross-platform AR/VR applications?",
        answer:
          "Yes, we build AR/VR solutions compatible with iOS, Android, web, and leading VR headsets like Oculus, HTC Vive, and HoloLens.",
      },
      {
        id: "3",
        question: "Can AR/VR be integrated with existing business systems?",
        answer:
          "Absolutely. We integrate AR/VR experiences with existing CRM, ERP, or e-commerce platforms for seamless business operations.",
      },
      {
        id: "4",
        question: "How long does it take to develop an AR/VR project?",
        answer:
          "The timeline depends on project complexity. Simple AR apps take weeks, while large-scale VR environments may take a few months.",
      },
      {
        id: "5",
        question: "Do you provide maintenance and support for AR/VR apps?",
        answer:
          "Yes, we offer post-launch maintenance, feature updates, and performance optimization for all AR/VR applications.",
      },
      {
        id: "6",
        question:
          "What tools and technologies do you use for AR/VR development?",
        answer:
          "We use Unity, Unreal Engine, WebXR, ARCore, ARKit, and 3D design tools like Blender and Maya to build immersive experiences.",
      },
    ],
  },
};
