const { count } = require("../models/Hotel");
const Hotel = require("../models/Hotel");
const Room = require("../models/Room");
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
  const { min, max, ...others } = req.query;
  try {
    const allHotel = await Hotel.find({
      ...others,
      CheapestPrice: { $gt: min || 1, $lt: max || 100000000 }, //default min max values given
    }).limit(req.query.limit); //Returns all rentries
    res.status(200).json(allHotel);
  } catch (err) {
    next(err); //error handling using middleware
  }
};

module.exports.getCountCity = async (req, res, next) => {
  const cities = req.query.cities.split(","); //from url ?cities=lahore,islamabad,karachi ==>return them in array form

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ City: city }); ////   slow way >>find({City:city}).length
      })
    ); //
    res.status(200).json(list);
  } catch (err) {
    next(err); //error handling using middleware
  }
};
module.exports.getCountType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ Type: "Hotel" });
    const resortCount = await Hotel.countDocuments({ Type: "Resort" });
    const apartmentCount = await Hotel.countDocuments({ Type: "Apartment" });
    const roomCount = await Hotel.countDocuments({ Type: "Rooms" });
    res.status(200).json([
      { type: "Hotel", count: hotelCount },
      { type: "Resort", count: resortCount },
      { type: "Apartment", count: apartmentCount },
      { type: "Room", count: roomCount },
    ]);
  } catch (err) {
    next(err);
  }
};
module.exports.getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    //Using promise as multiple rooms
    const lX = await Promise.all(
      hotel.Rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(lX);
  } catch (err) {
    next(err);
  }
};
