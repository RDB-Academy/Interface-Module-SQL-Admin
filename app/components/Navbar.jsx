import React, { Component, PropTypes } from 'react';
import Link from 'react-router/Link';
import { Collapse, Navbar as BSNavBar, NavbarToggler, NavItem } from 'reactstrap';

class Navbar extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isLoggedIn, logout } = this.props;

    return (
      <BSNavBar color="inverse" fixed="top" inverse toggleable="sm">
        <div className="container">
          <NavbarToggler right onClick={this.toggle} />
          <Link to="/" className="navbar-brand">Home</Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            { isLoggedIn && (
              <ul className="navbar-nav mr-auto">
                <NavItem>
                  <Link to="/schemaDef" className="nav-link" activeClassName="active">SchemaDefs</Link>
                </NavItem>
                <NavItem>
                  <Link to="/task" className="nav-link" activeClassName="active">Tasks</Link>
                </NavItem>
                <NavItem>
                  <Link to="/taskTrial" className="nav-link" activeClassName="active">TaskTrials</Link>
                </NavItem>
                <NavItem>
                  <Link to="/status" className="nav-link" activeClassName="active">Status</Link>
                </NavItem>
              </ul>
            )}
            <form className="form-inline">
              { isLoggedIn && (
                <button className="btn btn-outline-primary" type="button" onClick={logout}>Logout</button>
              )}
            </form>
          </Collapse>
        </div>
      </BSNavBar>
    );
  }
}

export default Navbar;
