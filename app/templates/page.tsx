"use client"

import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useI18n } from "@/components/i18n-provider"

export default function TemplatesPage() {
  const { t, locale } = useI18n()

  const templates = [
    {
      titleKey: "templates.proposal",
      descKey: "templates.proposal.desc",
      file: "DXC-Project-Proposal.md",
      icon: FileText,
    },
    {
      titleKey: "templates.pilot",
      descKey: "templates.pilot.desc",
      file: "DXC-Pilot-Plan.md",
      icon: FileText,
    },
  ]

  const handleDownload = (filename: string) => {
    // In a real implementation, this would download the actual file
    // For now, we'll create a link to the GitHub repo
    window.open(`https://github.com/DXCP/website/tree/main/templates/${filename}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">{t("section.templates")}</h1>
            <p className="mt-2 text-muted-foreground">
              {locale === "zh"
                ? "下载 DXC 项目提案和试点计划模板，快速启动你的开发者体验中心"
                : "Download DXC project proposal and pilot plan templates to quickly start your Developer Experience Center"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {templates.map((template, index) => {
              const Icon = template.icon
              return (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{t(template.titleKey)}</CardTitle>
                    <CardDescription className="text-base">{t(template.descKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button onClick={() => handleDownload(template.file)} className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      {t("templates.download")}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="mt-12 border-2 bg-muted/50">
            <CardHeader>
              <CardTitle>{locale === "zh" ? "贡献模板" : "Contribute Templates"}</CardTitle>
              <CardDescription>
                {locale === "zh"
                  ? "我们欢迎社区贡献更多的 DXC 模板和最佳实践。通过 GitHub PR 提交您的模板。"
                  : "We welcome community contributions of more DXC templates and best practices. Submit your templates via GitHub PR."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <a href="https://github.com/DXCP/website" target="_blank" rel="noopener noreferrer">
                  {locale === "zh" ? "在 GitHub 上贡献" : "Contribute on GitHub"}
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
