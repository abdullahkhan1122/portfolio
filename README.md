# Muhammad Abdullah – Portfolio (Next.js 16)

A clean, single-page portfolio built with the App Router in Next.js 16.2, React 19, and Tailwind CSS. Sections include hero, skills marquee, projects grid, and a contact form wired to FormSubmit.

## Live / Demo
- Local dev: `npm run dev` then open http://localhost:3000
- Production: deploy directly to Vercel (no extra config).

## Tech Stack
- Next.js 16 (App Router, React Server Components)
- React 19
- Tailwind CSS 4
- Heroicons + simple-icons for UI and tech badges

## Scripts
- `npm run dev` — start local dev server
- `npm run lint` — run ESLint (zero warnings enforced)
- `npm run build` — production build
- `npm start` — serve the production build

## Project Structure
- `app/` — App Router pages, layout, and global styles
  - `app/page.tsx` — main portfolio page
  - `app/globals.css` — base theme and utility classes
- `public/` — static assets (icons, avatar.svg, resume.pdf)

## Environment
No env vars required. Form submissions use FormSubmit; change the email in `app/page.tsx` if needed.

## Deployment (Vercel)
1. Push to GitHub.
2. In Vercel, “Import Project” → select this repo.
3. Framework preset: **Next.js**. No environment variables needed.
4. Deploy. Vercel will run `npm install`, `npm run build`, then host automatically.

## Customization
- Update hero/social links in `app/page.tsx` (`socials` array).
- Replace `public/avatar.svg` with your photo (keep the same filename).
- Update project links (`projects` array) with real live/GitHub URLs.
- Replace `public/resume.pdf` with your resume file for the download button.

## License
Personal portfolio source. Feel free to reuse with attribution.
