const mapboxgl = require("mapbox-gl");
const markerMaker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoicmVkaW9uIiwiYSI6ImNrMTZsazZoYjB5bDEzbGxibG9jMmEzd3EifQ.JgTbfzqU7pwxYRxabTFfmw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker = markerMaker('Restaurant', [-74.009, 40.705])
marker.addTo(map)
