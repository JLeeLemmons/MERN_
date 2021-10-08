import React, { useState } from 'react'; 
import {navigate} from '@reach/router'; 

const Home = (props) =>{

    const choices = [
        'people',
        'planets',
    ]; 
    const [selectedChoices, setSelectedChoices] = useState(choices[0]);
    const [number, setNumber] = useState(0); 

    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    const onClickHandler = (event)=>{
        event.preventDefault();
        navigate(`/${selectedChoices}/${number}`); 
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <select value={selectedChoices} onChange={event=>setSelectedChoices(event.target.value)}>
                    {choices.map((choice, id)=>(
                    <option key={id} value={choice}>{choice}</option>))}
                </select>
                <input onChange={(event) => setNumber(event.target.value)}></input>
                <button type="submit" value="Search" onClick={onClickHandler}>Search</button>
            </form>
        </div>
     
    )
}
export default Home; 