const authormodel = require("../models/authormodel")
const authormdoel= require("../models/authormodel")
const boimodel= require("../models/boimodel")



const CreateNewBook= async function (req, res) {
    let bookdata= req.body
    let savedData= await boimodel.create(bookdata)
    res.send({msg: savedData})
}
const createNewAuthor= async function (req, res) {
    let authordata= req.body
    let savedData= await authormdoel.create(authordata)
    res.send({msg: savedData})
}
/////////////////////////////////////////////////////////////////////////////////
const allbooks= async function(req,res){
    const authorDetails = await authormodel.find({author_name:  "Chetan Bhagat"})
    const id=  authorDetails[0].author_id
    const booksName= await boimodel.find({author_id: id}).select({name : 1})
    res.send({msg:booksName})
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 const updatedBookPrice= async function(req,res){
     const bookdetails= await boimodel.find({name:"Two states"})
     const id= bookdetails[0].author_id
     const authorN= await authormodel.find({author_id: id} ).select({author_name:1 , _id:0})

     const bkName= bookdetails[0].name
     const updatedPrice= await boimodel.findOneAndUpdate({name:bkName},{price:100},{new:true}).select({price:1 , _id:0})
     res.send({msg:authorN,updatedPrice})   
 }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const authorsName= async function(req,res) {
      const booksId= await boimodel.find({price:{$gte:50, $lte:100}}).select({author_id:1, _id:0})
      const id= booksId.map(inp=> inp.author_id)
      let temp =[]
      for (let i = 0; i < id.length; i++) {
          let  x= id[i]
          const author= await authormodel.find({author_id:x}).select({author_name: 1, _id:0})
          temp.push(author)
          
      }
      const Auth= temp.flat()
      res.send({msg:Auth})
  }
   






module.exports.CreateNewBook=CreateNewBook
module.exports.createNewAuthor=createNewAuthor
module.exports.allbooks=allbooks
module.exports.updatedBookPrice=updatedBookPrice
module.exports.authorsName=authorsName