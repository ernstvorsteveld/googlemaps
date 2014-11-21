function MapFunctions() {
    var location;
    var latLong;
    var marker;
    var infoWindow;
}

MapFunctions.prototype.createMarker = function (map, title, position) {
    return new google.maps.Marker({
        position: position,
        title: title,
        map: map
    });
};

MapFunctions.prototype.createInfoWindow = function (header, title, details) {
    return new google.maps.InfoWindow({ // Create a new InfoWindow
        content: "<h3>" + header + "</h3>" + "<p>" + title + "</p>"+ "<p>" + details + "</p>"
    });
};

MapFunctions.prototype.addClickHandler = function (map, marker, infoWindow) {
    google.maps.event.addListener(marker, 'click', function () { // Add a Click Listener to our marker
        infoWindow.open(map, marker); // Open our InfoWindow
    });
};

MapFunctions.prototype.addDomListener = function (window, infowindow, position) {
    google.maps.event.addDomListener(window, 'resize', function () {
        infowindow.setCenter(position);
    });
};

MapFunctions.prototype.setMarker = function (map, postalCode, title, header, details) {
    this.location = longitudeLatitude.getLongLatByPostalCode(postalCode);
    this.latLong = new google.maps.LatLng(this.location.lat, this.location.lng);
    this.marker = this.createMarker(map, title, this.latLong);
    this.infoWindow = this.createInfoWindow(header, title, details);
    this.addClickHandler(map, this.marker, this.infoWindow);
    this.addDomListener(window, this.infoWindow, this.latLong)
};

