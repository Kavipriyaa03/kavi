import React from "react";
import './Contact.css';
function Contact()
{
    return(
        <body>
            <div class="container" >
               
      <center><h1>Contact Us</h1></center>
        
    <center><label for="fname">First Name  :  </label>
    <br></br>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input></center>
    <br></br>
    
    

    <center><label for="lname">Last Name  :  </label>
     <br></br>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input></center>
    <br></br>
    
    


    <center><label for="country">Country  :  </label>
    <br></br>
    <select id="country" name="country">
      <option value="chennai">Chennai</option>
      <option value="coimbatore">Coimbatore</option>
      <option value="madurai">Madurai</option>
    </select></center>
    <br></br>
    
    

   <center><label for="subject">Subject  :  </label>
   <br></br>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea></center>
    <br></br>
    

    <center><button>Submit</button></center>
  
         
        </div>
        </body>

    );
}

export default Contact;