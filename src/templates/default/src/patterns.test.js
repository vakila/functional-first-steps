import { describe, it, expect } from 'vitest';
import {
    makeMonotonePattern, purplePattern,
    makeFixedWidthPattern, largePattern
} from './patterns.js';


describe('makeMonotonePattern', () => {

    it('should return a function', () => {
        const patternFn = makeMonotonePattern('green')
        expect(typeof patternFn).toBe('function');
    });

    describe('purplePattern', () => {
        it('should be a function', () => {
            expect(typeof purplePattern).toBe('function')
        });
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

    it('should return a function', () => {
        expect(typeof makeFixedWidthPattern(300)).toBe('function');
    });

    describe('largePattern', () => {

        it('should always return a pattern of the given width', () => {
            const lgBluePink = largePattern('blue', 'pink');
            const lgBlackWhite = largePattern('black', 'white');
            expect(lgBluePink.includes('width=500')).toBeTruthy();
            expect(lgBlackWhite.includes('width=500')).toBeTruthy();
        })
    })
})

