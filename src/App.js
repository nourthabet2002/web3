import logo from './logo.svg';
import './App.css';
import Nabar from './Nabar';
import Section1 from './Section1';
import Section2 from './Section2';
import Cards from './Cards';
import Section3 from './Section3';
import axios from 'axioss'
import  react,{ useState } from 'react';
import Section4 from './Section4';


const App = () => {
  
   const [job,setjob] =useState([
    
    {
      
      name:"pro du procédé",
      description:"L'ingénieur process, ou ingénieur en génie des procédés, développe des procédés et des équipements de production pour l'unité de fabrication de son entreprise ou de son client, dans le but d'optimiser la chaîne de production et l'organisation des ateliers de production",
      deadline:"un mois"
     
  
    },
  {
    
      name:"Maitre de gestion de projet",
      
      description:"Participer à l'élaboration d'une stratégie. Rédiger un cahier des charges pour encadrer le projet. Affecter les personnes compétentes qui prendront en charge une partie du projet et préparer les ressources matérielles ou immatérielles qui seront nécessaires à leur intervention",
      deadline:"2moins"
      
  
 },
 ])
const [persons,setpersons]=useState([

  {
    name:"nour",
    salary:"2000",
    position:"manager",
    joineddate:"12/10/2023",
    tasks:"hhhh"
  },
])
const  [newjob, setnewjob] = useState({
  imgsrc: "",
  titre: "",
  lejob: "",
  descjob: "",
  leprofil:"",
  leposte:"",
  descposte:""
})
const Add=()=>{setjob([...job,newjob])}
const  [deletejob, setdeletejob] = useState({
  imgsrc: "",
  titre: "",
  lejob: "",
  descjob: "",
  leprofil:"",
  leposte:"",
  descposte:""
})
const deljob=()=>{setjob([...job,setdeletejob])}

const [newPerson, setperson] = useState({
  name: "",
  salary: "",
  position: "",
  joineddate: "",
  tasks:""
})
const add=()=>{setperson([...persons,newPerson])}
const [deletePerson, setdeleteperson] = useState({
  name: "",
  salary: "",
  position: "",
  joineddate: "",
  tasks:""
})
const dele=()=>{setdeleteperson([...persons,deletePerson])}


const fetchPersons = async () => {
  try {
    // Send a POST request to your backend API to add the person
    const response = await axios.post('/api/addPerson', newPerson);

    // Assuming your backend returns the added person's data
    const addedPerson = response.data;

    // Do something with the added person data, e.g., display it in the UI
    console.log('Added person:', addedPerson);

    // Clear the form inputs
    // setName('');
    // setAge('');
  } catch (error) {
    console.error('Error adding person:', error);
  }
}
  return (
    <div className="App">
      <Nabar/>
      <Section1 />
      <Section2/>
      <Cards job={job}/>
      <Section3 />
      <Section4 />
    </div>
  );
  }

export default App;
