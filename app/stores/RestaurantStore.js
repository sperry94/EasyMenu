var dispatcher = require("../dispatcher.js");

function RestaurantStore() {
    var listeners = [];
    var restaurants = [{name:"Flower Pepper",tagline:"Chinese Food"}, {name:"Pasta Jay's",tagline:"Italian Food"}];

    function getRestaurants() {
        return restaurants;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addRestaurant(restaurant) {
        restaurants.push(restaurant);
        triggerListeners();
    }

    function deleteRestaurant(restaurant) {
        var outerIndex;
        restaurants.map(function(r, index) {
            if (r.name == restaurant.name) {
                outerIndex = index;
            }
        });
        restaurants.splice(outerIndex,1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(restaurants);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] == "restaurant") {
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
        getRestaurants: getRestaurants,
        onChange: onChange
    }
}

module.exports = RestaurantStore();
