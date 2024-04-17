var map = L.map('map').setView([-8.554272968270357, 115.2716845613025], 7);

// OSM Layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);

// Google Satellite Layer
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});
googleSat.addTo(map);

// Google Terrain Layer
var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});
googleTerrain.addTo(map);

// Layer Control
var baseMaps = {
    "OSM": osm,
    "Satellite": googleSat,
    "Terrain": googleTerrain
};

var layerControl = L.control.layers(baseMaps).addTo(map);
