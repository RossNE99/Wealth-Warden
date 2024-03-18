import './App.css'
import Budgeting from './pages/Budgeting'
import Home from './pages/Home'
import AddPotButton from './components/AddPotBtn/Index'
import AddWithdrawModal from './components/AddAndWithdrawModal/Index'
import BudgetPotModal from './components/BudgetPotModal/Index'
import { useState } from 'react'



function App() {
  
  return (
 
    <div>
      <AddPotButton />
    
   
    <Budgeting/>
    <Home/>
    </div>

  )
}

export default App
