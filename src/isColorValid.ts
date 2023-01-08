import Color from "./Color";
const HEX_REGEX = /([a-fA-F0-9]{6})/g;
export function isColorValid(color: Color) {
  return color.hex?.match(HEX_REGEX) ? true : false || false;
}
