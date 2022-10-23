import { describe, it, expect, vi } from "vitest";
import { HttpError } from "./errors";

import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };
const mockFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string!");
    }
    const testResponse = {
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          return resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", mockFetch);

describe("sendDataRequest()", () => {
  it("should return available response data", async () => {
    const testData = { key: "test" };
    const responseData = await sendDataRequest(testData);

    expect(responseData).toEqual(testResponseData);
  });

  it("should convert the provided data to JSON before sending the request", async () => {
    const testData = { key: "test" };
    let errMessage;

    try {
      await sendDataRequest(testData);
    } catch (err) {
      errMessage = err;
    }

    expect(errMessage).not.toBe("Not a string!");
  });

  it("should throw an HttpError error if response.ok is false", async () => {
    mockFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        if (typeof options.body !== "string") {
          return reject("Not a string!");
        }
        const testResponse = {
          ok: false,
          json: () => {
            return new Promise((resolve, reject) => {
              return resolve(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });
    const testData = { key: "test" };
    let error;

    try {
      await sendDataRequest(testData);
    } catch (err) {
      error = err;
    }

    expect(error).instanceOf(HttpError);
  });
});
