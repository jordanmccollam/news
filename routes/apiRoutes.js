var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function(app) {

    app.get("/scrape", function(req, res) {
        var url = "https://news.google.com/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRGxqTjNjd0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen"

        axios.get(url).then(function(response) {

            var $ = cheerio.load(response.data);

            

            res.redirect("index");
        })

    });

}