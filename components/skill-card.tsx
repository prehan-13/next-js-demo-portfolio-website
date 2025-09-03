import type { Skill } from "../lib/data"

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
      role="group"
      aria-label={`Skill: ${skill.name}`}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
          aria-hidden
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {skill.icon ?? skill.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium">{skill.name}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{skill.level}</p>
        </div>
      </div>
    </div>
  )
}
