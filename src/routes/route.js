const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger')

const router = express.Router();

//1.
const arr1 =["KGF","RRR","Avengers","Spider-man", "Lord of Rings"];
router.get('/movies',function(req, res){
    res.send(arr1)
});
//2.
router.get('/movies/:indexNumber', function(req, res){
    let z= req.params.indexNumber
    res.send(arr1[z])
});
//3.
router.get('/movies2/:indexNumber', function(req,res){
    let z= req.params.indexNumber
    if(z>arr1.length){
        res.send('please use a  valid index');
    } 
    if (z>=0 && z<arr1.length){
        res.send(arr1[z])
    }
});
//4.
router.get('/films', function(resq,res){
const array2=
[ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "“name”": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
  
            res.send(array2);
})
//5
router.get('/films/:filmId', function(req, res){

const array3=
[ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "“name”": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   const Nil= req.params.filmId
   if(Nil > array3.length){
       res.send("please enter the valid index")
   }else{
       for (let i = 0; i < array3.length; i++) {
           if(array3[i].id==Nil)
           res.send(array3[i])
       }
    }
});
           
       
   

   
 



module.exports = router;
// adding this comment for no reason