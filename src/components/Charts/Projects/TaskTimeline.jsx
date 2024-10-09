import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TaskTimeline = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Hamza',
        data: [
          {
            x: 'Design',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-08').getTime(),
            ],
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-05').getTime(),
            ],
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-07').getTime(),
            ],
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-03').getTime(),
              new Date('2019-03-09').getTime(),
            ],
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-11').getTime(),
            ],
          },
          {
            x: 'Validation',
            y: [
              new Date('2019-03-11').getTime(),
              new Date('2019-03-16').getTime(),
            ],
          },
          {
            x: 'Design',
            y: [
              new Date('2019-03-01').getTime(),
              new Date('2019-03-03').getTime(),
            ],
          },
        ],
      },
      {
        name: 'Sarosh',
        data: [
          {
            x: 'Design',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-05').getTime(),
            ],
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-06').getTime(),
              new Date('2019-03-16').getTime(),
            ],
            goals: [
              {
                name: 'Break',
                value: new Date('2019-03-10').getTime(),
                strokeColor: '#CD2F2A',
              },
            ],
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-03').getTime(),
              new Date('2019-03-07').getTime(),
            ],
          },
          {
            x: 'Deployment',
            y: [
              new Date('2019-03-20').getTime(),
              new Date('2019-03-22').getTime(),
            ],
          },
          {
            x: 'Design',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-16').getTime(),
            ],
          },
        ],
      },
      {
        name: 'Yousuf',
        data: [
          {
            x: 'Code',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-17').getTime(),
            ],
          },
          {
            x: 'Validation',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-09').getTime(),
            ],
            goals: [
              {
                name: 'Break',
                value: new Date('2019-03-07').getTime(),
                strokeColor: '#CD2F2A',
              },
            ],
          },
        ],
      },
    ],
    options: {
        chart: {
          height: 450,
          type: 'rangeBar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: 'white', // Change X-axis label color (e.g., red)
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: 'white', // Change Y-axis label color (e.g., green)
            },
          },
        },
        stroke: {
          width: 1,
        },
        fill: {
          type: 'solid',
          opacity: 0.6,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          labels: {
            colors: 'white', // Change legend label color (e.g., blue)
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['white'], // Change data label color (e.g., yellow)
          },
        },
      },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="rangeBar"
          height={450}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default TaskTimeline;
