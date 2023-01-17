import Color from "./Color";
import { RGBColor } from "./types";

// this is much more complicated than I thought
// I believe this link is to a description of the SASS mix algorithm
// will look into implementing this later. im tired now.
// https://github.com/sass/sass/blob/main/spec/built-in-modules/color.md#mix

export function mix(color1: Color, color2: Color, weight?: number): Color {
  const rgbColor: RGBColor = { r: 0, g: 0, b: 0, a: undefined };
  console.log({ color1, color2, weight });
  return new Color(rgbColor);
}

// eventual test suite

// tests here from Sass Spec, goal is to match the mixing algorithm from Sass
// https://github.com/sass/sass-spec/blob/main/spec/core_functions/color/mix.hrx
//
// test("mix #ff00ff and  #00ff00 unweighted => #808080", () => {
//   const color1 = new Color("#ff00ff");
//   const color2 = new Color("#00ff00");
//   expect(hexString(mix(color1, color2))).toBe("#808080");
// });
//
// test("mix #123456 and  #123456 unweighted, indentical input => #123456", () => {
//   const color1 = new Color("#123456");
//   const color2 = new Color("#123456");
//   expect(hexString(mix(color1, color2))).toBe("#123456");
// });
//
// test("mix #91e16f and  #0144bf unweighted, average input => #499397", () => {
//   const color1 = new Color("#91e16f");
//   const color2 = new Color("#0144bf");
//   expect(hexString(mix(color1, color2))).toBe("#499397");
// });
//
// test("mix #91e16f and  #0144bf explit even weight => #499397", () => {
//   const color1 = new Color("#91e16f");
//   const color2 = new Color("#0144bf");
//   expect(hexString(mix(color1, color2, 50))).toBe("#499397");
// });
//
// test("mix #91e16f and  #0144bf explit weight first => #91e16f", () => {
//   const color1 = new Color("#91e16f");
//   const color2 = new Color("#0144bf");
//   expect(hexString(mix(color1, color2, 100))).toBe("#91e16f");
// });
//
// test("mix #91e16f and  #0144bf explit weight last => #0144bf", () => {
//   const color1 = new Color("#91e16f");
//   const color2 = new Color("#0144bf");
//   expect(hexString(mix(color1, color2, 0))).toBe("#0144bf");
// });
//
// test("mix #91e16f and  #0144bf explit weight firstwards => #85d475", () => {
//   const color1 = new Color("#91e16f");
//   const color2 = new Color("#0144bf");
//   expect(hexString(mix(color1, color2, 92))).toBe("#85d475");
// });
//
// test("mix #91e16f and  #0144bf explit weight lastwards => #3f889d", () => {
//   const color1 = new Color("#91e16f");
//   const color2 = new Color("#0144bf");
//   expect(hexString(mix(color1, color2, 43))).toBe("#3f889d");
// });
//
// test("mix #91e16fcc and  #0144bf alpha weight firstwards => #6dba838c", () => {
//   const color1 = new Color("#91e16fcc");
//   const color2 = new Color("#0144bf4C");
//   expect(hexString(mix(color1, color2, 43))).toBe("#6dba838c");
// });

//TODO tests for

// ================================================================================
// <===> both_weights/transparent/first/input.scss
// a {b: mix(transparent, #0144bf, 70%)}
//
// <===> both_weights/transparent/first/output.css
// a {
//   b: rgba(1, 68, 191, 0.3);
// }
//
// <===>
// ================================================================================
// <===> both_weights/transparent/last/input.scss
// a {b: mix(#91e16f, transparent, 70%)}
//
// <===> both_weights/transparent/last/output.css
// a {
//   b: rgba(145, 225, 111, 0.7);
// }
//
// <===>
// ================================================================================
// <===> both_weights/weighted/first/input.scss
// a {b: mix(rgba(#91e16f, 0.2), rgba(#0144bf, 0.7), 100%)}
//
// <===> both_weights/weighted/first/output.css
// a {
//   b: rgba(145, 225, 111, 0.2);
// }
//
// <===>
// ================================================================================
// <===> both_weights/weighted/last/input.scss
// a {b: mix(rgba(#91e16f, 0.2), rgba(#0144bf, 0.7), 0%)}
//
// <===> both_weights/weighted/last/output.css
// a {
//   b: rgba(1, 68, 191, 0.7);
// }
//
// <===>
// ================================================================================
// <===> both_weights/mixed/firstwards/input.scss
// a {b: mix(rgba(#91e16f, 0.8), rgba(#0144bf, 0.3), 63%)}
//
// <===> both_weights/mixed/firstwards/output.css
// a {
//   b: rgba(121, 199, 124, 0.615);
// }
//
// <===>
// ================================================================================
// <===> both_weights/mixed/lastwards/input.scss
// a {b: mix(rgba(#91e16f, 0.2), rgba(#0144bf, 0.7), 42%)}
//
// <===> both_weights/mixed/lastwards/output.css
// a {
//   b: rgba(29, 99, 175, 0.49);
// }
//
// <===>
// ================================================================================
// <===> both_weights/contradiction/input.scss
// // When we weight entirely towards a transparent color, the formula for
// // computing the combined alpha would divide by zero, so we just return
// // transparent as a special case.
// a {b: mix(transparent, #0144bf, 100%)}
//
// <===> both_weights/contradiction/output.css
// a {
//   b: rgba(0, 0, 0, 0);
// }
//
// <===>
// ================================================================================
// <===> named/input.scss
// a {b: mix($color1: #91e16f, $color2: #0144bf, $weight: 92%)}
//
// <===> named/output.css
// a {
//   b: #85d475;
// }
//
// <===>

// Some sass features/functionality I may not support
// ================================================================================
// <===> alpha/first/input.scss
// a {b: mix(#91e16f, transparent)}
//
// <===> alpha/first/output.css
// a {
//   b: rgba(145, 225, 111, 0.5);
// }

// ================================================================================
// <===> alpha/last/input.scss
// a {b: mix(transparent, #0144bf)}
//
// <===> alpha/last/output.css
// a {
//   b: rgba(1, 68, 191, 0.5);
// }
