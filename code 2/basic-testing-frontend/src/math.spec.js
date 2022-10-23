import { it, expect, describe } from "vitest";

import { add, calculateResult } from "./math";

describe("add", () => {
  it("should summarize all number values in an array", () => {
    // Arrange
    const numbers = [1, 2, 3];

    // Action
    const result = add(numbers);

    // Assertion
    const expectedResult = numbers.reduce((total, item) => total + item, 0);
    expect(result).toBe(6);
  });

  it("should yield NaN if at least one invalid number is provided", () => {
    const inputs = ["invalid", 1];

    const result = add(inputs);

    expect(result).toBeNaN();
  });

  it("should yield a correct sum if an array or numeric string values is provided", () => {
    const inputs = ["1", "2", "3"];

    const result = add(inputs);

    const expectedResult = inputs.reduce((total, item) => total + +item, 0);
    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const inputs = [];

    const result = add(inputs);

    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };

    // Vitest will trigger the resultFn for us to check if function throw error or not
    expect(resultFn).toThrowError();
  });

  it("should throw an error if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
      add(num1, num2);
    };

    expect(resultFn).toThrowError(/is not iterable/);
  });
});

describe("calculateResult()", () => {
  it("should return a string numeric if passing a valid array of string numerics", () => {
    const inputs = ["1", "2"];

    const result = calculateResult(inputs);

    const expectedResult = inputs
      .reduce((total, item) => (total += +item), 0)
      .toString();
    expect(expectedResult).toBe(result);
  });

  it("should not return a string numeric if passing a valid array of string numerics", () => {
    const inputs = [1, 2];

    const result = calculateResult(inputs);

    const expectedResult = inputs
      .reduce((total, item) => (total += +item), 0)
      .toString();
    expect(expectedResult).not.toBe(result);
  });
});
