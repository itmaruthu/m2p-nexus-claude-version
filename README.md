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
npm run build     # production build in dist/
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
