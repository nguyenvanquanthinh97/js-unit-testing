import { describe, it, expect, vi } from "vitest";

import { generateReportData, storeData } from "./data";

describe("generateReportData()", () => {
  it("should invoke logger", () => {
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toBeCalledWith("Some dummy data for this demo app");
  });
});

describe("storeData()", () => {
  it("expect not throwing if passing correct data", async () => {
    const data = "testData";

    let errMessage;
    try {
      await storeData(data);
    } catch (err) {
      errMessage = err;
    }
    expect(errMessage).toBeUndefined();
  });

  it("expect throwing if passing nothing to write data", async () => {
    let errMessage;
    try {
      await storeData();
    } catch (err) {
      errMessage = err;
    }
    expect(err).toBeDefined();
  });
});
