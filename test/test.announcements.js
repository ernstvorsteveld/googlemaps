var assert = require("assert");
var announcements = require("../js/announcements.js");

describe("Announcements", function () {
    describe("#get()", function () {
        it("should have correct number of announcements", function () {
            var json = announcements.get();
            console.log("json: " + json);
            assert.equal(json.announcements.length, 1, "should be one!");
        })
    })
});

