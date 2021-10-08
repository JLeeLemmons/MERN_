const mongoose = require("mongoose");

const db_name = "pets_finalExam"

mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Establish a connection to the db! You got this, never give up!'))
    .catch((err)=>console.log('Something went wrong, here is the error!', err))