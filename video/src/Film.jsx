import { useEffect, useState } from 'react';
import {
  AbsoluteFill,
  Img,
  Sequence,
  continueRender,
  delayRender,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import '@fontsource/archivo/600.css';
import '@fontsource/archivo/700.css';
import '@fontsource/hind-madurai/400.css';
import '@fontsource/hind-madurai/600.css';
import '@fontsource/hind-madurai/700.css';
import '@fontsource/kavivanar/400.css';

/**
 * The M2P Nexus brand film, drawn in code (no stock footage, no watermark). Five scenes:
 *   1. Every morning in Madurai: a handwritten bill, WhatsApp orders, "Total = ??"
 *   2. Five vendors, five follow-ups, none of them talking to each other; they fall into one seed
 *   3. The seed sprouts (the logo's sprout), roots spread and five branches connect: one partner
 *   4. The real M2P Nexus mark, with the tagline வேரிலிருந்து வெற்றிவரை / From Roots to Success
 *   5. The offer: your first consultation is free (a confirmed promise), m2pnexus.com and WhatsApp
 * Every layout reads the frame size, so the same film renders at 16:9, 4:5 and 9:16. Only facts the
 * founders have confirmed appear as claims.
 */

export const FILM_FRAMES = 600; // 20 s at 30 fps

const C = {
  ink: '#172554',
  deep: '#0E173A',
  paper: '#F4EFE3',
  sheet: '#FFFDF6',
  pen: '#2B3A8C',
  marigold: '#F2A900',
  leaf: '#1F6B3A',
  leafLight: '#3FA866',
  slate: '#CBD5E1',
  red: '#C2410C',
};
const DISPLAY = "'Archivo Expanded', 'Archivo', sans-serif";
const UI = "'Archivo', sans-serif";
const BODY = "'Hind Madurai', sans-serif";
const HAND = "'Kavivanar', 'Hind Madurai', cursive";

// ---------------------------------------------------------------------------------------------- helpers

function useLayout() {
  const { width, height, fps } = useVideoConfig();
  const portrait = height > width;
  return { width, height, fps, portrait, tall: height / width > 1.5, cx: width / 2 };
}

const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' };
const ease = (t) => 1 - Math.pow(1 - t, 3);
const ramp = (f, a, b, from = 0, to = 1) => interpolate(f, [a, b], [from, to], clamp);

function useSpring(delay, config) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 120, mass: 0.8, ...config } });
}

/** Scene wrapper: fades in over the first frames and out over the last, with a slight drift. */
function Scene({ dur, bg, children, fadeIn = 12, fadeOut = 12 }) {
  const f = useCurrentFrame();
  const o = Math.min(ramp(f, 0, fadeIn), ramp(f, dur - fadeOut, dur, 1, 0));
  return <AbsoluteFill style={{ background: bg, opacity: o }}>{children}</AbsoluteFill>;
}

/** Fonts must be ready before a frame is captured. */
function useFonts() {
  const [handle] = useState(() => delayRender('fonts'));
  useEffect(() => {
    const face = new FontFace('Archivo Expanded', `url(${staticFile('archivo-expanded.woff2')})`, { weight: '700 800' });
    document.fonts.add(face);
    Promise.all([
      face.load(),
      document.fonts.load(`600 40px Archivo`),
      document.fonts.load(`700 40px Archivo`),
      document.fonts.load(`400 40px "Hind Madurai"`, 'வேரி'),
      document.fonts.load(`700 40px "Hind Madurai"`, 'வேரி'),
      document.fonts.load(`400 40px Kavivanar`, 'Bill தேங்காய்'),
    ]).then(() => continueRender(handle));
  }, [handle]);
}

// ------------------------------------------------------------------------------------- 1. paper morning

const BILL_ROWS = [
  { text: 'தேங்காய் × 200', at: 26 },
  { text: 'Rice 25 kg × 4', at: 44 },
  { text: 'Oil 5 L × 10', at: 62 },
];
const LINES = [
  { text: 'Bills on paper.', at: 8 },
  { text: 'Orders on WhatsApp.', at: 34 },
  { text: 'Stock in a notebook.', at: 60 },
  { text: 'Payments in your head.', at: 86 },
];

