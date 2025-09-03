import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <span className="text-lg font-semibold">JD</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <a
            href="#about"
            className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Contact
          </a>
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
