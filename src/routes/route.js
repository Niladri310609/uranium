const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel= require("../models/Bookmodel.js")
const BookController= require("../controllers/Bookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

/*router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)*/

router.post("/createBook", BookController.createBooks  )

router.get("/getBooksData", BookController.getBookData)

module.exports = router;