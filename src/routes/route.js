const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel= require("../models/Bookmodel.js")
const BookController= require("../controllers/Bookcontroller")
const bookcollectmodel= require("../models/bookcollectmodel.js")
const bookcollection= require("../controllers/bookcollection.js");
const { route } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

/*router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)*/

/*router.post("/creationBook", BookController.creationBooks  )

router.get("/mybook", BookController.mybook)*/

router.post("/createBook", bookcollection.createBook)
router.get("/getBookData", bookcollection.getBookData)
router.get("/bookList", bookcollection.bookList )
router.get("/getBooksInYear", bookcollection.getBooksInYear)
router.get("/getParticularBooks", bookcollection.getParticularBooks)
router.get("/getXNIR", bookcollection.getXINRBooks)
router.get("/getRandomBooks", bookcollection.getRandomBooks)


module.exports = router;