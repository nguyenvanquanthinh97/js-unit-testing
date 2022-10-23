import { describe, it, expect } from "vitest";

import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should not throw error if passing a valid string", () => {
    const input = "valid input";

    const resultFn = () => validateNotEmpty(input);

    expect(resultFn).not.toThrowError();
  });

  it("should throw  error when passing empty string", () => {
    const input = "";

    const resultFn = () => validateNotEmpty(input);

    expect(resultFn).toThrowError();
  });

  it("should throw  error when passing spaces string", () => {
    const input = "    ";

    const resultFn = () => validateNotEmpty(input);

    expect(resultFn).toThrowError();
  });

  it("should throw error when passing not-string input", () => {
    const input1 = undefined;
    const input2 = [];
    const input3 = {};
    const input4 = 1;

    const resultFn1 = () => validateNotEmpty(input1);
    const resultFn2 = () => validateNotEmpty(input2);
    const resultFn3 = () => validateNotEmpty(input3);
    const resultFn4 = () => validateNotEmpty(input4);

    expect(resultFn1).toThrowError();
    expect(resultFn2).toThrowError();
    expect(resultFn3).toThrowError();
    expect(resultFn4).toThrowError();
  });
});
