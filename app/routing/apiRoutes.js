var path = require("path");

var friends = require("../data/friends");

module.exports = function(app) {
    //all friend entries
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    
}