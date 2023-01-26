import Color from "./Color";
import { RGBColor } from "./types";
import { isColorValid } from "./isColorValid";
/**
 * Implementation to the Sass mix function. Returns a color that’s a mixture of
 * color1 and color2. Both the weight and the relative opacity of each color
 * determines how much of each color is in the result.
 *
 * @param color1
 * @param color2
 * @param [weight=50]  The weight must be a number between 0 and 100 (inclusive) representing a percentage. A larger weight indicates that more of color1 should be used, and a smaller weight indicates that more of color2 should be used.
 * @returns the mixed color
 */
export function mix(color1: Color, color2: Color, weight: number = 50): Color {
  if (!isColorValid(color1)) throw "Invalid Color (color1)";
  if (!isColorValid(color2)) throw "Invalid Color (color2)";
  // Description of the SASS mix algorithm
  // https://github.com/sass/sass/blob/main/spec/built-in-modules/color.md#mix
  // Dart Implementation of SASS mix
  // https://github.com/sass/dart-sass/blob/558640bda40d6e3b1a262380a7a87bcc2d57d6e6/lib/src/functions/color.dart#L797
  const rgbColor: RGBColor = { r: 0, g: 0, b: 0, a: undefined };

  const hasAlpha =
    typeof color1.rgb.a !== "undefined" || typeof color2.rgb.a !== "undefined";

  const weightScaled = weight / 100;
  // Let normal-weight be $weight / 50% - 1.
  const normalWeight = weightScaled * 2 - 1;

  // Let alpha1 and alpha2 be the alpha values of $color1 and $color2 respectively.
  // Let alpha-distance be alpha1 - alpha2.
  const alphaDistance = (color1.rgb.a || 1) - (color2.rgb.a || 1);

  // Let weight-by-distance be normal-weight * alpha-distance.
  const weightByDistance = normalWeight * alphaDistance;

  // If weight-by-distance == -1, let combined-weight1 be normal-weight.
  // else Let weight-distance-sum be normal-weight + alpha-distance.
  // Let combined-weight1 be weight-distance-sum / (1 + weight-by-distance).
  let combinedWeight1 =
    weightByDistance === -1
      ? normalWeight
      : (normalWeight + alphaDistance) / (1 + weightByDistance);

  // Let weight1 be (combined-weight1 + 1) / 2.
  const weight1 = (combinedWeight1 + 1) / 2;

  // Let weight2 be 1 - weight1.
  const weight2 = 1 - weight1;

  // Let red1 and red2 be the red channels of $color1 and $color2 respectively.
  // Let red be red1 * weight1 + red2 * weight2.
  // Let green1 and green2 be the green channels of $color1 and $color2 respectively.
  // Let red be red1 * weight1 + red2 * weight2.
  // Let blue1 and blue2 be the blue channels of $color1 and $color2 respectively.
  // Let blue be blue1 * weight1 + blue2 * weight2.
  // Let alpha be alpha1 * weight-scale + alpha2 * (1 - weight-scale).
  rgbColor.r = color1.rgb.r * weight1 + color2.rgb.r * weight2;
  rgbColor.g = color1.rgb.g * weight1 + color2.rgb.g * weight2;
  rgbColor.b = color1.rgb.b * weight1 + color2.rgb.b * weight2;
  rgbColor.a = hasAlpha
    ? (color1.rgb.a || 1) * weightScaled +
      (color2.rgb.a || 1) * (1 - weightScaled)
    : undefined;

  return new Color(rgbColor);
}
