import type { ReactNode } from "react"

export default function Section({
  id,
  title,
  subtitle,
  ariaLabel,
  children,
}: {
  id?: string
  title?: string
  subtitle?: string
  ariaLabel?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-label={ariaLabel} className="scroll-mt-24 py-10 sm:py-14">
      <div>
        {title && (
          <div className="mb-6">
            <h2 className="text-pretty text-2xl font-semibold sm:text-3xl">{title}</h2>
            {subtitle ? <p className="mt-1 text-slate-600 dark:text-slate-400">{subtitle}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
