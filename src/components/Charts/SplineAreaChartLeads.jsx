import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SplineAreaChartLeads = () => {
  const [series] = useState([{
    name: 'Captain Design Agency',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Captain Book Publishing',
    data: [11, 32, 45, 32, 34, 52, 41]
  },
//    {
//     name : 'Offlink Digital',
//     data: [54,25,77,25,2,58,99]
//   }
]);

  const [options] = useState({
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", 
        "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", 
        "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", 
        "2018-09-19T06:30:00.000Z"
      ],
      labels: {
        style: {
          colors: '#ffffff' // Change x-axis label colors to white
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#ffffff' // Change y-axis label colors to white
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    legend: {
      labels: {
        colors: '#ffffff' // Change legend label colors to white
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default SplineAreaChartLeads;
