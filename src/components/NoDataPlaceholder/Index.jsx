import React from 'react'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NoDataPlaceholder() {
  return (
    <div className='flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-5 mx-5'>
        <h1 className='text-2xl font-bold text-center'>No data for this month yet</h1>
        <p className='m-4 text-center'>Please go to the Budgeting page and enter your wage and some money Pots</p>
        <Link to="/Budgeting"><Button gradientDuoTone="purpleToBlue">Budgeting</Button></Link>
    </div>
  )
}

export default NoDataPlaceholder