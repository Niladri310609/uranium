/*const express = require('express');
const { route } = require('express/lib/application');
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
router.get('/films', function(req,res){
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
       res.send("please enter the valid id")
   }else{
       for (let i = 0; i < array3.length; i++) {
           if(array3[i].id==Nil)
           res.send(array3[i])
       }
    }
});*/

const { Router } = require("express");

   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
   router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send( missingNumber );
  });

  // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 app.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 
           
            
            
         
        
          

module.exports = router;
