import { HexColor, RGBColor, HSLColor } from "./types";
import { hexToRGB } from "./internal/hexToRGB";
import { rgbToHSL } from "./internal/rgbToHSL";
import { rgbToHex } from "./internal/rgbToHex";
import { hslToRGB } from "./internal/hslToRGB";
import { parseHSL } from "./internal/parseHSL";
import { parseRGB } from "./internal/parseRGB";

export interface ColorType {
  hex: HexColor;
  rgb: RGBColor;
  hsl: HSLColor;
}

class Color implements ColorType {
  hex!: HexColor;
  rgb!: RGBColor;
  hsl!: HSLColor;

  constructor(color: any) {
    if (typeof color === "string") {
      if (color.charAt(0) === "#") {
        // is input a string
        const hexColor = color.split("#")[1] || "";
        this.hex = hexColor;
        this.rgb = hexToRGB(hexColor);
        this.hsl = rgbToHSL(this.rgb);
      } else if (typeof color === "string" && color.length === 6) {
        // is input a HexColor
        this.hex = color;
        this.rgb = hexToRGB(color);
        this.hsl = rgbToHSL(this.rgb);
      } else if (color.startsWith("hsl(") || color.startsWith("hsla(")) {
        this.hsl = parseHSL(color);
        this.rgb = hslToRGB(this.hsl);
        this.hex = rgbToHex(this.rgb);
      } else if (color.startsWith("rgb(") || color.startsWith("rgba(")) {
        this.rgb = parseRGB(color);
        this.hsl = rgbToHSL(this.rgb);
        this.hex = rgbToHex(this.rgb);
      }
    } else if (typeof color.h !== "undefined") {
      // is input a HSLColor
      this.hsl = color;
      this.rgb = hslToRGB(color);
      this.hex = rgbToHex(this.rgb);
    } else if (typeof color.r !== "undefined") {
      // is input a HSLColor
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
