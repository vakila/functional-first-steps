import { describe, it, expect } from 'vitest';
import { purplePattern, largePattern } from './patterns.js';

describe('makeMonotonePattern', () => {
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
    describe('largePattern', () => {
        it('should always return a pattern of the given width', () => {
            const lgBluePink = largePattern('blue', 'pink');
            const lgBlackWhite = largePattern('black', 'white');
            expect(lgBluePink.includes('width=500')).toBeTruthy();
            expect(lgBlackWhite.includes('width=500')).toBeTruthy();
        })
    })
})

