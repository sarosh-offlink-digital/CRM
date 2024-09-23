import React from 'react';
import ReactApexChart from 'react-apexcharts';

const UserActiveStatusChart = () => {
  const data = {
    series: [
      {
        name: 'Total Users',
        type: 'line',
        data: [300, 320, 340, 360, 380, 400]  // Example data for total users over time
      },
      {
        name: 'Active Users',
        type: 'line',
        data: [100, 150, 200, 180, 220, 260]  // Example data for active users over time
      }
    ],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      colors: ['#00E396', '#008FFB'],  // Custom colors for the lines
      stroke: {
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // Example time periods
        labels: {
          style: {
            colors: '#FFFFFF'  // White color for x-axis labels
          }
        },
        title: {
          text: 'Months',
          style: {
            color: '#FFFFFF'  // White color for x-axis title
          }
        }
      },
      yaxis: [
        {
          title: {
            text: 'Total Users',
            style: {
              color: '#00E396'  // Color matching the "Total Users" line
            }
          },
          labels: {
            style: {
              colors: '#FFFFFF'  // White color for y-axis labels
            }
          }
        },
        {
          opposite: true,
          title: {
            text: 'Active Users',
            style: {
              color: '#008FFB'  // Color matching the "Active Users" line
            }
          },
          labels: {
            style: {
              colors: '#FFFFFF'  // White color for y-axis labels
            }
          }
        }
      ],
      tooltip: {
        shared: true,
        intersect: false,
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      legend: {
        labels: {
          colors: '#FFFFFF'  // White color for the legend labels
        }
      }
    }
  };

  return (
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="line"
        height={410}
      />
    </div>
  );
};

export default UserActiveStatusChart;
