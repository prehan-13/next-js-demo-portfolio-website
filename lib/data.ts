// Sample data for skills and projects

export type Skill = {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  icon?: string
}

export type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export const skills: Skill[] = [
  { name: "TypeScript", level: "Expert", icon: "TS" },
  { name: "React", level: "Expert", icon: "R" },
  { name: "Next.js", level: "Advanced", icon: "N" },
  { name: "Tailwind CSS", level: "Advanced", icon: "T" },
  { name: "Node.js", level: "Advanced", icon: "Nd" },
  { name: "Testing", level: "Advanced", icon: "J" },
  { name: "Accessibility", level: "Advanced", icon: "A" },
  { name: "Performance", level: "Advanced", icon: "P" },
]

export const projects: Project[] = [
  {
    title: "Project Atlas",
    description:
      "A performant data visualization dashboard with reusable charts, server-side caching, and accessible UI components.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/johndoe/project-atlas",
    demo: "https://example.com/atlas",
  },
  {
    title: "FocusNote",
    description: "A distraction-free markdown notes app with full-text search, offline support, and themeable UI.",
    tech: ["React", "Vite", "LocalStorage"],
    github: "https://github.com/johndoe/focusnote",
  },
]
