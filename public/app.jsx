var GreeterMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        )
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
        if (message.length > 0) {
            this.refs.message.value = '';
            this.props.onNewMessage(message);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/><br/>
                <textarea ref="message"/><br/>
                <button>Set</button>
            </form>
        )
    }
});

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is from the default props'
        }
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewName: function(name) {
        this.setState({
            name: name
        });
    },
    handleNewMessage: function(message) {
        this.setState({
            message: message
        });
    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name ={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
            </div>
        );
    }
});

var firstName = 'Cesare';
var message = 'This is a default message';

ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);