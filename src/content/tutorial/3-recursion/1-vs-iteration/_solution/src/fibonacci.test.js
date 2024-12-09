import { test, expect } from 'vitest';
import { imperativeFibonacci, recursiveFibonacci } from './fibonacci.js';

const cases = [[2, 1], [6, 8], [10, 55], [20, 6765]];

test('fibonacci.js', () => {

    for (const [input, output] of cases) {
        expect(imperativeFibonacci(input)).toBe(output);
        expect(recursiveFibonacci(input)).toBe(output);
    }

});
