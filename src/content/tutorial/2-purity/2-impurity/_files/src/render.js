import { ART } from './art.js'

function pureGetSVG(svgContent = '') {
    // TODO
}

function impureRenderApp() {
    // TODO
}

const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg', { id: 'art' });
svg.id = 'art';
svg.innerHTML = ART;
svg.setAttribute('width', 200);
svg.setAttribute('height', 200);
svg.setAttribute('viewbox', "0 0 100 100");

const app = document.getElementById('app');

app?.replaceChildren(svg);



