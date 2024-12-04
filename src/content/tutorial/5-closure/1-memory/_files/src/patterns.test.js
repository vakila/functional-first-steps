import { describe, it, expect } from 'vitest';
import {
    makeMonotonePattern, purplePattern,
    makeFixedWidthPattern, largePattern
} from './patterns.js';


describe('makeMonotonePattern', () => {
    it('should take 1 argument', () => {
        expect(makeMonotonePattern.arguments.length).toBe(1);
    })

    const patternFn = makeMonotonePattern('green')
    it('should return a 2-argument function', () => {
        expect(typeof patternFn).toBe('function');
        expect(patternFn.arguments.length).toBe(2);
    });

    describe('purplePattern', () => {
        it('should be a function', () => {
            expect(typeof purplePattern).toBe('function')
        });
        it('should take 2 arguments', () => {
            expect(purplePattern.arguments.length).toBe(2);
            expect(purplePattern.arguments).toBeUndefined();
        })
        it('should return a pattern (SVG contents) when called', () => {
            const bluePurple = purplePattern('blue', 50)
            expect(typeof bluePurple).toBe('string');
            expect(bluePurple.startsWith('<') && bluePurple.endsWith('>'))
                .toBeTruthy();
        })
        it('should always create patterns with the color purple', () => {
            const pinkPurple = purplePattern('pink', 100);
            const whitePurple = purplePattern('white', 300);
            expect(pinkPurple.includes('purple')).toBeTruthy();
            expect(whitePurple.includes('purple')).toBeTruthy();

        })
    });
});

describe('makeFixedWidthPattern', () => {
    it('should take 1 argument', () => {
        expect(makeFixedWidthPattern.arguments.length).toBe(1);
    })

    const patternFn = makeFixedWidthPattern(300)
    it('should return a 2-argument function', () => {
        expect(typeof patternFn).toBe('function');
        expect(patternFn.arguments.length).toBe(2);
    });

    describe('largePattern', () => {
        it('should take 2 arguments', () => {
            expect(largePattern.arguments.length).toBe(2);
        })
        it('should always return a pattern of the given width', () => {
            const lgBluePink = largePattern('blue', 'pink');
            const lgBlackWhite = largePattern('black', 'white');
            expect(lgBluePink.includes('width="500"')).toBeTruthy();
            expect(lgBlackWhite.includes('width="500"')).toBeTruthy();
        })
    })
})

