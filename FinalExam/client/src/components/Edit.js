import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import { navigate } from '@reach/router'; 



const Edit = (props) => {
    const[petInfo, setPetInfo]=useState({
        Name: "",
        Type:"",
        Description:"",
        Skills1:"",
        Skills2:"",
        Skills3:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res=>{
                console.log("**********")
                console.log(res)
                console.log("**********")
                setPetInfo(res.data.results)
            })
            .catch(err=> console.log(err))
    }, [])

    const changeHandler = (e) =>{
        console.log("changing something")
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props._id}`, petInfo)
            .then(res=>{
                console.log("**********")
                console.log(res)
                console.log("*********")
                navigate("/")
            })
            .catch(err=>console.log("Error in the put request"))
    }

    return (
        <div>
            <h2>Edit {petInfo.Name}</h2>

            <form onSubmit= {submitHandler}>
                <div>
                    <label>Pet Name: </label>
                    <input onChange={changeHandler} type="text" name="Name" value={petInfo.Name}/>
                </div>
                <div>
                    <label>Pet Type: </label>
                    <input onChange={changeHandler} type="text" name="Type" value={petInfo.Type}/>
                </div>
                <div>
                    <label>Pet Description: </label>
                    <textarea onChange={changeHandler} name="Description" cols="30" rows="10" value={petInfo.Description}></textarea>
                </div>
                <h3>Skills (optional) </h3>
                <div>
                    <label>Skill 1: </label>
                    <input onChange={changeHandler} type="text" name="Skills1" value={petInfo.Skills1}/>
 
                </div>
                <div>
                    <label>Skill 2: </label>
                    <input onChange={changeHandler} type="text" name="Skills2" value={petInfo.Skills2}/>

                </div>
                <div>
                    <label>Skills 3: </label>
                    <input onChange={changeHandler} type="text" name="Skills3" value={petInfo.Skills3}/>

                </div>
                <input type="submit" value="Edit Pet"></input>
            </form>
            
        </div>
    );
};



export default Edit;