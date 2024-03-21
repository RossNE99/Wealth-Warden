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
        className="form-input btn mt-4 text-white px-4 mx-auto py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        onClick={ (e) => handleSubmit(e)}
        >
            New Month Reset
        </button>
    )
}

export default ResetBtn;