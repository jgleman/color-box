import { RGBColor } from "../types";
import { parsePercentage } from "./parsePercentage";

function parseColorComponent(component: string) {
  if (component.includes("%")) {
    return parsePercentage(component) * 255;
  } else {
    return parseInt(component, 10);
  }
}

export function parseRGB(rgbAsString: string): RGBColor {
  const rgbParts: RGBColor = { r: 0, g: 0, b: 0, a: undefined };
  // extract the values between the parens
  const openParenIndex = rgbAsString.indexOf("(");
  const step1 = rgbAsString.substring(
    openParenIndex + 1,
    rgbAsString.length - 1
  );

  const rawParts = step1
    .replaceAll("/", " ")
    .replaceAll(",", " ")
    .split(" ")
    .filter(Boolean);

  // if we don't have at least 3 values, assume invalid RGB entered
  if (rawParts.length !== 3 && rawParts.length !== 4) {
    return rgbParts;
  }

  rgbParts.r = parseColorComponent(rawParts[0]);
  rgbParts.g = parseColorComponent(rawParts[1]);
  rgbParts.b = parseColorComponent(rawParts[2]);
  rgbParts.a = rawParts[3] ? parsePercentage(rawParts[3]) : undefined;

  return rgbParts;
}
