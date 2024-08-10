
export interface ICalculator {
    Sum(a: number, b: number) : number
    Sub(a: number, b: number) : number
    Mult(a: number, b: number) : number
    Div(a: number, b: number) : number
}

export class Calculator implements ICalculator {
    Sum(a: number, b: number): number {
        return a + b;
    }

    Sub(a: number, b: number): number {
        return a - b;
    }

    Mult(a: number, b: number): number {
        return a * b;
    }

    Div(a: number, b: number): number {
        return a / b;
    }
}
