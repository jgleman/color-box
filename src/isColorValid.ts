import Color from "./Color";

/**
 * Validates the color by checking that the internally computed hex value is
 * a valid 6 digit hexadecimal number or a valid 8 digit hexadecimal number
 * for colors with alpha channel
 */
export function isColorValid(color: Color): Boolean {
  return color.hex?.match(/^([a-fA-F0-9]{6})([a-fA-F0-9]{2})?$/g)
    ? true
    : false || false;
}
