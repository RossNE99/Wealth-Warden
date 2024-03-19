import React, { useState } from "react";

function EnterWage() {
  const [MonthlyWage, setMonthlyWage] = useState({ amount: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Monthly wage is £${MonthlyWage.amount}`);
  };

  return (
    <form className="p-4 border border-gray-300 rounded-md shadow-md">
      <label htmlFor="wage" className="block text-xl font-semibold mb-4">
        Enter this month's wage:
      </label>
      <div className="flex items-center">
        <input
          name="wage"
          type="number"
          className="form-input w-full md:w-3/4 border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
          placeholder="£..."
          id="wage"
          value={MonthlyWage.amount}
          onChange={(e) => setMonthlyWage({ amount: e.target.value })}
        />
        <button
          type="submit"
          className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default EnterWage;
