import add from "../src/index";

describe("index test", () => {
  test("should return 3 when given 1 and 2", () => {
    expect(add(1, 2)).toBe(3);
  });
});
