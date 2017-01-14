import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

// appMount point
const appMount = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    appMount);
}

render(App)
