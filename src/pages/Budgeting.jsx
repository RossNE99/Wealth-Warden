import React from 'react';
import MonthlyWage from '../components/MonthlyWage/Index';
import BudgetSavingPot from '../components/BudgetSavingPot/Index';
import BudgetSpendingPot from '../components/BudgetSpendingPot/Index';
import Row from '../components/Row';

function Budgeting() {
  return (

    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-1 container mx-auto'>
      <Row className="mb-3">
        <MonthlyWage/>
      </Row>
      <Row className="mb-3">
        <BudgetSavingPot/>
      </Row>
      <Row className="mb-3">
        <BudgetSpendingPot/>
      </Row>
    </div>

  )
}

export default Budgeting