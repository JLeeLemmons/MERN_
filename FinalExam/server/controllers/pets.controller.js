const { Error } = require("mongoose");
const Pet = require("../models/pet.model");


module.exports.findAllPets = (req, res)=>{
    Pet.find()
        .then(allpets => {
            res.json({
                results: allpets
            })
        })
        .catch(err=>{
            res.json({
                message: "Something went wrong with getting all of the pets", error: err
            })
        })
}

module.exports.createPet = (req, res)=>{
    Pet.create(req.body)
        .then(newPet =>{
            res.json({results: newPet})
        })
        .catch(err => {
            res.json({message: "Something went wrong with creating the pet", error: err})
        })

}

module.exports.findOnePet = (req,res)=>{
    //be mindful that the quoteId is coming from the quoteId in the url within routes. 
    Pet.findOne({_id: req.params.petId})
        .then(foundPet=>{
            res.json({results: foundPet})
        })
        .catch(err => {
            res.json({message: "Something went wrong finding one pet", error: err})
        })
}

module.exports.updatePet =(req,res)=>{
    Pet.findOneAndUpdate(
        {_id: req.params.petId}, 
        //req.body represents the info I wanted updated.
        req.body,
        //below line confirms that validator will run upon update
        {new: true, runValidators: true}
        )
        .then(updatedPet => res.json({results: updatedPet}))
        .catch(err => {
            res.json({message: "Something went wrong updating one pet", error: err})
        })
}

module.exports.deletePet = (req,res)=>{
    Pet.deleteOne(
        {_id: req.params.petId})
        .then(deletedPet=> res.json({results: deletedPet}))
        .catch(err=>{
            res.json(
                {message: "Something went wrong deleting one pet", error: err}
            )
        })
}