# Changelog

## 2.0.0

### New Features
- **CSS named colors** — `new Color("red")`, `new Color("coral")` etc. All 148 standard CSS named colors supported, case-insensitive
- **`setRgb`** — set individual RGB channels on a color, mirrors the existing `setHsl`
- **`analogous`** — returns the analogous color palette (original + ±30°) as a 3-color tuple
- **`triadic`** — returns the triadic color palette (original + 120° + 240°) as a 3-color tuple
- **`splitComplement`** — returns the split-complementary palette (original + 150° + 210°) as a 3-color tuple
- **`readableColor`** — returns black or white depending on which has better contrast against the given color (WCAG luminance threshold)

### Bug Fixes
- Fixed `relativeLuminance` using the wrong variable (`r` instead of `b`) for the blue channel linearization check — contrast ratios were incorrect for some colors
- Fixed `isColorValid` regex using the `/g` flag, which caused stateful matching and would alternate true/false on repeated calls
- Fixed `Color` constructor silently leaving `hex`/`rgb`/`hsl` undefined for unrecognized input — invalid colors now produce a consistent empty state detectable via `isColorValid`
- Fixed `hslToRGB` producing floating-point RGB byte values — values are now rounded at the source
- Fixed `contrast` ratio calculation containing a no-op `* 100 / 100`

### Breaking Changes
- `relativeLuminence` renamed to `relativeLuminance` (spelling fix)
- String input `"1.0"` no longer means 100% in setter functions (`setSaturation`, `setLightness`, `setAlpha`, `setHsl`). Use `100` or `"100%"` instead
- Node.js 20 or higher is now required

### Improvements
- Modernized build pipeline: removed Babel, switched `moduleResolution` to `bundler`, simplified percent/ratio handling
- Added CI workflow (lint + tests on every PR and push to main)
- Docs migrated from TypeDoc HTML to VitePress with auto-deploy to GitHub Pages
- Type guards `isHSLColor` and `isRGBColor` now validate value types, not just key existence
- `mode` parameter in `getRgb`, `getRed`, `getGreen`, `getBlue` now typed as a union instead of plain `string`
