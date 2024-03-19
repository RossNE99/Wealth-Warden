import React, { useState } from "react";

function SavingPotCard({ pot, onRemove, onChangeAmount, onUpdateName }) {
  const [name, setName] = useState(pot.name || `Saving Pot ${pot.id}`);
  const [amount, setAmount] = useState(pot.amount || "");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onUpdateName(pot.id, newName); // Update the name
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
    const newSavingPot = { id: pot.id, amount: newAmount };

    // Check if saving goals exist in local storage
    let savedSavingGoals = JSON.parse(localStorage.getItem("SavedSavingGoals"));

    // If saving goals don't exist, create a new array
    if (!savedSavingGoals) {
      savedSavingGoals = [];
    }

    // Append new saving pot object to existing or new saving goals
    const updatedSavingGoals = [...savedSavingGoals, newSavingPot];

    // Convert updated saving goals to JSON string
    const savingGoalsJSON = JSON.stringify(updatedSavingGoals);

    // Save JSON string back to local storage
    localStorage.setItem("SavedSavingGoals", savingGoalsJSON);
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
                <span className="text-white">✔</span>
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
