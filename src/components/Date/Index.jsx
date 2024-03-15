import React, { useState } from 'react';
import dayjs from 'dayjs';

function Date() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value, 10) - 1; // Months are 0-indexed in Day.js
    setSelectedDate(selectedDate.month(month));
  };

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedDate(selectedDate.year(year));
  };

  return (
    <div>
      <select value={selectedDate.month()} onChange={handleMonthChange}>
        {Array.from({ length: 12 }, (_, i) => i).map((month) => (
          <option key={month} value={month + 1}>
            {dayjs().month(month).format('MMMM')}
          </option>
        ))}
      </select>
      <select value={selectedDate.year()} onChange={handleYearChange}>
        {Array.from({ length: 10 }, (_, i) => i + 2024).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Date;