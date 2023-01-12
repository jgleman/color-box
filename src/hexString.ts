import Color from "./Color";
import { isColorValid } from "./isColorValid";

/**
 * @returns The a string of the hex representation of a color, e.g. #336699
 */
export function hexString(color: Color): string {
  return isColorValid(color) ? "#" + color.hex : "";
}
