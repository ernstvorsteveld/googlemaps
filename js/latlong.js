var longitudeLatitude = {};

longitudeLatitude.getXmlHttp = function () {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
};

longitudeLatitude.getLongitudeLatitude = function (responseAsJson) {
    return responseAsJson.results[0].geometry.location;
};

longitudeLatitude.getLongLatByPostalCode = function (postalcode) {
    var xmlHttp = longitudeLatitude.getXmlHttp();
    xmlHttp.open("GET", "http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:" + postalcode + "&sensor=false", false);
    xmlHttp.send();
    var responseAsJson = JSON.parse(xmlHttp.responseText)
    return longitudeLatitude.getLongitudeLatitude(responseAsJson);
};