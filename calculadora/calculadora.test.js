import { calc } from "./calculadora"

test("adicao", () => {
    expect(calc.add(1, 2)).toBe(3);
});

test("subtract", () => {
    expect(calc.sub(1, 1)).toBe(0);
});

test("multiply", () => {
    expect(calc.mult(2, 5)).toBe(10);
});