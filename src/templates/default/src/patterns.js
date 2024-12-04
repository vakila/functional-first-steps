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
  // TODO return a monotonePattern function that takes in color1 and width
  // When called, the output of monotonePattern will be a 
  return (color1, width) => diamondPattern(color1, color2, width);
}

export const purplePattern = makeMonotonePattern('purple');


export function makeFixedWidthPattern(width) {
  // TODO return a fixedWidthPattern function that takes in
  // both colors, and returns a pattern of the given width
  return (color1, color2) => diamondPattern(color1, color2, width);
}

export const largePattern = makeFixedWidthPattern(500);


export function makeMonotoneFixedWidthPattern(color2, width) {
  // TODO return a pattern function that takes in color1, 
  // and returns a pattern with the given color2 & width
  return (color1) => diamondPattern(color1, color2, width);
}



export const smallBluePattern = makeMonotoneFixedWidthPattern('blue', 100);




export function tiledPattern(width, height, cols, rows, tileFn, data) {
  if (width === 0 || height === 0) { // BASE CASE
    return ``;
  }
  const [colWidth, rowHeight] = [width / cols, height / rows];
  const [thisTile, newData] = tileFn(colWidth, rowHeight, data);

  return `${thisTile}
      ${cols > 1
      ? // rest of this row to the right of this tile
      `<g transform="translate(${colWidth}, 0)">         
              ${tiledPattern(
        width - colWidth,
        rowHeight,
        cols - 1,
        1,
        tileFn,
        newData
      )}
            </g>`
      : ``
    }
      ${rows > 1
      ? // rows below this one
      `<g transform="translate(0, ${rowHeight})">
              ${tiledPattern(width, height - rowHeight, cols, rows - 1, tileFn, {
        ...newData,
        tileIndex: newData.tileIndex + cols - 1
      })}
            </g>`
      : ``
    }
    `;
}