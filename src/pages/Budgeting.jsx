import React from 'react';
import MonthlyWage from '../components/MonthlyWage/Index';
import BudgetSavingPot from '../components/BudgetSavingPot/Index';
import BudgetSpendingPot from '../components/BudgetSpendingPot/Index';

function Budgeting() {
  return (

    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-1 container mx-auto'>
      <MonthlyWage/>
      <BudgetSavingPot/>
      <BudgetSpendingPot/>
    </div>

  )
}

export default Budgeting