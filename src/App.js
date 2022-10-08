import './App.css';
import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './componets/Home';
import Budget from './componets/Budget';

function App() {
  return (
    <div className='container'>
    <Home />           
    <Routes>
      <Route path='budget' element ={<Budget/>}>
        </Route>
    </Routes>     
  </div>
  
  );
}

export default App;