function Written({ text, at, style }) {
  const f = useCurrentFrame();
  const p = ease(ramp(f, at, at + 16));
  return <div style={{ ...style, clipPath: `inset(-20% ${100 - p * 100}% -20% 0)` }}>{text}</div>;
}

function Bubble({ text, at, style }) {
  const s = useSpring(at, { damping: 13 });
  return (
    <div
      style={{
        position: 'absolute',
        background: '#DCF8C6',
        color: '#1F2937',
        fontFamily: BODY,
        fontWeight: 600,
        fontSize: 30,
        padding: '14px 22px',
        borderRadius: 22,
        borderBottomRightRadius: 6,
        boxShadow: '0 18px 40px -18px rgba(23,37,84,0.45)',
        transform: `scale(${s}) translateY(${(1 - s) * 30}px)`,
        transformOrigin: 'bottom right',
        opacity: s,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {text}
      <span style={{ marginLeft: 12, fontSize: 20, color: '#64748B' }}>✓✓</span>
    </div>
  );
}

function PaperScene() {
  const f = useCurrentFrame();
  const { width, height, portrait, tall } = useLayout();
  const billIn = useSpring(0, { damping: 18 });
  const totalAt = 96;
  const shake = f > totalAt + 10 && f < totalAt + 26 ? Math.sin(f * 2.2) * 4 : 0;
  const size = portrait ? (tall ? 60 : 58) : 80;

  const billW = portrait ? (tall ? 700 : 620) : 520;
  const billH = portrait ? (tall ? 780 : 700) : 640;
  const billX = portrait ? (width - billW) / 2 : width - billW - 120;
  const billY = portrait ? (tall ? 860 : 600) : (height - billH) / 2 + 10;

  return (
    <AbsoluteFill>
      {/* Text */}
      <div style={{ position: 'absolute', left: portrait ? 80 : 140, top: portrait ? (tall ? 250 : 120) : 300, width: portrait ? width - 160 : 1180 }}>
        <div style={{ fontFamily: HAND, fontSize: 40, color: C.leaf, opacity: ramp(f, 0, 12), marginBottom: 26 }}>Every morning in Madurai…</div>
        {LINES.map((l) => {
          const s = spring({ frame: f - l.at, fps: 30, config: { damping: 18, stiffness: 140 } });
          return (
            <div
              key={l.text}
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: size,
                lineHeight: 1.12,
                letterSpacing: '-0.015em',
                color: C.ink,
                opacity: s,
                transform: `translateY(${(1 - s) * 40}px)`,
              }}
            >
              {l.text}
            </div>
          );
        })}
      </div>

      {/* The bill */}
      <div
        style={{
          position: 'absolute',
          left: billX,
          top: billY,
          width: billW,
          height: billH,
          background: C.sheet,
          borderRadius: 10,
          boxShadow: '0 50px 90px -40px rgba(23,37,84,0.45), 0 2px 0 rgba(23,37,84,0.06)',
          transform: `rotate(${-4 + shake * 0.2}deg) translate(${shake}px, ${(1 - billIn) * 120}px)`,
          opacity: billIn,
          padding: '48px 52px',
          backgroundImage: `repeating-linear-gradient(to bottom, transparent 0 69px, rgba(43,58,140,0.12) 69px 71px)`,
          backgroundPosition: '0 112px',
        }}
      >
        <Written text="Bill No. 214" at={10} style={{ fontFamily: HAND, fontSize: 46, color: C.pen, marginBottom: 34 }} />
        {BILL_ROWS.map((r) => (
          <Written key={r.text} text={r.text} at={r.at} style={{ fontFamily: HAND, fontSize: 40, color: C.pen, height: 70, lineHeight: '70px' }} />
        ))}
        <div style={{ height: 3, background: C.pen, opacity: 0.5, width: ramp(f, 80, 92) * 100 + '%', margin: '18px 0 22px' }} />
        <Written text="Total = ??" at={totalAt} style={{ fontFamily: HAND, fontSize: 56, color: C.red }} />
      </div>

      {/* WhatsApp orders arriving */}
      <Bubble text="Need 50 coconuts tomorrow" at={40} style={{ right: portrait ? 70 : 110, top: portrait ? billY - 70 : billY - 40 }} />
      <Bubble text="Send the bill on WhatsApp?" at={70} style={{ left: portrait ? 60 : billX - 260, top: portrait ? billY + billH - 40 : billY + billH - 120 }} />
    </AbsoluteFill>
  );
}

