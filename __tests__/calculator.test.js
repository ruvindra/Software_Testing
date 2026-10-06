import { divide } from "../src/calculator.js";

describe("divide", () => {
  // Positive test
  test("divides two valid numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // Negative tests
  test("throws TypeError when the first argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
    expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
  });

  test("throws TypeError when the second argument is not a number", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
    expect(() => divide(10, "2")).toThrow("Both arguments must be numbers");
  });

  test("throws TypeError when the first argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
    expect(() => divide(NaN, 2)).toThrow("Arguments cannot be NaN");
  });

  test("throws TypeError when the second argument is NaN", () => {
    expect(() => divide(10, NaN)).toThrow(TypeError);
    expect(() => divide(10, NaN)).toThrow("Arguments cannot be NaN");
  });

  test("throws RangeError when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});