"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-3">{t("footer.community")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/DXCP"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  {t("footer.github")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t("footer.docs")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/templates" className="hover:text-primary transition-colors">
                  {t("nav.templates")}
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-primary transition-colors">
                  {t("nav.knowledge")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
