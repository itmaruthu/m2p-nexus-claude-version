# M2P Nexus brand film

The 20-second brand film on the Home page, drawn in code with [Remotion](https://www.remotion.dev/).
There is no stock footage and no watermark, and every word on screen is editable here.

| Scene | Frames | What happens |
| --- | --- | --- |
| 1. Every morning in Madurai | 0–150 | A handwritten bill, WhatsApp orders arriving, "Total = ??" |
| 2. Five vendors | 140–280 | Five vendors that don't talk to each other fall into one seed |
| 3. Roots to system | 274–430 | The logo's sprout grows; five branches connect: one partner |
| 4. The mark | 420–512 | The M2P Nexus logo with வேரிலிருந்து வெற்றிவரை / From Roots to Success |
| 5. The offer | 502–600 | Your first consultation is free; m2pnexus.com and WhatsApp |

One composition renders three frames: `film-16x9` (1920×1080, desktop), `film-4x5` (1080×1350, phones and
the Instagram feed) and `film-9x16` (1080×1920, Reels and WhatsApp Status). Claims on screen are only
facts the founders have confirmed (src/config/promises.js in the site).

## Edit and render

```sh
cd video
npm install
npm run studio          # live preview in the browser
CHROME_PATH=/path/to/chrome node render.mjs            # all three cuts + web copies in ../public/media
CHROME_PATH=/path/to/chrome node render.mjs film-9x16  # one cut only (master in out/)
CHROME_PATH=/path/to/chrome node render.mjs stills film-16x9 60,300,560   # review stills
```

`render.mjs` writes masters to `out/` (not committed) and encodes the silent web copies and posters into
`../public/media/` with ffmpeg. Fonts: Archivo Expanded (the site's trimmed display font, in `public/`),
Archivo, Hind Madurai and Kavivanar via @fontsource. `public/logo-mark.png` is the logo reversed for dark
backgrounds, made from the 1536px original.
