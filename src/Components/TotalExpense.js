import React from 'react'

function TotalExpense() {
  return (
    <div className='modal'>
    {/* {alert("Hello")} */}
    <div className='modal-container'>
      <div className='modal-title'>
        <h2>Hey there. Your expense is:</h2>
      </div>
      <div className='modal-body'>
        <p>{totals}</p>
      </div>
      <div className='modal-footer'>
        <button className = " btn btn-danger" onClick = {() => setCloseModal(false)}>close</button>
      </div>
    </div>
    
  </div>
    
  )
}

export default TotalExpense