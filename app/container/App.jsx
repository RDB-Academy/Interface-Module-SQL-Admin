import React, { Component } from 'react';

import BrowserRouter from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import Miss from 'react-router/Miss';
import Link from 'react-router/Link';

import { connect } from 'react-redux';

import LoginPage from './LoginPage';

class App extends Component {
  render() {
    const isLoggedIn = false;
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/" activeClassName="active" activeOnlyWhenExact>Home</Link>
            { isLoggedIn && (
              <div>
                <Link to="/schemaDefs" activeClassName="active" activeOnlyWhenExact>SchemaDefs</Link>
                <Link to="/tasks" activeClassName="active" activeOnlyWhenExact>Tasks</Link>
                <Link to="/taskTrials" activeClassName="active" activeOnlyWhenExact>TaskTrials</Link>
                <Link to="/status" activeClassName="active" activeOnlyWhenExact>Status</Link>
              </div>
            )}
          </nav>
          <main>
            { isLoggedIn ? (
              <div>
                <Match pattern="/" exactly render={() => (<div>Index</div>)} />
                <Match pattern="/schemaDefs" exactly render={() => (<div>schemaDefs</div>)} />
                <Match pattern="/tasks" exactly render={() => (<div>tasks</div>)} />
                <Match pattern="/taskTrials" exactly render={() => (<div>taskTrials</div>)} />
                <Match pattern="/status" exactly render={() => (<div>status</div>)} />
              </div>
            ) : (
              <div>
                <Match pattern="/login" exactly component={LoginPage} />
                <Miss
                  render={() => (
                    <Redirect to="/login" />
                  )}
                />
              </div>
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
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state, props) {
  console.log(state);
  console.log(props);
  return {
    store: state,
  };
}

export default connect(mapStateToProps)(App);
