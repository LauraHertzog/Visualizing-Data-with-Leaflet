//Function to set colors corresponding to earthquake magnitude: size and depth
function magnitudeColor(magnitude) {
    
};

//insert JSON
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

//Import Title layers
//StreetMap Layer
var streetmap = L.titleLayer()
    attribution:,
    tileSize:,
    maxZoom:,
    zoomOffset:,
    id:,
    accessToken: API_KEY

//Satellite Layer
var satellitemap = L.titleLayer
//Darkmap Layer
var darkmap = L.titleLayer
//Lightmap Layer

//defining baseMaps
var baseMaps = {
    "Street": streetmap,
    "Satellite": satellite, 
    "Dark": darkmap, 
    "Light": lightmap,
};

//create a map
var myMap = L.map("map", {
    center: 
})
//reqest to the query URL
d3.json(queryUrl).then(function(data) {
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {}
