const developerModel= require("../models/developerModel")
const batchModel= require("../models/batchModel");
const mongoose= require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const NewDeveloper= async function(req,res){
    let data= req.body;
    newData= await  developerModel.create(data)
    res.send({msg: newData})
}
const eligdev= async function (req,res) {
    let devs= await developerModel.find({percentage:{$gte:70}, gender:'female'});
    res.send({msg:devs});
}

const developes= async function(req,res){
    let newdevs= await batchModel.findOne({name: req.query.program} ,{_id: 1 })
   console.log(newdevs)

   let debs= await developerModel.find({percentage:{$gte: req.query.percentage}, batch_id:newdevs._id})
   console.log(debs)
    res.send({count:debs.length,msg:debs})
}



module.exports.developes=developes
module.exports.NewDeveloper=NewDeveloper
module.exports.eligdev=eligdev
