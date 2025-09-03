import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Prehan Shah — Software Developer",
  description:
    "Personal portfolio of Prehan Shah, a software developer specializing in modern web apps using React, Next.js, and TypeScript.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prehan Shah — Software Developer",
    description: "Modern portfolio showcasing projects, skills, and contact information.",
    url: "http://localhost:3000",
    siteName: "Prehan Shah Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Prehan Shah Portfolio" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prehan Shah — Software Developer",
    description: "Modern portfolio built with Next.js 15 and Tailwind CSS.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* ThemeProvider attaches class for dark mode */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
