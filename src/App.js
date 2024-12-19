
import {  BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Admindashboard from './Components/Admindashboard'
import Employeedashboard from './Components/Employeedashboard';
import Hrdashboard from './Components/Hrdashboard';


function App() {
  return (
    
    <Router>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admindashboard />} />
        <Route path="/hr" element={<Hrdashboard />} />
        <Route path="/employee" element={<Employeedashboard />} />
      </Routes>
    </Router>
    
    

  );
}

export default App;
