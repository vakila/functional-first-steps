import { createNoise2D } from 'simplex-noise';
import alea from 'alea';

export function impureGetNoiseField() {
    const noiseField = createNoise2D(); // Uses Math.random() under the hood, not seedable
    return noiseField;
}


export function pureGetNoiseField(seed) {
    const prng = alea(seed);
    const noiseField = createNoise2D(prng);
    return noiseField;
}

export function makeNoiseRect(width, height, { noiseField, tileIndex }) {
    const noiseValue = noiseField(tileIndex * width, tileIndex * height);
    const opacity = Math.abs(noiseValue);
    return [
        `<rect x=0 y=0 width=${width} height=${height} fill="purple" fill-opacity=${opacity} />`,
        {
            noiseField,
            tileIndex: tileIndex + 1
        }
    ];
}

export function makeRandomColorRect(width, height, { colors, noiseField, tileIndex }) {
    const noiseValue = noiseField(tileIndex * width, tileIndex * height);
    const colorIndex = Math.floor(Math.abs(noiseValue * 50)) % colors.length;
    return [
        `<rect x=0 y=0 width=${width} height=${height}  fill="${colors[colorIndex]}" />`,
        {
            colors,
            noiseField,
            tileIndex: tileIndex + 1
        }
    ];
}