import { validateStringNotEmpty, validateNumber } from "./validation";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numberInputs) {
  if (typeof numberInputs === "string")
    throw new Error(
      "Invalid Type: numberInputs must be an array of string numeric"
    );

  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}