// ---------------------------------------------------------------------------------------- 2. five vendors

const VENDORS = ['Software company', 'Website agency', 'Marketing agency', 'HR consultant', 'AI consultant'];

function VendorScene({ dur }) {
  const f = useCurrentFrame();
  const { width, height, portrait, tall, cx } = useLayout();
  const title = useSpring(0);
  const fall = ease(ramp(f, dur - 34, dur - 4)); // they fall into one seed

  const spots = portrait
    ? [[-230, -260], [200, -150], [-210, 40], [210, 210], [-40, 380]]
    : [[-560, -110], [-200, 90], [170, -150], [560, -10], [-20, 280]];
  const cy = portrait ? height * (tall ? 0.55 : 0.6) : height * 0.56;
  const stretch = tall ? 1.45 : 1;
  const seedY = height - (portrait ? (tall ? 330 : 250) : 170);
  const pos = spots.map(([x, y], i) => {
    const wob = Math.sin((f + i * 17) / 9) * 8;
    const yy = y * stretch;
    return { x: cx + x * (1 - fall), y: cy + yy + wob + (seedY - cy - yy - wob) * fall };
  });
  const pairs = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]];

  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', top: portrait ? (tall ? 220 : 120) : 120, width: '100%', textAlign: 'center', opacity: title * (1 - fall), transform: `translateY(${(1 - title) * 30}px)` }}>
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: portrait ? (tall ? 80 : 64) : 76, color: 'white', letterSpacing: '-0.015em', lineHeight: 1.1, padding: '0 60px' }}>
          Five vendors. {portrait && <br />}Five follow-ups.
        </div>
        <div style={{ fontFamily: BODY, fontSize: tall ? 42 : 36, color: C.slate, marginTop: 22 }}>None of them talk to each other.</div>
      </div>

      <svg width={width} height={height} style={{ position: 'absolute', inset: 0 }}>
        {pairs.map(([a, b], i) => {
          const at = 30 + i * 8;
          const p = ramp(f, at, at + 14);
          const broken = f > at + 22;
          const A = pos[a];
          const B = pos[b];
          const mx = (A.x + B.x) / 2;
          const my = (A.y + B.y) / 2;
          return (
            <g key={i} opacity={(1 - fall) * 0.9}>
              <line x1={A.x} y1={A.y} x2={A.x + (B.x - A.x) * p} y2={A.y + (B.y - A.y) * p} stroke={broken ? '#F87171' : 'rgba(255,255,255,0.35)'} strokeWidth="3" strokeDasharray="10 12" />
              {broken && (
                <g transform={`translate(${mx} ${my}) scale(${ramp(f, at + 22, at + 30)})`}>
                  <circle r="20" fill={C.deep} stroke="#F87171" strokeWidth="3" />
                  <path d="M-8 -8 L8 8 M8 -8 L-8 8" stroke="#F87171" strokeWidth="4" strokeLinecap="round" />
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {VENDORS.map((v, i) => {
        const s = spring({ frame: f - (6 + i * 6), fps: 30, config: { damping: 12, stiffness: 160 } });
        return (
          <div
            key={v}
            style={{
              position: 'absolute',
              left: pos[i].x,
              top: pos[i].y,
              transform: `translate(-50%, -50%) scale(${s * (1 - fall * 0.85)}) rotate(${(i % 2 ? 4 : -4) * (1 - fall)}deg)`,
              background: '#1B2A63',
              border: '2px solid rgba(255,255,255,0.18)',
              color: 'white',
              fontFamily: UI,
              fontWeight: 600,
              fontSize: tall ? 38 : portrait ? 32 : 34,
              padding: tall ? '20px 34px' : '16px 30px',
              borderRadius: 999,
              whiteSpace: 'nowrap',
              opacity: s * (1 - ramp(f, dur - 10, dur - 2)),
              boxShadow: '0 20px 50px -20px rgba(0,0,0,0.6)',
            }}
          >
            {v}
          </div>
        );
      })}
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------------------------ 3. roots to system

const BRANCHES = ['Billing & stock', 'Website & apps', 'AI & automation', 'Marketing', 'Hiring & HR'];

const bez = (p0, p1, p2, p3, t) => {
  const m = 1 - t;
  return m * m * m * p0 + 3 * m * m * t * p1 + 3 * m * t * t * p2 + t * t * t * p3;
};

function Sprout({ x, y, s }) {
  // The logo's sprout: a stem and two leaves
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 0 C0 -30 0 -50 0 -70" stroke={C.leafLight} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M0 -58 C-8 -92 -52 -100 -66 -84 C-56 -60 -22 -52 0 -58 Z" fill={C.leafLight} />
      <path d="M0 -62 C10 -98 56 -104 70 -88 C58 -64 22 -56 0 -62 Z" fill="#2E8B4E" />
    </g>
  );
}

function RootsScene() {
  const f = useCurrentFrame();
  const { width, height, portrait, tall, cx } = useLayout();
  const seedY = height - (portrait ? (tall ? 330 : 250) : 170);
  const hubY = portrait ? height * (tall ? 0.6 : 0.62) : height * 0.6;
  const rx = portrait ? 360 : 640;
  const ry = portrait ? (tall ? 520 : 400) : 330;

  const sprout = spring({ frame: f - 2, fps: 30, config: { damping: 11, stiffness: 120 } });
  const trunk = ease(ramp(f, 10, 30));
  const rootsP = ease(ramp(f, 6, 34));

  const nodes = BRANCHES.map((label, i) => {
    const a = (200 + (140 / (BRANCHES.length - 1)) * i) * (Math.PI / 180);
    return { label, x: cx + rx * Math.cos(a), y: hubY + ry * Math.sin(a) };
  });

  const headline = spring({ frame: f - 92, fps: 30, config: { damping: 18 } });
  const roots = [
    `M${cx} ${seedY} C ${cx - 40} ${seedY + 60}, ${cx - 160} ${seedY + 70}, ${cx - 260} ${seedY + 150}`,
    `M${cx} ${seedY} C ${cx} ${seedY + 70}, ${cx + 10} ${seedY + 110}, ${cx} ${seedY + 190}`,
    `M${cx} ${seedY} C ${cx + 40} ${seedY + 60}, ${cx + 160} ${seedY + 70}, ${cx + 260} ${seedY + 150}`,
  ];

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ background: `radial-gradient(45% 40% at 50% ${(hubY / height) * 100}%, rgba(242,169,0,${0.2 * ramp(f, 40, 90)}), transparent 70%)` }} />
      <svg width={width} height={height} style={{ position: 'absolute', inset: 0 }}>
        {/* ground line */}
        <line x1={cx - 420} y1={seedY} x2={cx + 420} y2={seedY} stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        {roots.map((d) => (
          <path key={d} d={d} pathLength="1" stroke={C.leafLight} strokeOpacity="0.75" strokeWidth="5" strokeLinecap="round" fill="none" strokeDasharray="1" strokeDashoffset={1 - rootsP} />
        ))}
        {/* trunk: seed up to the hub */}
        <line x1={cx} y1={seedY} x2={cx} y2={seedY + (hubY - seedY) * trunk} stroke={C.leafLight} strokeWidth="6" strokeLinecap="round" />

        {nodes.map((n, i) => {
          const at = 28 + i * 7;
          const p = ease(ramp(f, at, at + 24));
          const c1 = { x: cx, y: hubY - 140 };
          const c2 = { x: n.x, y: n.y + 160 };
          const d = `M${cx} ${hubY} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${n.x} ${n.y}`;
          // one pulse per branch, once
          const pt = ramp(f, at + 40, at + 64);
          const px = bez(cx, c1.x, c2.x, n.x, pt);
          const py = bez(hubY, c1.y, c2.y, n.y, pt);
          return (
            <g key={n.label}>
              <path d={d} pathLength="1" stroke="rgba(214,224,240,0.7)" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="1" strokeDashoffset={1 - p} />
              {pt > 0 && pt < 1 && <circle cx={px} cy={py} r="9" fill={C.marigold} />}
            </g>
          );
        })}
        <circle cx={cx} cy={hubY} r={14 * trunk} fill={C.marigold} />
        <Sprout x={cx} y={seedY} s={sprout * 1.3} />
      </svg>

      {/* node labels */}
      {nodes.map((n, i) => {
        const s = spring({ frame: f - (46 + i * 7), fps: 30, config: { damping: 12, stiffness: 170 } });
        return (
          <div key={n.label} style={{ position: 'absolute', left: n.x, top: n.y, transform: `translate(-50%, -50%) scale(${s})`, opacity: s }}>
            <div style={{ width: 30, height: 30, borderRadius: 99, background: C.marigold, margin: '0 auto', boxShadow: '0 0 40px 10px rgba(242,169,0,0.45)' }} />
            <div style={{ position: 'absolute', bottom: 46, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontFamily: UI, fontWeight: 700, fontSize: portrait ? 32 : 34, color: 'white', background: 'rgba(14,23,58,0.85)', border: '2px solid rgba(255,255,255,0.15)', padding: '10px 22px', borderRadius: 14 }}>
              {n.label}
            </div>
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: cx + 30, top: hubY + 18, fontFamily: HAND, fontSize: 34, color: C.leafLight, opacity: ramp(f, 30, 44) }}>your business</div>

      <div
        style={{
          position: 'absolute',
          ...(portrait ? { top: tall ? 200 : 100, width: '100%', textAlign: 'center' } : { left: 140, bottom: 150 }),
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: portrait ? 66 : 70,
          lineHeight: 1.08,
          letterSpacing: '-0.015em',
          color: 'white',
          opacity: headline,
          transform: `translateY(${(1 - headline) * 30}px)`,
        }}
      >
        One partner.
        <br />
        <span style={{ color: C.marigold }}>All connected.</span>
      </div>
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------------------------------- 4. the mark

function Rules({ children, size }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22 }}>
      <span style={{ width: size * 1.6, height: 3, background: C.leafLight }} />
      {children}
      <span style={{ width: size * 1.6, height: 3, background: C.leafLight }} />
    </div>
  );
}

function MarkScene() {
  const f = useCurrentFrame();
  const { portrait } = useLayout();
  const s = spring({ frame: f - 4, fps: 30, config: { damping: 14, stiffness: 90 } });
  const tag = spring({ frame: f - 26, fps: 30, config: { damping: 18 } });
  const en = spring({ frame: f - 38, fps: 30, config: { damping: 18 } });
  const w = portrait ? 680 : 620;
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
      <AbsoluteFill style={{ background: `radial-gradient(35% 35% at 50% 45%, rgba(63,168,102,${0.22 * s}), transparent 70%)` }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30 }}>
        <Img src={staticFile('logo-mark.png')} style={{ width: w, transform: `scale(${0.82 + 0.18 * s})`, opacity: s }} />
        <div style={{ opacity: tag, transform: `translateY(${(1 - tag) * 20}px)` }}>
          <Rules size={30}>
            <span lang="ta" style={{ fontFamily: BODY, fontWeight: 700, fontSize: portrait ? 50 : 48, color: 'white' }}>
              வேரிலிருந்து வெற்றிவரை
            </span>
          </Rules>
        </div>
        <div style={{ fontFamily: UI, fontWeight: 600, fontSize: portrait ? 40 : 38, color: C.marigold, opacity: en, transform: `translateY(${(1 - en) * 16}px)` }}>
          From Roots to Success
        </div>
      </div>
    </AbsoluteFill>
  );
}

// ------------------------------------------------------------------------------------------ 5. the offer

function WhatsAppGlyph({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8Z" />
    </svg>
  );
}

function OfferScene() {
  const f = useCurrentFrame();
  const { portrait, tall } = useLayout();
  const a = spring({ frame: f - 2, fps: 30, config: { damping: 18 } });
  const b = spring({ frame: f - 14, fps: 30, config: { damping: 18 } });
  const c = spring({ frame: f - 26, fps: 30, config: { damping: 14 } });
  const up = (s) => ({ opacity: s, transform: `translateY(${(1 - s) * 30}px)` });
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: portrait ? '0 70px' : '0 160px', textAlign: 'center' }}>
      <Img src={staticFile('logo-mark.png')} style={{ width: tall ? 320 : portrait ? 220 : 220, marginBottom: tall ? 90 : 60, ...up(a) }} />
      <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: portrait ? (tall ? 88 : 64) : 82, lineHeight: 1.08, letterSpacing: '-0.02em', color: 'white', width: '100%', ...up(a) }}>
        Your first consultation {portrait && <br />}is <span style={{ color: C.marigold }}>free.</span>
      </div>
      <div style={{ fontFamily: BODY, fontSize: tall ? 46 : 38, color: C.slate, marginTop: 30, maxWidth: 1100, lineHeight: 1.4, ...up(b) }}>
        Tell us how your business runs today. We reply within one working day, in Tamil or English.
      </div>
      <div style={{ display: 'flex', flexDirection: portrait ? 'column' : 'row', gap: 22, marginTop: tall ? 90 : 56, ...up(c) }}>
        <div style={{ background: C.marigold, color: C.ink, fontFamily: UI, fontWeight: 700, fontSize: tall ? 48 : 40, padding: tall ? '30px 56px' : '24px 48px', borderRadius: 20 }}>Book at m2pnexus.com</div>
        <div style={{ background: C.leaf, color: 'white', fontFamily: UI, fontWeight: 700, fontSize: tall ? 48 : 40, padding: tall ? '30px 56px' : '24px 48px', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <WhatsAppGlyph size={42} />
          WhatsApp us
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: portrait ? (tall ? 150 : 80) : 70, fontFamily: BODY, fontSize: 30, color: '#94A3B8', opacity: ramp(f, 30, 44) }}>
        Software · Websites · AI · Marketing · Hiring, from one team in Madurai
      </div>
    </AbsoluteFill>
  );
}

// ----------------------------------------------------------------------------------------------- film

const NIGHT = `radial-gradient(70% 60% at 50% 55%, #1E2F6E 0%, ${C.ink} 45%, ${C.deep} 100%)`;
const SCENES = [
  { from: 0, dur: 150, bg: C.paper, Comp: PaperScene, fadeIn: 1 },
  { from: 140, dur: 140, bg: NIGHT, Comp: VendorScene },
  { from: 274, dur: 156, bg: NIGHT, Comp: RootsScene, fadeIn: 6 },
  { from: 420, dur: 92, bg: NIGHT, Comp: MarkScene },
  { from: 502, dur: 98, bg: NIGHT, Comp: OfferScene, fadeOut: 1 },
];

export function Film() {
  useFonts();
  return (
    <AbsoluteFill style={{ background: C.deep }}>
      {SCENES.map(({ from, dur, bg, Comp, fadeIn, fadeOut }) => (
        <Sequence key={from} from={from} durationInFrames={dur}>
          <Scene dur={dur} bg={bg} fadeIn={fadeIn} fadeOut={fadeOut}>
            <Comp dur={dur} />
          </Scene>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
}
