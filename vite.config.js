import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { routes } from './src/config/routes.js'

// Sub-path the site is served from: "/" on Vercel or a custom domain, "/<repo>/" on GitHub Pages.
const base = process.env.VITE_BASE || '/'
// Public URL of the site root (including any sub-path), used for robots.txt and the sitemap.
const siteUrl = (process.env.VITE_SITE_URL || 'https://m2pnexus.com').replace(/\/$/, '')

// Hosts such as GitHub Pages cannot send HTTP headers, so production builds also carry the CSP as a
// <meta> tag (vercel.json still sends the full header set, including frame-ancestors, which a meta tag
// cannot express). Not applied in dev: the Vite dev server relies on inline scripts.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  // Pre-rendered HTML carries framer-motion's start positions as style="" attributes. This allows inline
  // style attributes only; <style> elements and all inline scripts stay blocked.
  "style-src-attr 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  // The "Book a consultation" form posts to a Google Apps Script web app (script.google.com, which
  // redirects the response to script.googleusercontent.com).
  "connect-src 'self' https://script.google.com https://script.googleusercontent.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://script.google.com",
  'upgrade-insecure-requests',
].join('; ')

const cspMeta = {
  name: 'csp-meta',
  apply: 'build',
  transformIndexHtml: () => [
    { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: csp }, injectTo: 'head-prepend' },
    { tag: 'meta', attrs: { name: 'referrer', content: 'strict-origin-when-cross-origin' }, injectTo: 'head-prepend' },
  ],
}

// robots.txt and sitemap.xml, generated so their absolute URLs match where the build is deployed.
const seoFiles = {
  name: 'seo-files',
  apply: 'build',
  generateBundle() {
    const urls = routes.map((r) => `  <url><loc>${siteUrl}${r === '/' ? '/' : `${r}/`}</loc></url>`).join('\n')
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    })
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `User-agent: *\nAllow: /\nDisallow: ${base}connect\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    })
  },
}

// Phone numbers are never committed. Builds read them from the environment (CI variables, or a git-ignored
// .env.local for local builds) and the site receives them base64-encoded, so they are neither in the
// repository nor plain digits in the JavaScript; src/config/site.js keeps them out of the pre-rendered HTML.
// A build without them fails, so a deploy can never ship broken Call / WhatsApp buttons.
function contactDefine(command, mode) {
  const env = loadEnv(mode, process.cwd(), 'M2P_')
  const contact = { main: env.M2P_PHONE_MAIN, second: env.M2P_PHONE_SECOND, whatsapp: env.M2P_WHATSAPP }
  const missing = Object.entries({ M2P_PHONE_MAIN: contact.main, M2P_PHONE_SECOND: contact.second, M2P_WHATSAPP: contact.whatsapp })
    .filter(([, v]) => !v)
    .map(([k]) => k)
  if (command === 'build' && missing.length) {
    throw new Error(
      `Missing ${missing.join(', ')}. Set them in the build environment (GitHub: Settings > Secrets and variables > ` +
        'Actions > Variables; Vercel: Project > Settings > Environment Variables) or in a git-ignored .env.local. ' +
        'Format: M2P_PHONE_MAIN=+91XXXXXXXXXX, M2P_PHONE_SECOND=+91XXXXXXXXXX, M2P_WHATSAPP=91XXXXXXXXXX (digits only).',
    )
  }
  return JSON.stringify(Buffer.from(JSON.stringify(contact)).toString('base64'))
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
  base,
  plugins: [react(), cspMeta, seoFiles],
  define: { __M2P_CONTACT__: contactDefine(command, mode) },
}))
