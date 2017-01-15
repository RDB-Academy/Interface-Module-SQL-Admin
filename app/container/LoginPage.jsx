import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1> Login </h1>
        <form>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
