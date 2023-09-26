import logo from './logo.svg';
import './App.css';
import Nabar from './Nabar';
import Section1 from './Section1';
import Section2 from './Section2';
import Cards from './Cards';

const App = () => {
 
  const job =[
    {
      imgsrc:"data:image/jpeg;base64,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",
      titre:"pro du procédé",
      lejob:"le job",
      descjob:"L'ingénieur process, ou ingénieur en génie des procédés, développe des procédés et des équipements de production pour l'unité de fabrication de son entreprise ou de son client, dans le but d'optimiser la chaîne de production et l'organisation des ateliers de production",
      leprofil:"le profil",
      descprofil:"Créez une liste de compétences ou de vos qualités qui ont de la valeur pour le poste en question ainsi que dans un contexte professionnel en général. ",
      leposte:"le poste",
      descposte:"L'ingénieur process, ou ingénieur en génie des procédés, développe des procédés et des équipements de production pour l'unité de fabrication de son entreprise ou de son client, dans le but d'optimiser la chaîne de production et l'organisation des ateliers de production."
  
    },
  {
     imgsrc:"data:image/jpeg;base64,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",
      titre:"Maitre de gestion de projet",
      lejob:"le job",
      descjob:"Participer à l'élaboration d'une stratégie. Rédiger un cahier des charges pour encadrer le projet. Affecter les personnes compétentes qui prendront en charge une partie du projet et préparer les ressources matérielles ou immatérielles qui seront nécessaires à leur intervention",
      leprofil:"le profil",
      descprofil:"Créez une liste de compétences ou de vos qualités qui ont de la valeur pour le poste en question ainsi que dans un contexte professionnel en général. ",
      leposte:"le poste",
      descposte:"Participer à l'élaboration d'une stratégie. Rédiger un cahier des charges pour encadrer le projet. "
  
},
]


  return (
    <div className="App">
      <Nabar/>
      <Section1 />
      <Section2/>
      <Cards job={job}/>
    </div>
  );
  }

export default App;
