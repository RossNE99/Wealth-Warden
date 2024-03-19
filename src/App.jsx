import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Budgeting from './pages/Budgeting'
import Home from './pages/Home'
import Navbar from './components/Navbar/Index'
import Statement from './pages/Statement'

import AddPotButton from './components/AddPotBtn/Index'
import AddWithdrawModal from './components/AddAndWithdrawModal/Index'
import BudgetPotModal from './components/BudgetPotModal/Index'
import { useState } from 'react'



function App() {


  return (
    <div className=''>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/Budgeting" element={<Budgeting />} />
          <Route path="/Statement" element={<Statement />} />
        </Routes>
      </Navbar>
    </div>

  )
}

export default App
