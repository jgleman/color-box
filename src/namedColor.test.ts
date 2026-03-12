import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";

test("new Color(\"red\") hex equals ff0000", () => {
  const color = new Color("red");
  expect(color.hex).toBe("ff0000");
});

test("new Color(\"blue\") hex equals 0000ff", () => {
  const color = new Color("blue");
  expect(color.hex).toBe("0000ff");
});

test("new Color(\"green\") hex equals 008000", () => {
  const color = new Color("green");
  expect(color.hex).toBe("008000");
});

test("new Color(\"white\") hex equals ffffff", () => {
  const color = new Color("white");
  expect(color.hex).toBe("ffffff");
});

test("new Color(\"black\") hex equals 000000", () => {
  const color = new Color("black");
  expect(color.hex).toBe("000000");
});

test("new Color(\"coral\") hex equals ff7f50", () => {
  const color = new Color("coral");
  expect(color.hex).toBe("ff7f50");
});

test("new Color(\"RED\") hex equals ff0000 (case insensitive)", () => {
  const color = new Color("RED");
  expect(color.hex).toBe("ff0000");
});

test("new Color(\"royalblue\") hex equals 4169e1", () => {
  const color = new Color("royalblue");
  expect(color.hex).toBe("4169e1");
});

test("new Color(\"notacolor\") produces invalid color", () => {
  const color = new Color("notacolor");
  expect(isColorValid(color)).toBe(false);
});

test("new Color(\"notacolor\") hex equals empty string", () => {
  const color = new Color("notacolor");
  expect(color.hex).toBe("");
});
