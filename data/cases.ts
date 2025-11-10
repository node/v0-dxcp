export type Case = {
  id: string
  title: { zh: string; en: string }
  company: { zh: string; en: string }
  description: { zh: string; en: string }
  tags: string[]
  metrics?: Array<{
    value: string
    label: { zh: string; en: string }
  }>
}

export const cases: Case[] = [
  {
    id: "1",
    title: {
      zh: "大型互联网公司的 DXC 实践",
      en: "Large Internet Company DXC Practice",
    },
    company: {
      zh: "某互联网科技公司",
      en: "Tech Company A",
    },
    description: {
      zh: "通过建立统一的开发者门户和 CI/CD 平台，该公司将新服务上线时间从 5 天缩短到 1 天，开发者满意度提升 35 分。",
      en: "By establishing a unified developer portal and CI/CD platform, the company reduced new service deployment time from 5 days to 1 day, increasing developer satisfaction by 35 points.",
    },
    tags: ["CI/CD", "Portal"],
    metrics: [
      { value: "80%", label: { zh: "时间节省", en: "Time Saved" } },
      { value: "+35", label: { zh: "NPS 提升", en: "NPS Increase" } },
    ],
  },
  {
    id: "2",
    title: {
      zh: "金融科技的开发者体验转型",
      en: "Fintech Developer Experience Transformation",
    },
    company: {
      zh: "某金融科技公司",
      en: "Fintech Company B",
    },
    description: {
      zh: "实施 Onboarding Kit 和标准化服务模板后，新员工上手时间从 2 周缩短到 2 天，代码复用率提升 60%。",
      en: "After implementing Onboarding Kit and standardized service templates, new employee onboarding time was reduced from 2 weeks to 2 days, with code reuse increasing by 60%.",
    },
    tags: ["Onboarding", "Templates"],
    metrics: [
      { value: "85%", label: { zh: "上手时间缩短", en: "Onboarding Faster" } },
      { value: "60%", label: { zh: "代码复用率", en: "Code Reuse" } },
    ],
  },
  {
    id: "3",
    title: {
      zh: "电商平台的可观测性实践",
      en: "E-commerce Platform Observability Practice",
    },
    company: {
      zh: "某电商平台",
      en: "E-commerce Platform C",
    },
    description: {
      zh: "通过统一的可观测性平台，平均故障恢复时间（MTTR）从 4 小时降至 45 分钟，变更失败率下降 40%。",
      en: "Through a unified observability platform, Mean Time To Recovery (MTTR) decreased from 4 hours to 45 minutes, with change failure rate dropping by 40%.",
    },
    tags: ["Observability", "SRE"],
    metrics: [
      { value: "81%", label: { zh: "MTTR 降低", en: "MTTR Reduction" } },
      { value: "-40%", label: { zh: "失败率", en: "Failure Rate" } },
    ],
  },
  {
    id: "4",
    title: {
      zh: "SaaS 企业的研发效能提升",
      en: "SaaS Enterprise R&D Efficiency Boost",
    },
    company: {
      zh: "某 SaaS 企业",
      en: "SaaS Company D",
    },
    description: {
      zh: "建立开发者体验中心后，部署频率提升 200%，从每周 2 次提升到每天 6 次，交付周期缩短 50%。",
      en: "After establishing a Developer Experience Center, deployment frequency increased 200% from 2 times per week to 6 times per day, with lead time reduced by 50%.",
    },
    tags: ["DevOps", "Metrics"],
    metrics: [
      { value: "200%", label: { zh: "部署频率提升", en: "Deploy Freq Up" } },
      { value: "-50%", label: { zh: "交付周期", en: "Lead Time" } },
    ],
  },
  {
    id: "5",
    title: {
      zh: "创业公司的快速成长之路",
      en: "Startup Fast Growth Path",
    },
    company: {
      zh: "某创业公司",
      en: "Startup E",
    },
    description: {
      zh: "在早期就建立 DXC 体系，使团队从 10 人扩展到 50 人时保持了高效协作，工程师离职率降低 70%。",
      en: "By establishing a DXC system early on, the team maintained efficient collaboration while scaling from 10 to 50 engineers, with engineer turnover reduced by 70%.",
    },
    tags: ["Growth", "Culture"],
    metrics: [
      { value: "5x", label: { zh: "团队规模", en: "Team Scale" } },
      { value: "-70%", label: { zh: "离职率", en: "Turnover" } },
    ],
  },
  {
    id: "6",
    title: {
      zh: "传统企业的数字化转型",
      en: "Traditional Enterprise Digital Transformation",
    },
    company: {
      zh: "某传统制造企业",
      en: "Manufacturing Company F",
    },
    description: {
      zh: "通过 DXC 推动数字化转型，建立现代化研发体系，使软件交付速度提升 3 倍，质量问题减少 55%。",
      en: "By driving digital transformation through DXC and establishing a modern R&D system, software delivery speed increased 3x with quality issues reduced by 55%.",
    },
    tags: ["Transformation", "Quality"],
    metrics: [
      { value: "3x", label: { zh: "交付速度", en: "Delivery Speed" } },
      { value: "-55%", label: { zh: "质量问题", en: "Quality Issues" } },
    ],
  },
]
