const {Schema, model} = require("mongoose") 

const personSchema = new Schema({

    firstname: {type: String, require: true},
    name: {type: String, require: true},
    surename: {type: String, require: true},
    years: {type: String, require: true},
    birthday: {type: String,},


})


const Person = model("person", personSchema)
module.exports = Person
