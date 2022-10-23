import { describe, it, expect, beforeEach } from "vitest";

import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  let error;
  const statusCode = 200;
  const message = "http error";
  const data = {};
  beforeEach(() => {
    error = new HttpError(statusCode, message, data);
  });

  it("should have statusCode property", () => {
    expect(error).toHaveProperty("statusCode");
  });

  it("should have message property", () => {
    expect(error).toHaveProperty("message");
  });

  it("should have data property", () => {
    expect(error).toHaveProperty("data");
  });
});

describe("class ValidationError", () => {
  let error;
  const message = "validation error";

  beforeEach(() => {
    error = new ValidationError(message);
  });

  it("should have property message", () => {
    expect(error).toHaveProperty("message");
  });
});
