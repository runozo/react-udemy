import React from 'react';
import Nav from 'Nav';

var Main = (props) =>
    <div>
        <Nav/>
        <div>
            <div>
                <p>Main.jsx Rendered</p>
                {props.children}
            </div>
        </div>
    </div>;

module.exports = Main;