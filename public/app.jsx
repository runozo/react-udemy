var Greeter = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello React2!</h1>
                <p>This is from a component</p>
            </div>
        );
    }
});
ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);