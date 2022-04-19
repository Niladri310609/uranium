const batchModel= require("../models/batchModel")
const mongoose= require("mongoose")
const ObjectId= mongoose.Schema.Types.ObjectId


const createBatch=  async function(req,res){
    let Batch = req.body;
    let BatchCreated = await batchModel.create(Batch)
    res.send({data: BatchCreated})
}

module.exports.createBatch=createBatch