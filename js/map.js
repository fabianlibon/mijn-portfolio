let map = L.map('map').setView([51.2963579, 4.5749117], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.312487, 4.5420696], [51.2877603, 4.5955331]];

L.rectangle(bounds, { color: "#ff6600", weight: 1 }).addTo(map);

let Marker = L.marker([51.297675,  4.57353]).addTo(map);
Marker.bindPopup("<b>Sint-Job</b><br>2960").openPopup();