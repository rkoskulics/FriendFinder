// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Get the data from friend.js to show as JSON object
var Users = require("../data/friends")
var users = Users.users

module.exports = function(app){
app.get("/api/friends", function (req, res) {
    console.log("api/friends")
    return res.json(users);
});
};

