import axios from 'axios';
import React, { useEffect, useState } from 'react'; 

const Places = (props) =>{

    const [planet, setPlanet]= useState({}); 
    const [error, setError]= useState(""); 

    useEffect(()=>{
        console.log("I am here"); 
    axios.get(`https://swapi.dev/api/planets/${props.id}/`)
         .then(res=> setPlanet(res.data))
         .catch(e=> setError("These are not the droids you are looking for"));
}, []); 
    return(
        <div>
            {error.length > 0 ? (<h1>{error}</h1>) :(
                <div>
                    <h1>{planet.name}</h1>
                    <h3>Climate: {planet.name}</h3>
                    <h3>Terrain: {planet.terrain}</h3>
                    <h3>Surface Water: {planet.surface_water}</h3>
                    <h3>Population: {planet.population}</h3>
                </div>
            )}
        </div>
    )
}
export default Places; 