# Next.js 15 Portfolio

A modern, responsive personal portfolio built with Next.js 15, React, Tailwind CSS v4, and `next-themes`.

## Features

- Introduction / About with optional profile picture
- Skills / Tech stack grid with cards
- Projects section with cards, tech tags, GitHub and demo links
- Contact links + optional contact form (posts to API route)
- Dark/Light theme toggle (system-aware)
- Smooth scrolling nav with global header and footer
- SEO metadata + Open Graph tags
- Clean, modular, commented code

## Getting Started

1. Install dependencies:
   - npm install

2. Run the development server:
   - npm run dev
   - Open http://localhost:3000 in your browser.

3. Build for production:
   - npm run build
   - npm start

## Customize

- Update metadata and personal details in:
  - `app/layout.tsx` (SEO, name/title)
  - `app/page.tsx` (intro text and links)
  - `lib/data.ts` (skills and projects)

- Replace images:
  - Update placeholder images in components to your own assets in `/public`.

## Tech

- Next.js 15 (App Router)
- React 18
- Tailwind CSS v4
- next-themes (dark/light)
- lucide-react (icons)

## Notes

- The contact form posts to `/api/contact` and logs to the server; replace with your email service/provider to send real emails.
