import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; 
const LeavesCalender = ({ onDatesChange }) => {
  const [markedDates, setMarkedDates] = useState([]);

  const handleDateClick = (date) => {
    const dateString = date.toDateString(); 

  
    if (markedDates.includes(dateString)) {
      setMarkedDates(markedDates.filter(d => d !== dateString));

    } else {
      setMarkedDates([...markedDates, dateString]);
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toDateString();
      if (markedDates.includes(dateString)) {
        return <div className="bg-green-500 w-2 h-2 rounded-full mx-auto"></div>;
      }
    }
    return null;
  };
  let handleDatesToParent = () => {
    onDatesChange(markedDates)
  }

  return (
    <div>
      <div className='flex justify-end'>
        <button onClick={handleDatesToParent} data-tip='Save Leaves' className='tooltip tooltip-info tooltip-left hover:text-blue-500 text-gray-200 text-3xl'>
          <i class="fa-solid fa-circle-check"></i>
        </button>
      </div>
      <div className="p-6 max-w-md mx-auto bg-slate-800 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4 border-none">Select Days on the Calendar:</h2>
        <Calendar
          onClickDay={handleDateClick}
          tileContent={tileContent}
          className="w-full mx-auto border-none "
          tileClassName={({ date, view }) =>
            view === 'month' && markedDates.includes(date.toDateString())
              ? 'bg-slate-900 text-white font-bold rounded-lg'
              : 'hover:bg-slate-900 rounded-lg'
          }
        />
      </div>

    </div>
  );
};

export default LeavesCalender;
