var dispatcher = require("../dispatcher.js");
var restaurantService = require("../services/restaurantService");

function RestaurantStore() {
    var listeners = [];

    function onChange(listener) {
        getRestaurants(listener);
        listeners.push(listener);
    }

    function getRestaurants(cb) {
        restaurantService.getRestaurants().then(function (res) {
            cb(res);
        });
    }

    function addRestaurant(restaurant) {
        restaurantService.addRestaurant(restaurant).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteRestaurant(restaurant) {
        restaurantService.deleteRestaurant(restaurant).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getRestaurants(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "restaurant") {
            switch (split[1]) {
                case "addRestaurant":
                    addRestaurant(payload.restaurant);
                    break;
                case "deleteRestaurant":
                    deleteRestaurant(payload.restaurant);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = RestaurantStore();
