import { Calculator } from "../../src/Calculator";

class Operation {
    sum: number;
    sub: number;
    mult: number;
    div: number;
} 

test("O resultado da operação deverá ser 1 2 3 4", () => {

    var resultExpected: Operation = {
        sum: 1,
        sub: 2,
        mult: 3,
        div: 4,
    }

    const calculator = new Calculator();

    var operation = new Operation();

    operation.sum = calculator.Sum(1, 0)
    operation.sub = calculator.Sub(4, 2)
    operation.mult = calculator.Mult(1, 3)
    operation.div = calculator.Div(4, 1)

    expect(operation).toEqual(resultExpected)
});