import React, { Component } from 'react';
import { Provider }  from 'react-redux';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <h1>Hello World!</h1>
    </div>
  </Provider>
)

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default App;
