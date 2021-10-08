import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const[pokemons, setPokemons] = useState([]);
  const getPokemon = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPokemons(res.results); 
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <button onClick={getPokemon} className = "btn btn-lg btn-warning"> Fetch Pokemon</button>


      <ul>
        {
        pokemons.map((item, i) => {
            return <li key={i}>{item.name} </li>
          })
        }
      </ul>

    </div>
  );
}

export default App;
