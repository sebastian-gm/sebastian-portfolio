# Sebastian Gonzalez — personal portfolio

A personal website presenting AI, business automation, data engineering, and a finance background. Built with React, TypeScript, Vite, and Tailwind CSS. The contact endpoint is a Cloudflare Pages Function using Resend.

## Local preview

Use Node.js 20+ and npm:

```bash
npm ci
npm run dev -- --host 127.0.0.1 --port 4173
```

Open `http://127.0.0.1:4173`. These commands do not publish the site.

```bash
npx tsc --noEmit -p tsconfig.app.json
npm run build
npm run preview -- --host 127.0.0.1 --port 4174
```

Plain Vite does not run the contact function. The form reports an unconfirmed delivery and offers direct email if the backend is unavailable. Mock `/contact` in browser checks to avoid sending real emails.

## Content and design

- `HeroSection`: name, portrait, positioning, and an invitation to connect.
- `ExperienceSection`: expandable automation, AI, cloud, data, and finance experience, without employer names or employment dates.
- `ProjectsSection`: selected independent projects and the existing Aclara pitch.
- `AboutSection`: finance perspective, international experience, and language capabilities.
- `EducationSection`: MBA, technical and finance education, and clearly labeled Georgia Tech admission.
- `ContactSection`: direct contact, form, and the single AI resume download.
- `public/resumes/Sebastian_Resume.pdf`: unchanged copy of the supplied AI Strategy resume.
- `public/_redirects`: older resume URLs redirect to the selected AI resume. The legacy `/assets/Sebastian_Resume2026.pdf` URL also serves that version.
- `public/media`: the original pitch and poster, plus captions derived from its aligned narration.

Typography uses self-hosted Geist throughout, including lining numerals and tabular numerals in data tables. The WOFF2 files and their OFL license live in `public/fonts`. No Google Fonts request is needed at runtime. The SG header, small portrait, concise copy and four visible education panels keep the focus on Sebastian. Both SG links use the same smooth home-anchor navigation as the section links. Contact links use recognizable LinkedIn and GitHub logos with text labels.

The background restores the earlier warm cream palette. The small portrait has a soft warm shadow and a fade and slide entrance.

Motion uses CSS and IntersectionObserver. Name and portrait entrances run once. The two project illustrations have slower bounded sequences that replay on hover, keyboard focus, or the replay button. Their movement has its own gentle easing, separate from the other page transitions. Their visuals link to the case studies and gently follow the pointer. The Aclara preview links to its case study while a separate play control preserves video playback. Experience panels animate open and closed. Reduced-motion preferences show the settled visuals, turn off spatial animation, and hide unnecessary replay buttons. Education cards use a pointer-following coloured glow, also available on keyboard focus. Pointer work is limited to one animation frame and spatial effects respect reduced motion. No new runtime animation dependency or paid media service is required.

Professional experience is summarized in original portfolio copy. Private work logs are not published. Independent projects are identified as projects; technical evaluation details remain available in their case studies.

## Deployment

The output directory is `dist`. Cloudflare Pages runs `functions/contact.ts`; a generic static host needs a separate adapter for that endpoint.

Set `RESEND_API_KEY`, `MAIL_FROM`, and `MAIL_TO` as hosting environment variables/secrets. Never expose them through Vite client variables. Configure the sender domain in Resend. Preserve the routing and cache rules in `public/_redirects` and `public/_headers`.

Deployment is a separate step after local review. No publication is performed by the preview commands.

## Validation

The redesign is checked with TypeScript, a production build, changed-file lint, and browser verification covering responsive layouts, experience panels, mobile navigation, the selected resume, video/captions, routes, and mocked contact outcomes. Full-project lint retains pre-existing errors in legacy/generated components and the unchanged contact function.
