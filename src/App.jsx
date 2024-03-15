import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Budgeting from './pages/Budgeting'
import Home from './pages/Home'
import Navbar from './components/Navbar/Index'
import Statement from './pages/Statement'


function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/Budgeting" element={<Budgeting />} />
        <Route path="/Statement" element={<Statement />} />
      </Routes>
    </div>

  )
}

export default App
