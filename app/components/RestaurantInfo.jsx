var React = require("react");
var RestaurantActions = require("../actions/RestaurantActions.js");

module.exports = React.createClass({
    deleteRestaurant: function(e) {
        e.preventDefault();
        RestaurantActions.deleteRestaurant(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                </div>
                <div className="panel-body">
                    {this.props.info.tagline}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteRestaurant}>&times;</span>
                </div>
            </div>
        )
    }
})
