import { Composition } from 'remotion';
import { Film, FILM_FRAMES } from './Film';

// One film, three frames: 16:9 for desktop, 4:5 for phones (and the Instagram feed), 9:16 for Reels and
// WhatsApp Status. The layout inside Film adapts to the frame.
export const Root = () => (
  <>
    <Composition id="film-16x9" component={Film} durationInFrames={FILM_FRAMES} fps={30} width={1920} height={1080} />
    <Composition id="film-4x5" component={Film} durationInFrames={FILM_FRAMES} fps={30} width={1080} height={1350} />
    <Composition id="film-9x16" component={Film} durationInFrames={FILM_FRAMES} fps={30} width={1080} height={1920} />
  </>
);
