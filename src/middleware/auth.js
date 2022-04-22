const assignmentcontroller = require("../controllers/assignmentcontroller");

const authcheck = async function (req, res, next) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });

  next();
};
module.exports.authcheck = authcheck;
