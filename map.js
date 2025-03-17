function showMarkerAt(place) {
    marker.style.top = `${place.top * 100}%`;
    marker.style.left = `${place.left * 100}%`;
    map.src = `images/level_${place.level}.png`;
    mapContainer.style.display = "block";
}