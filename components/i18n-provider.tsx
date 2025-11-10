"use client"

import * as React from "react"

export type Locale = "zh" | "en"

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations: Record<Locale, Record<string, string>> = {
  zh: {
    "nav.home": "首页",
    "nav.cases": "案例展示",
    "nav.knowledge": "知识库",
    "nav.templates": "模板下载",
    "nav.about": "关于",
    "hero.title": "开发者体验中心计划",
    "hero.subtitle": "Developer Experience Center Program",
    "hero.description":
      "建立统一、系统化、可持续改进的开发者体验平台，提升研发生产力、交付效率、系统质量与工程师满意度",
    "hero.getStarted": "开始使用",
    "hero.viewDocs": "查看文档",
    "section.features": "核心能力",
    "section.cases": "成功案例",
    "section.knowledge": "知识库",
    "section.templates": "下载模板",
    "feature.portal.title": "开发者门户",
    "feature.portal.desc": "统一的服务目录、组件模板、API文档与最佳实践",
    "feature.cicd.title": "CI/CD 自动化",
    "feature.cicd.desc": "模板化流水线、内置质量守则、自动安全扫描",
    "feature.template.title": "服务模板库",
    "feature.template.desc": "标准微服务模板、内置监控、日志与部署配置",
    "feature.onboarding.title": "快速上手",
    "feature.onboarding.desc": "新员工极速上手包，一键开发环境配置",
    "feature.observability.title": "可观测性",
    "feature.observability.desc": "标准日志、指标、追踪模板及统一告警",
    "feature.devenv.title": "开发环境",
    "feature.devenv.desc": "云端可复现开发环境，即服务化管理",
    "cases.viewMode.grid": "宫格视图",
    "cases.viewMode.list": "列表视图",
    "cases.filter.all": "全部",
    "cases.submitCase": "提交案例",
    "knowledge.search": "搜索知识库...",
    "knowledge.categories": "分类",
    "knowledge.cat.basics": "基础知识",
    "knowledge.cat.frameworks": "框架方法",
    "knowledge.cat.metrics": "度量标准",
    "knowledge.cat.practices": "最佳实践",
    "knowledge.cat.sharing": "大厂分享",
    "templates.proposal": "DXC 项目提案",
    "templates.proposal.desc": "包含项目概述、背景、目标、实施计划等完整提案模板",
    "templates.pilot": "DXC 试点计划",
    "templates.pilot.desc": "12周试点交付计划，包含周级里程碑和关键交付物",
    "templates.download": "下载模板",
    "footer.github": "GitHub",
    "footer.community": "社区",
    "footer.docs": "文档",
    "footer.copyright": "© 2025 DXCP. 保留所有权利。",
  },
  en: {
    "nav.home": "Home",
    "nav.cases": "Cases",
    "nav.knowledge": "Knowledge",
    "nav.templates": "Templates",
    "nav.about": "About",
    "hero.title": "Developer Experience Center Program",
    "hero.subtitle": "DXCP",
    "hero.description":
      "Build a unified, systematic, and continuously improving developer experience platform to enhance R&D productivity, delivery efficiency, system quality, and engineer satisfaction",
    "hero.getStarted": "Get Started",
    "hero.viewDocs": "View Docs",
    "section.features": "Core Capabilities",
    "section.cases": "Success Stories",
    "section.knowledge": "Knowledge Base",
    "section.templates": "Download Templates",
    "feature.portal.title": "Developer Portal",
    "feature.portal.desc": "Unified service catalog, component templates, API docs and best practices",
    "feature.cicd.title": "CI/CD Automation",
    "feature.cicd.desc": "Template pipelines, built-in quality gates, automated security scanning",
    "feature.template.title": "Service Templates",
    "feature.template.desc": "Standard microservice templates with monitoring, logging, and deployment",
    "feature.onboarding.title": "Quick Onboarding",
    "feature.onboarding.desc": "Fast onboarding kit for new engineers with one-click dev environment",
    "feature.observability.title": "Observability",
    "feature.observability.desc": "Standard logging, metrics, tracing templates with unified alerting",
    "feature.devenv.title": "Dev Environment",
    "feature.devenv.desc": "Cloud-based reproducible dev environments as a service",
    "cases.viewMode.grid": "Grid View",
    "cases.viewMode.list": "List View",
    "cases.filter.all": "All",
    "cases.submitCase": "Submit Case",
    "knowledge.search": "Search knowledge base...",
    "knowledge.categories": "Categories",
    "knowledge.cat.basics": "Basics",
    "knowledge.cat.frameworks": "Frameworks",
    "knowledge.cat.metrics": "Metrics",
    "knowledge.cat.practices": "Best Practices",
    "knowledge.cat.sharing": "Industry Insights",
    "templates.proposal": "DXC Project Proposal",
    "templates.proposal.desc":
      "Complete proposal template with project overview, background, goals, and implementation plan",
    "templates.pilot": "DXC Pilot Plan",
    "templates.pilot.desc": "12-week pilot delivery plan with weekly milestones and key deliverables",
    "templates.download": "Download",
    "footer.github": "GitHub",
    "footer.community": "Community",
    "footer.docs": "Documentation",
    "footer.copyright": "© 2025 DXCP. All rights reserved.",
  },
}

const defaultContextValue: I18nContextType = {
  locale: "zh",
  setLocale: () => {},
  t: (key: string) => translations.zh[key] || key,
}

const I18nContext = React.createContext<I18nContextType>(defaultContextValue)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>("zh")
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
    const stored = window.localStorage.getItem("locale") as Locale
    if (stored && (stored === "zh" || stored === "en")) {
      setLocale(stored)
    }
  }, [])

  const handleSetLocale = React.useCallback((newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", newLocale)
    }
  }, [])

  const t = React.useCallback(
    (key: string) => {
      return translations[locale][key] || key
    },
    [locale],
  )

  const value = React.useMemo(
    () => ({
      locale,
      setLocale: handleSetLocale,
      t,
    }),
    [locale, handleSetLocale, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = React.useContext(I18nContext)
  return context
}
