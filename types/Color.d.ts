import { HexColor, RGBColor, HSLColor } from "./types";
export interface ColorType {
    hex: HexColor;
    rgb: RGBColor;
    hsl: HSLColor;
}
declare class Color implements ColorType {
    hex: HexColor;
    rgb: RGBColor;
    hsl: HSLColor;
    constructor(color: any);
}
export default Color;
