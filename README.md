# Md. Sadiqur Rahman Toky — Portfolio

A modern dark agency-style portfolio, built as a lightweight static website for **GitHub Pages**.

## What is included

- Responsive homepage featuring a real profile image and professional bio
- SEO and Social Media project galleries, based on screenshots provided in the portfolio document
- Interactive project category filters and keyboard-accessible image galleries
- Skills with self-assessed proficiency scales, plus a software toolkit
- Contact links for email, WhatsApp, Telegram, LinkedIn, Facebook, Instagram, and YouTube
- Search-friendly metadata and an SVG favicon

## Replace your current portfolio at the SAME GitHub Pages URL

1. **Back up your old website first.** In your current GitHub repository, use **Code > Download ZIP** or keep an existing copy. Your past commits also remain available.
2. Open the GitHub repository that publishes your current portfolio.
3. Check **Settings > Pages** to find your publishing source and branch. Usually it is **Deploy from a branch**, `main`, and `/ (root)`.
4. Replace the old website files in that publishing folder with all files from this package. Upload `index.html`, `styles.css`, `script.js`, `favicon.svg`, `.nojekyll`, and the entire `assets` folder, preserving the directory structure.
5. Commit the changes. GitHub Pages will publish the updated site at your **existing URL** as long as the repository, custom domain, and Pages settings are unchanged.
6. Refresh your site. If you see the old design, use a hard refresh (`Ctrl` + `Shift` + `R`) or check the repository **Actions** tab for the latest deployment status.

> If your current Pages source is `/docs`, place the new website files inside `docs/` instead of at the repository root. If your repository publishes from a GitHub Actions workflow, keep that workflow and replace the corresponding site source instead.

## Preview before uploading

Open `index.html` in a browser, or use a local static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize

- **Copy, contact links, and section content:** `index.html`
- **Colors, spacing, layout, and mobile styling:** `styles.css` (accent color `--lime`)
- **Project gallery images and captions:** `script.js` (`projects` object)
- **Images:** `assets/*.webp`

This site does not require Node.js, npm, API keys, or a paid hosting provider. Google Fonts is used for typography; the site falls back to system fonts when offline.

## Important

This is a static website. The email and social buttons open external applications; there is no server-side contact form. Project descriptions are based on supplied documentation, with no invented performance metrics. Skill percentages are explicitly labeled **self-assessed**.
