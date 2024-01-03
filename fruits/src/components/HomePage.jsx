import React from 'react';
import './HomePage.css';
//import homelogopic from '../assets/homelogopic.jpg';
import veglogo from '../assets/veglogo.png';

const HomePage2 = () => {
  return (
    
    <div className="home-container">
          <br></br>
          
          <h1>Taste the difference,feel the vitality!</h1>
          <br></br>
          <p><img src={veglogo}  alt=""/></p>
          <br></br>
          <br></br>
          <button><h3>SHOP NOW</h3></button>
            
          
        
    
      <section id="services" className="services">
        <h2>Our Products</h2>
        <div className="service-card">
          
          <h3>Organic Fruits</h3>
          <p>Get your vitamins directly from the intake</p>
        </div>
        <div className="service-card">
          
          <h3>Organic Vegetables</h3>
          <p> Grown without the use of synthetic fertilizers</p>
        </div>
        
          
          
        {/* Add more service cards as needed */}
      </section>

    
      

       
      
    </div>
    
  );
};

export default HomePage2;