import React from 'react';

var Main = (props) =>
    <div>
        <div>
            <div>
                <p>Main.jsx Rendered</p>
                {props.children}
            </div>
        </div>
    </div>;

module.exports = Main;