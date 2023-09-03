import ComplexCalculator from "./index";
import { beforeAll, afterAll, beforeEach, test, expect } from "@jest/globals";
let calculator: ComplexCalculator;

// This runs once before any tests in the suite
beforeAll(() => {
  console.log("Running beforeAll");
  calculator = new ComplexCalculator();
});

// This runs once after all tests in the suite
afterAll(() => {
  console.log("Running afterAll");
  // Clean up or perform final actions here
});

// This runs before each test
beforeEach(() => {
  console.log("Running beforeEach");
  // Reset the calculator or perform setup before each test
});

// Basic test example
test("Adding numbers", () => {
  calculator.add(5);
  expect(calculator.getResult()).toBe(5);
});

test("Subtracting numbers", () => {
  calculator.subtract(3);
  expect(calculator.getResult()).toBe(2);
});

test("Multiplying numbers", () => {
  calculator.multiply(4);
  expect(calculator.getResult()).toBe(8);
});

test("Dividing numbers", () => {
  calculator.divide(2);
  expect(calculator.getResult()).toBe(4);
});

// A test with an asynchronous operation
test("Async operation", async () => {
  await Promise.resolve(); // Simulate an async operation
  calculator.add(10);
  expect(calculator.getResult()).toBe(14);
});
