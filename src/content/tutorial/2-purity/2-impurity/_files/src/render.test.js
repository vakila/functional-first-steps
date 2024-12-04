import { beforeAll, describe, expect, it } from 'vitest';
import { pureGetSVG } from './render.js';


describe.only('pureGetSVG', () => {
    beforeAll(() => {
        const app = document.createElement('div', { id: 'app' });
        document.body.appendChild(app);
    });
    it('should return an SVG element with id "art"', () => {
        const svg = pureGetSVG('');
        expect(svg).not.toBeUndefined;
        expect(svg.tagName).toBe('svg');
        expect(svg.id).toBe('art');
    })

    describe('returned SVG', () => {
        it('has the right dimensions', () => {
            const svg = pureGetSVG('<rect x="0" y="0" width="100" height="100" fill="green" />');
            expect(svg.getAttribute('width')).toBe("200");
            expect(svg.getAttribute('height')).toBe("200");
        });

        it('contains the given content', () => {
            const svg = pureGetSVG('<rect x="0" y="0" width="100" height="100" fill="green" />');
            const { children, firstChild } = svg;
            expect(children.length).toBe(1);
            expect(firstChild.tagName).toBe('rect');
            expect(firstChild.getAttribute('fill')).toBe("green");
        })
    });

})

