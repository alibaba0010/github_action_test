// math.test.js

const add = require("./index");

describe("add function", () => {
  it("should add two positive numbers correctly", () => {
    const result = add(2, 3);
    expect(result).toBe(5); // Expects the result to be 5
  });

  it("should add a positive and a negative number correctly", () => {
    const result = add(5, -3);
    expect(result).toBe(2); // Expects the result to be 2
  });

  it("should add two negative numbers correctly", () => {
    const result = add(-2, -3);
    expect(result).toBe(-5); // Expects the result to be -5
  });

  it("should add zero and a number correctly", () => {
    const result = add(0, 7);
    expect(result).toBe(7); // Expects the result to be 7
  });
});
