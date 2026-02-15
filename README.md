# Salem Saleh — Portfolio

Personal portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit Content

All content lives in a single file:

```
src/content/siteData.ts
```

- `siteConfig` — name, tagline, contact info, social links
- `education` — school, degree, GPA
- `experiences[]` — work history (add/remove/reorder entries)
- `projects[]` — project cards (add/remove/reorder entries)
- `skills` — languages and technologies arrays
- `leadership` — club/org details
- `navLinks` — navigation items

### Add a new experience

Add an object to the `experiences` array in `siteData.ts`:

```ts
{
  id: "company-name",
  role: "Your Role",
  company: "Company",
  team: "Team Name",        // optional
  location: "City, ST",
  dates: "Mon YYYY – Mon YYYY",
  current: true,            // optional, shows "Current" badge
  bullets: ["What you did."],
  tech: ["React", "TypeScript"],  // optional
}
```

### Add a new project

Add an object to the `projects` array:

```ts
{
  id: "project-slug",
  title: "Project Name",
  subtitle: "Context",           // optional (e.g., "Hackathon")
  description: "One-liner.",
  details: ["Expanded bullet 1.", "Expanded bullet 2."],
  tech: ["Next.js", "TypeScript"],
  link: "https://...",           // optional
  github: "https://github.com/...",  // optional
}
```

## Design Tokens

Design tokens are defined in `src/styles/globals.css` inside the `@theme` block and CSS custom properties:

- **Fonts**: `--font-display` (Cormorant Garamond), `--font-body` (Sora)
- **Colors**: `--color-accent-*` (amber/gold), `--color-surface-*` (monochrome)
- **Spacing**: `--spacing-section`, `--spacing-section-sm`
- **Theme switching**: CSS variables under `:root` (light) and `.dark` (dark)

## Project Structure

```
src/
├── app/              # Next.js App Router (layout + page)
├── content/          # siteData.ts — all editable content
├── components/       # Reusable components
│   ├── ExperienceCard.tsx
│   ├── ProjectCard.tsx
│   ├── MagneticButton.tsx
│   ├── Navbar.tsx
│   ├── Pill.tsx
│   ├── SectionHeading.tsx
│   └── ThemeToggle.tsx
├── sections/         # Page sections
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Leadership.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── styles/
    └── globals.css   # Design tokens, theme, textures
```

## Deploy

Push to GitHub and import to [Vercel](https://vercel.com). Zero config needed.

```bash
npm run build   # verify production build
```
