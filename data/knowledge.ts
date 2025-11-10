export type KnowledgeItem = {
  id: string
  category: "basics" | "frameworks" | "metrics" | "practices" | "sharing"
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  link?: string
}

export const knowledgeBase: KnowledgeItem[] = [
  // Basics
  {
    id: "kb-1",
    category: "basics",
    title: {
      zh: "什么是开发者体验（DevEx）",
      en: "What is Developer Experience (DevEx)",
    },
    description: {
      zh: "开发者体验是指开发人员在使用工具、框架、API 和平台时的整体感受和效率。良好的开发者体验能够提高生产力、降低认知负担并增加工作满意度。",
      en: "Developer Experience refers to the overall feeling and efficiency of developers when using tools, frameworks, APIs, and platforms. Good DevEx improves productivity, reduces cognitive load, and increases job satisfaction.",
    },
  },
  {
    id: "kb-2",
    category: "basics",
    title: {
      zh: "开发者体验的核心要素",
      en: "Core Elements of Developer Experience",
    },
    description: {
      zh: "核心要素包括：工具链易用性、文档质量、上手速度、开发环境、自动化程度、反馈循环、协作效率等。每个要素都会显著影响开发者的日常工作体验。",
      en: "Core elements include: toolchain usability, documentation quality, onboarding speed, dev environment, automation level, feedback loops, and collaboration efficiency. Each significantly impacts developers' daily experience.",
    },
  },
  {
    id: "kb-3",
    category: "basics",
    title: {
      zh: "Platform Engineering vs DevEx",
      en: "Platform Engineering vs DevEx",
    },
    description: {
      zh: "Platform Engineering 专注于构建自助式基础设施平台，而 DevEx 是更广泛的概念，涵盖开发者与技术栈的所有交互点。两者相辅相成。",
      en: "Platform Engineering focuses on building self-service infrastructure platforms, while DevEx is a broader concept covering all developer touchpoints with the tech stack. Both complement each other.",
    },
  },

  // Frameworks
  {
    id: "kb-4",
    category: "frameworks",
    title: {
      zh: "SPACE 框架",
      en: "SPACE Framework",
    },
    description: {
      zh: "SPACE 框架从五个维度衡量开发者生产力：满意度与幸福感（Satisfaction）、绩效（Performance）、活动（Activity）、沟通与协作（Communication）、效率与流畅度（Efficiency）。",
      en: "SPACE Framework measures developer productivity across five dimensions: Satisfaction, Performance, Activity, Communication & Collaboration, and Efficiency & Flow.",
    },
    link: "https://queue.acm.org/detail.cfm?id=3454124",
  },
  {
    id: "kb-5",
    category: "frameworks",
    title: {
      zh: "DevEx Framework（DX Core 4）",
      en: "DevEx Framework (DX Core 4)",
    },
    description: {
      zh: "DevEx Framework 识别影响开发者体验的四个核心维度：反馈循环（Feedback Loops）、认知负荷（Cognitive Load）、流畅状态（Flow State）和开发环境（Dev Environment）。",
      en: "DevEx Framework identifies four core dimensions affecting developer experience: Feedback Loops, Cognitive Load, Flow State, and Development Environment.",
    },
  },
  {
    id: "kb-6",
    category: "frameworks",
    title: {
      zh: "Team Topologies",
      en: "Team Topologies",
    },
    description: {
      zh: "Team Topologies 提供了一套组织设计模式，包括 Stream-aligned teams、Enabling teams、Platform teams 等，帮助优化团队结构以提升开发者体验。",
      en: "Team Topologies provides organizational design patterns including Stream-aligned teams, Enabling teams, and Platform teams to optimize team structure for better DevEx.",
    },
  },

  // Metrics
  {
    id: "kb-7",
    category: "metrics",
    title: {
      zh: "DORA 指标",
      en: "DORA Metrics",
    },
    description: {
      zh: "DORA（DevOps Research and Assessment）定义了四大关键指标：部署频率、变更前置时间、变更失败率和平均恢复时间，用于衡量软件交付性能。",
      en: "DORA defines four key metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Mean Time to Recovery to measure software delivery performance.",
    },
    link: "https://dora.dev/",
  },
  {
    id: "kb-8",
    category: "metrics",
    title: {
      zh: "Developer NPS（Net Promoter Score）",
      en: "Developer NPS (Net Promoter Score)",
    },
    description: {
      zh: 'Developer NPS 通过询问"你会向其他开发者推荐我们的平台/工具吗？"来量化开发者满意度，是衡量 DevEx 的重要指标。',
      en: 'Developer NPS quantifies developer satisfaction by asking "Would you recommend our platform/tools to other developers?" It\'s a key metric for measuring DevEx.',
    },
  },
  {
    id: "kb-9",
    category: "metrics",
    title: {
      zh: "开发者工作流指标",
      en: "Developer Workflow Metrics",
    },
    description: {
      zh: "包括代码审查时间、CI/CD 执行时间、问题解决时间、文档查找时间等，这些指标反映开发者日常工作中的实际摩擦点。",
      en: "Includes code review time, CI/CD execution time, issue resolution time, documentation search time, etc. These metrics reflect actual friction points in daily developer work.",
    },
  },

  // Practices
  {
    id: "kb-10",
    category: "practices",
    title: {
      zh: "Inner Source 实践",
      en: "Inner Source Practices",
    },
    description: {
      zh: "Inner Source 将开源协作模式应用于企业内部，鼓励跨团队代码共享和协作，显著提升代码复用率和开发者协作体验。",
      en: "Inner Source applies open source collaboration patterns within enterprises, encouraging cross-team code sharing and collaboration, significantly improving code reuse and developer collaboration experience.",
    },
  },
  {
    id: "kb-11",
    category: "practices",
    title: {
      zh: "Developer Portal 最佳实践",
      en: "Developer Portal Best Practices",
    },
    description: {
      zh: 'Developer Portal 应提供统一的服务目录、API 文档、快速开始指南、模板库等，成为开发者的"一站式"工作入口。',
      en: 'Developer Portals should provide unified service catalogs, API documentation, quick start guides, template libraries, serving as a "one-stop" entry point for developers.',
    },
  },
  {
    id: "kb-12",
    category: "practices",
    title: {
      zh: "DevContainer 与云端开发环境",
      en: "DevContainer & Cloud Dev Environments",
    },
    description: {
      zh: '使用 DevContainer 和云端开发环境可以实现"开箱即用"的开发体验，消除环境配置问题，让开发者专注于编码。',
      en: 'Using DevContainers and cloud dev environments enables "out-of-the-box" development experience, eliminating environment setup issues and allowing developers to focus on coding.',
    },
  },

  // Sharing
  {
    id: "kb-13",
    category: "sharing",
    title: {
      zh: "Spotify 的 Backstage",
      en: "Spotify's Backstage",
    },
    description: {
      zh: "Spotify 开源的 Backstage 是业界领先的 Developer Portal 平台，提供服务目录、模板、文档、插件系统等完整功能。",
      en: "Spotify's open-source Backstage is an industry-leading Developer Portal platform, offering service catalog, templates, documentation, plugin system, and more.",
    },
    link: "https://backstage.io/",
  },
  {
    id: "kb-14",
    category: "sharing",
    title: {
      zh: "Netflix 的开发者生产力实践",
      en: "Netflix Developer Productivity Practices",
    },
    description: {
      zh: "Netflix 通过建立专门的开发者生产力团队，持续优化工具链、自动化流程和开发环境，显著提升工程师效率和满意度。",
      en: "Netflix established dedicated developer productivity teams to continuously optimize toolchains, automate processes, and improve dev environments, significantly boosting engineer efficiency and satisfaction.",
    },
  },
  {
    id: "kb-15",
    category: "sharing",
    title: {
      zh: "Google 的 Developer Satisfaction（DSAT）",
      en: "Google's Developer Satisfaction (DSAT)",
    },
    description: {
      zh: "Google 内部使用 DSAT 指标系统跟踪开发者对工具和流程的满意度，通过季度调研和持续改进维持高水平的开发者体验。",
      en: "Google uses the DSAT metric system to track developer satisfaction with tools and processes, maintaining high-level DevEx through quarterly surveys and continuous improvement.",
    },
  },
  {
    id: "kb-16",
    category: "sharing",
    title: {
      zh: "Shopify 的开发者加速器",
      en: "Shopify Developer Accelerator",
    },
    description: {
      zh: "Shopify 的 Dev Accelerator 项目专注于消除开发过程中的摩擦，通过自动化、标准化和自助服务提升开发速度和体验。",
      en: "Shopify's Dev Accelerator project focuses on eliminating friction in the development process, improving development speed and experience through automation, standardization, and self-service.",
    },
  },
]
