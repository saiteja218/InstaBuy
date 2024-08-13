import React, { useState } from 'react'
import { Row, Col } from "react-bootstrap"
import discount from "../assets/login.png"

import "./login.css"
import { useNavigate } from 'react-router-dom'

const LoginPage = ({setUser}) => {
    const [email,setEmail]=useState("");
    const navigate=useNavigate();
    return (
        <div style={{ backgroundColor: "#216ad9", width: "100%",height:"90.7vh" }}>
            <div className='main'>
                <div className='main-left'>
                    
                    <div style={{ width: "70%" }}>
                        <h1 style={{color:"white"}}>InstaBuy!</h1>
                        <h3 style={{color:"white",margin:"15px 0"}}>One place where brands come together from all across the world</h3>
                        <form action="/">
                            <div className="inp">
                                <input type="text" placeholder='Enter Email' onChange={(e)=>(setEmail(e.currentTarget.value))}/>
                                <input type="password" placeholder='Enter Password' />
                            </div>
                            <button id='login-btn' 
                            onClick={()=>{
                                // localStorage("userEmail",email);
                                setUser(email);
                                navigate("/")
                            }}
                            >Start Shopping</button>
                        </form>
                        <p style={{color:"white",margin:"15px 0",textAlign:"center",fontSize:"0.8rem"}}>Join the club. <a style={{color:"white"}} a onClick={()=>navigate("/signup")}>Click here!</a> </p>
                    </div>
                </div>
                <div className='login-image'>
                    <img src={discount} alt="" />
                </div>
            </div>

        </div>
    )
}

export default LoginPage
