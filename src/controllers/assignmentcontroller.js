const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const NewUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginDetails = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Uranium",
      organisation: "FUnctionUp",
    },
    "functionup-Uranium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const UserDetails = async function (req, res) {
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
};

const UserUpdate = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};


const DeleteUser= async function(req,res){
  let token=req.headers["x-auth-token"]
  console.log(token)
  if(!token){
      res.send("this request does not contain mandatory header")
  }
  let id=req.params.userId
  let user=await userModel.findByIdAndUpdate({_id:id},{isDeleted:true},{new:true})
  res.send({msg:user})
}




module.exports.NewUser = NewUser;
module.exports.loginDetails = loginDetails;
module.exports.UserDetails = UserDetails;
module.exports.UserUpdate = UserUpdate;
module.exports.DeleteUser=DeleteUser