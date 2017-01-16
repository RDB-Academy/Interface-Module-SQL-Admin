import React, { Component } from 'react';

import { loginUser } from 'actions/sessionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginForm: {
        email: '',
        password: '',
      },
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const { loginForm } = this.state;
    loginForm.email = event.target.value;
    this.setState({
      loginForm,
    });
  }

  handleChangePassword(event) {
    const { loginForm } = this.state;
    loginForm.password = event.target.value;

    this.setState({
      loginForm,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    this.props.loginUser(this.state.loginForm);
  }

  render() {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            E-Mail:
            <input type="email" id="email" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginUser: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
