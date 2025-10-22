import { SolutionConfig } from "@/types/solutions";

export const artificialintelligence: SolutionConfig = {
  slug: "artificial-intelligence",

  banner: {
    title: "Power Business Growth with",
    highlight: "Artificial Intelligence Solutions",
    subtitle:
      "Unlock innovation and automation with AI-powered technologies that drive smarter decisions, streamline operations, and enhance customer engagement.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Explore AI Solutions",
  },

  developerDetails: {
    heading: "Expert Developers in AI & Machine Learning",
    subheading:
      "We specialize in building intelligent systems that analyze data, predict outcomes, and automate workflows for enterprises worldwide.",
    mainTitle: "Custom Artificial Intelligence Development Services",
    mainDescription:
      "Our AI experts create scalable machine learning models, natural language processing systems, computer vision applications, and predictive analytics platforms that help businesses innovate and compete in the digital age.",
    image: "/images/ai-developer-laptop.png",
    services: [
      {
        id: 1,
        title: "Machine Learning Models",
        description:
          "Develop supervised and unsupervised ML models that learn from your data to optimize decision-making and forecasting.",
        icon: "/icons/cpu.svg",
      },
      {
        id: 2,
        title: "Natural Language Processing (NLP)",
        description:
          "Create intelligent chatbots, voice assistants, and text analytics systems that understand and process human language effectively.",
        icon: "/icons/message-circle.svg",
      },
      {
        id: 3,
        title: "Computer Vision Solutions",
        description:
          "Enable automated image and video analysis for object detection, quality inspection, and facial recognition.",
        icon: "/icons/eye.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "AI-Powered Business Transformation Solutions",
    mainDescription:
      "Our Artificial Intelligence services empower organizations to automate, innovate, and make data-driven decisions through intelligent software and deep learning systems.",
    items: [
      {
        id: "predictive-analytics",
        icon: "Leaf",
        title: "Predictive Analytics",
        subtitle: "Data-Driven Forecasting",
        description:
          "Predict future outcomes by analyzing patterns and trends using advanced machine learning and statistical models.",
      },
      {
        id: "ai-chatbots",
        icon: "Leaf",
        title: "AI Chatbots & Virtual Assistants",
        subtitle: "Enhance Customer Support",
        description:
          "Deliver 24/7 customer engagement through conversational AI that understands intent and responds intelligently.",
      },
      {
        id: "computer-vision",
        icon: "Leaf",
        title: "Computer Vision Systems",
        subtitle: "Visual Data Intelligence",
        description:
          "Automate image processing, object recognition, and quality control using deep learning algorithms.",
      },
      {
        id: "nlp-insights",
        icon: "Leaf",
        title: "Natural Language Processing",
        subtitle: "Human-Like Understanding",
        description:
          "Extract valuable insights from unstructured data, documents, and text with NLP and semantic analysis.",
      },
      {
        id: "ai-integration",
        icon: "Leaf",
        title: "AI Integration & Automation",
        subtitle: "Smarter Enterprise Workflows",
        description:
          "Integrate AI models into ERP, CRM, and analytics systems to enable intelligent automation and faster operations.",
      },
      {
        id: "generative-ai",
        icon: "Leaf",
        title: "Generative AI Applications",
        subtitle: "Creative Content & Design Automation",
        description:
          "Build AI-powered systems that generate text, images, and media content using models like GPT, DALL·E, and Stable Diffusion.",
      },
    ],
    linkText: "Get AI Solutions",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "AI Model Management & Deployment Systems",
    subtitle:
      "Streamline your AI lifecycle — from training to deployment — with our robust model management, monitoring, and automation tools.",
    subtitleLink: { text: "AI model management", url: "#" },
    laptopImage: "/images/ai-management-laptop.jpg",
    mobileImage: "/images/ai-management-mobile.jpg",
    topFeatures: [
      {
        id: "deployment",
        icon: "map",
        title: "Model Deployment Automation",
        description:
          "Easily deploy AI and ML models into production using CI/CD pipelines for faster go-live and continuous improvement.",
      },
      {
        id: "monitoring",
        icon: "map",
        title: "Performance Monitoring",
        description:
          "Track real-time model performance, accuracy, and drift to ensure consistent and reliable predictions.",
      },
      {
        id: "data-pipelines",
        icon: "map",
        title: "Data Pipeline Orchestration",
        description:
          "Automate data ingestion, preprocessing, and transformation with scalable AI-ready data infrastructure.",
      },
    ],
    bottomFeatures: [
      {
        id: "security",
        icon: "map",
        title: "Data Security & Governance",
        description:
          "Protect sensitive information with encryption, access control, and compliance-ready AI solutions.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Infrastructure",
        description:
          "Deploy AI systems on cloud or edge infrastructure optimized for performance and cost efficiency.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API & Workflow Integration",
        description:
          "Integrate AI models seamlessly with existing business systems and APIs for end-to-end automation.",
      },
      {
        id: "insight",
        icon: "map",
        title: "AI Insights & Visualization",
        description:
          "Visualize key trends and performance metrics through intuitive dashboards powered by AI analytics.",
      },
    ],
    ctaText: "Consult AI Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What industries can benefit from AI solutions?",
        answer:
          "AI benefits industries like finance, healthcare, retail, logistics, manufacturing, and marketing through automation, prediction, and personalization.",
      },
      {
        id: "2",
        question: "Can you develop custom AI models for my business?",
        answer:
          "Yes, we build tailored machine learning and AI models based on your specific data, goals, and use cases.",
      },
      {
        id: "3",
        question: "Do you provide AI model training and optimization?",
        answer:
          "Absolutely. We train and fine-tune AI models for higher accuracy, reduced bias, and improved decision-making performance.",
      },
      {
        id: "4",
        question: "Can AI integrate with my existing software?",
        answer:
          "Yes. Our AI engineers integrate intelligent systems with your CRM, ERP, or analytics platforms for seamless automation.",
      },
      {
        id: "5",
        question: "What technologies do you use for AI development?",
        answer:
          "We use TensorFlow, PyTorch, OpenAI, Scikit-learn, Hugging Face, and cloud services like AWS, Azure, and Google Cloud AI.",
      },
      {
        id: "6",
        question: "Do you offer AI consulting and maintenance?",
        answer:
          "Yes, we provide ongoing AI consulting, model updates, and monitoring to ensure your systems evolve with new data and goals.",
      },
    ],
  },
};
