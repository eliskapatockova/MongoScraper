var Express = require("express");
var EH = require("express-handlebars");
var Mongoose = require("mongoose");
var Cheerio = require("cheerio");
var Axios = require("axios");

request("http://www.theonion.com/", function(error, response, html) {
    if (error) {
        console.log("ERROR: " + error);
    }
    else {
        var $ = cheerio.load(html);
    }

});