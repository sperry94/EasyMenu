var dispatcher = require("../dispatcher.js");

module.exports = {
    addRestaurant:function(restaurant){
        dispatcher.dispatch({
            restaurant:restaurant,
            type:"restaurant:addRestaurant"
        });
    },
    deleteRestaurant:function(restaurant){
        dispatcher.dispatch({
            restaurant:restaurant,
            type:"restaurant:deleteRestaurant"
        });
    }
}
