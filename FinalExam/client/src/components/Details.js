import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { navigate } from '@reach/router'; 


const Details = (props) => {
    const [petInfo, setPetInfo]=useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then(res=>{
            console.log("**********")
            console.log(res.data.results)
            console.log("**********")
            setPetInfo(res.data.results)

        })
        .catch(err=>console.log("error", err))
    }, [])

    const deletePet=(e)=>{
        console.log("adopt a pet!")
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
        .then(res=>{
            console.log("**********")
            console.log(res)
            console.log("**********")
            navigate("/")
        })
        .catch(err=>console.log("error!", err))
    }

    return (
        <div>
            <h2>Details about: {petInfo.Name}</h2>
            <button onClick = {deletePet}>Adopt {petInfo.Name}</button>

            <h3>Pet Type: {petInfo.Type}</h3>
            <h3>Description: {petInfo.Description}</h3>
            <h3>Skills: {petInfo.Skills1} - {petInfo.Skills2} - {petInfo.Skills3}</h3>
            
        </div>
    );
};



export default Details;