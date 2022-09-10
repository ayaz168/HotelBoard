const User = require("../models/User");
const { createError } = require("../utils/error");

module.exports.updateUser = async (req, res, next) => {
  try {
    //Using MONGODB set method to update the User
    //New data in req.body
    const newupdatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    ); //By default returns previous entry, give as param {new:true} to get updates
    res.status(200).json(newupdatedUser);
  } catch (err) {
    next(err);
  }
};
module.exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id); //Doesn't return anything
    res.status(200).json("User Deleted");
  } catch (err) {
    next(err);
  }
};
module.exports.getUser = async (req, res, next) => {
  try {
    const theUser = await User.findById(req.params.id); //Returns Entry
    res.status(200).json(theUser);
  } catch (err) {
    next(err);
  }
};
module.exports.getAllUser = async (req, res, next) => {
  //Next is a middle ware that will run befoe try catch block
  try {
    const allUser = await User.find(); //Returns all rentries
    res.status(200).json(allUser);
  } catch (err) {
    next(err); //error handling using middleware
  }
};
