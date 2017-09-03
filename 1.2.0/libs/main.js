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
    'http://{s}.tiles.mapbox.com/v4/openstreetmap.map-inh7ifmo/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJhNVlHd29ZIn0.ti6wATGDWOmCnCYen-Ip7Q', {
        attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
    });

var layerGoogleRoads = L.gridLayer.googleMutant({
    type: 'roadmap', // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
    maxZoom: 20,
    maxNativeZoom: 18
});

layerGoogleRoads.addTo(map);

var baseLayers = {
    "OpenStreetMap": layerOSM,
    "MapSurfer": layerMapSurfer,
    "Mapbox Imagery": layerMapboxImagery,
    "Google Roads": layerGoogleRoads
};

L.control.layers(baseLayers, null, {
    collapsed: false
}).addTo(map);