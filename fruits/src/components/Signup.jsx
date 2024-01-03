import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
const Signnin = () => {





  return (
    <center>
    
    <div class="Sign-in-form">
<h1>Signup</h1>
<form class="form">
<input type="username" class="inputbox" placeholder="Enter the UserName" required></input>
<input type="email" class="inputbox" placeholder="Enter the Email"></input>
<input type="password" class="inputbox" placeholder="Enter a password"></input>
<input type="password" class="inputbox" placeholder="ReEnter a password"></input>
<input type="address" class="inputbox" placeholder="Enter address"></input>
<p><span><input type="checkbox"></input></span>I agree to the terms of services</p><br></br>


<Link to="/Login">
        <button type="button1" class="signin-button">SignIn</button>
      </Link>


</form>
</div>

</center>

  );
}

export default Signnin;