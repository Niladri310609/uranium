const req = require("express/lib/request")
const UserModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")



const CreateNewUser= async function(req,res){
    let user =req.body
    let userCreated= await UserModel.create(user)
    res.send({data:userCreated})
}

const newProduct= async function (req,res){
    let product= req.body
    let  productCreated= await productModel.create(product)
    res.send({data:productCreated})
}
const createOrder = async function(req,res){
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let header = req.headers["isfreeappuser"]
    let Price = await productModel.find({productId})
    let userValidation  = await UserModel.exists({userId})
    let productValidation = await productModel.exists({productId})
    if(userValidation){
        if(productValidation){
            let purchase = await orderModel.create(data)
            if(header == true){
                await UserModel.find({_id : userId}).update({balance:  `${balance}-${Price}`},{new:true})
            }
            res.send({success : purchase})
        } else{
            res.send({err: "the product is not present"})}
    }else{
        res.send({alert: "you are not a registered user, please register"})}
}

module.exports.createOrder = createOrder
module.exports.CreateNewUser=CreateNewUser
module.exports.newProduct=newProduct