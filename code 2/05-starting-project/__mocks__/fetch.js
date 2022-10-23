const testResponseData = { testKey: "testData" };

export default vi.fn((url, options) => {
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
