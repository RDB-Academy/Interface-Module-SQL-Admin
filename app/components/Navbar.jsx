import React, { PropTypes } from 'react';
import Link from 'react-router/Link';

const Navbar = ({ isLoggedIn, logout }) => (
  <nav className="navbar fixed-top navbar-toggleable-sm navbar-inverse bg-inverse">
    <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="navbar-brand" activeClassName="active" activeOnlyWhenExact>Home</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        { isLoggedIn && (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/schemaDef" className="nav-link" activeClassName="active" activeOnlyWhenExact>SchemaDefs</Link>
            </li>
            <li className="nav-item">
              <Link to="/task" className="nav-link" activeClassName="active" activeOnlyWhenExact>Tasks</Link>
            </li>
            <li className="nav-item">
              <Link to="/taskTrial" className="nav-link" activeClassName="active" activeOnlyWhenExact>TaskTrials</Link>
            </li>
            <li className="nav-item">
              <Link to="/status" className="nav-link" activeClassName="active" activeOnlyWhenExact>Status</Link>
            </li>
          </ul>
        )}
        <form className="form-inline">
          { isLoggedIn && (
            <button className="btn btn-outline-primary" type="button" onClick={logout}>Logout</button>
          )}
        </form>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Navbar;
