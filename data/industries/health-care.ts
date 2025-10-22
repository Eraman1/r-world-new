import { IndustryConfig } from "@/types/industries";
 
export const healthcare: IndustryConfig = {
  slug: "healthcare",
  banner: {
    title: "Revolutionize Patient Care with",
    highlight: "AI-Powered Healthcare & Telemedicine Software Solutions",
    subtitle:
      "Empower hospitals, clinics, and healthcare startups with intelligent, secure, and interoperable digital health platforms. From patient monitoring to predictive diagnostics, we enable seamless healthcare delivery powered by innovation and automation.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get Healthcare Solutions",
  },
 
  techHero: {
    heading: "Hire Expert Healthcare Software Developers",
    description:
      "Our developers build HIPAA-compliant, AI-driven healthcare software that enhances patient outcomes, optimizes hospital operations, and enables connected care. We integrate telemedicine, IoT devices, and analytics for smarter, more accessible healthcare systems.",
    services: [
      {
        id: "telemedicine",
        title: "Telemedicine & Virtual Care Platforms",
        icon: "Tractor", //Video
        position: "left",
      },
      {
        id: "ehr",
        title: "Electronic Health Record (EHR) Systems",
        icon: "Tractor", //FileText
        position: "left",
      },
      {
        id: "ai-diagnostics",
        title: "AI-Based Diagnostics & Imaging Analysis",
        icon: "Tractor", //Brain
        position: "left",
      },
      {
        id: "hospital-management",
        title: "Hospital Management Software (HMS)",
        icon: "Tractor", //Building
        position: "left",
      },
      {
        id: "iot-monitoring",
        title: "IoT-Enabled Patient Monitoring",
        icon: "Tractor", //Activity
        position: "right",
      },
      {
        id: "pharmacy",
        title: "Pharmacy & Inventory Management",
        icon: "Tractor", //Package
        position: "right",
      },
      {
        id: "patient-portal",
        title: "Patient Engagement & Portal Systems",
        icon: "Tractor", //Users
        position: "right",
      },
      {
        id: "analytics",
        title: "Healthcare Analytics & BI Dashboards",
        icon: "Tractor", //BarChart3
        position: "right",
      },
    ],
  },
 
  solutions: {
    mainTitle: "AI, IoT & Cloud Solutions for Modern Healthcare",
    mainDescription:
      "We design smart, secure, and scalable healthcare software powered by AI and IoT. From predictive diagnostics to connected care, our solutions improve clinical efficiency, patient experience, and operational excellence across the medical ecosystem.",
    items: [
      {
        id: "diagnostics",
        icon: "Leaf",
        title: "AI Diagnostics & Medical Imaging",
        subtitle: "",
        description:
          "Enhance diagnostic accuracy with machine learning models that analyze X-rays, MRIs, and CT scans for early disease detection.",
      },
      {
        id: "remote-monitoring",
        icon: "Leaf",
        title: "Remote Patient Monitoring Systems",
        subtitle: "",
        description:
          "Track patient vitals in real time using IoT wearables and cloud platforms for continuous, preventive care outside hospital walls.",
      },
      {
        id: "appointment-scheduling",
        icon: "Leaf",
        title: "Smart Appointment & Workflow Automation",
        subtitle: "",
        description:
          "Streamline scheduling, billing, and record-keeping with integrated systems that reduce wait times and improve patient experience.",
      },
      {
        id: "predictive-analytics",
        icon: "Leaf",
        title: "Predictive Healthcare Analytics",
        subtitle: "",
        description:
          "Use AI-powered predictive models to forecast patient risks, optimize treatment plans, and reduce readmission rates.",
      },
      {
        id: "drug-discovery",
        icon: "Leaf",
        title: "AI in Drug Discovery & Research",
        subtitle: "",
        description:
          "Accelerate drug discovery using computational biology, data modeling, and predictive algorithms for faster clinical trials.",
      },
      {
        id: "compliance-security",
        icon: "Leaf",
        title: "Compliance & Data Security Platforms",
        subtitle: "",
        description:
          "Ensure full compliance with HIPAA, GDPR, and HL7 standards while safeguarding sensitive patient and medical data.",
      },
    ],
    linkText: "Get AI-Powered Healthcare Solutions",
    linkUrl: "/contact-us",
  },
 
  managementSolutions: {
    title: "Healthcare Management & Analytics Solutions",
    subtitle:
      "We build end-to-end healthcare management platforms that integrate telehealth, EHR, and predictive analytics to improve care quality and efficiency.",
    subtitleLink: { text: "healthcare management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "ehr-integration",
        icon: "map",
        title: "EHR / EMR Integration & Interoperability",
        description:
          "Seamlessly integrate patient records across hospitals, labs, and clinics with secure, interoperable APIs.",
        link: { text: "EHR development services", url: "#" },
      },
      {
        id: "telehealth",
        icon: "map",
        title: "Telehealth & Video Consultation Platforms",
        description:
          "Deliver remote consultations, prescriptions, and follow-ups via encrypted, real-time video and chat systems.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Workflow Automation & Billing Systems",
        description:
          "Automate patient admissions, claims, and billing to improve accuracy and reduce administrative workload.",
      },
    ],
    bottomFeatures: [
      {
        id: "population-health",
        icon: "map",
        title: "Population Health & Analytics Dashboards",
        description:
          "Visualize key healthcare KPIs like patient recovery rates, staff performance, and cost management in real time.",
      },
      {
        id: "security",
        icon: "map",
        title: "Cybersecurity & HIPAA Compliance",
        description:
          "Implement secure authentication, encryption, and audit trails to ensure patient data confidentiality and compliance.",
      },
      {
        id: "mobile-health",
        icon: "map",
        title: "mHealth & Wearable App Development",
        description:
          "Create mobile and wearable health apps that enable patients to track fitness, medication, and chronic disease progress.",
      },
      {
        id: "ai-decision",
        icon: "map",
        title: "AI-Powered Decision Support Systems",
        description:
          "Assist healthcare professionals with AI insights for diagnosis, treatment planning, and personalized care delivery.",
      },
    ],
    ctaText: "BUILD YOUR HEALTHCARE SOFTWARE SOLUTION",
    onCtaClick: () => {},
  },
 faq:{
  title: "Healthcare FAQ",
  items: [
    {
      id: "1",
      question: "What is digital healthcare?",
      answer:
        "Digital healthcare involves the use of technology such as telemedicine, electronic health records (EHR), mobile health apps, and AI-powered diagnostic tools to enhance patient care, streamline workflows, and improve medical outcomes.",
    },
    {
      id: "2",
      question: "How does telemedicine work?",
      answer:
        "Telemedicine allows patients to consult with healthcare professionals remotely through video calls, chat, or mobile apps. It provides convenient access to care, reduces travel time, and enables real-time monitoring of chronic conditions.",
    },
    {
      id: "3",
      question: "What are the benefits of Electronic Health Records (EHR)?",
      answer:
        "EHR systems centralize patient data, making it accessible to authorized medical staff across multiple departments. They improve diagnosis accuracy, reduce paperwork, enable better care coordination, and enhance patient safety.",
    },
    {
      id: "4",
      question: "How is AI used in healthcare?",
      answer:
        "AI supports healthcare through predictive analytics, early disease detection, personalized treatment plans, and workflow automation. Machine learning algorithms analyze medical images, patient history, and clinical data to assist doctors in decision-making.",
    },
    {
      id: "5",
      question: "What is remote patient monitoring?",
      answer:
        "Remote patient monitoring uses wearable devices, mobile apps, and connected sensors to track vital signs such as heart rate, blood pressure, and glucose levels. Data is transmitted to healthcare providers for timely intervention and proactive care.",
    },
    {
      id: "6",
      question: "How do healthcare platforms ensure patient data security?",
      answer:
        "Healthcare platforms follow strict security protocols, including HIPAA/GDPR compliance, encryption, role-based access, and secure cloud storage, ensuring sensitive patient data remains private and protected from unauthorized access.",
    },
    {
      id: "7",
      question: "Can digital healthcare solutions integrate with existing hospital systems?",
      answer:
        "Yes. Modern healthcare software can integrate with hospital management systems, lab systems, pharmacy management, and EHR platforms to enable seamless data flow, unified reporting, and efficient care delivery.",
    },
    {
      id: "8",
      question: "What features make a healthcare platform effective?",
      answer:
        "Key features include telemedicine consultations, patient portals, appointment scheduling, EHR integration, analytics dashboards, automated reminders, and secure messaging. These features improve patient engagement, operational efficiency, and care quality.",
    },
    {
      id: "9",
      question: "How can healthcare apps improve patient engagement?",
      answer:
        "Healthcare apps allow patients to book appointments, access medical records, receive health tips, track medication schedules, and communicate with providers. This increases adherence to treatment plans and fosters proactive health management.",
    },
    {
      id: "10",
      question: "What is the future of healthcare technology?",
      answer:
        "The future of healthcare technology focuses on AI-driven diagnostics, precision medicine, wearable health devices, virtual care, and interoperable systems. These innovations aim to deliver faster, safer, and more personalized patient care.",
    },
  ],
},

};