import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getLightness } from "./getLightness";

test("getLightness of 336699", () => {
  const color = new Color("#336699");
  expect(getLightness(color)).toBe(0.4);
});
