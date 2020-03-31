// STEP 1 - Include Dependencies
// Include react
import React, { Component } from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Line from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Line, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
  {
    value: '20'
  },
  {
    value: '75'
  },
  {
    value: '90'
  },
  {
    value: '120'
  },
  {
    value: '230'
  },
  {
    value: '379'
  }
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: 'line', // The chart type
  width: '200', // Width of the chart
  height: '150', // Height of the chart
  dataFormat: 'json', // Data type
  color: 'green',
  dataSource: {
    // Chart Configuration
    chart: {
      drawAnchors: '0',
      showYAxisValues: '0',
      //Set the chart caption
      // caption: 'Countries With Most Oil Reserves [2017-18]',
      //Set the chart subcaption
      // subCaption: 'In MMbbl = One Million barrels',
      //Set the x-axis name
      // xAxisName: 'Country',
      //Set the y-axis name
      // yAxisName: 'Reserves (MMbbl)',
      // numberSuffix: 'K',
      //Set the theme for your chart
      theme: 'fusion'
    },
    // Chart Data
    data: chartData
  }
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class Revenue extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <ReactFC {...chartConfigs} />
        </div>
      </div>
    );
  }
}

export default Revenue;
