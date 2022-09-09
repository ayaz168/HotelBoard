const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");

module.exports.createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
module.exports.updateHotel = async (req, res, next) => {
  try {
    //Using MONGODB set method to update the hotel
    //New data in req.body
    const newupdatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    ); //By default returns previous entry, give as param {new:true} to get updates
    res.status(200).json(newupdatedHotel);
  } catch (err) {
    next(err);
  }
};
module.exports.deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id); //Doesn't return anything
    res.status(200).json("Hotel Deleted");
  } catch (err) {
    next(err);
  }
};
module.exports.getHotel = async (req, res, next) => {
  try {
    const theHotel = await Hotel.findById(req.params.id); //Returns Entry
    res.status(200).json(theHotel);
  } catch (err) {
    next(err);
  }
};
module.exports.getAllHotel = async (req, res, next) => {
  //Next is a middle ware that will run befoe try catch block
  try {
    const allHotel = await Hotel.find(); //Returns all rentries
    res.status(200).json(allHotel);
  } catch (err) {
    next(err); //error handling using middleware
  }
};
