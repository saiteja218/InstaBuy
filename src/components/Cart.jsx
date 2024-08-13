import React, { useEffect, useState } from 'react'
import imgg from "../assets/cart.png"
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = ({cartItems}) => {
  const [totalQuantity,setQuantity]=useState(0);
  const [totalPrice,setPrice]=useState(0);
  const navigate=useNavigate();

  useEffect(()=>{
    let tempQuantity=0
    let tempPrice=0;
    Object.keys(cartItems).map((id)=>{
      let detail=cartItems[id];
      tempQuantity +=detail.quantity;
      tempPrice+=(detail.quantity*detail.price);

    })

    setPrice(tempPrice);
    setQuantity(tempQuantity);
  },[])


    console.log(cartItems);
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
           <div className='tableDiv'>
            <Table>
            <h2>Your Cart:</h2>
            <table style={{}}>
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price($)</th>
                  </tr>
              </thead>
              <tbody>
                   {
                    Object.keys(cartItems).map((id)=>{
                      const cartdetails=cartItems[id];
                      return(
                        <tr key={id}>
                          <td>{cartdetails.title}</td>
                          <td>{cartdetails.quantity}</td>
                          <td>{cartdetails.quantity*cartdetails.price}</td>
                        </tr>
                      )
                    })
                   }


                   <tr>
                    <td>Total</td>
                    <td>{totalQuantity}</td>
                    <td>{totalPrice }</td>
                   </tr>
              </tbody>

            </table>
            </Table>
            <Button onClick={()=>{navigate("/checkout")}} style={{width:"150px",margin:"0 4rem"}}>Checkout</Button>
           </div>
           <div className='cartImg'>
            <img src={imgg} height={650} alt="" />
           </div>
      </div>
      
    </div>
  )
}

export default Cart;
