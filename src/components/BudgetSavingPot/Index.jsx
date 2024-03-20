import React, { useEffect, useState } from "react";
import SavingPotCard from "../SavingPotCard";
import { v4 as uuidv4 } from 'uuid';
import { useMyContext } from "../Contexts/MyContext";

function BudgetSavingPot() {
  const { updateSavingPot, SavingPots } = useMyContext();
  const [savingPots, setSavingPots] = useState([]);

  //Load saving pots from local storage on initial render
  useEffect(() => {
    setSavingPots(SavingPots || []);
  }, [SavingPots]);

  const handleAddSavingPot = () => {
    // If there are existing pots in the local storage, load them first
    setSavingPots(SavingPots)
    //Then create new pots
    const newPot = {
      id: uuidv4(),
      amount: '',
    };
    setSavingPots([...savingPots, newPot]);
  };

  const handleRemoveSavingPot = (id) => {
    const updatedPots = savingPots.filter(pot => pot.id !== id);
    setSavingPots(updatedPots);

    //Remove the pot from local storage if present
    const updatedSavingPots = SavingPots.filter(pot => pot.id !== id);
    // Update the local storage with the filtered pots
    updateSavingPot(updatedSavingPots);
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
    <div className='md:col-span-1 sm:col-span-1 border border-gray-300 shadow-lg rounded-lg mb-auto m-2 mt-4 pb-3 overflow-hidden'>
      <div className="flex justify-between items-center">
        <h2 className='text-2xl font-semibold m-3'>Saving Pots</h2>
        <button
          className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-3"
          onClick={handleAddSavingPot}
        >
          Add Pot
        </button>
      </div>


      <div className="flex items-center justify-center">
        <div className='overflow-x-auto max-h-full flex flex-col flex-wrap justify-center md:pb-12'>
          {savingPots.map(pot => (
            <SavingPotCard
              key={pot.id}
              pot={pot}
              potName={pot.potName}
              onRemove={handleRemoveSavingPot}
              onChangeAmount={handleChangeAmount}
            />
          ))}
        </div>
      </div>


    </div>
  );
}

export default BudgetSavingPot;
