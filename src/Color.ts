import {
  RGBColor,
  HSLColor,
  ColorType,
  isRGBColor,
  isHSLColor,
} from "./types.js";
import { hexToRGB } from "./internal/hexToRGB.js";
import { rgbToHSL } from "./internal/rgbToHSL.js";
import { rgbToHex } from "./internal/rgbToHex.js";
import { hslToRGB } from "./internal/hslToRGB.js";
import { parseHSL } from "./internal/parseHSL.js";
import { parseRGB } from "./internal/parseRGB.js";
import { isValidHex } from "./internal/isValidHex.js";
import { namedColors } from "./internal/namedColors.js";

export class Color implements ColorType {
  hex!: string;
  rgb!: RGBColor;
  hsl!: HSLColor;

  private _setInvalid(): void {
    this.hex = "";
    this.rgb = { r: 0, g: 0, b: 0 };
    this.hsl = { h: 0, s: 0, l: 0 };
  }

  constructor(color?: string | RGBColor | HSLColor) {
    if (typeof color === "string") {
      const namedHex = namedColors[color.toLowerCase()];
      if (namedHex) {
        this.hex = namedHex;
        this.rgb = hexToRGB(namedHex);
        this.hsl = rgbToHSL(this.rgb);
      } else if (color.charAt(0) === "#") {
        const hexColor = color.split("#")[1];
        if (isValidHex(hexColor)) {
          this.hex = hexColor;
          this.rgb = hexToRGB(hexColor);
          this.hsl = rgbToHSL(this.rgb);
        } else {
          this._setInvalid();
        }
      } else if (isValidHex(color)) {
        this.hex = color;
        this.rgb = hexToRGB(color);
        this.hsl = rgbToHSL(this.rgb);
      } else if (color.match(/^(hsla?)\(.*\)/)) {
        this.hsl = parseHSL(color);
        this.rgb = hslToRGB(this.hsl);
        this.hex = rgbToHex(this.rgb);
      } else if (color.match(/^(rgba?)\(.*\)/)) {
        this.rgb = parseRGB(color);
        this.hsl = rgbToHSL(this.rgb);
        this.hex = rgbToHex(this.rgb);
      } else {
        this._setInvalid();
      }
    } else if (isHSLColor(color)) {
      this.hsl = color;
      this.rgb = hslToRGB(color);
      this.hex = rgbToHex(this.rgb);
    } else if (isRGBColor(color)) {
      this.rgb = color;
      this.hsl = rgbToHSL(this.rgb);
      this.hex = rgbToHex(this.rgb);
    } else {
      this.hex = "000000";
      this.rgb = hexToRGB(this.hex);
      this.hsl = rgbToHSL(this.rgb);
    }
  }
}

export default Color;
