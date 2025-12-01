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
    image: "https://cdn.pixabay.com/photo/2024/04/27/07/24/ai-generated-8723288_1280.jpg",
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
          "Adopt headless or hybrid CMS architectures that decouple content from presentation layers. Manage and distribute content across websites, mobile apps, and digital touchpoints. Enable developers to build scalable frontends powered by a single, centralized backend.",
      },
      {
        id: "content-modeling",
        icon: "Leaf",
        title: "Content Modeling & Taxonomy",
        subtitle: "Structured Content for Reuse",
        description:
          "Design intelligent content models and taxonomies that ensure consistency across platforms. Create reusable content blocks and components for efficient localization and updates. Maintain structured data for seamless integration with APIs and search engines.",
      },
      {
        id: "personalization",
        icon: "Leaf",
        title: "Personalization & Targeting",
        subtitle: "Contextual Content Delivery",
        description:
          "Deliver dynamic, user-specific experiences powered by personalization algorithms. Utilize CRM, behavior, and analytics data to tailor messaging in real time. Improve engagement and conversion through contextual, data-driven storytelling.",
      },
      {
        id: "omnichannel",
        icon: "Leaf",
        title: "Omnichannel Publishing",
        subtitle: "Consistent Experience Everywhere",
        description:
          "Publish content seamlessly across web, mobile, social, and email channels. Use scheduling, preview, and rollback features to manage campaigns efficiently. Ensure brand consistency and message alignment across every digital touchpoint.",
      },
      {
        id: "digital-asset",
        icon: "Leaf",
        title: "Digital Asset Management (DAM)",
        subtitle: "Centralize Media & Assets",
        description:
          "Unify all digital media—images, videos, and documents—under a secure, searchable DAM platform. Manage asset versions, assign metadata, and streamline approvals. Deliver media globally through CDN integration for fast, reliable access.",
      },
      {
        id: "analytics-seo",
        icon: "Leaf",
        title: "SEO, Analytics & Performance",
        subtitle: "Content ROI & Speed",
        description:
          "Enhance content visibility and site speed using advanced SEO and analytics tools. Monitor engagement and optimize based on performance metrics and A/B tests. Improve ROI through measurable insights and continuous optimization cycles.",
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
<<<<<<< HEAD
    laptopImage: "https://i.pinimg.com/736x/e8/87/e3/e887e37c8ae12b16b183d9e2f3a46004.jpg",
    mobileImage: "https://i.pinimg.com/1200x/c4/42/8e/c4428e9bb7735ff2aee8aef142e70eff.jpg",
=======
    laptopImage:
      "https://i.pinimg.com/736x/e8/87/e3/e887e37c8ae12b16b183d9e2f3a46004.jpg",
    mobileImage:
      "https://i.pinimg.com/1200x/c4/42/8e/c4428e9bb7735ff2aee8aef142e70eff.jpg",
>>>>>>> dff8695af6695b105ed5ef84459d44d099a61cb6
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
          "Simplify multi-language content management with built-in translation tools and automated language detection. Enable faster localization through integrated workflows that support regional variants. Maintain consistent brand messaging across all languages and markets effortlessly.",
      },
      {
        id: "automation",
        icon: "map",
        title: "Content Automation & Scheduling",
        description:
          "Automate content publishing and scheduling to keep your platforms active and up-to-date. Reduce manual effort by managing expiration dates and syndication feeds in real time. Ensure timely delivery of content across global channels with minimal human intervention.",
      },
      {
        id: "security",
        icon: "map",
        title: "Security & Access Controls",
        description:
          "Safeguard your CMS environment with enterprise-grade encryption and secure authentication. Implement role-based permissions and single sign-on for controlled content access. Regular audits and compliance checks ensure continuous protection of sensitive data.",
      },
      {
        id: "support",
        icon: "map",
        title: "Support & Managed Services",
        description:
          "Keep your CMS optimized with 24/7 monitoring, upgrades, and proactive maintenance. Get expert assistance for troubleshooting, performance tuning, and content migration. Empower your editorial teams with tailored training and ongoing platform support.",
      },
    ],
    ctaText: "Plan Your CMS",
    onCtaClick: () => {
      window.location.href = "/contact-us";
    },
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
