import React from 'react';
import ReactApexChart from 'react-apexcharts';

const UserStatusDonutChartDB = () => {
    const data = {
        series: [7, 1],  // Example: 1000 total users, 300 active users
        options: {
          chart: {
            type: 'donut',
            height: 350
          },
          labels: ['Total Users', 'Active Users'],
          dataLabels: {
            style: {
              colors: ['#FFFFFF']  // White color for data labels
            }
          },
          legend: {
            labels: {
              colors: '#FFFFFF'  // White color for the legend labels
            }
          },
          colors: ['#FF6347', '#1E90FF'],  // Custom colors for the segments
          tooltip: {
            y: {
              formatter: (val) => `${val} users`
            }
          }
        }
      };
    
      return (
        <div>
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="donut"
            height={200}
          />
        </div>
      );
    };

export default UserStatusDonutChartDB;
