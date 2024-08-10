import { Calculator } from "../../src/Calculator";

test("A divisão de 10 / 2 é igual a 5", () => {
    const calculator = new Calculator();
    const result = calculator.Div(10, 2)

    expect(result).toBe(5)
});
