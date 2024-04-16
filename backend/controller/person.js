const Person = require("../model/PersonSchema")

const serachPerson = async(req, res)=>{
    const {query} = req.query
    try{
        const person = await Person.find({$or: [{name: {$regex: query, $options: 'i'}}, {model: {$regex: query, $options: 'i'}}]})
        res.json({
            success: true,
            massage: "serching succseeful",
            innerData: Person,
        }) 
    }catch(error){
    res.json({success: true, massage: error})
}
}

const getPerson = async (req, res)=>{
    try{
        let allPerson = await Person.find()
        if (!allPerson) {
            return res.json({
                seccess: false,
                massage: "Person is not found",
                innerDate: allPerson
            })
        }
        res.json({
            seccess: true,
            massage: "Person is found",
            innerDate: allPerson 
        })
    }catch(error){
        res.json({success: true, massage: error})
    }
}

const createPerson = async(req, res)=>{
    try{
        // const {addDay} = req.body
        // addDay: addDay
        const addData = req.body
        console.log(addData);
        const createData = new Person(addData)
        await createData.save() 
    }catch(error){
        res.json({success: true, massage: error})
    }
}
const deletePerson = async(req, res)=>{
    try{
        let {id} = req.body
            let deleted = await Person.findByIdAndDelete({_id: id})
            if(!deleted){
                return res.json({
                seccess: false,
                massage: "Person is not  deleted",
                innerDate: deleted ,
                })

            }
             res.json({
                seccess: true,
                massage: "Person is deleted",
                innerDate: deleted 
                })
    }catch(error){ 
res.json({success: true, massage: error})
    }
}
const updatePerson = async(req, res)=>{
    try{
let {id} = req.body  
let body = req.body
let updated = await Person.updateMany({_id: id}, body)
if(!updated){
    return res.json({
        seccess: false,
        massage: "Person is not  updated",
        innerDate: updated
    })
}
res.json({
    seccess: false,
    massage: "Person is updated",
    innerDate: updated 
})
    }catch(error){
        res.json({success: true, massage: error})

    }

}   
module.exports = {
    updatePerson,
    deletePerson,
    getPerson,
    createPerson,
    serachPerson
}
