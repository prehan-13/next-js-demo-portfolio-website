export default function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Prehan Shah. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex items-center gap-4">
            <a
              href="#about"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
