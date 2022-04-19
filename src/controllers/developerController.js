
const developerModel= require("../models/developerModel")

const createdevelopers= async function (req, res) {
    const developer = req.body
    const developerCreated = await developerModel.create(developer)
    res.send({data:developerCreated})
}

const scholarship= async function (req, res) {
    const female= await bookModel.find({gender:'female',percentage:{$gte:70}

    })
    res.send({msg:female})
}

const developers = async function (req, res) {
    const data=req.query.percentage
    const data1=req.query.program
    const details=await developerModel.find({percentage:data,"program.enum":data1})
    res.send({msg:details})
}

module.exports.createdevelopers= createdevelopers
module.exports.scholarship= scholarship
module.exports.developers=developers

