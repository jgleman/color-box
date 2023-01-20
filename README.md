# color-box

A JavaScript/TypeScript Color Utility Library (inspired by [date-fns](https://date-fns.org)).

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

### To Do List

- more functionality, including:
  - adjustSaturation, adjustLightness, getRed, setRed, getGreen, setGreen,
    getBlue, setBlue, adjustAlpha, removeAlpha, invert
- additional color formats (hsv, hwb, cmyk)
- optimizations
- demo/project Web site
- so, so much more

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

A `Color` object represents the color you have entered internally as HEX, RGB and HSL. Once you have created a Color, you can use that color in any of the provided functions:

```JavaScript
import { Color, darken, hexString } from "@jgleman/color-box";

const myColor = new Color("#336699");
const myDarkerColor = darken(myColor, 20);
console.log(hexString(myDarkerColor));
// #1a334d
```
