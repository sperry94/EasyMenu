var mongoose = require("mongoose");
var Restaurant = require("../data/restaurant.js");
var _ = require("underscore");

var router = require("express").Router();
router.route("/restaurants/:name?").get(getRestaurants).post(addRestaurant).delete(deleteRestaurant);

function getRestaurants(req, res) {
    Restaurant.find(function (err, restaurants) {
        if (err)
            res.send(err);
        else
            res.json(restaurants);
    });
}

function addRestaurant(req, res) {
    var restaurant = new Restaurant(_.extend({}, req.body));
    restaurant.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(restaurant);
    });
}

function deleteRestaurant(req, res) {
    var _name = req.params.name;
    Restaurant.remove({name: _name}, function (err, removed) {
        if (err)
            res.send(err);
        else
            res.json(removed);
    });
}

module.exports = router;
