import { Calculator } from "../../src/Calculator";

test("A subtração de 3 - 2 é igual a 1", () => {
    const calculator = new Calculator();
    const result = calculator.Sub(3, 2)

    expect(result).toBe(1)
});
