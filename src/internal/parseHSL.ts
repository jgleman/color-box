import { HSLColor } from "../types";
import { parsePercentage } from "./parsePercentage";

function parseHue(hue: string): number {
  // deg, // rad // grad //turn
  let rawH = 0;
  if (hue.includes("deg") || hue.match(/^\d+$/)) {
    return parseInt(hue.split("deg")[0], 10);
  } else if (hue.includes("grad")) {
    rawH = parseFloat(hue.split("grad")[0]);
    // convert plane angle to deg
    return rawH * (180 * 200);
  } else if (hue.includes("rad")) {
    rawH = parseFloat(hue.split("rad")[0]);
    // convert radians to deg
    return rawH * (180 * Math.PI);
  } else if (hue.includes("turn")) {
    rawH = parseFloat(hue.split("turn")[0]);
    // convert turns to deg
    return rawH * 360;
  } else {
    return 0;
  }
}

export function parseHSL(hslAsString: string): HSLColor {
  const hslParts: HSLColor = { h: 0, s: 0, l: 0 };
  // extract the values between the parens
  const openParenIndex = hslAsString.indexOf("(");
  const step1 = hslAsString.substring(
    openParenIndex + 1,
    hslAsString.length - 1
  );

  const rawParts = step1
    .replaceAll("/", " ")
    .replaceAll(",", " ")
    .split(" ")
    .filter(Boolean);

  // if we don't have at least 3 values, assume invalid HSL entered
  // we'll eventually support to 3 or 4 when I add support alpha channels
  if (rawParts.length !== 3 && rawParts.length !== 4) {
    return hslParts;
  }

  hslParts.h = parseHue(rawParts[0]);
  hslParts.s = parsePercentage(rawParts[1]);
  hslParts.l = parsePercentage(rawParts[2]);

  return hslParts;
}
