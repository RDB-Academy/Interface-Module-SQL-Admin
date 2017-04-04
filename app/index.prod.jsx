import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from 'App';
import configureStore from './store';

const appMount = document.getElementById('root');

const history = createBrowserHistory({ basename: '/admin' });
const store = configureStore(history);


ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  appMount);
