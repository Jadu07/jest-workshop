const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
})

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  )
})

test("no coupon case", () => {
  expect(calculateFinalAmount(500)).toBe(500)
})


test("flat50 boundary case", () => {
  expect(calculateFinalAmount(40,"FLAT50")).toBe(0)
})

test("save10 coupon", () => {
  expect(calculateFinalAmount(1200, "SAVE10")).toBe(1040)
})

test("invalid subtotal which throws error", () => {
  expect(() => calculateFinalAmount(-70, "SAVE10")).toThrow("Invalid subtotal")
  expect(() => calculateFinalAmount(NaN, "SAVE10")).toThrow("Invalid subtotal")
})

test("case insensitive coupon", () => {
  expect(calculateFinalAmount(1000, "SaVe10")).toBe(850)
  expect(calculateFinalAmount(40, "FlAt50")).toBe(0)
})
