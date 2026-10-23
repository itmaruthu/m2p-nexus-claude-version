import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sub-path the site is served from: "/" on Vercel or a custom domain, "/<repo>/" on GitHub Pages.
const base = process.env.VITE_BASE || '/'

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

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), cspMeta],
})
