"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useI18n } from "@/components/i18n-provider"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const { locale } = useI18n()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container py-12 max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight mb-8">{locale === "zh" ? "关于 DXCP" : "About DXCP"}</h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            {locale === "zh" ? (
              <>
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">项目愿景</h2>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                      "让每一位开发者都能以最少的摩擦、最高的效率创造价值。"
                    </blockquote>
                  </CardContent>
                </Card>

                <h2 className="text-2xl font-bold mb-4">什么是 DXCP？</h2>
                <p className="text-muted-foreground mb-6">
                  DXCP（Developer Experience Center
                  Program，开发者体验中心计划）是一个旨在建立统一、系统化、可持续改进的开发者体验平台的综合项目。
                  我们的目标是提高研发团队生产力、交付效率、系统质量与工程师满意度。
                </p>

                <h2 className="text-2xl font-bold mb-4">核心目标</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>
                    <strong>战略目标：</strong>提升组织研发生产力与创新速度
                  </li>
                  <li>
                    <strong>战术目标：</strong>缩短交付周期、减少重复建设
                  </li>
                  <li>
                    <strong>操作目标：</strong>提高开发者满意度
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">七大核心能力</h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
                  <li>
                    <strong>Developer Portal（统一门户）：</strong>服务目录、组件模板、API 文档、最佳实践
                  </li>
                  <li>
                    <strong>CI/CD 自动化平台：</strong>模板化流水线、内置质量守则、自动安全扫描
                  </li>
                  <li>
                    <strong>Service Template 库：</strong>标准微服务模板、内置监控、日志与部署配置
                  </li>
                  <li>
                    <strong>Onboarding Kit：</strong>新员工极速上手包
                  </li>
                  <li>
                    <strong>Observability as a Service：</strong>可观测性中心
                  </li>
                  <li>
                    <strong>Dev Environment 即服务化：</strong>云端可复现开发环境
                  </li>
                  <li>
                    <strong>DX 数据与反馈系统：</strong>自动采集 DevEx 指标
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mb-4">参与社区</h2>
                <p className="text-muted-foreground">
                  DXCP 是一个开放的社区项目。我们欢迎所有对开发者体验感兴趣的组织和个人参与贡献。 访问我们的{" "}
                  <a
                    href="https://github.com/DXCP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub 仓库
                  </a>{" "}
                  了解更多信息。
                </p>
              </>
            ) : (
              <>
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">Project Vision</h2>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                      "Enable every developer to create value with minimal friction and maximum efficiency."
                    </blockquote>
                  </CardContent>
                </Card>

                <h2 className="text-2xl font-bold mb-4">What is DXCP?</h2>
                <p className="text-muted-foreground mb-6">
                  DXCP (Developer Experience Center Program) is a comprehensive initiative aimed at building a unified,
                  systematic, and continuously improving developer experience platform. Our goal is to enhance R&D team
                  productivity, delivery efficiency, system quality, and engineer satisfaction.
                </p>

                <h2 className="text-2xl font-bold mb-4">Core Objectives</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>
                    <strong>Strategic:</strong> Enhance organizational R&D productivity and innovation speed
                  </li>
                  <li>
                    <strong>Tactical:</strong> Shorten delivery cycles and reduce redundant work
                  </li>
                  <li>
                    <strong>Operational:</strong> Improve developer satisfaction
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">Seven Core Capabilities</h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
                  <li>
                    <strong>Developer Portal:</strong> Service catalog, component templates, API docs, best practices
                  </li>
                  <li>
                    <strong>CI/CD Automation Platform:</strong> Template pipelines, quality gates, security scanning
                  </li>
                  <li>
                    <strong>Service Template Library:</strong> Standard microservice templates with monitoring and
                    deployment
                  </li>
                  <li>
                    <strong>Onboarding Kit:</strong> Fast onboarding package for new engineers
                  </li>
                  <li>
                    <strong>Observability as a Service:</strong> Centralized observability center
                  </li>
                  <li>
                    <strong>Dev Environment as a Service:</strong> Cloud-based reproducible dev environments
                  </li>
                  <li>
                    <strong>DX Data & Feedback System:</strong> Automated DevEx metrics collection
                  </li>
                </ol>

                <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
                <p className="text-muted-foreground">
                  DXCP is an open community project. We welcome contributions from all organizations and individuals
                  interested in developer experience. Visit our{" "}
                  <a
                    href="https://github.com/DXCP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub repository
                  </a>{" "}
                  to learn more.
                </p>
              </>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
