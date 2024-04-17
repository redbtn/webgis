var map = L.map('map').setView([-8.554272968270357, 115.2716845613025], 11);

// OSM LAYER
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);

// SATELLITE LAYER
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});
googleSat.addTo(map);

// TERRAIN LAYER
var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});
googleTerrain.addTo(map);

// KECAMATAN DATA STYLE

/** 1. Color Setting Kecamatan Area */
function getColor(d) {
    return d == 'Abiansemal'    ? '#a6cee3' :
           d == 'Bangli'        ? '#1f78b4' :
           d == 'Blahbatuh'     ? '#b2df8a' :
           d == 'Gianyar'       ? '#33a02c' :
           d == 'Kintamani'     ? '#fb9a99' :
           d == 'Payangan'      ? '#e31a1c' :
           d == 'Petang'        ? '#fdbf6f' :
           d == 'Sukawati'      ? '#ff7f00' :
           d == 'Susut'         ? '#cab2d6' :
           d == 'Tampaksiring'  ? '#6a3d9a' :
           d == 'Tegalallang'   ? '#ffff99' :
           d == 'Ubud'          ? '#b15928' :
                                  '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.NAMOBJ),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

/** 2. Define stye function to kecamatan variable */
var kecamatan = L.geoJSON(kecamatandata, {
    style
}
    ).addTo(map);


//ADD GEOJSON DATA
//var kecamatan = L.geoJSON(kecamatandata).addTo(map);
var sungai = L.geoJSON(sungaidata).addTo(map);

var spatialdata = L.featureGroup([googleSat, osm, sungai]);
spatialdata.addTo(map);

// LAYER CONTROL
var baseMaps = {
    "OSM": osm,
    "Satellite": googleSat,
    "Terrain": googleTerrain
};

var overlayMaps = {
    "Kecamatan": kecamatan,
    "Sungai": sungai
};


map.removeLayer(spatialdata);

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
