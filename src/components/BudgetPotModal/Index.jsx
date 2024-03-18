import { Button , Label, TextInput} from "flowbite-react";
import React from "react";

function BudgetPotModal() {
  return (
    <>
      {/* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}
          {/*content*/}
          {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> */}
            {/*header*/}
            <div className="space-y-6">
              <h1 className="text-2xl font-semibold text-center text-gray-700  uppercase ">
                Add Pot
              </h1>
              <hr className="h-px my-8 bg-gray-200"/>
            </div>
            {/*body*/}
            <div >
              <form >
                <div >
                    <div className="mb-2 block">
                        <Label htmlFor="potName" value="Enter Pot Name"/>
                    </div>
                    <TextInput id="potName" type="text" maxLength="30"/>
                </div>
                <div >
                    <div className="mb-2 block">
                        <Label htmlFor="allocationAmount" value="Enter Allocation Amount"/>
                    </div>
                    <TextInput id="allocationAmount" type="number" />
                </div>

                <div >
                    <div className="mb-2 block">
                        <Label htmlFor="balanceAmount" value="Remaining Balance"/>
                    </div>
                    <Label  className=" bg-gray-200 block px-5 py-2 mt-2 border-2 rounded-md" id="balanceAmount" value={12} />
                </div>
                <hr className="h-px my-8 bg-gray-200 "/>
                <div className="mb-6 flex justify-center">
                  <Button type="submit" className="mr-9  h-10  px-5">  Save  </Button>
                  <Button  className=" h-10 px-5" type="submit">  Close   </Button>
                </div>
              </form>
            </div>
          {/* </div>
        </div>
      </div> */}
    </>
  );
}

export default BudgetPotModal;
