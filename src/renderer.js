import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

window.onload = function() {
    document.documentElement.style.width = '100%';
    document.documentElement.style.height = '100%';
    document.body.style.background = '#171717';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';

    ReactDOM.render(<App/>, document.getElementById('app'));
}