import { describe, it, expect } from 'vitest';
import { filter, map } from './funpro.js';


const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


describe('filter', () => {
    it('should return an array', () => {
        expect(Array.isArray(filter(i => i, []))).toBe(true);
    });
    it('should filter the array values correctly', () => {

        expect(JSON.stringify(filter(n => n % 2 === 0, wholes))).toBe(`[0,2,4,6,8,10]`);
        expect(JSON.stringify(filter(n => n > 4, wholes))).toBe(`[5,6,7,8,9,10]`);
    })
});

describe('map', () => {
    it('should return an array', () => {
        expect(Array.isArray(map(i => i, []))).toBe(true);
    });
    it('should filter the array values correctly', () => {
        expect(JSON.stringify(map(n => n * 2, wholes))).toBe(`[0,2,4,6,8,10,12,14,16,18,20]`);
        expect(JSON.stringify(map(n => n / 2, wholes))).toBe(`[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]`);
    })
})