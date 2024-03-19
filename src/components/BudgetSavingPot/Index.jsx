import React, { useState } from "react";
import SavingPotCard from "../SavingPotCard";
import { v4 as uuidv4 } from 'uuid';

function BudgetSavingPot() {
  const [savingPots, setSavingPots] = useState([]);

  const handleAddSavingPot = () => {
    const newPot = {
      id: uuidv4(),
      amount: ''
    };
    setSavingPots([...savingPots, newPot]);
  };

  const handleRemoveSavingPot = (id) => {
    const updatedPots = savingPots.filter(pot => pot.id !== id);
    setSavingPots(updatedPots);
  };

  const handleChangeAmount = (id, amount) => {
    const updatedPots = savingPots.map(pot => {
      if (pot.id === id) {
        return { ...pot, amount };
      }
      return pot;
    });
    setSavingPots(updatedPots);
  };

  return (
    <div className='md:col-span-6 sm:col-span-1 border border-gray-300 shadow-lg rounded-lg mb-auto m-2 mt-auto pb-3 overflow-hidden'>
      <div className="flex justify-between items-center">
        <h2 className='text-2xl font-semibold m-3'>Saving Pots</h2>
        <button
          className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-3"
          onClick={handleAddSavingPot}
        >
          Add Pot
        </button>
      </div>

      <div className='overflow-x-auto max-h-full flex flex-wrap justify-evenly md:pb-12'>
        {savingPots.map(pot => (
          <SavingPotCard
            key={pot.id}
            pot={pot}
            onRemove={handleRemoveSavingPot}
            onChangeAmount={handleChangeAmount}
          />
        ))}
      </div>
    </div>
  );
}

export default BudgetSavingPot;
