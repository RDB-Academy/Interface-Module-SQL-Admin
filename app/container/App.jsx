import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Match, Redirect, Miss, Link } from 'react-router';

import { logoutUser } from 'actions/sessionActions';
import LoginPage from './LoginPage';
import SchemaDefPage from './SchemaDef';
import TableDefPage from './TableDef';
import TaskPage from './Task';

class App extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logoutUser();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <BrowserRouter basename="/admin">
        <div>
          <nav>
            <Link to="/" activeClassName="active" activeOnlyWhenExact>Home</Link>
            { isLoggedIn && (
              <div>
                <Link to="/schemaDef" activeClassName="active" activeOnlyWhenExact>SchemaDefs</Link>
                <Link to="/task" activeClassName="active" activeOnlyWhenExact>Tasks</Link>
                <Link to="/taskTrial" activeClassName="active" activeOnlyWhenExact>TaskTrials</Link>
                <Link to="/status" activeClassName="active" activeOnlyWhenExact>Status</Link>
                <button onClick={this.logout}>Logout</button>
              </div>
            )}
          </nav>
          <hr />
          <main>
            { isLoggedIn ? (
              <div>
                <Match pattern="/" exactly render={() => (<h1>Index</h1>)} />
                <Match pattern="/schemaDef" component={SchemaDefPage} />
                <Match pattern="/tableDef" component={TableDefPage} />
                <Match pattern="/task" component={TaskPage} />
                <Match pattern="/taskTrial" exactly render={() => (<h1>taskTrials</h1>)} />
                <Match pattern="/status" exactly render={() => (<h1>status</h1>)} />
                <Miss
                  render={() => (
                    <Redirect to="/" />
                  )}
                />
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
          </main>
          <hr />
          <footer>
            <p>Footer</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
  logoutUser: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.session.id !== null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: bindActionCreators(logoutUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
