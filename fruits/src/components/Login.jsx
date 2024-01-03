import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
const Signnin = () => {





  return (
    <center>
    
    <div class="Sign-in-form">
<h1>Login</h1>
<form class="form">
<input type="email" class="inputbox" placeholder="Enter the Email" required></input><br></br>
<input type="password" class="inputbox" placeholder="Enter a password"></input><br></br>
<p><span><input type="checkbox"></input></span>I agree to the terms of services</p><br></br>


<Link to="/HomePage">
        <button type="button1" class="signin-button">SignIn</button>
      </Link>


</form>
</div>

</center>

  );
}

export default Signnin;