import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import {Link} from '@reach/router'; 


const Home = () => {
    const[allPets, setAllPets] = useState([])
    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets")
        .then(res=>{
            console.log("loading response", res)
            setAllPets(res.data.results)
        })
        .catch(err=>console.log("error with axios call", err))
    }, [])
    return (
        <div>
            <Link to="/pets/new">add a pet to the shelter</Link>
            <h2>These pets are looking for a good home </h2>

            {allPets.map((p, i)=>{
                return<div key={i}>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>{p.Name}</td>
                        </tr>
                        <tr>
                            <td>{p.Type}</td>
                        </tr>
                        <tr>
                            <td><Link to={`/pets/info/${p._id}`}>details</Link> | <Link to={`/pets/edit/${p._id}`}>edit</Link> </td>
                        </tr>
                    </table>
                </div>
            })}


            
        </div>
    );
};


export default Home;