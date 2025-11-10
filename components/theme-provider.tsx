"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("light")

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("theme") as Theme
      if (stored) {
        setTheme(stored)
        document.documentElement.classList.toggle("dark", stored === "dark")
      }
    }
  }, [])

  const handleSetTheme = React.useCallback((newTheme: Theme) => {
    setTheme(newTheme)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", newTheme)
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    return {
      theme: "light" as Theme,
      setTheme: () => {},
    }
  }
  return context
}
