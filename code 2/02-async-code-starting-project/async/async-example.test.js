import { it, expect, describe } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

const userEmail = "testEmail@email.com";
describe("generateToken()", () => {
  it("should trigger the callback as successful", (done) => {
    return generateToken(userEmail, (err, value) => {
      try {
        expect(value).toBeDefined();
        done();
      } catch (err) {
        // This will catch assertion error in try block
        done(err);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it("should return a token", async () => {
    const token = await generateTokenPromise(userEmail);

    expect(token).toBeDefined();
  });
});
