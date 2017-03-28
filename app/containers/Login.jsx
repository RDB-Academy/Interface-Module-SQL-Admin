import React, { Component } from 'react';
import { Button, Card, CardBlock, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import { loginUser } from 'actions/sessionActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginForm: {
        email: '',
        password: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, id } = target;
    const { loginForm } = this.state;

    loginForm[id] = value;

    this.setState({
      loginForm,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.loginUser(this.state.loginForm);
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={{ size: 6, offset: 3 }}>
              <Card className="mt-5">
                <CardHeader>
                  Login
                </CardHeader>
                <CardBlock>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Label sm={2} for="email">E-Mail:</Label>
                      <Col sm={10}>
                        <Input
                          required
                          type="email"
                          id="email"
                          placeholder="e-meal 🍖"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          style={this.props.loginFailure ?
                            {
                              border: "1px solid #d43f3a",
                              boxShadow: "0 0 10px #d43f3a",
                            } :
                            {}
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label sm={2} for="password">Password:</Label>
                      <Col sm={10}>
                        <Input
                          required
                          type="password"
                          id="password"
                          placeholder="your password ;)"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          style={this.props.loginFailure ?
                            {
                              border: "1px solid #d43f3a",
                              boxShadow: "0 0 10px #d43f3a",
                            } :
                            {}
                          }
                      />
                      </Col>
                    </FormGroup>
                    <FormGroup check row>
                      <Col sm={{ size: 10, offset: 2 }}>
                        <Button block color="success" type="submit">Login</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBlock>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    loginFailure: state.session.loginFailure,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
