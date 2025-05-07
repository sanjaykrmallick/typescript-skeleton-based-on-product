import { formatCurrency } from "../../utils/formatters";

test("formats number to USD currency", () => {
  expect(formatCurrency(1234.5)).toBe("$1,234.50");
});
