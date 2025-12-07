let map = L.map('apMap').setView([51.2963579, 4.5749117], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.3030985, 4.5518612], [51.2902816, 4.5925677]];

L.rectangle(bounds, { color: "#ff6600", weight: 1 }).addTo(map);

let Marker = L.marker([51.297675,  4.57353]).addTo(map);
Marker.bindPopup("<b>Sint-Job</b><br>2960").openPopup();