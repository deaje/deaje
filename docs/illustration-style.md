# Illustration style guide

All illustrations on the site share one look: **flat, hand-drawn ink doodles on warm paper**.
Until real ones exist, the site uses code-drawn SVG placeholders in `src/components/art/`.

## Palette (use only these)

| Role  | Hex       |
|-------|-----------|
| Ink (outlines) | `#2b2a4c` |
| Paper (background) | `#ece3d0` |
| Card / highlights | `#f7f1e3` |
| Ochre | `#c98a2b` |
| Sage  | `#7d8f69` |
| Rose  | `#c76d5e` |

## Master prompt

Copy this, then replace `{SUBJECT}` only. Keep everything else identical so every image matches.

```
A minimalist hand-drawn illustration of {SUBJECT}, drawn with a slightly wobbly
dark indigo ink line (#2b2a4c) of even 3px weight, rounded line caps, imperfect
like a fine-liner sketch. Flat fills only, no gradients, no shading, no 3D,
limited palette: ochre #c98a2b, sage green #7d8f69, terracotta rose #c76d5e,
cream #f7f1e3. Background is warm beige paper #ece3d0 with subtle paper grain.
Lots of empty space, simple shapes, 3 to 6 objects, slightly naive and friendly,
editorial journal style. No text, no letters, no people's faces, no logos,
no frame, no border. Centered composition, 4:3 aspect ratio.
```

Negative prompt (for tools that support it):
`photorealistic, 3d render, gradient, glossy, shadows, text, watermark, signature, busy background, neon, thick outlines`

## Subjects in use

| Slot (`src/config.ts → ILLUSTRATIONS`) | `{SUBJECT}` |
|---|---|
| `hero` | an early-morning desk with an open laptop, a terracotta coffee cup with steam, a single sage leaf and a small ochre sun |
| `about` | an open paper notebook with a few lines of scribbles and a check mark, an ochre pencil lying across it, a small sprig of leaves |
| `writing` | two handwritten pages loosely taped together at slightly different angles, with a small curved arrow |
| `lost` | a paper airplane flying away along a dotted loop |
| post cover (optional) | describe one object from the post, e.g. "a stack of index cards held by a binder clip" |

## Adding an image

1. Export as **WebP**, 1600px wide (about 1600×1200), under 200 KB.
2. Save it in `public/illustrations/`, e.g. `public/illustrations/hero.webp`.
3. Set the path in `src/config.ts`:
   ```ts
   export const ILLUSTRATIONS = { hero: '/illustrations/hero.webp', ... };
   ```
4. The placeholder SVG is used automatically for any slot left empty.

Tips: generate 4 to 8 variations per subject and pick the one whose line weight matches the others;
if the background color drifts, fix it in an editor to exactly `#ece3d0` (or make it transparent).
