import React from 'react';
import Nabar from './Nabar'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Autres from './Autres';
import { useState } from 'react';
import TasksView from './TasksView';
import Holiday from './Holiday';
import PersonsView from './PersonsView';
const App = () => {
  
  
  return (
    <div className='App'>
      <Routes>
      <Route path= "/" element= {<Autres />} />
      <Route path= "/tasks" element= {<TasksView/>} />
      <Route path= "/persons" element= {<PersonsView />} />
      <Route path= "/Holiday" element= {<Holiday />} />

      </Routes>
      

      
    
    </div>
  )
}

export default App