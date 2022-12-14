import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function ExpenseForm({addExpense}) {
const [description, setDescription] = useState("");
const [cost, setCost] = useState();


function desHandler (e){
  setDescription(e.target.value)
}
function costHandler(e){
  setCost(e.target.value)
}
function submitHandler (e) {
    e.preventDefault();
    if(description !== "" && cost > 0){
      console.log("bad input");
    }
      const data = {
      description: description,
      cost: cost
    }
    post(data)   
    console.log(data)     
  }

  function post (data) {
    fetch(`https://myservercalculator.herokuapp.com/expense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    addExpense(data)
  }

  return (
    <div>
             <form onSubmit={submitHandler} className ="container">
          <div className="form-group row mt-3">
            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control col-6" id="description" placeholder="Enter expense" name = "description" value ={description}  onChange = {desHandler} />
              {/* <p>{errors.description?.message}</p> */}
            </div>
          </div>  
          <div className="form-group row mt-3">
            <label htmlFor="cost" className="col-sm-2 col-form-label">Cost</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="cost" placeholder="Enter amount" name ="cost" value ={cost}  onChange = {costHandler} />
              {/* <p>{errors.cost?.message}</p> */}
            </div>
            <div className='col-sm mt-3 mr-4' >
            <button type="submit" className="btn btn-primary">Add Expense</button>
          </div>
        </div>
      </form>
 
    </div>
  )
}

export default ExpenseForm