const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { createError } = require("../utils/error");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

module.exports.register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User Created");
  } catch (err) {
    next(err);
  }
};
module.exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "No User Found"));
    const isPassCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPassCorrect) return next(createError(400, "Password Incorrect"));
    //Password corrrect, so creating a new token
    const token = JWT.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.MY_KEY
    ); //Just using 2 properties
    const { password, isAdmin, ...otherProperties } = user._doc; //to breakit down and not send password back
    res
      .cookie("access_token", token, {
        httpOnly: true, //no important information gets to the cookies
      })
      .status(200)
      .send({ ...otherProperties });
  } catch (err) {
    next(err);
  }
};
