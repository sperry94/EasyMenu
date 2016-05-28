var React = require("react");
var ReactDOM = require("react-dom");
var RestaurantList = require("./components/RestaurantList.jsx");
var RestaurantStore = require("./stores/RestaurantStore.js");

var restaurants = RestaurantStore.getRestaurants();

RestaurantStore.onChange(function(_restaurants){
    restaurants = _restaurants;
    render();
});

function render(){
    ReactDOM.render(<RestaurantList restaurants={restaurants} />, document.getElementById("container"));
}

render();
