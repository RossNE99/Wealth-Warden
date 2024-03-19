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
    <div>
      <select value={selectedDate.month()} onChange={handleMonthChange}>
        {Array.from({ length: 12 }, (_, i) => i).map((month) => (
          <option key={month} value={month}>
            {dayjs().month(month).format("MMMM")}
          </option>
        ))}
      </select>
      <select value={selectedDate.year()} onChange={handleYearChange}>
        {/* To begin array from year 2024 and span 10years */}
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
