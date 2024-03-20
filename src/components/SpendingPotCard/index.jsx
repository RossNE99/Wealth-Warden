import React, { useState } from "react";
import { useMyContext  } from "../Contexts/MyContext";

function SpendingPotCard({ pot, onRemove, onUpdateName }) {
  const [name, setName] = useState(pot.name || `Spending Pot`);
  const [amount, setAmount] = useState(pot.amount || "");
  const { updateSpendingPot, SpendingPots } = useMyContext();

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
    const newSpendingPot = { id: pot.id, potName: name, totalAllocated: newAmount, ammountInInPot: 0 , type: "spend" };

    //Set into context
    updateSpendingPot([newSpendingPot, ...SpendingPots]);
  };

  return (
    <div className="w-full p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://static.vecteezy.com/system/resources/previews/026/988/239/original/single-continuous-line-drawing-winged-wallet-logo-purse-with-wings-icon-losing-money-spending-pay-wasteful-gone-money-financial-concept-dynamic-one-line-draw-graphic-design-illustration-png.png" alt="Spending wallet with wings" />
        <div className="px-6 py-4">
          <div className="flex items-center justify-center bg-gray-200 rounded-full py-3 px-6 mb-2">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder={`Spending Pot ${pot.id}`}
              className="form-input w-full text-xl font-bold text-center bg-transparent focus:outline-none"
            />
          </div>
          <div className="text-center text-gray-700 text-lg">
            <div className="flex items-center">
              <input
                name={`spendingPot-${pot.id}`}
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

export default SpendingPotCard;
