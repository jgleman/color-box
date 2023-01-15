import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getHue } from "./getHue";

test("adds 1 + 2 to equal 3", () => {
  const color = new Color("#336699");
  expect(getHue(color)).toBe(210);
});
