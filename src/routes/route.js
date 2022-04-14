const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel= require("../models/Bookmodel.js")
const BookController= require("../controllers/Bookcontroller")
const bookauthorctrl= require("../controllers/bookauthorctrl");
const bookcollection= require("../controllers/bookcollection.js");
const { route } = require('express/lib/application');
const book= require("../controllers/bookcollection.js");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

/*router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)*/

/*router.post("/creationBook", BookController.creationBooks  )

router.get("/mybook", BookController.mybook)*/

/*router.post("/createBook", bookcollection.createBook)
router.get("/getBookData", bookcollection.getBookData)
router.get("/bookList", bookcollection.bookList )
router.get("/getBooksInYear", bookcollection.getBooksInYear)
router.post("/getParticularBooks", bookcollection.getParticularBooks)
router.get("/getXNIR", bookcollection.getXINRBooks)
router.get("/getRandomBooks", bookcollection.getRandomBooks)*/


router.post("/newbook", bookauthorctrl.CreateNewBook)
router.post("/newauthor", bookauthorctrl.createNewAuthor)

router.post("/allbooks", bookauthorctrl.allbooks)
router.get("/update",bookauthorctrl.updatedBookPrice)
router.get("/costfilter",bookauthorctrl.authorsName)

module.exports = router;