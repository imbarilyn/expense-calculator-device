import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import TotalExpense from './TotalExpense'


function Budget() {
    const [openModal, setOpenModal] = useState(false)

    const[expense, setExpense] = useState([])
    useEffect(() => {
        fetch('https://myservercalculator.herokuapp.com/expense')
         .then(resp => resp.json())
         .then(data => setExpense(data))
     }, [])
     console.log(expense);
  
     function addExpense(added) {
      const addedExpense = [...expense, added];
      setExpense(addedExpense);
     }
  

  return (
   <div>
        <ExpenseForm addExpense = { addExpense } expense = {expense}/>
        <button className = 'openModalBtn mt-3 btn btn-primary' onClick={() => setOpenModal(true)}>See Total</button>
        {openModal && <TotalExpense setCloseModal = {setOpenModal}  expense = {expense}/>}
        <ExpenseList addedExpense = {addExpense}  expense = {expense}/> 
  </div>
  
  )
}

export default Budget