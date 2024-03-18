import React from "react";
import { useState } from "react";
import BudgetPotModal from "../BudgetPotModal/Index";
import AddWithdrawModal from "../AddAndWithdrawModal/Index";
import { Button, Modal } from "flowbite-react";

export default function AddPotButton() {
  const [showAddWithdrawModal, setShowAddWithdrawModal] = useState(false);
  const [showAddPotModal, setShowAddPotModal] = useState(false);

  return (
    <>
      <Button
        className="rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => setShowAddWithdrawModal(true)}>
       
        Add/Withdraw from Pot

      </Button>

      <Button
        className="rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => setShowAddPotModal(true)}>
       
        Add Pot

      </Button>

      <Modal  show={showAddWithdrawModal} size="md" popup  onClose={() => setShowAddWithdrawModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <AddWithdrawModal />
        </Modal.Body>
      </Modal>

      <Modal show={showAddPotModal} size="md" popup onClose={()=> setShowAddPotModal(false)}>
        <Modal.Header/>
            <Modal.Body>
            <BudgetPotModal />
            </Modal.Body>
      </Modal>

     {/*  {showAddPotModal ? (
        <>
          <BudgetPotModal />
        </>
      ) : null} */}

      {/* {showAddWithdrawModal ? (
        <>
          <AddWithdrawModal />
        </>
      ) : null} */}

     
    </>
  );
}
