const userController = require("../controllers/assignmentcontroller");
const userModel= require("../models/userModel")
const jwt = require("jsonwebtoken");

const mid1 = async function (req, res, next) {
  let token = req.headers["x-auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-Uranium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });

  next();
};

module.exports.mid1 = mid1;
