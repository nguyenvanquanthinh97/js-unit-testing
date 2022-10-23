import { describe, it, expect, beforeEach, vi } from "vitest";

import { savePost, extractPostData } from "./posts";

const testResponseData = { testKey: "testData" };

describe("savePost()", () => {
  let postData;
  const mockTest = vi.fn((url, options) => {
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
  vi.stubGlobal("fetch", mockTest);

  beforeEach(() => {
    postData = {};
  });

  it("should return available response data", async () => {
    const response = await savePost(postData);

    expect(response).toBeDefined();
  });
});

describe("extractPostData()", () => {
  let mockingForm;

  beforeEach(() => {
    mockingForm = {
      title: "My Title",
      content: "My Content",
      get: (identifier) => {
        return mockingForm[identifier];
      },
    };
  });

  it("should return correct title and content", () => {
    const postData = extractPostData(mockingForm);

    expect(postData.content).toBe(mockingForm.content);
    expect(postData.title).toBe(mockingForm.title);
  });
});
