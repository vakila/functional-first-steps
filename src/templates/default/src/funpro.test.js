import { describe, it, expect } from 'vitest';
import { filter, map, reduce, sum, max, pipe } from './funpro.js';


const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


describe('filter', () => {
    it('should return an array', () => {
        expect(Array.isArray(filter(i => i, []))).toBe(true);
    });
    it('should filter the array values correctly', () => {

        expect(JSON.stringify(filter(n => n % 2 === 0, wholes))).toBe(`[0,2,4,6,8,10]`);
        expect(JSON.stringify(filter(n => n > 4, wholes))).toBe(`[5,6,7,8,9,10]`);
    });
});

describe('map', () => {
    it('should return an array', () => {
        expect(Array.isArray(map(i => i, []))).toBe(true);
    });
    it('should filter the array values correctly', () => {
        expect(JSON.stringify(map(n => n * 2, wholes))).toBe(`[0,2,4,6,8,10,12,14,16,18,20]`);
        expect(JSON.stringify(map(n => n / 2, wholes))).toBe(`[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]`);
    });
});

describe('reduce', () => {
    it('should return a single value', () => {
        expect(sum([])).toBe(0);
        expect(typeof max(wholes)).toBe('number');
        expect(
            reduce((acc, str) => {
                const capitalized = str.toUpperCase()
                if (acc) {
                    return [acc, capitalized].join(' ');
                } else {
                    return capitalized;
                }
            }, '', ['fp', 'rulez'])
        ).toBe('FP RULEZ');
    });

    describe('sum', () => {
        it('should return the correct value', () => {
            expect(sum(wholes)).toBe(55);
            expect(sum([1, 2, 3])).toBe(6);
            expect(sum([])).toBe(0);
        });
    });

    describe('max', () => {
        it('should return the correct value', () => {
            expect(max(wholes)).toBe(10);
            expect(max(wholes.reverse())).toBe(10);
            expect(max([25, 12, 49, 2, 70, 28, 40])).toBe(70);
            expect(max([])).toBeUndefined();
        });
    })
});

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