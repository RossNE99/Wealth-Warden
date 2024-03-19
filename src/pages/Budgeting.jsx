import React from 'react';
import MonthlyWage from '../components/MonthlyWage/Index';


function Budgeting() {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-1 container mx-auto md:pr-4'>
      <MonthlyWage/>
    </div>
  )
}

export default Budgeting