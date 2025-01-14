import { test, expect } from 'vitest';
import { imperativeFibonacci, recursiveFibonacci } from './fibonacci.js';

const cases = [[2, 1], [6, 8], [10, 55], [20, 6765]];

test('fibonacci.js imperative', () => {

    for (const [input, output] of cases) {
        expect(imperativeFibonacci(input)).toBe(output);
    }

});

test('fibonacci.js recursive', () => {

    for (const [input, output] of cases) {
        expect(recursiveFibonacci(input)).toBe(output);
    }

});
