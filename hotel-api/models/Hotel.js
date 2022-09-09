const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  Type: {
    //Hotel, Cabin, Apartment
    type: String,
    required: true,
  },
  Rooms: {
    type: [String], //RoomNumbers, Foreign Key typa thingy
    min: 0,
    max: 5,
  },
  CheapestPrice: {
    type: Number,
    required: true,
  },
  Featured: {
    type: Boolean,
    default: false,
  },
  City: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  DistanceFromMainCity: {
    type: String,
    required: true,
  },
  Photos: {
    type: [String],
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
