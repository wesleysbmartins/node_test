import { Calculator } from "../../src/Calculator";

test("A multiplicação de 2 x 10 é igual a 20", () => {
    const calculator = new Calculator();
    const result = calculator.Mult(2, 10)

    expect(result).toBe(20)
});
