"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useI18n } from "@/components/i18n-provider"
import { knowledgeBase } from "@/data/knowledge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function KnowledgePage() {
  const { t, locale } = useI18n()
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { key: "basics", labelKey: "knowledge.cat.basics" },
    { key: "frameworks", labelKey: "knowledge.cat.frameworks" },
    { key: "metrics", labelKey: "knowledge.cat.metrics" },
    { key: "practices", labelKey: "knowledge.cat.practices" },
    { key: "sharing", labelKey: "knowledge.cat.sharing" },
  ]

  const filteredKnowledge = knowledgeBase.filter((item) => {
    if (!searchQuery) return true
    const title = locale === "zh" ? item.title.zh : item.title.en
    const desc = locale === "zh" ? item.description.zh : item.description.en
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) || desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">{t("section.knowledge")}</h1>
            <p className="mt-2 text-muted-foreground">
              {locale === "zh"
                ? "探索开发者体验的基础知识、框架、方法论和最佳实践"
                : "Explore developer experience fundamentals, frameworks, methodologies, and best practices"}
            </p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("knowledge.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">{t("cases.filter.all")}</TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat.key} value={cat.key}>
                  {t(cat.labelKey)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {categories.map((cat) => {
                const items = filteredKnowledge.filter((item) => item.category === cat.key)
                if (items.length === 0) return null
                return (
                  <div key={cat.key}>
                    <h2 className="text-2xl font-bold mb-4">{t(cat.labelKey)}</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((item) => (
                        <Card key={item.id} className="border-2 hover:border-primary/50 transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg">{locale === "zh" ? item.title.zh : item.title.en}</CardTitle>
                            <CardDescription>
                              {locale === "zh" ? item.description.zh : item.description.en}
                            </CardDescription>
                          </CardHeader>
                          {item.link && (
                            <CardContent>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                              >
                                {locale === "zh" ? "了解更多 →" : "Learn more →"}
                              </a>
                            </CardContent>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              })}
            </TabsContent>

            {categories.map((cat) => (
              <TabsContent key={cat.key} value={cat.key}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredKnowledge
                    .filter((item) => item.category === cat.key)
                    .map((item) => (
                      <Card key={item.id} className="border-2 hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg">{locale === "zh" ? item.title.zh : item.title.en}</CardTitle>
                          <CardDescription>
                            {locale === "zh" ? item.description.zh : item.description.en}
                          </CardDescription>
                        </CardHeader>
                        {item.link && (
                          <CardContent>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline"
                            >
                              {locale === "zh" ? "了解更多 →" : "Learn more →"}
                            </a>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
