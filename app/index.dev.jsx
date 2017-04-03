import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

import App from 'containers/App';
import configureStore from './store';

const appMount = document.getElementById('root');

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </AppContainer>,
  appMount);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NewApp = require('./containers/App').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NewApp history={history} />
        </Provider>
      </AppContainer>,
      appMount);
  });
}
