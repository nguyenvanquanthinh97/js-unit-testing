import { describe, it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("path", () => ({
  default: {
    join: (...args) => {
      return args[args.length - 1];
    },
  },
}));

// This will replace all methods in 'fs' module with empty mocking vi.fn() ones.
// It will first find the default one in the __mocks__ folder first.
vi.mock("fs");

describe("writeData()", () => {
  it("expect fs.writefile got invoked with filename and data", async () => {
    const data = "testData";
    const filename = "example.txt";

    await writeData(data, filename);

    expect(fs.writeFile).toBeCalledWith(filename, data);
  });
});
