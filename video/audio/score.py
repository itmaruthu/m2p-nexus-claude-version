"""Synthesised score for the social cut of the brand film (20 s, 48 kHz stereo WAV). No samples, no
licences: pads, plucks and bells are generated here and timed to the film's scenes (30 fps frames).

  Scene 1 (0-150)   B minor, light plucks: a busy morning
  Scene 2 (140-280) low pulse on B minor / G: five vendors, tension
  Scene 3 (274-430) G -> D -> A, rising arpeggio, a chime as each branch connects
  Scene 4 (420-512) D major bell chord on the logo
  Scene 5 (502-600) settles on D with a soft final chime

Run: python3 score.py out.wav
"""
import sys
import wave
import numpy as np

SR = 48000
DUR = 20.0
N = int(SR * DUR)
t_all = np.arange(N) / SR
L = np.zeros(N)
R = np.zeros(N)
f2s = lambda frame: frame / 30.0
hz = lambda midi: 440.0 * 2 ** ((midi - 69) / 12)


def add(sig, start, pan=0.0, gain=1.0):
    i = int(start * SR)
    if i >= N:
        return
    sig = sig[: N - i] * gain
    L[i : i + len(sig)] += sig * np.sqrt(0.5 * (1 - pan))
    R[i : i + len(sig)] += sig * np.sqrt(0.5 * (1 + pan))


def env(n, a, d, s_level, r, total):
    """ADSR envelope (seconds) over `total` seconds."""
    tt = np.arange(int(total * SR)) / SR
    e = np.where(tt < a, (tt / max(a, 1e-4)) ** 2, s_level + (1 - s_level) * np.exp(-(tt - a) / max(d, 1e-4)))
    rel_start = total - r
    e = np.where(tt > rel_start, e * np.clip((total - tt) / r, 0, 1), e)
    return e


def lowpass(x, cutoff):
    a = np.exp(-2 * np.pi * cutoff / SR)
    y = np.empty_like(x)
    acc = 0.0
    for i, v in enumerate(x):  # one-pole; short signals only
        acc = (1 - a) * v + a * acc
        y[i] = acc
    return y


def pad(notes, start, length, gain=0.06, cutoff=1400):
    tt = np.arange(int(length * SR)) / SR
    sig = np.zeros_like(tt)
    for m in notes:
        for det in (-0.12, 0.0, 0.12):
            f = hz(m + det / 12 * 1.0)
            ph = (tt * f) % 1.0
            sig += (2 * ph - 1) * 0.33  # saw
    sig = lowpass(sig, cutoff) * env(None, 1.2, 1.0, 0.85, 1.4, length)
    add(sig, start, pan=-0.2, gain=gain)
    add(sig, start + 0.012, pan=0.2, gain=gain)


def pluck(m, start, gain=0.12, pan=0.0, decay=0.35):
    length = 1.4
    tt = np.arange(int(length * SR)) / SR
    f = hz(m)
    sig = (np.sin(2 * np.pi * f * tt) + 0.35 * np.sin(2 * np.pi * 2 * f * tt) + 0.12 * np.sin(2 * np.pi * 3 * f * tt))
    sig *= np.exp(-tt / decay) * np.clip(tt / 0.004, 0, 1)
    add(sig, start, pan=pan, gain=gain)


def bell(m, start, gain=0.1, pan=0.0, decay=1.6):
    length = 4.0
    tt = np.arange(int(length * SR)) / SR
    f = hz(m)
    mod = np.sin(2 * np.pi * f * 3.5 * tt) * 2.2 * np.exp(-tt / 0.5)  # FM bell
    sig = np.sin(2 * np.pi * f * tt + mod) * np.exp(-tt / decay) * np.clip(tt / 0.003, 0, 1)
    add(sig, start, pan=pan, gain=gain)


def pulse(m, start, gain=0.16):
    length = 0.5
    tt = np.arange(int(length * SR)) / SR
    f = hz(m)
    sig = np.sin(2 * np.pi * f * tt) * np.exp(-tt / 0.18) * np.clip(tt / 0.01, 0, 1)
    add(sig, start, gain=gain)


B, D, Fs, G, A, E = 47, 50, 54, 55, 57, 52  # B2 D3 F#3 G3 A3 E3

# Scene 1: B minor pad and busy light plucks (a morning of small jobs)
pad([B, D + 12, Fs + 12], 0.0, 5.2, gain=0.045)
for k, m in enumerate([71, 74, 78, 74, 71, 76, 74, 69, 71, 74, 78, 81, 78, 74]):
    pluck(m, 0.25 + k * 0.32, gain=0.07, pan=(-0.4 if k % 2 else 0.4))

# Scene 2: tension, low pulse under B minor then G
pad([B, Fs, D + 12], f2s(140), 4.8, gain=0.05, cutoff=900)
for k in range(12):
    pulse(B - 12 if k < 6 else G - 12, f2s(146) + k * 0.375, gain=0.07)
for k, m in enumerate([66, 69, 66, 64, 66]):
    pluck(m, f2s(150) + k * 0.6 + 0.3, gain=0.05, pan=0.5 - k * 0.25, decay=0.25)

# Scene 3: roots to system, G -> D -> A, rising arpeggio and a chime per branch
pad([G, D + 12, G + 12, B + 12], f2s(274), 2.4, gain=0.06, cutoff=1800)
pad([D, A, D + 12, Fs + 12], f2s(274) + 2.2, 3.0, gain=0.06, cutoff=2200)
for k, m in enumerate([62, 66, 69, 74, 78, 81, 86]):
    pluck(m, f2s(284) + k * 0.19, gain=0.07, pan=-0.6 + k * 0.2, decay=0.5)
for i, m in enumerate([78, 81, 83, 86, 90]):
    bell(m, f2s(274 + 46 + i * 7), gain=0.05, pan=-0.6 + i * 0.3, decay=1.0)

# Scene 4: the mark, a D major bell chord
pad([D, A, D + 12, Fs + 12, A + 12], f2s(414), 4.2, gain=0.05, cutoff=2400)
for m, p in [(62, -0.3), (66, 0.0), (69, 0.3), (74, 0.0)]:
    bell(m + 12, f2s(424), gain=0.045, pan=p, decay=2.2)

# Scene 5: the offer, settle on D with one soft chime at the end
pad([D, A, D + 12, E + 12, Fs + 12], f2s(502), 3.3, gain=0.055, cutoff=2000)
bell(86, f2s(530), gain=0.05, pan=0.2, decay=2.0)

# master: gentle fade in/out, normalise to -1 dBFS peak
fade = np.clip(t_all / 0.15, 0, 1) * np.clip((DUR - t_all) / 0.8, 0, 1)
mix = np.stack([L * fade, R * fade], axis=1)
mix = np.tanh(mix * 1.2)  # soft saturation, keeps peaks round
mix /= np.max(np.abs(mix)) / 10 ** (-1 / 20)
out = sys.argv[1] if len(sys.argv) > 1 else 'score.wav'
with wave.open(out, 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((mix * 32767).astype('<i2').tobytes())
print('wrote', out)
