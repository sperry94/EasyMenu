var React = require("react");
var ReactDOM = require("react-dom");
var RestaurantList = require("./components/RestaurantList.jsx");

var restaurants = [{name:"Flower Pepper",tagline:"Chinese Food"}];

function render(){
    ReactDOM.render(<RestaurantList restaurants={restaurants} />, document.getElementById("container"));
}
render();
