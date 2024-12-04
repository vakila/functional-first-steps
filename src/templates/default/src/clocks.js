export function makeClockTile(width, height, { colors, noiseField, tileIndex }) {
    const noiseValue = noiseField(tileIndex * width, tileIndex * height);
    const rotationAngle = 45 * (noiseValue * 4);
    const colorIndex = tileIndex % colors.length;

    return [
        `<circle cx=${width / 2} cy=${height / 2} r=${width / 2 - 1
        } stroke="black" fill="${colors[colorIndex]}" />
      <line x1=${width / 2} x2=${width / 2} y1=1 y2=${height / 2 - 1
        } stroke="black" transform="rotate(${rotationAngle}, ${width / 2}, ${height / 2
        })"/>`,
        {
            colors,
            noiseField,
            tileIndex: tileIndex + 1
        }
    ];
}