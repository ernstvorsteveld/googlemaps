var MapOptions = function () {

    var defaultMapOptions = {
        zoom: 12, // The initial zoom level when your map loads (0-20)
        minZoom: 6, // Minimum zoom level allowed (0-20)
        maxZoom: 17, // Maximum soom level allowed (0-20)
        zoomControl: true, // Set to true if using zoomControlOptions below, or false to remove all zoom controls.
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT // Change to SMALL to force just the + and - buttons.
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
        scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
        // All of the below are set to true by default, so simply remove if set to true:
        panControl: false, // Set to false to disable
        mapTypeControl: false, // Disable Map/Satellite switch
        scaleControl: false, // Set to false to hide scale
        streetViewControl: false, // Set to disable to hide street view
        overviewMapControl: false, // Set to false to remove overview control
        rotateControl: false // Set to false to disable rotate control
    };

    this.setCenter = function (myLatlong) {
        defaultMapOptions.center = myLatlong;
        return defaultMapOptions;
    }
};