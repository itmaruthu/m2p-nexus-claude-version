import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Hind Madurai: Tamil + Latin body text. Archivo (weight axis): headings. The expanded display cut is a
// small custom file declared in index.css (see scripts/build-display-font.py).
import '@fontsource/hind-madurai/400.css'
import '@fontsource/hind-madurai/500.css'
import '@fontsource/hind-madurai/600.css'
import '@fontsource/hind-madurai/700.css'
import '@fontsource-variable/archivo/wght.css'
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
