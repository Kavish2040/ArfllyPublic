import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/pages/**'],
    coverageThreshold: {
        global: {
            functions: 100,
            lines: 100,
            branches: 100,
            statements: 100,
        },
    },
};

export default createJestConfig(config);
