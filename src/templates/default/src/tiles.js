export function makeLabeledTile(width, height, { color, tileIndex, label = false }) {
    return [
        `<rect width=${width} height=${height} stroke="black" fill="${color}" />
  ${label &&
        `<text x=2 y=15 style="font: bold 12px monospace">${tileIndex}</text>`
        }`,

        { color, tileIndex: tileIndex + 1, label }
    ];
}

export function makeCheckerboardTile(width, height, { colors, colorIndex }) {
    const thisColor = colors[colorIndex];
    const nextIndex = (colorIndex + 1) % colors.length
    return [
        `<rect x=0 y=0 width=${width} height=${height}  fill="${thisColor}" />`,
        { colors, colorIndex: nextIndex }
    ];
}