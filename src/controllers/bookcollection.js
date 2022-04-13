const bookcollectmodel= require("../models/bookcollectmodel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookcollectmodel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allBooks= await bookcollectmodel.find()
    res.send({msg: allBooks})
}
//////////////////////////////////////////////////////////////////////////////bookList///////////////////////////////////
const bookList= async function(req, res){
 let bookList= await bookcollectmodel.find().select({ bookName: 1, authorName: 1, _id: 0})
 res.send({msg: bookList})
}
/////////////////////////////////////////////////// getBooksInYear///////////////////////////////////
const getBooksInYear= async function(req , res) {
    let yearData= req.query.year

    const getBooksInYear= await bookcollectmodel.find({ year:yearData})
    res.send({msg:getBooksInYear})
}
////////////////////getParticularBooks//////////////////
const getParticularBooks= async function( req, res){
    let particularData= req.body
    const getParticularBooks= await bookcollectmodel.find(particularData)
    res.send({msg:getParticularBooks})
}
///////////////////////////getXINRBooks////////////////////////////////////////////////////
const getXINRBooks= async function(req,res){
    const XINRBooks= await bookcollectmodel.find({"price.INR" :{ $in: ["1000" , "800", "500"] } })
    res.send({msg:XINRBooks})
}
//////////////////////////////////////////////getRandomBooks////////////////////////////////////////////////////
 const getRandomBooks = async function(req,res){
     const Randombooks= await bookcollectmodel.find({$or : [{stockavailable: true}, {TotalPages:{$gt:500}} ] })
     res.send({msg:Randombooks})
 }


module.exports.createBook = createBook
module.exports.getBookData= getBookData
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks