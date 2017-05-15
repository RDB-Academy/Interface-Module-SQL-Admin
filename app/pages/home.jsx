import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Container, Col, Row, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
//  import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Helmet from 'react-helmet';
import classnames from 'classnames';


const taskPie = { labels: ['unsolved', 'solved'],
  datasets: [{
    data: [300, 50],
    backgroundColor: [
      '#d60000',
      '#2e9e00',
    ],
    hoverBackgroundColor: [
      '#ff0000',
      '#5fdd2c',
    ],
  }],
};

const diffcultyBar = {
  labels: ['1', '2', '3', '4', '5'],
  datasets: [
    {
      label: 'Task-Difficulty',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [2, 1, 0, 1, 2],
    },
  ],
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
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
              <Bar
                data={diffcultyBar}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </Col>
            <Col sm="5" style={{ height: '300px', marginBottom: '40px', border: '3px', borderRadius: '15px', borderStyle: 'solid', borderColor: '#eceeef' }}>
              <Doughnut
                data={taskPie}
                options={{
                  cutoutPercentage: 80,
                }}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Col sm="7" style={{ height: '300px', marginBottom: '40px', border: '3px', borderRadius: '15px', borderStyle: 'solid', borderColor: '#eceeef' }}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Heute
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Diese Woche
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  6 Monate
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  Gesamt
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12" style={{ height: '250px' }} >
                    <Bar
                      data={diffcultyBar}
                      width={100}
                      height={50}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <h4>Tab 2 Contents</h4>
                  </Col>
                </Row>
              </TabPane><TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <h4>Tab 3 Contents</h4>
                  </Col>
                </Row>
              </TabPane><TabPane tabId="4">
                <Row>
                  <Col sm="12">
                    <h4>Tab 4 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Container>
      </div>
    );
  }
}
