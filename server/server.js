var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var mongoUri = "mongodb://simplemenu:simplemenu@ds019033.mlab.com:19033/restaurantfinder";

var port = process.env.PORT || 8000;

var restaurantController = require("./controllers/restaurantController.js");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json());
app.use("/api", restaurantController);

app.listen(8000,function(){
    console.log("started listening on port", port);
})

mongoose.connect(mongoUri);
