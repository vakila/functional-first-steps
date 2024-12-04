import { describe, it, expect } from 'vitest';
import { pipe } from './funpro.js';



describe('pipe', () => {
    const splitFn = (str) => str.split('');
    const reverseFn = (strArray) => strArray.reverse();
    const joinFn = (strArray) => strArray.join('');
    it('should always return a function', () => {
        expect(typeof pipe()).toBe('function');
        expect(typeof pipe(joinFn)).toBe('function');
        expect(typeof pipe(joinFn, splitFn)).toBe('function');
        expect(typeof pipe(joinFn, splitFn, reverseFn)).toBe('function');
    });

    it('should return a single-argument function', () => {
        expect((pipe()).length).toBe(1)
        expect((pipe(joinFn)).length).toBe(1);
        expect((pipe(joinFn, splitFn)).length).toBe(1);
        expect((pipe(joinFn, splitFn, reverseFn)).length).toBe(1);
    });

    it('should apply the functions in the correct order', () => {
        const reverseJoinSplit = pipe(reverseFn, joinFn, splitFn);
        const joinSplitReverse = pipe(joinFn, splitFn, reverseFn);
        expect(reverseJoinSplit(["pipes", "are", "cool"])).toStrictEqual([
            "c", "o", "o", "l", "a", "r", "e", "p", "i", "p", "e", "s",
        ]);
        expect(joinSplitReverse(["pipes", "are", "cool"])).toStrictEqual([
            "l", "o", "o", "c", "e", "r", "a", "s", "e", "p", "i", "p",
        ]);
    })

});