# color-box

Another JS/TS Color Utility Library (inspired by [date-fns](https://date-fns.org)).

I started writing this set of color utilities as a way for me to learn
TypeScript and publishing on npm. If you need a color library today, there are
quite a few libraries out there for working with colors in
JavaScript already.

To Do List:

- more functionality (mix, desaturate, etc)
- alpha support
- additional color formats
- clean up API
- testing
- documentation
- so, so much more

Usage (eventually):

### Install

```
npm install --save @jgleman/color-box
```

### Use

JavaScript does not have a native color object, this library provides one:

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

A color object represents the color you have entered internally as HEX, RGB and HSL. Once you have created a Color, you can use that color in any of the provided functions:

```JavaScript
import { Color, darken, hexString } from "@jgleman/color-box";

const myColor = new Color("#336699");
const myDarkerColor = darken(myColor, 20);
console.log(hexString(myDarkerColor));
// #1a334d
```

- `hexString(color: Color): string`
  - Returns the color in hexadecimal, formatted as CSS property value e.g. `#336699`.
- `rgbString(color: Color): string`
  - Returns the color in RGB, formatted as CSS property value e.g. `rgb(51 102 153)`.
- `hslString(color: Color): string`
  - Returns the color in HSL, formatted as CSS property value e.g. `hsl(210 50% 40%)`.
- `lighten(color: Color, percentage: number): Color`
  - Returns a new Color object.
- `darken(color: Color, percentage: number): Color`
  - Returns a new Color object.
- `contrast(color1: Color, color2: Color): string`
  - Returns a string representing the contrast ratio as defined by [WCAG 2](https://www.w3.org/WAI/GL/wiki/Contrast_ratio) , e.g. 4.3:1.
- `relativeLuminance(color: Color): number`
  - Returns the relative brightness of a colors, normalized to 0 for darkest black and 1 for lightest white [WCAG 2](https://www.w3.org/WAI/GL/wiki/Relative_luminance).
- `isColorValid(color: Color): Boolean`
  - Returns true if the Color object contains a valid color, false otherwise.
