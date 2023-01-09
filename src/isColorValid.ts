import Color from "./Color";

export function isColorValid(color: Color) {
  // validates that the hex color is a valid 6 digit hexadecimal number
  return color.hex?.match(/([a-fA-F0-9]{6})/g) ? true : false || false;
}
