# NodeJs Jest
[![My Skills](https://skillicons.dev/icons?i=typescript,npm,nodejs,jest)](https://skillicons.dev)

Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine. Jest é uma das ferramentas de teste unitário mais difundidas dentro da comunidade de JavaScript. Aqui vamos explorá-lo usando uma aplicação Node em Typescipt.

## Iniciando aplicação Node Typescript
Neste momento é necessário que tenha o NodeJs e o Typescript instaldois e seu ambiente.

Abra seu terminal em sua pasta de projetos, crie o diretório para a aplicação:
```shell
$ mkdir node-jest-example
```
Acesse a pasta:
```shell
$ cd node-jest-example
```
Vamos iniciar uma aplicação Typescript:
```shell
$ npm init -y
```
### Instalando e configurando o Jest
Instale as dependências do **Jest** em sua aplicação em modo de desenvolvimento:
```shell
$ npm install jest ts-jest @types/jest -D 
```
Crie um arquivo **jest.config.js** na raiz do seu projeto:
```js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'], // nomenclaturas de arquivos que serão testados
    moduleFileExtensions: ['ts', 'js'],
    collectCoverage: true,
    globals: {
        'ts-jest': {
            isolatedModules: true, // melhora a performance para grandes bases de código
        },
    },
};
```
Adicione o script de teste do **Jest** ao seu **package.json**, basta rodar o comando **jest** para exectar seus arquivos de teste:
```js
 "scripts": {
    "test": "jest"
  },
```
Assim só será necessário executar **npm test** para testar sua aplicação.

Agora você tem o **Jest** em sua aplicação e poderá utiliza-lo para desenvolver e testar seu código.

## O que vamos testar?

O que vamos testar?
Vamos usar métodos de uma calculadora, uma coisa bem simples para iniciarmos.

Crie uma pasta **src** para adicionar seu código:
```ts
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
```

Agora temos a classe **Calculator** com os métodos de soma, subtração, multiplicação e divisão que iremos testar.

## Testes com Jest
Para escrever seus testes voce deverá criar uma pasta para seus testes e os arquivos de teste devem ter a nomenclatura especificada no arquivo de configuração, o padrão seria **.test.ts**, por exemplo:

### test/sum.test.ts
```ts
// importamos a classe calculadora
import { Calculator } from "../../src/Calculator";

// agora vemos a sintaxe do jets
// onde você terá sua função de teste, que espera uma string com o nome ou uma breve descrição de seu teste
// em seguida a função closure de seu teste
test("A soma de 1 + 2 é igual a 3", () => {
    const calculator = new Calculator(); // criamos uma instancia da classe calculadora
    const result = calculator.Sum(1, 2) // executamos o método de soma e armazenamos seu resultado

    expect(result).toBe(3) // iniciamos a validação inserindo o valor resultado em expect e o valor do valor esperado em toBe
});
```

### test/sub.test.ts
```ts
import { Calculator } from "../../src/Calculator";

test("A subtração de 3 - 2 é igual a 1", () => {
    const calculator = new Calculator();
    const result = calculator.Sub(3, 2)

    expect(result).toBe(1)
});
```

### test/mult.test.ts
```ts
import { Calculator } from "../../src/Calculator";

test("A multiplicação de 2 x 10 é igual a 20", () => {
    const calculator = new Calculator();
    const result = calculator.Mult(2, 10)

    expect(result).toBe(20)
});
```

### test/div.test.ts
```ts
import { Calculator } from "../../src/Calculator";

test("A divisão de 10 / 2 é igual a 5", () => {
    const calculator = new Calculator();
    const result = calculator.Div(10, 2)

    expect(result).toBe(5)
});
```

Então basicamente temos a execução do método, o resultado dele e a comparação entre o valor obtido no teste e o valor esperado como resultado.

Execute e observer o resultado:
```shell
$ npm test
```
Resultado com sucesso:
```
 PASS  test/calculator/sum.test.ts     
 PASS  test/calculator/div.test.ts     
 PASS  test/calculator/sub.test.ts
 PASS  test/calculator/mult.test.ts
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |                   
 Calculator.ts |     100 |      100 |     100 |     100 |                   
---------------|---------|----------|---------|---------|-------------------

Test Suites: 4 passed, 4 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.481 s
Ran all test suites.
```
Alterando o valod esperado do teste de soma, podemos ver resultado com falha:
```
 PASS  test/calculator/mult.test.ts    
 PASS  test/calculator/sub.test.ts     
 PASS  test/calculator/div.test.ts
 FAIL  test/calculator/sum.test.ts
  ● A soma de 1 + 2 é igual a 3

    expect(received).toBe(expected) // Object.is equality

    Expected: 5
    Received: 3

      5 |     const result = calculator.Sum(1, 2)
      6 |
    > 7 |     expect(result).toBe(5)
        |                    ^
      8 | });
      9 |

      at Object.<anonymous> (test/calculator/sum.test.ts:7:20)

---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |                   
 Calculator.ts |     100 |      100 |     100 |     100 |                   
---------------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 3 passed, 4 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        2.155 s
Ran all test suites.
```
O método de comparar os resultados obtidos e os experados com o **toBe** server apenas para valores unícos, como variáveis do tipo number, string, bool, mas e se quisermos validar uma estrutura de dados?

Teremos que utilizar o **toEqual**, que percorrerá todos os valores em sua estrutura e fará a validação de cada um, veja a implementação:
### /test/operation.test.ts
```ts
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
```

Resultado do teste com sucesso:
```
 PASS  test/calculator/mult.test.ts
 PASS  test/calculator/sub.test.ts
 PASS  test/operation/operation.test.ts
 PASS  test/calculator/div.test.ts
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |                   
 Calculator.ts |     100 |      100 |     100 |     100 |                   
---------------|---------|----------|---------|---------|-------------------

Test Suites: 5 passed, 5 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.061 s
Ran all test suites.
```
Resultado do teste com falha (observe que o valor da divisão esperada foi alterado):
```
 PASS  test/calculator/mult.test.ts
 PASS  test/calculator/div.test.ts
 PASS  test/calculator/sum.test.ts
 PASS  test/calculator/sub.test.ts     
 FAIL  test/operation/operation.test.ts
  ● O resultado da operação deverá ser 1 2 3 4

    expect(received).toEqual(expected) // deep equality

    - Expected  - 2
    + Received  + 2

    - Object {
    -   "div": 8,
    + Operation {
    +   "div": 4,
        "mult": 3,
        "sub": 2,
        "sum": 1,
      }

      26 |     operation.div = calculator.Div(4, 1)
      27 |
    > 28 |     expect(operation).toEqual(resultExpected)
         |                       ^
      29 | });

      at Object.<anonymous> (test/operation/operation.test.ts:28:23)

---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |                   
 Calculator.ts |     100 |      100 |     100 |     100 |                   
---------------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 4 passed, 5 total
Tests:       1 failed, 4 passed, 5 total
Snapshots:   0 total
Time:        2.024 s
Ran all test suites.
```

Exceto, **toBe** e **toEqual**, temos:

**toBeNull:** Testa se o resultado passado tem valor igual a null.

**toBeUndefined:** testa se o resultado passado tem valor igual a undefined.

**toBeDefined:** testa se o resultado passado não tem valor igual a undefined.

**toBeTruthy:** testa se o resultado passado tem valor que pode ser passado como true em um if.

**toBeFalsy:** testa se o resultado passado tem valor que pode ser passado como false em um if.

**toBeGreaterThan:** testa se o resultado passado é maior que o esperado.

**toBeGreaterThanOrEqual:** testa se o resultado passado é maior ou igual ao esperado.

**toBeLessThan:** testa se o resultado passado é menor que o esperado.

**toBeLessThanOrEqual:** testa se o resultado passado é menor ou igual ao esperado.

E existem muitas outras possibilidades, portanto, com o **Jest** você tem a capacidade de realizar testes em aplicações NodeJs de forma poderosa, simples e organizada.