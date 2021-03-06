import React from 'react';
import ReactDOM from 'react-dom';
// Object destructuring
// ES5 var Route = require('react-router').Route
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
);