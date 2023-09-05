import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {Home, Team, Contact, About,Vehicles, NotFound} from './pages';
import { Navbar, Footer } from './components';

function App() {
    
  return (
    <Router>
        <Navbar/>
         <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/contact" element={<Contact/>} />
           <Route exact path="/team" element={<Team/>} />
           <Route exact path="/about-us" element={<About/>} />
           <Route exact path="/vehicles" element={<Vehicles/>} />
           <Route exact path="*" element={<NotFound/>} />
         </Routes>
        <Footer/>
    </Router>
    
  );
}

export default App;

