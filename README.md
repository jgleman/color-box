# color-box

A JavaScript/TypeScript Color Utility Library (inspired by [date-fns](https://date-fns.org)).

[Demo Website](https://jgleman.com/color-box/) (work in progress) | [Documentation](https://jgleman.github.io/color-box/)

### About

This library aims to work like date-fns does for dates, but for colors. This
library provides a basic Color object which is then passed to the utility
functions. Any utility function that changes the passed in color, does so
immutably, returning a new color. Another goal is for any color manipulation
functions to match the [Sass spec](https://github.com/sass/sass-spec) where it
makes sense.

- Modular, only use what you need. Supports tree-shaking.
- Immutable, always returns a new color instance.
- TypeScript support

**v2.0.0 highlights:** CSS named colors, color harmony functions (`analogous`, `triadic`, `splitComplement`), `readableColor`, and `setRgb`.

### Install

```
npm install --save @jgleman/color-box
```

### Quick Usage

See the [documentation](https://jgleman.github.io/color-box/) for more info on all available functions.

```JavaScript
import { Color } from "@jgleman/color-box"
```

To create a new color, you can provide a color as a string in either hex:

```JavaScript
const myColor = new Color("#336699");
```

RGB:

```JavaScript
const myColor = new Color("rgb(51 102 153)");
```

HSL:

```JavaScript
const myColor = new Color("hsl(210 50% 40%)");
```

CSS named color:

```JavaScript
const myColor = new Color("coral");
const myColor = new Color("rebeccapurple");
```

A `Color` object represents the color you have entered internally as HEX, RGB and HSL. Once you have created a Color, you can use that color in any of the provided functions:

```JavaScript
import { Color, darken, hexString } from "@jgleman/color-box";

const myColor = new Color("#336699");
const myDarkerColor = darken(myColor, 20);
console.log(hexString(myDarkerColor));
// #1a334d
```

**Color harmony:**

```JavaScript
import { Color, analogous, triadic, splitComplement, hexString } from "@jgleman/color-box";
const [original, plus30, minus30] = analogous(myColor);
const [original, plus120, plus240] = triadic(myColor);
const [original, plus150, plus210] = splitComplement(myColor);
```

**Readable text color:**

```JavaScript
import { Color, readableColor, hexString } from "@jgleman/color-box";
const textColor = readableColor(new Color("#336699")); // returns white or black
```

**Set individual RGB channels:**

```JavaScript
import { Color, setRgb, hexString } from "@jgleman/color-box";
const newColor = setRgb(myColor, { r: 255 }); // only changes the red channel
```

### Breaking Changes from 1.x

- Node.js 20 or higher is now required
- `relativeLuminence` renamed to `relativeLuminance` (spelling fix)
- String input `"1.0"` no longer means 100% in setter functions (`setSaturation`, `setLightness`, `setAlpha`, `setHsl`). Use `100` or `"100%"` instead.
