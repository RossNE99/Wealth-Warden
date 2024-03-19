import React, { useState } from "react";
import dayjs from "dayjs";

function Date() {
    //To display current month and year by default
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value, 10); 
    setSelectedDate(selectedDate.month(month));
  };

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedDate(selectedDate.year(year));
  };

  return (
    <div className="flex items-center flex-wrap justify-center space-x-4 mb-5 mt-5">
      <div>
        <h2>Current Month</h2>
      </div>
      <div>
        <select
          value={selectedDate.month()}
          onChange={handleMonthChange}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        >
          {Array.from({ length: 12 }, (_, i) => i).map((month) => (
            <option key={month} value={month} className="capitalize">
              {dayjs().month(month).format("MMMM")}
            </option>
          ))}
        </select>
        <select
          value={selectedDate.year()}
          onChange={handleYearChange}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        >
          {/* To begin array from year 2024 and span 10 years */}
          {Array.from({ length: 10 }, (_, i) => i + 2024).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Date;
