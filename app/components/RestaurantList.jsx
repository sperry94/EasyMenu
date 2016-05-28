var React = require("react");
var RestaurantInfo = require("./RestaurantInfo.jsx");

module.exports = React.createClass({
    render:function(){
        return(
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    {
                        this.props.restaurants.map(function(s,index){
                            return(
                                <RestaurantInfo info={s} key={"restaurant"+index} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
})
