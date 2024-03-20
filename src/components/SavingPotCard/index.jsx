import React, { useState } from "react";
import { useMyContext  } from "../Contexts/MyContext";

function SavingPotCard({ pot, onRemove, onUpdateName }) {
  const [name, setName] = useState(pot.name || `Saving Pot`);
  const [amount, setAmount] = useState(pot.amount || "");
  const { updateSavingPot, SavingPots } = useMyContext();


  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onUpdateName(pot.id, newName); // Update the name with goal
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct saving pot object
    const newAmount = amount;

    // Construct the new name with amount
    const newName = `${name}: £${amount}`;
    setName(newName);

    // Clear the input field after submission
    setAmount("");

    // Construct saving pot object
    const newSavingPot = { id: pot.id, potName: name, totalAllocated: newAmount, ammountInInPot: 0 , type: "save" };

    //Set into context
    updateSavingPot([newSavingPot, ...SavingPots]);

  };

  return (
    <div className="w-full p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://icons.veryicon.com/png/o/business/financial-management/20-money-saving-pot.png" alt="Saving pot" />

        <div className="px-6 py-4">
          <div className="flex items-center justify-center bg-gray-200 rounded-full py-3 px-6 mb-2">         
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder={`Saving Pot ${pot.id}`}
              className="form-input w-full text-xl font-bold text-center bg-transparent focus:outline-none"
            />
          </div>
          <div className="text-center text-gray-700 text-lg">
            <div className="flex items-center">
              <input
                name={`savingPot-${pot.id}`}
                type="number"
                className="form-input w-full md:w-3/5 border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
                placeholder="£..."
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button
                type="submit"
                className="btn bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 ml-3"
                onClick={(e) => handleSubmit(e)}
              >
                ✔
              </button>
              <button
                className="btn bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 ml-3"
                onClick={() => onRemove(pot.id)}
              >
                ✘
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingPotCard;








//Local storage:


// SavingPot  ==> {id:"2",name: "test2", ammountInInPot: 0, totalAllocated: 10, type:"save"},  default ammountInInPot to be 0
// SpendingPot  ==> {id:"13",name: "food", ammountInInPot: 0, totalAllocated: 100, type:"spend"},
// Log  ==> {},





