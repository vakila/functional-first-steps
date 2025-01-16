// src/patterns.js

export function diamondPattern(color1, color2, width) {

  const rect = `<rect x=0 y=0 width=${width} height=${width} fill="${color1}" />`;

  if (width <= 20) { // BASE CASE
    return rect;
  } else { // RECURSIVE CASE
    const smallerWidth = width * Math.SQRT2 / 2
    return `${rect}
          <g transform="translate(${width / 2}) rotate(45)  ">
            ${diamondPattern(color2, color1, smallerWidth)}
          </g>`;
  }

}


export function makeMonotonePattern(color2) {
  return (color1, width) => diamondPattern(color1, color2, width);
}

export const purplePattern = makeMonotonePattern('purple');


export function makeFixedWidthPattern(width) {
  return (color1, color2) => diamondPattern(color1, color2, width);
}

export const largePattern = makeFixedWidthPattern(500);


export function makeMonotoneFixedWidthPattern(color2, width) {
  return (color1) => diamondPattern(color1, color2, width);
}

export const smallBluePattern = makeMonotoneFixedWidthPattern('blue', 100);

