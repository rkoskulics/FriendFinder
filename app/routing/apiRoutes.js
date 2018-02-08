

// Get the data from friend.js to show as JSON object
var Users = require("../data/friends");
var users = Users.users;
var newUser = Users.newUser;


// Logic to compare the data the user types in to the dummy data
var eachDifferenceArray = [];
function compare() {
    for (var i = 0; i < users.length; i++) {
        var eachDifference = 0
        for (var j = 0; j < users[i].scores.length; j++) {
            var difference = Math.abs(users[i].scores[j] - newUser.scores[j]);
            eachDifference = difference + eachDifference;
        }
        eachDifferenceArray.push(eachDifference)
    }
    console.log(eachDifferenceArray)
}
function smallestDifference(array) {
    var closestMatch = array.indexOf(Math.min.apply(null, array));
    console.log(users[closestMatch].name)
};

module.exports = function(app){
    // Shows JSON object of current users
    app.get("/api/friends", function (req, res) {
        console.log("api/friends")
        return res.json(users);
    });
    app.post("/api/friends", function(req, res){
        newUser.push(req.body);
        res.json(true)
        compare();
        // smallestDifference(eachDifferenceArray)
        console.log("hello")
        console.log(newUser)
        console.log(users)
    })


};

