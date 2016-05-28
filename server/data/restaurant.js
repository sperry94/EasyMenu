var mongoose = require("mongoose");
var restaurantSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model("restaurant", restaurantSchema);
