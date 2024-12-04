
export const pureGetSVG = (svgContent = '') => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg', { id: 'art' });
    svg.id = 'art';
    svg.innerHTML = svgContent;
    svg.setAttribute('width', 200);
    svg.setAttribute('height', 200);
    svg.setAttribute('viewbox', "0 0 100 100");
    return svg;
}


export const impureRenderApp = (art) => {
    const svg = pureGetSVG(art);
    const app = document.getElementById('app');
    app.replaceChildren(svg);
};
