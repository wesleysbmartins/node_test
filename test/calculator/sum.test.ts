import { Calculator } from "../../src/Calculator";

test("A soma de 1 + 2 é igual a 3", () => {
    const calculator = new Calculator();
    const result = calculator.Sum(1, 2)

    expect(result).toBe(3)
});
