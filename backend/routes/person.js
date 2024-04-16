const {Router} = require("express")

const person = Router()

const {  updatePerson,
         deletePerson,
         getPerson,
         serachPerson } = require("../controller/person")

person.get("/getPerson", getPerson)
person.post("/updatePerson", updatePerson)
person.delete("/deletePerson", deletePerson)
person.put("/searchPerson", serachPerson)

module.exports = person
