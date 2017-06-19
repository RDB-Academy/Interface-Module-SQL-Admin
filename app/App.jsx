import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/main.css';

import { logoutUser } from 'actions/sessionActions';
import Navbar from 'components/Navbar';

import { SessionSelector } from 'selectors';

import { Home, SchemaDefPage, LoginPage, License } from 'pages';

import TaskPage from 'containers/Task';

class Application extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired, // eslint-disable-line
  };

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logoutUser();
  }

  render() {
    const { isLoggedIn, history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div>
          <Helmet
            title="SQL Admin-Tool"
          />
          <Navbar isLoggedIn={isLoggedIn} logout={this.logout} />
          <main>
            { isLoggedIn ? (
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/schema-defs" component={SchemaDefPage} />
                <Route path="/tasks" component={TaskPage} />
                <Route path="/task-trials" exact render={() => (<h1>taskTrials</h1>)} />
                <Route path="/license" component={License} />
                <Route
                  render={() => (
                    <Redirect to="/" />
                  )}
                />
              </Switch>
            ) : (
              <Switch>
                <Route path="/login" exactly component={LoginPage} />
                <Route
                  render={() => (
                    <Redirect to="/login" />
                  )}
                />
              </Switch>
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
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: SessionSelector.getId(state) !== null,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: bindActionCreators(logoutUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
