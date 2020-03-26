import { htmlToElement } from '../js/utilities.js';


export default ({ stroke, fill }) => htmlToElement(`
<svg height="48" width="50" viewBox="0 0 48 50" stroke="${ stroke || "black"}" fill="${ fill || "black"}">
    <g transform="scale(2)">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
    </g>
</svg>
`);