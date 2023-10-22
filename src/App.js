import React from 'react';
import Nabar from './Nabar'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Autres from './Autres';
import { useState } from 'react';
import PersonForm from './Section3';
import Section4 from './Section4';
import Holiday from './Holiday';
const App = () => {
  
  
  return (
    <div className='App'>
      <Routes>
      <Route path= "/" element= {<Autres />} />
      <Route path= "/tasks" element= {<Section4/>} />
      <Route path= "/persons" element= {<PersonForm />} />
      <Route path= "/Holiday" element= {<Holiday />} />

      </Routes>
      

      
    
    </div>
  )
}

export default App