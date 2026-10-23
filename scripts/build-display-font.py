"""Builds src/assets/fonts/archivo-expanded.woff2: Archivo pinned at 125% width, weights 700-800, basic Latin
plus typographic quotes and dashes. Used only for the big display headlines (font-display), so the page does
not download the full width+weight variable font (~175 KB) for a handful of words.

Run after `npm install` with fontTools and brotli available:
    python -m venv .venv && .venv/bin/pip install fonttools brotli
    .venv/bin/python scripts/build-display-font.py
"""
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools import subset

SRC = "node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2"
OUT = "src/assets/fonts/archivo-expanded.woff2"

font = TTFont(SRC)
font = instantiateVariableFont(font, {"wdth": 125, "wght": (700, 800)})

options = subset.Options()
options.flavor = "woff2"
options.layout_features = ["kern", "liga", "calt", "case", "tnum", "lnum"]
options.name_IDs = ["*"]
subsetter = subset.Subsetter(options)
# Printable ASCII, Latin-1, and the quotes / dashes / ellipsis used in headlines.
unicodes = list(range(0x20, 0x7F)) + list(range(0xA0, 0x100)) + [0x2013, 0x2014, 0x2018, 0x2019, 0x201C, 0x201D, 0x2026]
subsetter.populate(unicodes=unicodes)
subsetter.subset(font)
font.flavor = "woff2"
font.save(OUT)
print("wrote", OUT)
