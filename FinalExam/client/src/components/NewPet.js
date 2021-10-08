import React, {useState} from 'react';
import axios from 'axios'; 
import {navigate} from '@reach/router'; 


const NewPet = () => {
    const [petInfo, setPetInfo]=useState({
        Name: "",
        Type: "",
        Description: "",
        Skills1: "",
        Skills2: "",
        Skills3: ""
    });
    const [formErrors, setFormErrors]=useState({});

    const changeHandler=(e)=>{
        console.log("changing input!")
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value 
        })
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault(); 
        axios.post("http://localhost:8000/api/pets/create", petInfo)
            .then(res=>{
                console.log("**********")
                console.log(res)
                console.log("**********")

                if(res.data.results){
                    navigate("/");
                }else{
                    console.log("this form needs to be filled out properly!")
                    setFormErrors(res.data.error.errors)
                }
            })
            .catch(err=>console.log("Error in the form submission", err))
    }

    return (
        <div>
            <h3>Know a pet that needs a home?</h3>

<form onSubmit={onSubmitHandler}>
                <div>
                    <label>Pet Name: </label>
                    <input onChange={changeHandler} type="text" name="Name"/>
                    {formErrors.Name?<p>{formErrors.Name.message}</p>:""}
                </div>
                <div>
                    <label>Pet Type: </label>
                    <input onChange={changeHandler} type="text" name="Type"/>
                    {formErrors.Type?<p>{formErrors.Type.message}</p>:""}
                </div>
                <div>
                    <label>Pet Description: </label>
                    <textarea onChange={changeHandler} name="Description" cols="30" rows="10" ></textarea>
                    {formErrors.Description?<p>{formErrors.Description.message}</p>:""}
                </div>
                <h3>Skills (optional) </h3>
                <div>
                    <label>Skill 1: </label>
                    <input onChange={changeHandler} type="text" name="Skills1"/>
 
                </div>
                <div>
                    <label>Skill 2: </label>
                    <input onChange={changeHandler} type="text" name="Skills2"/>

                </div>
                <div>
                    <label>Skills 3: </label>
                    <input onChange={changeHandler} type="text" name="Skills3" />

                </div>
                <input type="submit" value="Add Pet"></input>
            </form>
            
        </div>
    );
};



export default NewPet;