var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

//mongodb://<dbuser>:<dbpassword>@ds351987.mlab.com:51987/heroku_0nw1t8jh

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/onionArticles";
//console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI);

app.use(require("./routes/routes.js"));

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
