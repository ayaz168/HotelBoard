const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");

module.exports.createRoom = async (req, res, next) => {
  //Need a hotel ID to add this created room to the room array in hotel
  const hotelID = req.params.hotelID;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelID, {
        $push: { Rooms: savedRoom._id },
      });
      //saved room id pushed using mongo db pushed method which pushes
      //and data into any array
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

module.exports.updateRoom = async (req, res, next) => {
  try {
    //Using MONGODB set method to update the hotel
    //New data in req.body
    const newupdatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    ); //By default returns previous entry, give as param {new:true} to get updates
    res.status(200).json(newupdatedRoom);
  } catch (err) {
    next(err);
  }
};
module.exports.bookRoom = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("Room Booked");
  } catch (err) {
    next(err);
  }
};
module.exports.deleteRoom = async (req, res, next) => {
  const hotelID = req.params.hotelID;
  try {
    await Room.findByIdAndDelete(req.params.id); //Doesn't return anything
    try {
      await Hotel.findByIdAndUpdate(hotelID, {
        $pull: { Rooms: req.params.id },
      });
      //saved room id pushed using mongo db pushed method which pushes
      //and data into any array
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room Deleted");
  } catch (err) {
    next(err);
  }
};
module.exports.getRoom = async (req, res, next) => {
  try {
    const theRoom = await Room.findById(req.params.id); //Returns Entry
    res.status(200).json(theRoom);
  } catch (err) {
    next(err);
  }
};
module.exports.getAllRoom = async (req, res, next) => {
  //Next is a middle ware that will run befoe try catch block
  try {
    const allRoom = await Room.find(); //Returns all rentries
    res.status(200).json(allRoom);
  } catch (err) {
    next(err); //error handling using middleware
  }
};
