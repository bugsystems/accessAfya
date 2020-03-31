import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class Diseases extends Component {
  render() {
    const data = {
      labeles: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [65, 59, 80, 82, 55, 40],
          fill: false,
          backgroudColor: '#42A5F5',
          borderColor: '#42A5F5'
        }
      ]
    };
    return (
      <div>
        <h4>Line graph with primereact</h4>
        <Chart type='line' data={data} />
      </div>
    );
  }
}

export default Diseases;
