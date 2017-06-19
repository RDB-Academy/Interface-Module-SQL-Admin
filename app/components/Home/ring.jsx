import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';


const RingData = { labels: ['unsolved', 'solved'],
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

class Ring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
    };
  }

  render() {
    return (
      <div>
        <Doughnut data={RingData} />
      </div>
    );
  }
}

export default Ring;
