

// Get the data from friend.js to show as JSON object
var Users = require("../data/friends");
var users = Users.users;
var newUser = Users.newUser;
var matchedUser

// Logic to compare the data the user types in to the dummy data
var eachDifferenceArray = [];
function compare() {
    for (var i = 0; i < users.length; i++) {
        var eachDifference = 0
        for (var j = 0; j < users[i].scores.length; j++) {
            var difference = Math.abs(users[i].scores[j] - newUser[0].scores[j]);
            eachDifference = difference + eachDifference;
        }
        eachDifferenceArray.push(eachDifference)
    }
    console.log(eachDifferenceArray)
    var closestMatch = eachDifferenceArray.indexOf(Math.min(...eachDifferenceArray));
    matchedUser = users[closestMatch]
    console.log(matchedUser)
}

module.exports = function(app){
    // Shows JSON object of current users
    app.get("/api/friends", function (req, res) {
        console.log("api/friends")
        return res.json(users);
    });
    // Attempt to push the data to survery HTML
    // TODO get this to work!
    app.post("/api/friends", function(req, res){
        newUser.push(req.body);
        console.log(newUser)
        console.log(users)
        compare();
        res.json(matchedUser);

    })


};

