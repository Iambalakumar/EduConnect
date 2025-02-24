import React from 'react';
import './Loginpage.css';

export default function Loginpage(){
  return(
    <div className="body">
      <form className="box">
        <div className="flex-group">
          <h1>Login</h1>
          <input id="Username"  type="text" className="large-input" placeholder='Username'/>
          <input id="Password"  type="password" className="large-input" placeholder='Password'/>
        </div>
        <button type='submit'  >Sign In</button> 
      </form>
    </div>
  )
}