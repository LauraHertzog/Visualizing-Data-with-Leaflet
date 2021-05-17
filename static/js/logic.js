//Function to set colors corresponding to earthquake magnitude: size and depth
function depthColor(depth) {
    var color = "";
    if (depth > 90 ) {
        color = "red";

    } else if(depth> 70) { 
        color = "orange"

    } else if (depth > 50) {
        color = "gold"

    } else if (depth > 30) {
        color = "yellow"

    } else if (depth > 10) {
        color = "lime"

    } else { color = "green"}

    return color;
  
};

//insert JSON
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

//create a map
var myMap = L.map("mapid", {
    center: [
        37.09, -95.71
      ],   
      zoom: 3
});

//Import Title layers
//StreetMap Layer
var streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);


//reqest to the query URL
d3.json(queryUrl).then(function(data) {
    L.geoJSON(data, {
        pointToLayer: function(geoJsonPoint, latlng) {
            return L.circleMarker(latlng);
        },
        style: function (feature) {
            return {color: "white",
                    opacity: 1,
                    fillOpacity: 1, 
                    weight: .5, 
                    radius: feature.properties.mag * 5,
                    fillColor:depthColor(feature.geometry.coordinates[2]) };
        }
    }).bindPopup(function (layer) {
        return layer.feature.properties.description;
    }).addTo(myMap);
    //createFeatures(data.features);
});

// function createFeatures(earthquakeData) {}
//legend inside d3 json function 
//description 