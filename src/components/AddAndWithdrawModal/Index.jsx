import { Button, Label , Modal, TextInput} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useMyContext  } from "../Contexts/MyContext";

/* To add or withdraw money from the savings or spending pot*/

function AddWithdrawModal({id, name, ammountInInPot, totalAllocated, type, setShowAddWithdrawModal}) {

  const {logs, updateLogs, updateSpendingPot, updateSavingPot, SpendingPots, SavingPots} = useMyContext()

  const [formData, setFormData] = useState({
    amount: '',
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Function to update an pot by id
  const updatePotById = (id, pervPots, updatedPot) => {

    console.log(id)

    const updatedPots = pervPots.map(pot => {
      if (pot.id === id) {
        // If the current pot's id matches the id we want to update
        console.log("updates")
        return { ...pot, ...updatedPot }; // Replace it with the updated pot
      }
      return pot; // Otherwise, return the pot unchanged
    });
    return(updatedPots); // Update the state with the new array
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(formData.amount)

    const amount = parseInt(formData.amount)

    // console.log(logs)


    //update THIS pot
    if(type==="save") {
      const newPots = updatePotById(id, SavingPots, {ammountInInPot: ammountInInPot+amount})
      updateSavingPot(newPots)
    }
    
    else if(type==="spend"){
      const newPots = updatePotById(id, SpendingPots, {ammountInInPot: ammountInInPot+amount})
      updateSpendingPot(newPots)
    }
    


    //log stuff
    const newLOGEntery = {
      id: uuidv4(),
      potName: name,
      amount: amount,
      type,
    }

    const logsWithNewEnery = [newLOGEntery, ...logs]
    updateLogs(logsWithNewEnery)

    setFormData({amount:''})
    setShowAddWithdrawModal(false)

  };

    const title = type==="save" ? 'Add to' : type==="spend" ? 'Withdraw from' : null

  return (
    <>    
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-center text-gray-700  uppercase">{title} {name} Pot </h3>
            <hr className="h-px my-8 bg-gray-200 border-0 "/>
            <form >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amount" value="Enter Amount" />
              </div>
              <TextInput id="amount" type="number" required onChange={(e) => handleInputChange(e)} name="amount"/>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0"/>
            <div className="mb-2 flex justify-center">
              <Button gradientDuoTone="purpleToBlue" className=" mt-2 h-10 px-5" type="submit" onClick={(e) =>handleFormSubmit(e)}>Save</Button>
              <Button gradientMonochrome="failure" className="ml-9 mt-2 h-10  px-5" type="submit" onClick={() => setShowAddWithdrawModal(false)}>Close</Button>
            </div>
            </form>
          </div>
    </>
  );
}

export default AddWithdrawModal;
