import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from 'containers/App';
import configureStore from './store';

const appMount = document.getElementById('root');

const history = createHistory();
const store = configureStore(history);


ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  appMount);
