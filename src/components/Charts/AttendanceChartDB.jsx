import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const AttendanceChartDB = () => {
  // Example data
  const initialAttendanceData = [
    { name: 'Sarosh Ahmed', attendance: [1, 1, 0, 1, 1, 1, 1] },
    { name: 'Yousuf Baqai', attendance: [1, 1, 1, 1, 0, 1, 1]  },
    { name: 'Muhammad Mustafa', attendance: [0, 1, 1, 1, 0, 1, 1]  },
    { name: 'Hamza Makhdoom', attendance: [0, 1, 1, 1, 0, 1, 1] },
    { name: 'Shoaib Wani', attendance: [1, 1, 1, 1, 0, 1, 1]  },
    { name: 'Wasif Ahmed', attendance: [1, 1, 1, 1, 0, 1, 1]  },
    { name: 'Faizan Farooq', attendance: [1, 1, 1, 0, 0, 1, 1]  },  
    { name: 'Hassan Jawaid', attendance: [1, 1, 1, 0, 1, 1, 1] }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialAttendanceData);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = initialAttendanceData.filter(user =>
      user.name.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  // Transform data for stacked bars
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const series = daysOfWeek.map((day, index) => ({
    name: day,
    data: filteredData.map(user => ({
      x: user.name,
      y: user.attendance[index] === 1 ? 1 : 0,  // 1 if present, 0 if absent
      color: user.attendance[index] === 1 ? '#1aed52' : '#e80c0c'  // Green if present, red if absent
    }))
  }));
  const chartData = {
    series: series,
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false,  // Vertical bars
          barHeight: '100%'   // Full height bars
        }
      },
      xaxis: {
        categories: filteredData.map(user => user.name),  // Users on x-axis
        title: {
          text: '',
          colors: '#ffffff',
        },
        
        labels: {
          style: {
            colors: '#ffffff'  // Set x-axis labels color to white
          }
        }
      },
      yaxis: {
        title: {
          text: 'Attendance'
        },
        labels: {
          formatter: (value) => daysOfWeek[value],  // Update y-axis labels to days of the week
          style: {
            colors: '#ffffff'  // Set y-axis labels color to white
          }
        }
      },
      legend: {
        position: 'bottom',
        labels: {
          colors: '#ffffff'  // Set legend text color to white
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        y: {
          formatter: (val, { seriesIndex, dataPointIndex }) => {
            return `Attendance: ${val === 1 ? 'Present' : 'Absent'}`;  // Display presence/absence
          }
        }
      },
      colors: series.map(s => s.data[0].color)  // Apply colors to segments
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search by user..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default AttendanceChartDB;
