import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { hexString } from "./hexString";
import { mix } from "./mix";

// tests here from Sass Spec, goal is to match the mixing algorithm from Sass
// https://github.com/sass/sass-spec/blob/main/spec/core_functions/color/mix.hrx
// not all Sass tests in the spec are here. this library does not support
// transparent as a keyword, for example

// <===> unweighted/min_and_max/input.scss
// // Each channel becomes the average of 255 and 0, which is 128 = 0xAA.
// a {b: mix(#ff00ff, #00ff00)}
//
// <===> unweighted/min_and_max/output.css
// a {
//   b: gray;
// }
//
// <===>
test("mix #ff00ff and  #00ff00 unweighted => #808080", () => {
  const color1 = new Color("#ff00ff");
  const color2 = new Color("#00ff00");
  expect(hexString(mix(color1, color2))).toBe("#808080");
});

// ================================================================================
// <===> unweighted/identical/input.scss
// // If two channels have the same values, they should be the same in the output.
// a {b: mix(#123456, #123456)}
//
// <===> unweighted/identical/output.css
// a {
//   b: #123456;
// }
//
// <===>
test("mix #123456 and  #123456 unweighted, indentical input => #123456", () => {
  const color1 = new Color("#123456");
  const color2 = new Color("#123456");
  expect(hexString(mix(color1, color2))).toBe("#123456");
});

// ================================================================================
// <===> unweighted/average/input.scss
// // All channels should be averaged across the two colors.
// a {b: mix(#91e16f, #0144bf)}
//
// <===> unweighted/average/output.css
// a {
//   b: #499397;
// }
//
// <===>
test("mix #91e16f and  #0144bf unweighted, average input => #499397", () => {
  const color1 = new Color("#91e16f");
  const color2 = new Color("#0144bf");
  expect(hexString(mix(color1, color2))).toBe("#499397");
});

// ================================================================================
// <===> explicit_weight/even/input.scss
// a {b: mix(#91e16f, #0144bf, 50%)}
//
// <===> explicit_weight/even/output.css
// a {
//   b: #499397;
// }
//
// <===>
test("mix #91e16f and  #0144bf explicit even weight => #499397", () => {
  const color1 = new Color("#91e16f");
  const color2 = new Color("#0144bf");
  expect(hexString(mix(color1, color2, 50))).toBe("#499397");
});

// ================================================================================
// <===> explicit_weight/first/input.scss
// a {b: mix(#91e16f, #0144bf, 100%)}
//
// <===> explicit_weight/first/output.css
// a {
//   b: #91e16f;
// }
//
// <===>
test("mix #91e16f and  #0144bf explicit weight first => #91e16f", () => {
  const color1 = new Color("#91e16f");
  const color2 = new Color("#0144bf");
  expect(hexString(mix(color1, color2, 100))).toBe("#91e16f");
});

// ================================================================================
// <===> explicit_weight/last/input.scss
// a {b: mix(#91e16f, #0144bf, 0%)}
//
// <===> explicit_weight/last/output.css
// a {
//   b: #0144bf;
// }
//
// <===>
test("mix #91e16f and  #0144bf explicit weight last => #0144bf", () => {
  const color1 = new Color("#91e16f");
  const color2 = new Color("#0144bf");
  expect(hexString(mix(color1, color2, 0))).toBe("#0144bf");
});

// ================================================================================
// <===> explicit_weight/firstwards/input.scss
// a {b: mix(#91e16f, #0144bf, 92%)}
//
// <===> explicit_weight/firstwards/output.css
// a {
//   b: #85d475;
// }
//
// <===>
test("mix #91e16f and  #0144bf explicit weight firstwards => #85d475", () => {
  const color1 = new Color("#91e16f");
  const color2 = new Color("#0144bf");
  expect(hexString(mix(color1, color2, 92))).toBe("#85d475");
});

// ================================================================================
// <===> explicit_weight/lastwards/input.scss
// a {b: mix(#91e16f, #0144bf, 43%)}
//
// <===> explicit_weight/lastwards/output.css
// a {
//   b: #3f889d;
// }
//
// <===>
test("mix #91e16f and  #0144bf explicit weight lastwards => #3f889d", () => {
  const color1 = new Color("#91e16f");
  const color2 = new Color("#0144bf");
  expect(hexString(mix(color1, color2, 43))).toBe("#3f889d");
});

// ================================================================================
// <===> alpha/even/input.scss
// a {b: mix(rgba(#91e16f, 0.3), rgba(#0144bf, 0.3))}
//
// <===> alpha/even/output.css
// a {
//   b: rgba(73, 147, 151, 0.3);
// }
//
// <===>
test("mix #91e16f4c and  #0144bf4c alpha weight even => #4993974d", () => {
  const color1 = new Color("#91e16f4c");
  const color2 = new Color("#0144bf4C");
  expect(hexString(mix(color1, color2))).toBe("#4993974d");
});
// <===>

// ================================================================================
// <===> alpha/lastwards/input.scss
// a {b: mix(rgba(#91e16f, 0.4), rgba(#0144bf, 0.9))}
//
// <===> alpha/lastwards/output.css
// a {
//   b: rgba(37, 107, 171, 0.65);
// }
//
// <===>
test("mix #91e16f66 and  #0144bf alpha lastwards => #256baba6", () => {
  const color1 = new Color("#91e16f66");
  const color2 = new Color("#0144bfe6");
  expect(hexString(mix(color1, color2))).toBe("#256baba6");
});

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
test("mix #91e16f33 and  #0144bfb3 both weights, weighted first => #91e16f33", () => {
  const color1 = new Color("#91e16f33");
  const color2 = new Color("#0144bfb3");
  expect(hexString(mix(color1, color2, 100))).toBe("#91e16f33");
});

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
test("mix #91e16f33 and  #0144bfb3 both weights, weighted last => #0144bfb3", () => {
  const color1 = new Color("#91e16f33");
  const color2 = new Color("#0144bfb3");
  expect(hexString(mix(color1, color2, 0))).toBe("#0144bfb3");
});

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
test("mix #91e16fcc and  #0144bf4d both weights, mixed firstwards => #79c77c9d", () => {
  const color1 = new Color("#91e16fcc");
  const color2 = new Color("#0144bf4d");
  expect(hexString(mix(color1, color2, 63))).toBe("#79c77c9d");
});

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
test("mix #91e16f33 and  #0144bfb3 both weights, mixed lastwards => #1d63af7d", () => {
  const color1 = new Color("#91e16f33");
  const color2 = new Color("#0144bfb3");
  expect(hexString(mix(color1, color2, 42))).toBe("#1d63af7d");
});

test("mix color1 is not valid, result should be error", () => {
  const color1 = new Color("#hsl");
  const color2 = new Color("#ADADAD");
  expect(() => {
    expect(mix(color1, color2));
  }).toThrow("Invalid Color");
});

test("mix color2 is not valid, result should be error", () => {
  const color1 = new Color("#ADADAD");
  const color2 = new Color("#hsl");
  expect(() => {
    expect(mix(color1, color2));
  }).toThrow("Invalid Color");
});

test("mix color2 is missing, result should be error", () => {
  const color1 = new Color("#ADADAD");
  expect(() => {
    //@ts-ignore
    expect(mix(color1));
  }).toThrow("Invalid Color");
});

// Some sass features/functionality I may not support (namely, keyword transparent)
// such as keyword transparent

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
