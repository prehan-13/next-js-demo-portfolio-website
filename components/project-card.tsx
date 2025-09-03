import { Github, LinkIcon } from "lucide-react"
import type { Project } from "../lib/data"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
      <img
        src={`/abstract-geometric-shapes.png?height=180&width=640&query=${encodeURIComponent(project.title)}%20preview`}
        alt={`${project.title} preview`}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>
        <ul className="mt-3 flex flex-wrap items-center gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              <Github className="mr-1 h-4 w-4" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm text-emerald-600 hover:underline dark:text-emerald-400"
            >
              <LinkIcon className="mr-1 h-4 w-4" /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
