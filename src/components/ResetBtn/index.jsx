import React from "react";
import { useMyContext } from "../Contexts/MyContext";

function ResetBtn() {

    //Call in the update functions from context
    const { updateLogs} = useMyContext();
    const { updateMonthlyWage} = useMyContext();
    const { updateSpendingPot} = useMyContext();

    //Reset all the data from context
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Reset the logs
        updateLogs([]);

        // Reset the MonthlyWage
        updateMonthlyWage(0);

        // Reset the SpendingPots
        updateSpendingPot([]);

      };

    return (
        <button
        type="submit"
        className="form-input w-full mt-4 md:w-full text-green-600 border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500 bg-gray-200 font-bold"
        onClick={ (e) => handleSubmit(e)}
        >
            New Month Reset
        </button>
    )
}

export default ResetBtn;