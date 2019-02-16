var path = require("path");

var friends = require("../data/friends");

module.exports = function (app) {
    //all friend entries
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post('api/friends', function (req, res) {
        //capture user input object
        var userInput = req.body;
        var userResponses = userInput.scores;

        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            //compute differences
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        //add user
        friends.push(userInput);

        //send appropriate reponse
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
        });

};