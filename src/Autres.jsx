import logo from './logo.svg';
import './App.css';
import Nabar from './Nabar';
import Section1 from './Section1';
import Section2 from './Section2';

import axios from 'axios'


const App = () => {
  


  return (
    <div className="App">
      <Nabar/>
      <Section1 />
      <Section2/>
      {/* <Cards job={job}/> */}
     
    </div>
  );
  }

export default App;
