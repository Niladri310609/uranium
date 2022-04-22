const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
//const userController= require("../controllers/userController")//
const assignmentcontroller= require("../controllers/assignmentcontroller")
const CommonMw = require("../middleware/auth")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", assignmentcontroller.NewUser)

router.post("/login", assignmentcontroller.loginDetails)

router.get("/users/:userId",CommonMw.mid1, assignmentcontroller.UserDetails)

router.put("/Updtusers/:userId", CommonMw.mid1, assignmentcontroller.UserUpdate)

router.delete("/deleteuser/:userId", assignmentcontroller.DelUser)
module.exports = router;