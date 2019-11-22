var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

// Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news";
mongoose.connect(MONGODB_URI);

module.exports = function(app) {

    app.get("/scrape", function(req, res) {
        var url = "https://news.google.com/?hl=en-US&gl=US&ceid=US%3Aen"

        axios.get(url).then(function(response) {

            var $ = cheerio.load(response.data);

            // Grab all the articles
            $("div.assetWrapper").each(function(i, element) {
                var result = {};
                // result.headline = $(this).chilren("span.balancedHeadline").text();
                // result.summary = $(this).children("div.SbNwzf").children("article").children("h4").children("a").text();
                // result.url = $(this).children("div.SbNwzf").children("article").children("h4").children("a").find("href");

                // console.log(result);

                // db.Article.create(result)
                //     .then(function(dbArticle) {
                //         console.log(dbArticle);
                //     })
                //     .catch(function(err) {
                //         console.log(err);
                //     })
            });

            // res.redirect("/");
            res.send("scraped");
        })

    });

}