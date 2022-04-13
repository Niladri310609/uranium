const BookModel= require("../models/Bookmodel")

const creationBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const mybook= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

module.exports.creationBook=creationBook
module.exports.mybook=mybook