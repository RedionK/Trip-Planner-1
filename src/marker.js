const mapboxgl = require("mapbox-gl");

const markerMaker = function(type, coordinates) {
    
    const mark = document.createElement("div");
    mark.style.backgroundSize = "contain";
    mark.style.width = "50px";
    mark.style.height = "50px";
    mark.style.backgroundRepeat = "no-repeat";

    if (type === 'Activity') {
        mark.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
    } else if (type === 'Hotel') {
        mark.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    } else if (type === 'Restaurant') {
        mark.style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/map-pins-2/256/21-512.png)"
    } else {
        mark.style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png)"
    }
    
    return new mapboxgl.Marker(mark).setLngLat(coordinates)
}


module.exports = markerMaker