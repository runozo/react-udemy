var React = require('react');

var WeatherForm = React.createClass({
    render: function() {
        return (
            <form>
                <h2>Get Weather</h2>
                <div>
                    <input type="text" ref="weathermessage"/>
                </div>
                <div>
                    <button>Get Weather</button>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;