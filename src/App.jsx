import './App.css'
import Budgeting from './pages/Budgeting'
import Home from './pages/Home'
import Date from './components/Date/Index'

function App() {
  

  return (
    <div>
      {/* <NabBar/> */}
     <Budgeting/>
     <Home/>
     <Date/>
    </div>
    
  );

}

export default App
