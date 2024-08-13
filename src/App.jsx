import { useEffect, useState } from 'react'
import './App.css'
import logo from "./assets/logo.png"
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import SignUP from './components/SIgnUp';
import {Routes, Route, useNavigate} from "react-router-dom"
import ProductsGallery from './components/ProductsGallery';
import ProductDetails from './components/ProductDetails';
import { Badge, Button } from 'react-bootstrap';

import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  const navigate= useNavigate()
  const [user,setUser]=useState();
  const [cartItems,setCartItems]=useState({});
  useEffect(()=>{
    const userEmail=localStorage.getItem("userEmail");
    if(userEmail){
      setUser(userEmail);
    }
  })

  function handleCart(item){
    setCartItems({...cartItems,...item});

  }

  return (
    <div>
        <nav>
          <span className='left'><img src={logo }alt="" height="40px" width="40px"/>
          <h2> <a onClick={()=>(navigate("/"))} style={{textDecoration:"none",cursor:"pointer"}}>InstaBuy!</a> </h2></span>
          <span className='right'>
          { user &&  <Button onClick={()=>navigate("/cart")} style={{margin:"0px 5px"}}>Cart  {Object.keys(cartItems).length>0 && <Badge>{Object.keys(cartItems).length}</Badge> }</Button>}
            <Button onClick={()=>{
              {
                if(user){
                  localStorage.clear();
                  setUser("");
                  navigate("/")
                }
                else{
                  navigate("/login")
                }
              }
              }}>{user ? "logout" : "login"}</Button>
          </span> 
          
        </nav>
     <Routes>
      <Route path='/' element={<Home user={user} />}/>
      <Route path='/login' element={<LoginPage setUser={setUser}/>}/>
      <Route path='/signup' element={<SignUP setUser={setUser}/>}/>
      <Route path='/products' element={<ProductsGallery/>}/>
      <Route path='/products/:id' element={<ProductDetails cartItems={cartItems} handleCart={handleCart}/>}/>
      <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
    </div>
  )
}

export default App
