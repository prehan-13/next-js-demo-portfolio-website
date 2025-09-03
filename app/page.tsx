import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"
import { ThemeToggle } from "../components/theme-toggle"
import { Github, Linkedin, Mail } from "lucide-react"
import { skills, projects } from "../lib/data"
import ProjectCard from "../components/project-card"
import SkillCard from "../components/skill-card"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* About / Hero */}
        <Section id="about" ariaLabel="Introduction">
          <div className="flex flex-col-reverse items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-wide text-slate-600 dark:text-slate-400">Hello, I&apos;m</p>
              <h1 className="mt-1 text-pretty text-3xl font-semibold sm:text-4xl">Prehan Shah</h1>
              <p className="mt-3 text-pretty leading-relaxed text-slate-700 dark:text-slate-300">
                I build fast, accessible web applications with React, Next.js, and TypeScript. I love crafting clean UI,
                robust architectures, and delightful developer experiences.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="prehanvshah@gmail.com"
                  className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                  aria-label="Email Prehan Shah"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  View projects
                </a>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href="https://github.com/prehan-13"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prehan-shah/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <img
              src="/profile-headshot.png"
              alt="John Doe headshot"
              className="h-28 w-28 shrink-0 rounded-full border border-slate-200 object-cover dark:border-slate-800 sm:h-32 sm:w-32"
            />
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Tech" subtitle="Tools I use daily">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" subtitle="Selected work and experiments">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" subtitle="Let’s build something together">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
              <h3 className="text-lg font-semibold">Reach me directly</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="mailto:prehanvshah@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">
                    prehanvshah@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/prehan-13"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    github.com/prehan-13
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/prehan-shah/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    linkedin.com/in/prehan-shah/
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Prefer email for faster responses.</p>
            </div>

            {/* Optional Contact Form */}
            <form
              className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"
              action="/api/contact"
              method="post"
            >
              <h3 className="text-lg font-semibold">Send a message</h3>
              <div className="mt-3 grid gap-3">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-600 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-600 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-600 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    placeholder="How can I help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-fit items-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                >
                  Send message
                </button>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  This demo form posts to an API route and logs the data. Replace with email service as needed.
                </p>
              </div>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
      {/* Floating theme toggle on small screens */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <ThemeToggle />
      </div>
    </>
  )
}
