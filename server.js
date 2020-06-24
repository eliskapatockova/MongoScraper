var Express = require("express");
var EH = require("express-handlebars");
var Mongoose = require("mongoose");
var Cheerio = require("cheerio");
var Axios = require("axios");
var request = require("request");

// Requiring note and article models
var Note = require("./models/note.js");
var Article = require("./models/index.js");

var port = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
  });