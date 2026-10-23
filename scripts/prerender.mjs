// Pre-renders every route to static HTML after `vite build` (client) and `vite build --ssr` (renderer).
// Each page then has real content and its own <title>/description/canonical before any JavaScript runs,
// which helps load speed, search engines and link previews (WhatsApp, LinkedIn).
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { routes, unlistedRoutes } from '../src/config/routes.js'

const dist = path.resolve('dist')
const ssrEntry = path.resolve('dist-ssr/entry-server.js')
const base = (process.env.VITE_BASE || '/').replace(/\/$/, '')
const siteUrl = (process.env.VITE_SITE_URL || 'https://m2pnexus.com').replace(/\/$/, '')

const { render } = await import(pathToFileURL(ssrEntry).href)
const template = await readFile(path.join(dist, 'index.html'), 'utf8')

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function page(appHtml, seo, canonical) {
  const head = [
    `<meta property="og:title" content="${escapeHtml(seo.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    canonical && `<meta property="og:url" content="${canonical}" />`,
    canonical && `<link rel="canonical" href="${canonical}" />`,
    seo.noindex && '<meta name="robots" content="noindex" />',
  ].filter(Boolean)
  const out = template
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/?>/s, `<meta name="description" content="${escapeHtml(seo.description)}" />`)
    .replace('</head>', `    ${head.join('\n    ')}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  if (out === template || !out.includes(appHtml)) throw new Error('Template markers not found in dist/index.html')
  return out
}

for (const route of [...routes, ...unlistedRoutes]) {
  // Render at the URL the browser will show (/about/), so hydration sees the same path.
  const { html, seo } = await render(`${base}${route === '/' ? '/' : `${route}/`}`)
  if (!seo) throw new Error(`${route} rendered no <Seo> tags`)
  const canonical = unlistedRoutes.includes(route) ? null : `${siteUrl}${route === '/' ? '/' : `${route}/`}`
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html')
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, page(html, seo, canonical))
  console.log('prerendered', route, '->', path.relative(dist, file))
}

// Any URL that matches no route renders the app's 404 page; hosts serve this file for unknown paths.
const notFound = await render(`${base}/__not-found__`)
await writeFile(path.join(dist, '404.html'), page(notFound.html, notFound.seo, null))
console.log('prerendered 404 -> 404.html')

await rm(path.resolve('dist-ssr'), { recursive: true, force: true })
