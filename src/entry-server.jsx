// Build-time renderer used by scripts/prerender.mjs; never shipped to the browser.
import { StrictMode } from 'react'
import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import App from './App.jsx'
import { SeoContext } from './components/seoContext.js'

/** Renders one URL to HTML, waiting for lazy pages, and returns it with that page's SEO tags. */
export async function render(url) {
  let seo = null
  const collect = (tags) => {
    seo = tags
  }
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <SeoContext.Provider value={collect}>
        <StaticRouter location={url} basename={import.meta.env.BASE_URL}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </StrictMode>,
    // React splits large Suspense content into a hidden chunk plus an inline <script> to stream it
    // progressively. Static files gain nothing from that, and the CSP would block the script.
    { progressiveChunkSize: Number.POSITIVE_INFINITY },
  )
  let html = ''
  for await (const chunk of prelude) html += chunk
  return { html, seo }
}
