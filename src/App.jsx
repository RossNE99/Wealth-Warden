import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Budgeting from "./pages/Budgeting";
import Home from "./pages/Home";
import Statement from "./pages/Statement";
import Navbar from "./components/Navbar/Index"
import { MyProvider } from './components/Contexts/MyContext';

function App() {
  return (
    <MyProvider>
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
    </MyProvider>
  );

}

export default App;
