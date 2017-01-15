import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import Miss from 'react-router/Miss';
import Link from 'react-router/Link';

class App extends Component {
  render() {
    const { store } = this.props;
    const isLoggedIn = true;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <Link to="/" activeClassName="active" activeOnlyWhenExact>Home</Link>
              <Link to="/schemaDefs" activeClassName="active" activeOnlyWhenExact>SchemaDefs</Link>
              <Link to="/tasks" activeClassName="active" activeOnlyWhenExact>Tasks</Link>
              <Link to="/taskTrials" activeClassName="active" activeOnlyWhenExact>TaskTrials</Link>
              <Link to="/status" activeClassName="active" activeOnlyWhenExact>Status</Link>
            </nav>
            <main>
              { isLoggedIn ? (
                <p>User is Logged In</p>
              ) : (
                <div>
                  <p>User is not Logged In</p>
                  <Redirect to="/login" />
                </div>
              )}
              { isLoggedIn ? (
                <div>
                  <Match pattern="/" exactly render={() => (<div>Index</div>)} />
                  <Match pattern="/schemaDefs" exactly render={() => (<div>schemaDefs</div>)} />
                  <Match pattern="/tasks" exactly render={() => (<div>tasks</div>)} />
                  <Match pattern="/taskTrials" exactly render={() => (<div>taskTrials</div>)} />
                  <Match pattern="/status" exactly render={() => (<div>status</div>)} />
                </div>
              ) : (
                <Match pattern="/login" exactly render={() => (<div>login</div>)} />
              )}
              <Miss
                render={({ location }) => (
                  <div>Nothing matched {location.pathname}.</div>
                )}
              />
            </main>
            <footer>
              <p>Footer</p>
            </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object.isRequired, // eslint-disable-line
};

export default App;
