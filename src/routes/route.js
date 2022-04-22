const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
//const userController= require("../controllers/userController")//
const assignmentcontroller= require("../controllers/assignmentcontroller")
const commonMw= require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", assignmentcontroller.NewUser)

router.post("/login", assignmentcontroller.loginDetails)

router.get("/users/:userId", assignmentcontroller.UserDetails)

router.put("/Updtusers/:userId", commonMw.authcheck, assignmentcontroller.UserUpdate)

router.delete("/deleteuser/:userId", assignmentcontroller.DeleteUser)
module.exports = router;