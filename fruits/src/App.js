import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage2 from './components/HomePage';

import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Faq from './components/Faq';
import Contact from './components/Contact';
import About from './components/About';
import LogInNo from './components/Login';
import Signnin from './components/Signup';





function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route index element={<HomePage2/>}/>
      <Route path='/HomePage'element={<HomePage2/>}/> 
      <Route  path='/Privacy'element={<Privacy/>}/>
      <Route  path='/Terms'element={<Terms/>}/>
      <Route  path='/Faq'element={<Faq/>}/>
      <Route  path='/Contact'element={<Contact/>}/>
      <Route path='/About'element={<About/>}/>
      <Route path='/Login'element={<LogInNo/>}/>
      <Route path='/Signup'element={<Signnin/>}/>
      
      
      
      
      
      
      </Routes>
    
      
      <Footer/>
    
      
    </div>
  );
}

export default App;