import { describe, it, expect } from 'vitest';
import { push, update, pop } from './arrays.js';



describe('push', () => {
    const original = [1, 2, 3];
    const pushed = push(4, original);
    it('should return an array with the new element at the end', () => {
        expect(pushed).toStrictEqual([1, 2, 3, 4]);
    });
    it('should not modify the original array', () => {
        expect(original).toStrictEqual([1, 2, 3]);
    });
})

describe('update', () => {
    const original = ["spellling", "is", "hard"];
    const updated = update(0, 'spelling', original);
    it('should return an array with the updated value at the given index',
        () => {
            expect(updated).toStrictEqual(['spelling', 'is', 'hard']);
        });
    it('should not modify the original array', () => {
        expect(original).toStrictEqual(["spellling", "is", "hard"]);
    })
})

describe('pop', () => {
    const original = [1, 2, 3];
    const popped = pop(original);
    it('should return a new array without the last value',
        () => {
            expect(popped).toStrictEqual([1, 2]);
        });
    it('should not modify the original array', () => {
        expect(original).toStrictEqual([1, 2, 3]);
    })
})