import { it, expect, describe } from "vitest";

import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
  it("should return a result typed number if we pass string numeric", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should return NaN if we pass a normal string", () => {
    const input = "Invalid";

    const result = transformToNumber(input);

    expect(result).toBeNaN();
  });

  it("should return NaN if we pass an array", () => {
    const input = ["1", "2"];

    const result = transformToNumber(input);

    expect(result).toBeNaN();
  });

  it("should return NaN if we pass nothing", () => {
    const result = transformToNumber();

    expect(result).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of numbers if we pass an array of string numeric", () => {
    const inputs = ["1"];
    const expectedResult = [1];

    const result = cleanNumbers(inputs);

    expect(result).toEqual(expectedResult);
  });

  it("should throw error if we pass an array of numbers", () => {
    const inputs = [1];
    const expectedResult = [1];

    const resultFn = () => cleanNumbers(inputs);

    expect(resultFn).toThrowError();
  });

  it("should throw error if we pass non array input", () => {
    const input1 = undefined;
    const input2 = 1;
    const input3 = "";

    const resultFn1 = () => cleanNumbers(input1);
    const resultFn2 = () => cleanNumbers(input2);
    const resultFn3 = () => cleanNumbers(input3);

    expect(resultFn1).toThrowError();
    expect(resultFn2).toThrowError();
    expect(resultFn3).toThrowError();
  });
});
