fs = require('fs');
var announcements = {};

announcements.prototype.get = function () {
    var json =
    fs.readFileSync('/Users/ernstvorsteveld/private/googlemaps/js/announcements.json', 'utf8', function (err, data) {
        if (err) {
            return console.log("error: " + err);
        }
    });
    json = JSON.parse(json);
    return json;
};
