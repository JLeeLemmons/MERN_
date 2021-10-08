import './App.css';
import Home from './components/Home'; 
import Details from './components/Details'; 
import Edit from './components/Edit'; 
import NewPet from './components/NewPet'; 
import {Link, Router} from '@reach/router'; 


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Home path="/"></Home>
        <Details path="/pets/info/:_id"></Details>
        <Edit path="/pets/edit/:_id"></Edit>
        <NewPet path="/pets/new"></NewPet>
        
      </Router>
      

    </div>
  );
}

export default App;
