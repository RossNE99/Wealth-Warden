import React, { useEffect, useState } from "react";
import SpendingPotCard from "../SpendingPotCard";
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from "../Contexts/MyContext";

function BudgetSpendingPot() {
  const { updateSpendingPot, SpendingPots} = useMyContext();
  const [spendingPots, setSpendingPots] = useState([]);

  //Load spending pots from local storage on initial render
  useEffect(() => {
    setSpendingPots(SpendingPots || []);
  }, [SpendingPots]);

  const handleAddSpendingPot = () => {
      // If there are existing pots in the local storage, load them first
      setSpendingPots(SpendingPots)
      //Then create new pots
    const newPot = {
      id: uuidv4(),
      amount: '',
    };
    setSpendingPots([...spendingPots, newPot]);
  };

  const handleRemoveSpendingPot = (id) => {
    const updatedPots = spendingPots.filter(pot => pot.id !== id);
    setSpendingPots(updatedPots);
    
    //Remove the pot from local storage if present
    const updatedSpendingPots = SpendingPots.filter(pot => pot.id !== id);
    // Update the local storage with the filtered pots
    updateSpendingPot(updatedSpendingPots);
  };

  const handleChangeAmount = (id, amount) => {
    const updatedPots = spendingPots.map(pot => {
      if (pot.id === id) {
        return { ...pot, amount };
      }
      return pot;
    });
    setSpendingPots(updatedPots);
  };

  return (
    <div className='md:col-span-6 sm:col-span-1 border border-gray-300 shadow-lg rounded-lg mb-auto m-2 mt-4 pb-3 overflow-hidden'>
      <div className="flex justify-between items-center">
        <h2 className='text-2xl font-semibold m-3'>Spending Pots</h2>
        <button
          className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-3"
          onClick={handleAddSpendingPot}
        >
          Add Pot
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className='overflow-x-auto max-h-full flex flex-col flex-wrap justify-center md:pb-12'>
          {spendingPots.map(pot => (
            <SpendingPotCard
              key={pot.id}
              pot={pot}
              onRemove={handleRemoveSpendingPot}
              onChangeAmount={handleChangeAmount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BudgetSpendingPot;
