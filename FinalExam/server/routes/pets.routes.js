//routes need to know about the controller, below variable can be whatever I think is best. 
const { get } = require("mongoose");
const PetController = require("../controllers/pets.controller"); 
const Pet = require("../models/pet.model");

module.exports = app =>{
    //all quotes
    app.get("/api/pets", PetController.findAllPets)
    //create new quote
    app.post("/api/pets/create", PetController.createPet)
    //get one quote by id
    app.get("/api/pets/:petId", PetController.findOnePet)
    //update quote
    app.put("/api/pets/:petId", PetController.updatePet)
    //delete quote
    app.delete("/api/pets/:petId", PetController.deletePet)
}