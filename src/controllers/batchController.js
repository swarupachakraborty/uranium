const batchModel= require("../models/batchModel")

const createbatches= async function (req, res) {
    const batch= req.body
    const batchCreated = await batchModel.create(batch)
    res.send({data: batchCreated})
}




module.exports.createbatches= createbatches
