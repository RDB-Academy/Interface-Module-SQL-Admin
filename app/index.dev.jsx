import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from 'App';

// appMount point
const appMount = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    appMount);
}

render(App)

if(module.hot) {
  module.hot.accept('./App', () =>{
    const NewApp = require('./App').default;
    render(NewApp);
  });
}
