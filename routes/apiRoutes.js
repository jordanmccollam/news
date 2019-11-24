var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

// Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news";
mongoose.connect(MONGODB_URI);

module.exports = function(app) {

    app.get("/scrape", function(req, res) {

        // Empty current articles in database
        // db.Article.remove().then(function() {
        //     console.log("Articles emptied, ready for scrape.");
        // });

        var url = "https://www.nytimes.com"

        axios.get(url).then(function(response) {

            var $ = cheerio.load(response.data);

            // Grab all the articles
            $("article").each(function(i, element) {
                var result = {};
                result.headline = $(element).find("h2").text();
                result.summary = $(element).find("p").text()
                result.url = url + $(element).find("a").attr("href");
                
                db.Article.create(result)
                    .then(function(dbArticle) {
                        console.log(dbArticle);
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            });
            res.redirect("/");
        })

    });

}