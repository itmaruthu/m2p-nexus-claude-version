import { defineConfig } from 'vite'
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
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
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
      source: `User-agent: *\nAllow: /\nDisallow: /connect\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), cspMeta, seoFiles],
})
