var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//         var {temp, location} = this.props;
//         return (
//             <h3>It's it {temp} in {location}</h3>
//         );
//     }
// });

var WeatherMessage = (props) => (
    <h3 className="text-center">It's it {props.temp} in {props.location}</h3>
);

module.exports = WeatherMessage;