import { extractFormNumberInputs } from "./src/parser.js";

import { calculateResult } from "./src/math.js";
import { generateResultText, outputToScreen } from "./src/output";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractFormNumberInputs(form);

  const result = calculateResult(numberInputs);

  const resultText = generateResultText(result);

  outputToScreen(resultText);
}

form.addEventListener("submit", formSubmitHandler);
