var React = require("react");
var ReactDOM = require("react-dom");
var RestaurantList = require("./components/RestaurantList.jsx");
var RestaurantStore = require("./stores/RestaurantStore.js");
var restaurants = [];
var getRestaurantsCallback = function(_restaurants){
    restaurants = _restaurants;
    render();
};

RestaurantStore.onChange(getRestaurantsCallback);

function render(){
    ReactDOM.render(<RestaurantList restaurants={restaurants} />, document.getElementById("container"));
}

render();
