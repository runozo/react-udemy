var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

// Here it is: the stateless component definition
var About = () =>
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application built on React. I have built this for the Complete React Web App Course.</p>
        <p>
            Here are some of the tools I used:
        </p>
        <ul>
            <li><a href="https://facebook.github.io/react">React</a></li> - This was the javascript framework used.
            <li><a href="http://openweathermap.org">Open Weather Map</a></li> - I used Open Weather Map to search for weather data by city name.
        </ul>
    </div>;

module.exports = About;