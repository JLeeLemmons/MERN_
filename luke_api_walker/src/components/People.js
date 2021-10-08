import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

const People = (props) =>{
    console.log(props.id, '******'); 

    const [person, setPerson] = useState({}); 
    const [error, setError] = useState(""); 
    
    useEffect(() => {
    console.log('I am here')
    axios.get(`https://swapi.dev/api/people/${props.id}/`)
        .then(res=> setPerson(res.data))
        .catch(e=>setError("These are not the droids you are looking for"))
},[]);
    return(
        <div>
            {error.length >0  ? (<h1>{error}</h1>) : (
                <div>
                    <h1>{person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
                </div>
            )
            }
        </div>
    )
}
export default People; 