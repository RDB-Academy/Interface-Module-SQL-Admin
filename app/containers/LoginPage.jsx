import React, { Component } from 'react';
import { Button, Card, CardBlock, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

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
                          type="email"
                          id="email"
                          placeholder="e-meal 🍖"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label sm={2} for="password">Password:</Label>
                      <Col sm={10}>
                        <Input
                          type="password"
                          id="password"
                          placeholder="your password ;)"
                          value={this.state.password}
                          onChange={this.handleInputChange}
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

LoginPage.propTypes = {
  loginUser: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
