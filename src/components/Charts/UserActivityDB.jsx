import React from 'react';
import ReactApexChart from 'react-apexcharts';

const UserActivityDB = () => {
  const data = {
    series: [
      {
        name: 'Total Users',
        data: [3, 3, 4, 7, 8, 8, 8]  // Example data for total users over time
      },
      {
        name: 'Online Users',
        data: [3, 2, 3, 5, 7, 6 ,4]  // Example data for online users over time
      }
    ],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      colors: ['#FF6347', '#1E90FF'],  // Custom line colors (e.g., tomato and dodger blue)
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Jul', 'Aug','Sep','Oct','Nov','Dec'],  // Example time periods
        title: {
          text: 'Months',
          style: {
            color: '#FFFFFF'  // White color for the title
          }
        },
        labels: {
          style: {
            colors: '#FFFFFF'  // White color for x-axis labels
          }
        }
      },
      yaxis: {
        title: {
          text: 'Number of Users',
          style: {
            color: '#FFFFFF'  // White color for the title
          }
        },
        labels: {
          style: {
            colors: '#FFFFFF'  // White color for y-axis labels
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
        height={415}
        
      />
    </div>
  );
};

export default UserActivityDB;
