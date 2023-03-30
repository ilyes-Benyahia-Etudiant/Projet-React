import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';


import Layout from './Components/Layout/Layout';

import Home from './Home/Home'
import Gallerie from './Gallerie/Gallerie';
import Tarif from './Tarif/Tarif';
import Contact from './Contact/Contact';






function App() {
  return (
    <div className='App'>

      
      <Routes>

        <Route element={<Layout/>}>

          <Route path="/*" element={<Home/>}/>
          <Route path="/Gallerie" element={<Gallerie/>}/>
          <Route path="/Tarif" element={<Tarif/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          
        </Route>
      </Routes>
      
      
      
        
    </div>
  );
}

export default App;
