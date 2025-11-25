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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Leverage historical data to forecast market trends and customer behavior with precision. Our predictive models enable proactive decision-making across sales, finance, and operations. Stay ahead of risks and opportunities through data-backed intelligence.",
      },
      {
        id: "ai-chatbots",
        icon: "Leaf",
        title: "AI Chatbots & Virtual Assistants",
        subtitle: "Enhance Customer Support",
        description:
          "Deliver real-time, personalized support through AI-powered chatbots and voice assistants. Automate customer interactions while maintaining a human-like experience. Reduce response times, enhance satisfaction, and improve operational efficiency.",
      },
      {
        id: "computer-vision",
        icon: "Leaf",
        title: "Computer Vision Systems",
        subtitle: "Visual Data Intelligence",
        description:
          "Empower machines to interpret and analyze visual information from images and videos. From quality inspection to facial recognition, our computer vision systems enhance precision and safety. Transform raw visual data into actionable business insights.",
      },
      {
        id: "nlp-insights",
        icon: "Leaf",
        title: "Natural Language Processing",
        subtitle: "Human-Like Understanding",
        description:
          "Enable your systems to read, understand, and interpret human language effortlessly. Extract insights from emails, documents, and social media using NLP-driven algorithms. Improve communication workflows with intelligent text analysis and sentiment detection.",
      },
      {
        id: "ai-integration",
        icon: "Leaf",
        title: "AI Integration & Automation",
        subtitle: "Smarter Enterprise Workflows",
        description:
          "Integrate powerful AI modules into your ERP, CRM, and analytics platforms. Automate repetitive workflows to enhance productivity and operational speed. Achieve intelligent business transformation through seamless system-wide AI adoption.",
      },
      {
        id: "generative-ai",
        icon: "Leaf",
        title: "Generative AI Applications",
        subtitle: "Creative Content & Design Automation",
        description:
          "Harness generative AI to produce engaging text, imagery, and multimedia content. Accelerate creative workflows with models like GPT, DALL·E, and Stable Diffusion. Empower your brand with innovation-driven, automated content creation tools.",
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
    laptopImage:
      "https://i.pinimg.com/1200x/9b/5a/01/9b5a010b39d09b6d319402cb0ef979be.jpg",
    mobileImage:
      "https://i.pinimg.com/736x/8f/52/7a/8f527af350da2c7b3c0fe18d307bc951.jpg",
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
          "Safeguard sensitive data with enterprise-grade encryption, multi-level access control, and continuous monitoring. Ensure compliance with global data protection standards like GDPR and ISO. Maintain full transparency and auditability across every stage of your AI operations.",
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Infrastructure",
        description:
          "Easily scale AI workloads across cloud, hybrid, or edge environments for optimal flexibility. Leverage containerized deployments and resource optimization for peak performance. Adapt infrastructure dynamically as business demands and data volumes grow.",
      },
      {
        id: "integration",
        icon: "map",
        title: "API & Workflow Integration",
        description:
          "Seamlessly integrate AI capabilities with your existing tools, CRMs, and business applications. Automate repetitive workflows and enable real-time data exchange between systems. Enhance overall efficiency through smooth interoperability and smart automation pipelines.",
      },
      {
        id: "insight",
        icon: "map",
        title: "AI Insights & Visualization",
        description:
          "Transform complex data into actionable insights with intelligent analytics dashboards. Monitor performance, detect patterns, and predict outcomes using interactive visualizations. Empower decision-making through clear, data-driven intelligence powered by AI.",
      },
    ],
    ctaText: "Consult AI Experts",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
