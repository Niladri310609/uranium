const userController = require("../controllers/assignmentcontroller");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

//////////////////////////////////////////////////////////////////////////////////////////////////////
const mid3 = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ status: true, msg: savedData });
    } else {
      res.status(400).send({ status: false, msg: "Bad request Data Missing" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Failed ti fulfil bad request" });
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const mid2 = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user) {
      return res.status(404).send({
        status: false,
        msg: "username or the password is incorerct",
      });
    } else {
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "Uranium",
          organisation: "FUnctionUp",
        },
        "functionup-Uranium"
      );
      res.setHeader("x-auth-token", token);
      res.status(201).send({ status: true, data: token });
    }
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Failed to fulfil bad request" });
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mid4 = function (req, res, next) {
  let reqHeaders = req.headers;
  if (reqHeaders["x-auth-token"]) {
    try {
      let token = reqHeaders["x-auth-token"];
      let decodedToken = jwt.verify(token, "functionup-Uranium");
      if (req.params.userId == decodedToken.userId) {
        next();
      } else {
        res.status(403).send({ status: false, msg: "Acess Denied" });
      }
    } catch (err) {
      res.status(500).send({ status: false, msg: err.message });
    }
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mid5 = async function (req, res, next) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(401).send("No such user exists");
        
      
    } else {
      let userData = req.body;
      let updatedUser = await userModel.findOneAndUpdate(
        { _id: userId },
        userData
      );
      res.status(201).send({ status: updatedUser, data: updatedUser });
    }

    next()
  } catch (err) {
    res.status(500).send({ status: false, msg: "Server Failed ti fulfil bad request" });
  }
}; 

const mid1= async function (req,res,next){
  try{
    let token = req.headers["x-auth-token"];
 
  if (!token) {
    res.status(401).send("this request does not contain mandatory header");
  } 
  else{
  let id = req.params.userId;
  let user = await userModel.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  res.status(200).send({ msg: user })
  }
  next()
}
  catch(err){
    res.status(500).send({ status: false, msg: "Server Failed ti fulfil bad request" });
  }
};






module.exports.mid2 = mid2;
module.exports.mid3 = mid3;
module.exports.mid4 = mid4;
module.exports.mid5=mid5;
module.exports.mid1=mid1;