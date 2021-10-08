const mongoose = require("mongoose"); 


const PetSchema = new mongoose.Schema({

    Name:{
        type: String,
        required: [true, "Content is required"],
        minLength: [3, "Quote must be atleast 3 characters long"]
    },
    Type:{
        type: String,
        required: [true, "Content is required"],
        minLength: [3, "Quote must be atleast 3 characters long"]
    },
    Description:{
        type: String,
        //below 3 fields are validation messages. 
        required: [true, "Content is required"],
        minLength: [3, "Quote must be atleast 3 characters long"]
    },
    Skills1:{
        type: String
    },
    Skills2:{
        type: String
    },
    //this one is optional
    Skills3: {
        type: String
    }
}, {timestamps:true})

const Pet = mongoose.model("Pet", PetSchema); 

module.exports = Pet; 