import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/inter'
import '@fontsource-variable/outfit'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    {/* basename keeps routes working when the site is served from a sub-path (GitHub Pages). */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

const root = document.getElementById('root')
// Production pages are pre-rendered (scripts/prerender.mjs), so attach to that HTML; dev starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
