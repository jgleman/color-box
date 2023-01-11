export type RGBColor = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

export type HSLColor = {
  h: number;
  s: number;
  l: number;
  a?: number;
};

export interface ColorType {
  hex: string;
  rgb: RGBColor;
  hsl: HSLColor;
}
