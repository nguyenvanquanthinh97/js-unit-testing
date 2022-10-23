import { it, expect, describe } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should not throw error if passing a valid string", () => {
    const input = "valid input";

    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).not.toThrowError();
  });

  it("should throw defined error when passing empty string", () => {
    const input = "";

    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).toThrowError(/Invalid input - must not be empty./);
  });

  it("should throw error when passing not-string input", () => {
    const input1 = undefined;
    const input2 = [];
    const input3 = {};
    const input4 = 1;

    const resultFn1 = () => validateStringNotEmpty(input1);
    const resultFn2 = () => validateStringNotEmpty(input2);
    const resultFn3 = () => validateStringNotEmpty(input3);
    const resultFn4 = () => validateStringNotEmpty(input4);

    expect(resultFn1).toThrowError();
    expect(resultFn2).toThrowError();
    expect(resultFn3).toThrowError();
    expect(resultFn4).toThrowError();
  });
});

describe("validateNumber()", () => {
  it("should not throw error if passing a valid number", () => {
    const input = 3;

    const resultFn = () => validateNumber(input);

    expect(resultFn).not.toThrow();
  });

  it("should throw error if passing a string numeric", () => {
    const input = "3";

    const resultFn = () => validateNumber(input);

    expect(resultFn).toThrowError(/Invalid number input./);
  });

  it("should throw error if passing invalid numeric input", () => {
    const input1 = [];
    const input2 = {};
    const input3 = undefined;

    const resultFn1 = () => validateNumber(input1);
    const resultFn2 = () => validateNumber(input2);
    const resultFn3 = () => validateNumber(input3);

    expect(resultFn1).toThrowError(/Invalid number input./);
    expect(resultFn2).toThrowError(/Invalid number input./);
    expect(resultFn3).toThrowError(/Invalid number input./);
  });
});
