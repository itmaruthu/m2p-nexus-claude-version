// Renders the brand film. `node render.mjs` renders all three formats into out/ and then encodes the web
// copies into ../public/media; `node render.mjs stills <comp> <frame,frame,...>` renders review stills.
// Uses the Chromium given in CHROME_PATH (or Remotion's own download when unset).
import { bundle } from '@remotion/bundler';
import { renderMedia, renderStill, selectComposition } from '@remotion/renderer';
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const here = path.dirname(new URL(import.meta.url).pathname);
const out = path.join(here, 'out');
const media = path.join(here, '..', 'public', 'media');
mkdirSync(out, { recursive: true });
const browserExecutable = process.env.CHROME_PATH || null;
const chromiumOptions = { gl: 'swangle' };

const serveUrl = await bundle({ entryPoint: path.join(here, 'src', 'index.js') });
const comp = (id) => selectComposition({ serveUrl, id, browserExecutable, chromiumOptions });

if (process.argv[2] === 'stills') {
  const c = await comp(process.argv[3]);
  for (const frame of process.argv[4].split(',').map(Number)) {
    await renderStill({ composition: c, serveUrl, frame, output: path.join(out, `${c.id}-${frame}.png`), browserExecutable, chromiumOptions });
    console.log('still', c.id, frame);
  }
  process.exit(0);
}

const ids = process.argv[2] ? [process.argv[2]] : ['film-16x9', 'film-4x5', 'film-9x16'];
for (const id of ids) {
  const c = await comp(id);
  const master = path.join(out, `${id}.mp4`);
  await renderMedia({
    composition: c,
    serveUrl,
    codec: 'h264',
    crf: 16,
    muted: true,
    concurrency: os.cpus().length,
    outputLocation: master,
    browserExecutable,
    chromiumOptions,
    onProgress: ({ progress }) => process.stdout.write(`\r${id} ${Math.round(progress * 100)}%`),
  });
  console.log(`\n${id} master done`);
}

// Web copies (silent, streaming-friendly): 16:9 for desktop, 4:5 for phones; posters from the logo scene.
const enc = (args) => execFileSync('ffmpeg', ['-y', '-v', 'error', ...args], { stdio: 'inherit' });
for (const [id, name, scale] of [['film-16x9', 'brand-film', '1920:-2'], ['film-4x5', 'brand-film-4x5', '1080:-2']]) {
  const m = path.join(out, `${id}.mp4`);
  try {
    enc(['-i', m, '-an', '-vf', `scale=${scale}`, '-c:v', 'libx264', '-profile:v', 'high', '-preset', 'slow', '-crf', '25', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(media, `${name}.mp4`)]);
    enc(['-i', m, '-an', '-vf', `scale=${scale}`, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '36', '-row-mt', '1', path.join(media, `${name}.webm`)]);
    enc(['-ss', '15.6', '-i', m, '-frames:v', '1', '-vf', `scale=${scale}`, '-c:v', 'libwebp', '-quality', '80', path.join(media, `${name}-poster.webp`)]);
  } catch (e) {
    console.log('skip web copy for', id, e.message);
  }
}
// Social cuts with the synthesised score (audio/score.py): Reels / Status (9:16) and the Instagram feed (4:5).
try {
  const score = path.join(out, 'score.wav');
  execFileSync('python3', [path.join(here, 'audio', 'score.py'), score], { stdio: 'inherit' });
  for (const [id, name] of [['film-9x16', 'm2p-nexus-reel-9x16'], ['film-4x5', 'm2p-nexus-feed-4x5']]) {
    enc(['-i', path.join(out, `${id}.mp4`), '-i', score, '-map', '0:v', '-map', '1:a', '-c:v', 'libx264', '-crf', '18', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', path.join(out, `${name}.mp4`)]);
  }
} catch (e) {
  console.log('skip social cuts', e.message);
}
console.log('done');
