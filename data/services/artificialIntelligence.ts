import { ServiceConfig } from "./services";

export const artificialIntelligence: ServiceConfig = {
  slug: "artificial-intelligence",
  banner: {
    title: "Transform Your Business with",
    highlight: "Artificial Intelligence & Machine Learning",
    subtitle:
      "Leverage the power of AI to automate workflows, enhance decision-making, and unlock data-driven insights. We build intelligent solutions that adapt, learn, and scale with your business.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get AI Solutions",
  },

  developerDetails: {
    heading: "AI & Machine Learning Experts",
    subheading:
      "Our AI engineers specialize in building intelligent models, predictive systems, and automation tools that empower smarter business operations.",
    mainTitle: "Advanced Artificial Intelligence Development Services",
    mainDescription:
      "We create AI-driven solutions to help organizations optimize operations, enhance customer experience, and make data-backed decisions. From predictive analytics to NLP and computer vision — we turn your data into actionable intelligence.",
    image: "/images/ai-development-laptop.png",
    services: [
      {
        id: 1,
        title: "Machine Learning Model Development",
        description:
          "Design and train custom ML models using TensorFlow, PyTorch, or Scikit-learn. Build predictive systems for forecasting, recommendation, and automation. Continuously improve models using real-world data.",
        icon: "/icons/machine-learning.svg",
      },
      {
        id: 2,
        title: "Natural Language Processing (NLP)",
        description:
          "Develop chatbots, voice assistants, and text analytics solutions. Process and understand human language using advanced NLP frameworks. Extract insights from unstructured data. Automate content moderation, sentiment analysis, and support tasks.",
        icon: "/icons/nlp.svg",
      },
      {
        id: 3,
        title: "Computer Vision Solutions",
        description:
          "Implement image and video recognition systems using deep learning. Detect objects, patterns, and anomalies automatically. Enhance surveillance, quality control, and customer experiences.",
        icon: "/icons/computer-vision.svg",
      },
    ],
  },

  solutions: {
  mainTitle: "Comprehensive AI & ML Solutions",
  mainDescription:
    "We deliver end-to-end AI development services, from model design to seamless deployment. Our intelligent systems empower enterprises to automate operations, enhance performance, and make data-driven decisions.",
  linkText: "Get AI-Powered Solutions",
  linkUrl: "/contact-us",
  items: [
    {
      id: "ml-solutions",
      icon: "Leaf",
      title: "Machine Learning Solutions",
      subtitle: "Predictive & Data-Driven Models",
      description:
        "Build intelligent ML models that predict future outcomes with precision. \nLeverage algorithms to uncover insights from massive datasets. \nAutomate complex decision-making for faster results. \nContinuously refine models through adaptive learning. \nDrive smarter strategies and accurate forecasting for growth.",
    },
    {
      id: "nlp-solutions",
      icon: "Leaf",
      title: "Natural Language Processing",
      subtitle: "Understand Human Language",
      description:
        "Develop AI systems that comprehend human speech and text naturally. \nExtract meaning, emotion, and sentiment from real-world conversations. \nAutomate chatbots and voice assistants for customer support. \nTransform text into structured insights for analytics. \nEnhance user experience through smarter communication tools.",
    },
    {
      id: "cv-solutions",
      icon: "Leaf",
      title: "Computer Vision Systems",
      subtitle: "See & Understand Images",
      description:
        "Design AI that detects, classifies, and interprets visual data. \nAutomate quality checks and real-time monitoring in any environment. \nImprove security, safety, and operational visibility. \nReduce manual errors through automated visual inspection. \nUse image intelligence for industries like healthcare and retail.",
    },
    {
      id: "ai-automation",
      icon: "Leaf",
      title: "AI-Powered Automation",
      subtitle: "Smart Business Operations",
      description:
        "Integrate AI-driven automation into your daily workflows. \nUse bots to perform repetitive tasks with accuracy and speed. \nBoost operational efficiency and cost-effectiveness. \nCombine rule-based logic with cognitive intelligence. \nEnable round-the-clock smart automation across all departments.",
    },
    {
      id: "data-analytics",
      icon: "Leaf",
      title: "Data Analytics & Insights",
      subtitle: "Turn Data into Decisions",
      description:
        "Collect, clean, and transform data into actionable intelligence. \nIdentify trends, risks, and opportunities using advanced analytics. \nCreate predictive dashboards and visual reports. \nEnable real-time insights for faster decision-making. \nEmpower leaders with clear, data-backed business strategies.",
    },
    {
      id: "ai-integration",
      icon: "Leaf",
      title: "AI Integration Services",
      subtitle: "Seamless Implementation",
      description:
        "Embed AI seamlessly into existing systems, apps, or platforms. \nConnect models to APIs, databases, and cloud environments. \nEnsure smooth performance with optimized infrastructure. \nEnable interoperability across enterprise tools and workflows. \nDeliver scalable, secure, and future-ready AI ecosystems.",
    },
  ],
},


  managementSolutions: {
    title: "AI Model Management & Monitoring Tools",
    subtitle:
      "Efficiently manage, monitor, and optimize AI models and data pipelines for better accuracy, scalability, and reliability.",
    subtitleLink: { text: "AI management platform", url: "#" },
    laptopImage: "/images/ai-management.jpg",
    mobileImage: "/images/ai-management-mobile.jpg",
    topFeatures: [
      {
        id: "model-tracking",
        icon: "map",
        title: "Model Training & Tracking",
        description:
          "Track model training iterations and performance metrics. Compare experiments for accuracy and speed. Monitor drift and retraining needs. Ensure reproducibility of models. Simplify model lifecycle management.",
      },
      {
        id: "data-pipeline",
        icon: "map",
        title: "Automated Data Pipelines",
        description:
          "Build and automate end-to-end data workflows. Handle data collection, cleaning, and transformation. Enable continuous training with real-time data feeds. Reduce manual processing time. Ensure smooth data-to-model pipelines.",
      },
      {
        id: "model-analytics",
        icon: "map",
        title: "AI Performance Analytics",
        description:
          "Analyze AI model outcomes and behavior. Track accuracy, precision, and recall over time. Identify biases and errors for model improvement. Visualize key metrics via dashboards. Optimize performance for long-term success.",
      },
    ],
    ctaText: "Get AI Experts",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ - Artificial Intelligence & Machine Learning Services",
    items: [
      {
        id: "1",
        question: "What types of AI solutions do you develop?",
        answer:
          "We develop AI systems for predictive analytics, natural language processing, computer vision, automation, and intelligent decision-making across industries.",
      },
      {
        id: "2",
        question: "Do you offer end-to-end AI development?",
        answer:
          "Yes, we handle the full AI lifecycle — from data collection and model training to deployment, monitoring, and optimization.",
      },
      {
        id: "3",
        question: "Can you integrate AI into existing business systems?",
        answer:
          "Absolutely. We integrate AI models into CRMs, ERPs, mobile apps, and other enterprise platforms for seamless automation and intelligence.",
      },
      {
        id: "4",
        question: "What technologies do you use for AI development?",
        answer:
          "We use TensorFlow, PyTorch, OpenAI, scikit-learn, AWS AI, and Google Cloud ML to build scalable and high-performing AI applications.",
      },
      {
        id: "5",
        question: "How do you ensure AI model accuracy?",
        answer:
          "Our team uses advanced validation, testing, and monitoring techniques to ensure AI models remain accurate, unbiased, and efficient.",
      },
      {
        id: "6",
        question: "Do you provide AI maintenance and retraining services?",
        answer:
          "Yes, we continuously monitor and retrain models with new data to maintain performance and adapt to evolving business needs.",
      },
      {
        id: "7",
        question: "Can AI solutions be customized for my industry?",
        answer:
          "Definitely. We tailor AI models for industries like healthcare, finance, retail, logistics, and manufacturing to meet specific business goals.",
      },
    ],
  },
};
