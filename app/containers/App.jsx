import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/main.css';

import { logoutUser } from 'actions/sessionActions';
import Navbar from 'components/Navbar';

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
          <Helmet
            title="SQL Admin-Tool"
          />
          <Navbar isLoggedIn={isLoggedIn} logout={this.logout} />
          <main>
            { isLoggedIn ? (
              <div>
                <Route pattern="/" exactly render={() => (<h1>Index</h1>)} />
                <Route pattern="/schema-defs" component={SchemaDefPage} />
                <Route pattern="/table-defs" component={TableDefPage} />
                <Route pattern="/tasks" component={TaskPage} />
                <Route pattern="/task-trials" exactly render={() => (<h1>taskTrials</h1>)} />
                <Route pattern="/status" exactly render={() => (<h1>status</h1>)} />
                <Route
                  render={() => (
                    <Redirect to="/" />
                  )}
                />
              </div>
            ) : (
              <div>
                <Route pattern="/login" exactly component={LoginPage} />
                <Route
                  render={() => (
                    <Redirect to="/login" />
                  )}
                />
              </div>
            )}
            <div className="push" />
          </main>
          <footer className="footer text-muted">
            <Container>
              <p>Footer</p>
              <p><b>Build Date:</b> <i>{__VERSION__}</i></p>
            </Container>
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
