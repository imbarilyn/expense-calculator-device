import './App.css';
import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Componets/Home';
import Budget from './Componets/Budget';

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
