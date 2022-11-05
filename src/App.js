import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from './Footer';
import ContactForm from './Contact';
import Home from './Home';


function App() {
  return (
   <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactForm/>} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>

   </React.Fragment>
  );
}

export default App;
