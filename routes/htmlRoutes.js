var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Article.find({}, function(err, found) {
            if (err) {
                console.log(err);
            } else {
                var data = {
                    article: found
                }
                res.render("index", data);
            }
        })
    })

}