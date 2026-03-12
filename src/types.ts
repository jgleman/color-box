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

export function isHSLColor(value: unknown): value is HSLColor {
  return (
    typeof value === "object" &&
    value !== null &&
    "h" in value &&
    "s" in value &&
    "l" in value &&
    typeof (value as HSLColor).h === "number" &&
    typeof (value as HSLColor).s === "number" &&
    typeof (value as HSLColor).l === "number"
  );
}

export function isRGBColor(value: unknown): value is RGBColor {
  return (
    typeof value === "object" &&
    value !== null &&
    "r" in value &&
    "g" in value &&
    "b" in value &&
    typeof (value as RGBColor).r === "number" &&
    typeof (value as RGBColor).g === "number" &&
    typeof (value as RGBColor).b === "number"
  );
}
