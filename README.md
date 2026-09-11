# Emmanuel Ofuje James — Portfolio

A static Next.js portfolio site built to support Emmanuel Ofuje James's application for the
[UAS Operations & Training Specialist – Defence](https://draganfly.applytojobs.ca/uas+programs/48358)
role at Draganfly Inc.

No backend — the site is fully static (`next build` with `output: "export"`) and ready to deploy
on Vercel as a static site.

## Content

- `src/app/page.tsx` — all page content (hero, about, flight experience, military appointments,
  skills, education/certifications, gallery, contact). Edit the arrays at the top of the file to
  update text.
- `public/images/` — photos used across the site.
- `public/files/` — downloadable CV and cover letter (`.docx`).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Deploy to Vercel

1. Push this `portfolio` folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, click **Add New Project**, import the repository, and select the `portfolio`
   folder as the root directory if it's part of a larger repo.
3. Vercel auto-detects Next.js — no extra configuration is needed. `output: "export"` in
   `next.config.ts` makes the build fully static.
4. Deploy. Every push to the main branch redeploys automatically.

Alternatively, deploy directly from the CLI:

```bash
npm install -g vercel
vercel
```
