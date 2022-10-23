import { describe, it, expect } from "vitest";

import { generateToken } from "./auth";

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
