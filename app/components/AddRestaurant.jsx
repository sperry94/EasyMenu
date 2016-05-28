var React = require("react");
var RestaurantActions = require("../actions/RestaurantActions.js");

module.exports = React.createClass({
    getInitialState:function() {
        return {
            name:"",
            tagline:""
        }
    },
    addRestaurant:function(e) {
        e.preventDefault();
        RestaurantActions.addRestaurant(this.state);
        this.setState(this.getInitialState());
    },
    handleInputChange:function(e) {
        e.preventDefault();
        var name = e.target.name;
        var state = this.state;
        state[name] = e.target.value;
        this.setState(state);
    },
    render:function() {
        return(
            <form className="form" onSubmit={this.addRestaurant}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Restaurant Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Restaurant Name"/>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Restaurant Name:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} placeholder="Tagline"/>
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Restaurant</button>
                </div>
            </form>
        )
    }
})
