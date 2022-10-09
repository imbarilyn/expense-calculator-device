import React from 'react'

function ExpenseList() {
  return (
    <div className='mt-3'>
    <h2>Expense Summary</h2>
    <table className="table">
<thead className="thead-dark">
  <tr>
    
    <th scope="col">Description</th>
    <th scope="col">Cost</th>
  </tr>
</thead>
<tbody>    
  {expenseItem}  
</tbody> 
</table>
</div>
   
  )
}

export default ExpenseList