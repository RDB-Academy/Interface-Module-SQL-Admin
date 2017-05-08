import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Container, Jumbotron } from 'reactstrap';
//  import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Helmet from 'react-helmet';


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

    this.state = {};
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
          <div className="row">
            <div className="col-sm-7" style={{ height: '300px', marginBottom: '40px', border: '5px', borderStyle: 'solid', borderColor: 'rgb(110, 88, 205)' }}>
              <Bar
                data={diffcultyBar}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>
            <div className="col-sm-5">
              <Doughnut data={taskPie}
                options={{
                  cutoutPercentage: 80,
                }}
               />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
