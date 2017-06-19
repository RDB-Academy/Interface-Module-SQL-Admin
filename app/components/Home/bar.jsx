import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';


const barData = {
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

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
    };
  }

  render() {
    return (
      <div>
        <Bar data={barData} />
      </div>
    );
  }
}

export default BarGraph;
