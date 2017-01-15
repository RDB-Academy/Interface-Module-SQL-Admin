import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <h1>Hello World!</h1>
      </div>
    </Router>
  </Provider>
)

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default App;
