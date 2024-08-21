import React from 'react';
import './styles.css';



import padlock from "../../assets/padlock.png";


export default function Login(){
    return (
       <div className="login-container">
       <section className="form">
      
       <form>
       <img src={padlock} width='300' alt="login"/>
        <h1>Access your account</h1>
        <input placeholder='Username'></input>
        <input type="password" placeholder='Password'></input>
        <button type="submit" >Login</button>
      
       </form>
       </section>
       
       
     </div>
    )
}