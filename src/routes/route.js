const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController= require("../controllers/publishController")

const { route } = require('express/lib/application');





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


/*router.post("/newbook", bookauthorctrl.CreateNewBook)
router.post("/newauthor", bookauthorctrl.createNewAuthor)

router.post("/allbooks", bookauthorctrl.allbooks)
router.get("/update",bookauthorctrl.updatedBookPrice)
router.get("/costfilter",bookauthorctrl.authorsName)*/

router.post("/Newauthor", authorController.createAuthor)
router.post("/Newpublisher", publishController.createPublisher)
router.post("/Newbook", bookController.NewBook )
router.get("/fetchBookData", bookController.getBookDetails)
router.put("/book", bookController.updateHardCover)
router.put("/priceupdate", bookController.changePrice)


module.exports = router;