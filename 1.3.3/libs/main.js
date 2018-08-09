var map = L.map('map', {
    center: [50.0064, 36.2351],
    zoom: 17,
    maxZoom: 20
});
var hash = new L.Hash(map);

var layerOSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var layerMapSurfer = new L.tileLayer("http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}", {
    attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var layerMapboxImagery = new L.tileLayer(
    'http://{s}.tiles.mapbox.com/v4/openstreetmap.map-inh7ifmo/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaGFzdCIsImEiOiJjamttNzNsbzUyMmZ5M3ZtejMzaHdtMjZ6In0.AM5GdLMffJOY9hRT4sYY4g', {
        attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
    });

var layerEsriWorldImagery = new L.tileLayer(
    'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="http://www.esri.com/">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 20,
        maxNativeZoom: 18
    });

var layerGoogleRoads = L.gridLayer.googleMutant({
    type: 'roadmap',
    maxZoom: 20,
    maxNativeZoom: 18
});

var layerGoogleSatellite = L.gridLayer.googleMutant({
    type: 'satellite',
    maxZoom: 20,
    maxNativeZoom: 18
});

var layerGoogleTerrain = L.gridLayer.googleMutant({
    type: 'terrain',
    maxZoom: 20,
    maxNativeZoom: 18
});

var layerGoogleHybrid = L.gridLayer.googleMutant({
    type: 'hybrid',
    maxZoom: 20,
    maxNativeZoom: 18
});

var baseLayers = {
    "OpenStreetMap": layerOSM,
    "MapSurfer": layerMapSurfer,
    "Mapbox Imagery": layerMapboxImagery,
    "ESRI World Imagery": layerEsriWorldImagery,
    "Google Roads": layerGoogleRoads,
    "Google Satellite": layerGoogleSatellite,
    "Google Terrain": layerGoogleTerrain,
    "Google Hybrid": layerGoogleHybrid
};

L.control.layers(baseLayers, null, {
    collapsed: false
}).addTo(map);

layerOSM.addTo(map);