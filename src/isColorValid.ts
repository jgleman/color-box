import Color from "./Color";

const REGEX =
  /^(([a-fA-F0-9]{6})([a-fA-F0-9]{2})?)|(([a-fA-F0-9]{3})([a-fA-F0-9]{1})?)$/g;

/**
 * Validates the color by checking that the internally computed hex value is
 * a valid 6 digit hexadecimal number or a valid 8 digit hexadecimal number
 * for colors with alpha channel
 */
export function isColorValid(color: Color): Boolean {
  if (typeof color === "undefined") return false;

  // string can be 3 or 4 or 6 or 8 in length
  return color.hex?.match(REGEX) ? true : false || false;
}
