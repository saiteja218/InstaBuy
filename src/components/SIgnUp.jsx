import React,{useState} from 'react'
import { Row, Col } from "react-bootstrap"
import buy from "../assets/signUp.png"
import { useNavigate } from 'react-router-dom'
import "./login.css"

const SignUP = ({setUser}) => {
    const [email,setEmail]=useState("");
    const navigate=useNavigate();
    return (
        <div style={{ backgroundColor: "#216ad9", width: "100vw.",height:"90.7vh" }}>
            <div className='signup-main'>
                <div className='signup-main-left'>
                    
                    <div style={{ width: "70%" }}>
                        <h1 style={{color:"white"}}>InstaBuy!</h1>
                        <h3 style={{color:"white",margin:"15px 0",width:"60%"}}>One place where brands come together from all across the world</h3>
                        <form action="/">
                            <div className="signup-inp">
                                <input type="text" placeholder='Enter Email'  onChange={(e)=>(setEmail(e.currentTarget.value))}/>
                                <input type="password" placeholder='Enter Password' />
                            </div>
                            <input type="text" placeholder='Enter Full Name' style={{width:"100%", padding:"10px",fontWeight:'600',borderRadius:"10px",border:'none',marginBottom:"20px"}}/>
                            <button onClick={()=>{
                                localStorage.setItem("userEmail",email);
                                setUser(email);
                                navigate("/")
                            }}id='signup-btn'>Start Shopping</button>
                        </form>
                        <p style={{color:"white",margin:"15px 0",textAlign:"center",fontSize:"0.8rem"}}>Already a member. <a style={{color:"white"}} onClick={()=>navigate("/login")}>Click here!</a> </p>
                    </div>
                </div>
                <div className='signup-image'>
                    <img src={buy} alt="" />
                </div>
            </div>

        </div>
    )
}

export default SignUP
