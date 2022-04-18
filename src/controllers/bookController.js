const authorModel = require("../models/authorModel")
const publisherModel= require("../models/publisherModel")
const bookModel= require("../models/bookModel")
const mongoose= require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const NewBook = async function (req, res) {
   let a= req.body.author_id
   let require= await authorModel.findById(a)
 let b= req.body.publisher_id
 let need= await publisherModel.findById(b)
 if (a===undefined){
     res.send("Author id is required")
 }else if(require===null){
     res.send("Give the correct author id")
 }
    else if(b===undefined){
        res.send("Publisher id is required")
    }else if (need===null){
        res.send("Give the correct Publisher id")
    }
    else {
        let book= req.body
        let savedData= await bookModel.create(book)
        res.send({data:savedData})
    }
}


const getBookDetails= async function(req,res){
    let specificBooK= await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data:specificBooK})
}
const updateHardCover= async function(req,res){
   let books= await bookModel.updateMany({publisher_id:{$in : ["625ada150aff71b86fbaf0a6","625adaad0aff71b86fbaf0ac"]}},
   {$set: {isHardCover:true}} )
   res.send({data:books})

}
const changePrice= async function(req,res){
   let data= await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
   console.log(data)
   let pricearray=[]
   for (let i=0; i< data.length; i++){
       let ObjectId= data[i]._id
       pricearray.push(ObjectId)
   }
   let updatePrice= await bookModel.updateMany({author_id:{$in: pricearray}},{$inc:{price:10}}, {new:true})
   res.send({data:updatePrice})
}
       


    
   

 
      
       
   



      

module.exports.NewBook=NewBook
module.exports.getBookDetails=getBookDetails
module.exports.updateHardCover=updateHardCover
module.exports.changePrice=changePrice
