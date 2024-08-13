import React from 'react'
import checkout from "../assets/16.png"

const Checkout = () => {
  return (
    <div className='check-out' style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <img src={checkout} alt="" style={{height:"75vh",margin:"1.5rem"}}/>
      <h2>Order Successful</h2>
    </div>
  )
}

export default Checkout
