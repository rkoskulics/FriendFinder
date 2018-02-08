// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Require friends.js JSON data

var Users = require("../data/friends.js");
var users = Users.users

module.exports = function(data){
    app.get("/api/friends", function (req, res) {
    console.log("api/friends")
        return res.json(users);
    });
};