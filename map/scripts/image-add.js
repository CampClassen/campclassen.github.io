
const fileInput = document.getElementById('fileInput');
const uploadSvgButton = document.getElementById('uploadSvg');
const exportDataButton = document.getElementById('exportData');

uploadSvgButton.addEventListener('click', () => fileInput.click());


const inputs = [];
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];


    const input = L.distortableImageOverlay(`images/map/${file.name}`, {
        actions: [L.DeleteAction, L.ScaleAction],
    }).addTo(map);

    inputs.push([file.name, input]);
})

exportDataButton.addEventListener('click', () => {

    const data = inputs.map(([name, input]) => {
        const pName = toTitleCase(name.replace("-", " ").split('.')[0]);
        const lat1 = input.getBounds().getSouthWest().lat;
        const lng1 = input.getBounds().getSouthWest().lng;

        const lat2 = input.getBounds().getNorthEast().lat;
        const lng2 = input.getBounds().getNorthEast().lng;

        return `new Structure("${pName}", "images/map/${name}", [[${lat1}, ${lng1}], [${lat2}, ${lng2}]], new StructureModal("blah blah blah"))`
    })

    // Convert to a plain text array format

    // Create a text file
    const blob = new Blob([data], { type: 'application/text' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'svg_overlay_bounds.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});


function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// <link rel="stylesheet" href="node_modules/leaflet-distortableimage-updated/dist/leaflet.distortableimage.css">
// <link rel="stylesheet" href="node_modules/leaflet-toolbar/dist/leaflet.toolbar.css"/>
// <script src="node_modules/leaflet-toolbar/dist/leaflet.toolbar.js"></script>
// <script src="node_modules/leaflet-distortableimage-updated/dist/leaflet.distortableimage.js"></script>

// <div id="controls">
//     <button id="uploadSvg">Upload SVG</button>
//     <button id="exportData">Export Data</button>
//     <input type="file" id="fileInput" accept=".svg" style="display: none;">
// </div>


