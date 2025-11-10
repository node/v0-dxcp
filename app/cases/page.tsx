"use client"

import { useState } from "react"
import { Grid, List, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useI18n } from "@/components/i18n-provider"
import { cases } from "@/data/cases"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ViewMode = "grid" | "list"

export default function CasesPage() {
  const { t, locale } = useI18n()
  const [viewMode, setViewMode] = useState<ViewMode>("grid")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container py-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{t("section.cases")}</h1>
              <p className="mt-2 text-muted-foreground">
                {locale === "zh" ? "查看 DXCP 的成功实施案例" : "View successful DXCP implementation cases"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as ViewMode)}>
                <TabsList>
                  <TabsTrigger value="grid">
                    <Grid className="h-4 w-4 mr-2" />
                    {t("cases.viewMode.grid")}
                  </TabsTrigger>
                  <TabsTrigger value="list">
                    <List className="h-4 w-4 mr-2" />
                    {t("cases.viewMode.list")}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <Button asChild>
                <a href="https://github.com/DXCP/website" target="_blank" rel="noopener noreferrer">
                  <Plus className="mr-2 h-4 w-4" />
                  {t("cases.submitCase")}
                </a>
              </Button>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((caseItem) => (
                <Card key={caseItem.id} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      {caseItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle>{locale === "zh" ? caseItem.title.zh : caseItem.title.en}</CardTitle>
                    <CardDescription>{locale === "zh" ? caseItem.company.zh : caseItem.company.en}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {locale === "zh" ? caseItem.description.zh : caseItem.description.en}
                    </p>
                    {caseItem.metrics && (
                      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                        {caseItem.metrics.map((metric, idx) => (
                          <div key={idx}>
                            <span className="font-semibold text-primary">{metric.value}</span>
                            <span className="text-muted-foreground ml-1">
                              {locale === "zh" ? metric.label.zh : metric.label.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {cases.map((caseItem) => (
                <Card key={caseItem.id} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          {caseItem.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <CardTitle className="text-2xl">
                          {locale === "zh" ? caseItem.title.zh : caseItem.title.en}
                        </CardTitle>
                        <CardDescription className="mt-1 text-base">
                          {locale === "zh" ? caseItem.company.zh : caseItem.company.en}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {locale === "zh" ? caseItem.description.zh : caseItem.description.en}
                    </p>
                    {caseItem.metrics && (
                      <div className="flex flex-wrap gap-4 text-sm">
                        {caseItem.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-baseline gap-1">
                            <span className="font-semibold text-primary text-lg">{metric.value}</span>
                            <span className="text-muted-foreground">
                              {locale === "zh" ? metric.label.zh : metric.label.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
