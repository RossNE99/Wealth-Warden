import { Button, Label , Modal, TextInput} from "flowbite-react";
import { useRef, useState } from "react";
import React from "react";

/* To add or withdraw money from the savings or spending pot*/

function AddWithdrawModal(props) {

    const[inputAmount, setInputmount] = useState(0);
    //useRef allows to persist values between renders
    const amount = useRef(0);

    function handleClick(event){
       event.preventDefault();
       amount.current.focus();
        
    }


  return (
    <>    
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-gray-700  uppercase">Add to / Withdraw from Pot </h3>
            <hr className="h-px my-8 bg-gray-200 border-0 "/>
            <form >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amount" value="Enter Amount" />
              </div>
              <TextInput id="amount" type="number" required ref={amount}/>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0"/>
            <div className="mb-2 flex justify-center">
              <Button className="mr-9 mt-2 h-10  px-5" type="submit">Close</Button>
              <Button className=" mt-2 h-10 px-5" type="submit" onClick={handleClick}>Save</Button>
            </div>
            </form>
          </div>
    </>
  );
}

export default AddWithdrawModal;
