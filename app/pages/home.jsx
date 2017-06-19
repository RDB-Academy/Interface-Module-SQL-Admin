import React from 'react';
import { Container, Col, Row, Jumbotron } from 'reactstrap';
// import {BootstrapTable, Card, CardTitle, CardText } from 'react-bootstrap-table';

import { Ring, LineGraph, BarGraph, Navigator } from 'components/Home';

import Helmet from 'react-helmet';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet
          title="SqlAcadamyAdminTool"
        />
        <Jumbotron>
          <Container>
            <h1>Hey Jay</h1>
            <p>Welcome to the SqlAcadamy Admin-Tool.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col sm="7" style={{ height: '300px', marginBottom: '40px', border: '3px', borderRadius: '15px', borderStyle: 'solid', borderColor: '#eceeef' }}>
              <BarGraph />
            </Col>
            <Col sm="5" style={{ height: '300px', marginBottom: '40px', border: '3px', borderRadius: '15px', borderStyle: 'solid', borderColor: '#eceeef' }}>
              <Ring />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm="7" style={{ height: '300px', marginBottom: '40px', border: '3px', borderRadius: '15px', borderStyle: 'solid', borderColor: '#eceeef' }}>
              <Navigator />
            </Col>
            <Col sm="5">
              <LineGraph />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
// Traffic als Line Graph darstellen
