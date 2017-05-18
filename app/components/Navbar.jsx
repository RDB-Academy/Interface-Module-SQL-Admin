import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom/NavLink';
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
          <NavLink to="/" className="navbar-brand">Home</NavLink>
          <Collapse isOpen={this.state.isOpen} navbar>
            { isLoggedIn && (
              <ul className="navbar-nav mr-auto">
                <NavItem>
                  <NavLink to="/schema-defs" className="nav-link" activeClassName="active">SchemaDefs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/tasks" className="nav-link" activeClassName="active">Tasks</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/task-trials" className="nav-link" activeClassName="active">TaskTrials</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/status" className="nav-link" activeClassName="active">Status</NavLink>
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
