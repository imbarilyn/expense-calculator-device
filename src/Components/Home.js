import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Budget';

function Home() {
  const navigate = useNavigate();
  return (
    <div className='container'>
    <h1 className='mt-4'>Expense Calculator</h1>
    <h2 className='mt-4'>Get help with a simple expense calculaculator</h2>
    <p className='mt-4'>Click on the button bellow to get a calculator and a form to fill in the expense incurred. Happy expense calculating sesh!!</p>
    <div className='btn'>
    <button type="button" className="btn btn-outline-secondary btn-lg " onClick = {() =>navigate("budget") }>Calculate</button>
    </div>        
</div>
    
  )
}

export default Home