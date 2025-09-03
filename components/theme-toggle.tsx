"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const active = (theme ?? resolvedTheme) === "dark"

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      >
        <Sun className="h-4 w-4" />
      </button>
    )
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(active ? "light" : "dark")}
      className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {active ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="ml-2 text-sm">{active ? "Light" : "Dark"}</span>
    </button>
  )
}
