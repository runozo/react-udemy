import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Time App</li>
                        <li><IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
                        <li><Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="http://ghirelli.eu" target="_blank">Cesare Ghirelli</a></li>
                    </ul>
                </div>
            </div>
        );
    }
};
