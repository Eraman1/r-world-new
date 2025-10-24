import { SolutionConfig } from "@/types/solutions";

export const cms: SolutionConfig = {
  slug: "cms",
  banner: {
    title: "Power Your Content with",
    highlight: "Enterprise CMS & Headless Content Platforms",
    subtitle:
      "Deliver consistent, personalized content at scale — across web, mobile, and IoT — with secure, API-first content management solutions built for performance and flexibility.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
    linkText: "Get CMS Solutions",
  },

  developerDetails: {
    heading: "Experienced CMS Architects & Engineers",
    subheading:
      "We design and implement content platforms that enable editorial productivity, multi-channel delivery, and developer-friendly integrations.",
    mainTitle: "Custom CMS & Headless Content Platform Services",
    mainDescription:
      "From traditional enterprise CMS to modern headless and hybrid architectures, our team builds content solutions that streamline editorial workflows, enable omnichannel delivery, and integrate seamlessly with your existing tech stack.",
    image: "/images/cms-dashboard.png",
    services: [
      {
        id: 1,
        title: "Headless CMS Implementation",
        description:
          "Decouple content from presentation with API-first architectures (Strapi, Contentful, Prismic, Sanity) to serve content across apps and devices.",
        icon: "/icons/api.svg",
      },
      {
        id: 2,
        title: "Enterprise CMS Migration",
        description:
          "Migrate legacy content to modern, secure platforms (Drupal, Sitecore, Adobe Experience Manager) with data mapping, validation, and SEO preservation.",
        icon: "/icons/migrate.svg",
      },
      {
        id: 3,
        title: "Custom Content Workflows",
        description:
          "Design editorial workflows, role-based permissions, and localization pipelines to accelerate content production and reduce errors.",
        icon: "/icons/workflow.svg",
      },
    ],
  },

  solutions: {
    mainTitle: "CMS Solutions for Modern Content Operations",
    mainDescription:
      "We deliver CMS platforms that combine editorial productivity, strong governance, and developer velocity — including omnichannel APIs, personalization, and analytics integrations.",
    items: [
      {
        id: "headless-architecture",
        icon: "Leaf",
        title: "Headless & Hybrid CMS",
        subtitle: "Flexible Multi-Channel Delivery",
        description:
          "Implement headless or hybrid CMS architectures to power websites, mobile apps, digital kiosks, and IoT devices from a single content source.",
      },
      {
        id: "content-modeling",
        icon: "Leaf",
        title: "Content Modeling & Taxonomy",
        subtitle: "Structured Content for Reuse",
        description:
          "Create robust content models, taxonomies, and component libraries that enable content reuse and reduce localization effort.",
      },
      {
        id: "personalization",
        icon: "Leaf",
        title: "Personalization & Targeting",
        subtitle: "Contextual Content Delivery",
        description:
          "Integrate personalization engines to deliver targeted experiences based on user segments, behavior, and CRM data.",
      },
      {
        id: "omnichannel",
        icon: "Leaf",
        title: "Omnichannel Publishing",
        subtitle: "Consistent Experience Everywhere",
        description:
          "Automate content publishing workflows to multiple channels (web, mobile, email, social) with scheduling, previewing, and rollback support.",
      },
      {
        id: "digital-asset",
        icon: "Leaf",
        title: "Digital Asset Management (DAM)",
        subtitle: "Centralize Media & Assets",
        description:
          "Integrate or implement DAM systems to manage images, videos, and documents with versioning, metadata, and CDN distribution.",
      },
      {
        id: "analytics-seo",
        icon: "Leaf",
        title: "SEO, Analytics & Performance",
        subtitle: "Content ROI & Speed",
        description:
          "Optimize content for search and performance with automated SEO tooling, A/B testing, and analytics integrations to measure engagement and conversions.",
      },
    ],
    linkText: "Discuss CMS Strategy",
    linkUrl: "/contact-us",
  },

  managementSolutions: {
    title: "Content Management & Delivery Platforms",
    subtitle:
      "We build and operate CMS solutions with robust governance, automation, and scalable delivery to meet enterprise demands.",
    subtitleLink: { text: "content management software", url: "#" },
    laptopImage: "/images/management-solutions.jpg",
    mobileImage: "/images/management-solutions-mobile.jpg",
    topFeatures: [
      {
        id: "governance",
        icon: "map",
        title: "Content Governance & Roles",
        description:
          "Define editorial roles, approval gates, and audit trails to maintain content quality and compliance across teams.",
        link: { text: "governance best practices", url: "#" },
      },
      {
        id: "scalability",
        icon: "map",
        title: "Scalable Cloud Delivery",
        description:
          "Deploy content platforms on scalable cloud infrastructure with CDN integration for global low-latency delivery.",
      },
      {
        id: "integrations",
        icon: "map",
        title: "Third-Party Integrations",
        description:
          "Seamlessly connect CMS to CRM, eCommerce, search, analytics, and marketing automation systems via APIs and middleware.",
      },
    ],
    bottomFeatures: [
      {
        id: "localization",
        icon: "map",
        title: "Localization & Translation Hub",
        description:
          "Streamline multi-lingual content workflows with integrated translation management and language fallbacks.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Content Automation & Scheduling",
        description:
          "Automate content publishing, expirations, and syndicated feeds to reduce manual overhead and improve timeliness.",
      },
      {
        id: "security",
        icon: "map",
        title: "Security & Access Controls",
        description:
          "Protect content and editorial systems with role-based access, SSO, encryption, and regular security audits.",
      },
      {
        id: "support",
        icon: "map",
        title: "Support & Managed Services",
        description:
          "Offer ongoing CMS support, performance tuning, upgrades, and editorial training to keep your platform healthy and efficient.",
      },
    ],
    ctaText: "Plan Your CMS",
    onCtaClick: () => {},
  },

  faq: {
    title: "FAQ",
    items: [
      {
        id: "1",
        question: "What is a headless CMS and when should I use it?",
        answer:
          "A headless CMS separates content storage from presentation, exposing content via APIs. Use it when you need to deliver the same content to multiple channels (web, mobile, apps, IoT) or want full frontend flexibility.",
      },
      {
        id: "2",
        question: "How do you approach CMS migrations from legacy systems?",
        answer:
          "We assess content, map data models, plan SEO preservation, perform incremental migrations, validate content, and provide rollback strategies to minimize downtime and data loss.",
      },
      {
        id: "3",
        question: "Can a CMS support personalization and A/B testing?",
        answer:
          "Yes — we integrate personalization engines and experimentation tools into the CMS to deliver targeted experiences and measure what drives engagement and conversions.",
      },
      {
        id: "4",
        question: "Which CMS platforms do you work with?",
        answer:
          "We work across the spectrum: traditional (Drupal, Sitecore, AEM), modern headless (Contentful, Sanity, Strapi, Prismic), and hybrid solutions — selecting the best fit for your needs.",
      },
      {
        id: "5",
        question: "How do you ensure content performance and SEO?",
        answer:
          "We optimize content structure, use CDN-backed delivery, implement server-side rendering or static-generation where appropriate, and follow SEO best practices for metadata and structured data.",
      },
      {
        id: "6",
        question: "Do you provide ongoing CMS support and training?",
        answer:
          "Yes — we provide managed services, platform monitoring, regular updates, security patches, and editorial training to ensure long-term success of your content platform.",
      },
    ],
  },
};
