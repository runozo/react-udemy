var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Get Weather</h2>
                <div>
                    <input type="text" ref="location"/>
                </div>
                <div>
                    <button>Get Weather</button>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;