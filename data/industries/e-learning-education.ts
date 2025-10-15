import { IndustryConfig } from "@/types/industries";
 
export const eLearningEducation: IndustryConfig = {
  slug: "e-learning-education",
  banner: {
    title: "Transform Learning Experiences with",
    highlight: "Smart E-Learning & Education Software Solutions",
    subtitle:
      "Empower students, educators, and institutions with next-gen EdTech platforms. From virtual classrooms to AI-powered assessments, revolutionize education through seamless digital transformation.",
    image:
        "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get E-Learning Solutions",
  },
 
  techHero: {
    heading: "Hire Expert E-Learning Software Developers",
    description:
      "We design scalable and intelligent digital learning solutions that transform how education is delivered. Our developers create interactive, engaging, and analytics-driven EdTech platforms tailored to institutions, corporates, and learners worldwide.",
    services: [
      {
        id: "virtualclassroom",
        title: "Virtual Classroom Platforms",
        icon: "Tractor", //video
        position: "left",
      },
      {
        id: "assessment",
        title: "AI-Based Assessment Tools",
        icon: "Tractor", //brain
        position: "left",
      },
      {
        id: "lms",
        title: "Learning Management Systems (LMS)",
        icon: "Tractor", //bookpen
        position: "left",
      },
      {
        id: "gamification",
        title: "Gamified Learning Experiences",
        icon: "Tractor", //gamepad
        position: "left",
      },
      {
        id: "mobilelearning",
        title: "Mobile & Microlearning Apps",
        icon: "Tractor", //smartphone
        position: "right",
      },
      {
        id: "analytics",
        title: "Learning Analytics Dashboards",
        icon: "Tractor",  //barchart
        position: "right",
      },
      {
        id: "contentcreation",
        title: "AI-Powered Content Creation Tools",
        icon: "Tractor",  //pentool
        position: "right",
      },
      {
        id: "certification",
        title: "Online Testing & Certification Systems",
        icon: "Tractor", //filecheck
        position: "right",
      },
    ],
  },
 
  solutions: {
    mainTitle: "AI & Cloud-Powered E-Learning Solutions",
    mainDescription:
      "Reimagine digital education with AI, machine learning, and immersive technologies. Our EdTech solutions enable institutions to personalize learning, automate evaluation, and enhance engagement. Empower students and educators with smart analytics, adaptive learning paths, and virtual collaboration tools for future-ready education.",
 
    items: [
      {
        id: "personalized-learning",
        icon: "Tractor", //user
        title: "Personalized Learning Platforms",
        subtitle: "",
        description:
          "Deliver adaptive learning experiences powered by AI that adjust content and difficulty based on each student’s progress, goals, and performance.",
      },
      {
        id: "smart-assessment",
        icon: "Tractor", //clipboardcheck
        title: "Intelligent Assessment Systems",
        subtitle: "",
        description:
          "Automate test creation, grading, and analytics with AI-driven tools that evaluate knowledge, track learning curves, and provide instant feedback.",
      },
      {
        id: "immersive-learning",
        icon: "Tractor",  //cube
        title: "AR/VR Immersive Learning Experiences",
        subtitle: "",
        description:
          "Enhance engagement with augmented and virtual reality modules that bring complex concepts to life through immersive simulations and 3D learning.",
      },
      {
        id: "lms-platform",
        icon: "Tractor",  //laptop
        title: "Next-Gen LMS Platforms",
        subtitle: "",
        description:
          "Build scalable cloud-based learning management systems that centralize course delivery, tracking, certification, and collaboration tools.",
      },
      {
        id: "data-analytics",
        icon: "Tractor",  //Barchart
        title: "Learning Analytics & Insights",
        subtitle: "",
        description:
          "Gain powerful insights into learner engagement and performance through dashboards and predictive analytics that enhance institutional decisions.",
      },
      {
        id: "corporate-training",
        icon: "Tractor", //briefcase
        title: "Corporate Training Solutions",
        subtitle: "",
        description:
          "Deliver tailored employee training platforms that promote skill development, performance tracking, and compliance learning in enterprises.",
      },
    ],
    linkText: "Get AI-Powered E-Learning Solutions",
    linkUrl: "/contact-us",
  },
 
  managementSolutions: {
    title: "E-Learning Management Software Solutions",
    subtitle:
      "Our experts build smart, flexible, and analytics-driven education systems that empower institutions, educators, and learners to achieve excellence in the digital learning ecosystem.",
    subtitleLink: { text: "learning management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "content",
        icon: "Tractor", //layers
        title: "Content Management & Distribution",
        description:
          "Easily create, organize, and distribute multimedia content with integrated tools that enhance collaboration and content reuse.",
        link: { text: "digital learning tools", url: "#" },
      },
      {
        id: "automation",
        icon: "Tractor", //settings
        title: "Automated Enrollment & Tracking",
        description:
          "Simplify enrollment, attendance, and course tracking through automated workflows that save administrative time and boost productivity.",
      },
      {
        id: "integration",
        icon: "Tractor", //plug
        title: "Third-Party Integration Support",
        description:
          "Seamlessly integrate your LMS with HR systems, payment gateways, CRM tools, and cloud storage for a connected learning experience.",
      },
    ],
    bottomFeatures: [
      {
        id: "engagement",
        icon: "Tractor", //users
        title: "Interactive & Collaborative Learning",
        description:
          "Enhance learner engagement with discussion forums, polls, group projects, and peer collaboration features.",
      },
      {
        id: "certification",
        icon: "Tractor", //awards
        title: "Digital Certification & Credentials",
        description:
          "Automate certificate generation, issue digital badges, and maintain verifiable credentials for learners worldwide.",
      },
      {
        id: "ai",
        icon: "Tractor", //cpu
        title: "AI Tutoring & Chat Support",
        description:
          "Provide 24/7 AI-driven tutoring assistance and chat support that helps students clarify doubts instantly and stay motivated.",
      },
      {
        id: "reporting",
        icon: "Tractor", //piechart
        title: "Performance Tracking & Reporting",
        description:
          "Analyze learner engagement, course completion, and instructor performance through advanced reporting and analytics tools.",
      },
    ],
    ctaText: "BUILD YOUR E-LEARNING PLATFORM",
    onCtaClick: () => {},
  },
};