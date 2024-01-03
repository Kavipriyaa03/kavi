import React from 'react';
import './Footer.css';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import whatsapp from '../assets/whatsapp.png';


const Footer=()=>{
    return(
        <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
                <p>Employer</p>
            </a>
            <a href="/healthplan">
                <p>Health Plan</p>
            </a>
            <a href="/individual">
                <p>Individual</p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h4>Facilities</h4>
            <a href="/resource">
                <p>Help</p>
            </a>
            <a href="/healthplan">
                <p>Vendor Contact</p>
            </a>
            <a href="/individual">
                <p>Careers</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
                <p>BigBasket</p>
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
                <p>About Us</p>
            </a>
            <a href="/press">
                <p>Contact Us</p>
            </a>
            <a href="/career">
                <p>Blog</p>
                </a>
            
            </div>
            <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
                <p><img src={twitter} alt=""/></p>
                <p><img src={insta} alt=""/></p>
                <p><img src={whatsapp} alt=""/></p>
                
            </div>
          </div>
</div>


<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} Vegetables and Fruits Supplied Pvt Ltd.All right reserved.</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="Terms"><div><p>Terms & Conditions</p></div></a>
        <a href="Privacy"><div><p>Privacy Policies</p></div></a>
        
        
    </div>
</div>
        </div>
        </div>
        
    )
}
export default Footer;