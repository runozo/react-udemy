var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Cesare';
var message = 'This is a default message';

ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);