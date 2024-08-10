module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'], // nomeclaturas de arquivos de testes que serão testados
    moduleFileExtensions: ['ts', 'js'],
    collectCoverage: true,
    globals: {
        'ts-jest': {
            isolatedModules: true, // melhora a performance para grandes bases de código
        },
    },
};
  