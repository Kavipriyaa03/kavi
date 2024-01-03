import React from "react";
import './Navbar.css';
function Navbar()
{
    return(
        <div>
    <nav class="navbar">
          <a href='logo' class="logo">FRESH ACRES</a>
          <ul class="nav-list">
            <li><a href="/HomePage">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Faq">FAQs</a></li>
            <li><a href="/Signup">Signup</a></li>
            <li><a href="/Login">Login</a></li>
            

          </ul>
         

      </nav> 
          </div>
    );
}
export default Navbar;