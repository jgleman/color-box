# color-box

Another JavaScript/TypeScript Color Utility Library (inspired by [date-fns](https://date-fns.org)).

_I started writing this set of color utilities as a way for me to learn
TypeScript and publishing on npm. If you need a color library today, there are
quite a few libraries out there for working with colors in
JavaScript already._

### About

This library aims to work like date-fns does for dates, but for colors. This library provides a basic Color object which is then passed to the utility functions. Any utility function that changes the passed in color, does so immutably, returning a new color.

### To Do List

- more functionality
- additional color formats (hsv, cmyk)
- tests (I plan to make any color manipulation functions comply with the Sass spec for the corresponding function)
- optimizations
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
