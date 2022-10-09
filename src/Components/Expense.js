import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Expense({expe}) {
    const {description, cost} = expe
  return (
    <tr>
    {/* <th scope="row">{key}</th> */}
    <td>{description}</td>
    <td>{cost}</td>          
  </tr>  
    
  )
}

export default Expense