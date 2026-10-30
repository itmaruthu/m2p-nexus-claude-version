# M2P Nexus — website

Company website for **M2P Nexus** (Sithalangudi, Madurai): technology solutions, AI automation, workforce and business-growth services. Includes `/connect`, a digital business card for the founder's QR code.

## Stack

- React 19 + Vite 8 + React Router 7, Tailwind CSS v4, framer-motion
- Fonts are self-hosted with `@fontsource-variable` (no requests to Google)
- Deployed on Vercel (`vercel.json`: SPA rewrite + security headers)

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # production build in dist/, every page pre-rendered to static HTML
npm run preview   # serve dist/ locally
```

## Where things live

| What | File |
|---|---|
| Phone numbers, email, WhatsApp link + message, LinkedIn, map link | `src/config/site.js` |
| Routes (pages other than Home load on demand) | `src/App.jsx` |
| Pages | `src/pages/*.jsx` |
| Header, footer, floating buttons, SEO tags | `src/components/` |
| WhatsApp / LinkedIn icons | `src/components/icons.jsx` |
| Brand colours and fonts | `src/index.css` |
| Security headers, caching | `vercel.json` |

## Content rules

- **Testimonials and ratings** on the Industries page are hidden by `SHOW_CLIENT_REVIEWS` in `src/pages/Industries.jsx`. Only switch it on once every quote, name, photo and score is real and the client has agreed in writing. Fake or unverifiable reviews are treated as misleading advertising in India (Consumer Protection Act 2019), the US (FTC) and the EU.
- Client names in the portfolio need the client's permission. Numbers such as "50+ projects" must be facts you can back up.

## Images

Use WebP, sized for how large the image is shown (about 2× the display size), and keep each one well under 150 KB. Always set `alt`, plus `width`/`height` where the size is fixed. Use `loading="lazy"` for anything below the first screen.

## Security headers

`vercel.json` sends a strict Content-Security-Policy that only allows files from this site. If you add a third-party script, font, analytics tool or embed (e.g. Google Analytics, Vercel Analytics, a YouTube video), add its domain to the matching CSP directive, or the browser will block it. Check the browser console for `Content-Security-Policy` errors after deploying.

## Accessibility

- Animations switch off for visitors who enable "reduce motion" (`MotionConfig` in `App.jsx` and the media query in `index.css`).
- The mobile menu traps focus, closes on Escape and returns focus to the menu button.
- Use `<Link>` for navigation, not `<button onClick={navigate}>`.
- Keep text contrast at 4.5:1 or more. The WhatsApp green for buttons is `#0F7A40`, because white text on the lighter `#25D366` is not readable enough.

## Deploying

- **Vercel:** connect the repo; `vercel.json` adds trailing-slash URLs and the full security-header set; pre-rendered pages and `404.html` are served as static files.
- **GitHub Pages:** `.github/workflows/deploy-pages.yml` builds with the repo sub-path (`VITE_BASE`, `VITE_SITE_URL`) and publishes on every push to `fix/nexus-security-a11y` (or run it manually from the Actions tab). In the repo, set **Settings → Pages → Source** to **GitHub Actions** once. Pages cannot send HTTP headers, so production builds also carry the CSP as a `<meta>` tag (see `vite.config.js`).

### How the build works

`npm run build` runs three steps:

1. `vite build`: the normal browser bundle in `dist/`.
2. `vite build --ssr src/entry-server.jsx`: a temporary renderer in `dist-ssr/`.
3. `scripts/prerender.mjs`: renders every route in `src/config/routes.js` to `dist/<route>/index.html` (plus `404.html`) with that page's own title, description and canonical URL, then deletes `dist-ssr/`.

Visitors get real HTML immediately (faster first paint, better SEO and link previews); React then attaches to it in the browser. When you add a page, add its `<Route>` in `src/App.jsx` **and** its path in `src/config/routes.js`. Code that touches `window` or `document` must run inside `useEffect` (or check `typeof window`), because pages are also rendered at build time in Node.

## Brand film

`public/media/brand-film-720.mp4`, `.webm` and `brand-film-poster.webp` are the M2P Nexus brand film
("From Roots to Success", about 17 seconds, silent), used by `src/components/BrandFilm.jsx` on Home and About.

- **Source:** designed and animated on a Moda canvas bound to the "M2P Nexus" brand kit
  (https://moda.app/canvas/68d920d6-78bc-4f10-8ef5-e21ed8cf8bf8). Edit the scenes there.
- **Update:** export the canvas from Moda as mp4 with scope "sequence", then run the
  **Import brand film** workflow (Actions tab) with the export link. It re-encodes the web copies and poster
  with ffmpeg and commits them here.

Scenes: paper bills, five vendors, roots becoming one connected system, the M2P Nexus tagline.

## Consultation form

Every "Book a consultation" button opens the booking page, `/book/` (Tamil: `/ta/book/`). It is a
shareable link for WhatsApp, Instagram and email signatures; `/book/?starter=website` (any id from
`src/config/starters.js`) pre-selects a starter pack. Each submission is added as a row to a Google Sheet, with Status, Follow-up date,
Owner and Notes columns for follow-ups (File > Download > Microsoft Excel gives an .xlsx copy), and is
emailed to hello@m2pnexus.com. If sending fails, the form offers to send the details on WhatsApp instead.

The live web app URL is the default in `src/config/consultation.js`. To point the site at a different
script, change it there or set the `CONSULT_ENDPOINT` repository variable (it overrides the default).

One-time setup (about 5 minutes, in the Google account that should own the leads):

1. Create a Google Sheet, e.g. "M2P Nexus: consultation requests".
2. Extensions > Apps Script. Replace the code with `docs/consultation-apps-script.gs` and save.
3. Choose the `setup` function and press Run (approve the permissions). This creates the "Enquiries" tab.
4. Deploy > New deployment > Web app. Execute as: **Me**. Who has access: **Anyone**. Copy the web app URL.
5. Put that URL in `src/config/consultation.js` (or the `CONSULT_ENDPOINT` repository variable) and deploy.
   After changing the script code later, use Deploy > Manage deployments > Edit > New version, so the
   URL stays the same.

Spam protection: a hidden honeypot field and a minimum time on the form; the script also caps field
lengths and neutralises spreadsheet formulas. Change `NOTIFY_TO` in the script to email someone else.

## Starter packs and the Tamil page

- **Starter packs** ("Start small" on Home): edit names, inclusions and typical times in
  `src/config/starters.js` (English and Tamil side by side). Each "Book this starter" button opens the
  consultation form with that service ticked, so the lead arrives tagged in the sheet.
- **Tamil** (`/ta/`): a Tamil landing page with a Tamil consultation form and closing band; the header
  switches between English and தமிழ். Form options are shown in Tamil but saved in English, and the
  Page column reads `/ta/`, so those leads can be answered in Tamil. Tamil strings live in
  `src/pages/Tamil.jsx`, `src/config/starters.js` and `src/config/consultation.js` (`formText.ta`).
  Have a native speaker review any copy changes.
