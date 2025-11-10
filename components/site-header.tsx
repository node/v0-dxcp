"use client"

import Link from "next/link"
import { Moon, Sun, Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useI18n } from "@/components/i18n-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.cases", href: "/cases" },
    { key: "nav.knowledge", href: "/knowledge" },
    { key: "nav.templates", href: "/templates" },
    { key: "nav.about", href: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            DX
          </div>
          <span className="hidden font-bold sm:inline-block text-lg">DXCP</span>
        </Link>

        <nav className="hidden md:flex mx-6 flex-1 items-center space-x-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.key} href={item.href} className="transition-colors hover:text-primary">
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLocale("zh")}>中文 {locale === "zh" && "✓"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale("en")}>English {locale === "en" && "✓"}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
