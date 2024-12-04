import { describe, it, expect } from 'vitest';
import { produce } from 'immer';
import { push, update, pop } from './arrays.js';


describe('using Immer', () => {
    describe('producing arrays', () => {


        const oldArray = [1, 2, 3];
        const newArray = produce(oldArray, draft => {
            draft.push(4);
        });
        const newerArray = produce(newArray, draft => {
            draft[0] = 5;
        });

        it('should return a new array with the given changes', () => {
            expect(newArray).toStrictEqual([1, 2, 3, 4]);
            expect(newerArray).toStrictEqual([5, 2, 3, 4]);
        });
        it('should not modify the original array', () => {
            expect(oldArray).toStrictEqual([1, 2, 3]);
            expect(newArray).toStrictEqual([1, 2, 3, 4]);
        });
    });
});


describe('object operations', () => {
    const oldObject = { a: 1, b: 2, c: 3 };
    const newObject = produce(oldObject, draft => {
        draft.c = 4;
    });
    const newerObject = produce(newObject, draft => {
        draft.d = 5;
    });

    it('returns a new object with the given changes', () => {
        expect(newObject.c).toBe(4);
        expect(newerObject.d).toBe(5);
    });
    it('does not modify the original object', () => {
        expect(oldObject.c).toBe(3);
        expect(newObject.d).toBeUndefined();
    });
});

describe('push', () => {
    const original = [1, 2, 3];
    const pushed = push(4, original);
    it('returns an array with the new element at the end', () => {
        expect(pushed).toStrictEqual([1, 2, 3, 4]);
    });
    it('does not modify the original array', () => {
        expect(original).toStrictEqual([1, 2, 3]);
    });
});



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
});

