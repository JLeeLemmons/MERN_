import './App.css';
import People from './components/People'; 
import Places from './components/Places'; 
import Home from './views/Home'; 
import {Router} from '@reach/router'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <People path='/people/:id'/>
        <Places path='/planets/:id'/>
      </Router>

     



    </div>
  );
}

export default App;
