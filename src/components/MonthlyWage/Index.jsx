import React, { useState } from "react";
import { useMyContext  } from "../Contexts/MyContext";


function EnterWage() {
  const [MonthlyWageInput, setMonthlyWageInput] = useState({ amount: '' });
  const { updateMonthlyWage, MonthlyWage } = useMyContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = MonthlyWageInput.amount;
    console.log(`Monthly wage is £${amount}`);
    updateMonthlyWage(amount);
    // Clear the input field after submission
    setMonthlyWageInput({ amount: '' });

  };

  return (
    <form className="p-4 border border-gray-300 rounded-md shadow-md">
      <label htmlFor="wage" className="block text-xl font-semibold mb-4">
        Enter this month's wage:
      </label>
      <img className="w-2/3 mt-4" src="https://cdn-icons-png.flaticon.com/512/10695/10695051.png" alt="Wage" />
      <div className="flex items-center">
        <input
          name="wage"
          type="number"
          className="form-input w-full md:w-1/2 border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
          placeholder="£..."
          id="wage"
          value={MonthlyWageInput.amount}
          onChange={(e) => setMonthlyWageInput({ amount: e.target.value })}
        />
        <button
          type="submit"
          className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
      
      <div className="w-full md:w-3/5 mt-2 text-green-600  bg-gray-200 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500">
        Monthly Wage: £{MonthlyWage}
      </div>

      
    </form>
  );
}

export default EnterWage;



//Add an icon representing wage
//Add a div to show the remaining amount against original (%)
//Connect to budgeting and time of the month