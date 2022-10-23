import { describe, it, expect, vi, beforeEach } from "vitest";
import { Window } from "happy-dom";
import path from "path";
import fs from "fs";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

it('should add an error paragraph to the id="errors" elements', () => {
  showError("Test");

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});

it("should not contain an error paragraph initially", () => {
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
});

it("should show an error paragraph with the right message", () => {
  const messageError = "testing message error";

  showError(messageError);

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph.textContent).toBe(messageError);
});
