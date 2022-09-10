const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    RoomPrice: {
      type: Number,
      required: true,
    },
    MaxOccupants: {
      type: Number,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }], //one title can have ultiple rooms//Penthouse, Suites etc
  },
  { timestamps: true }
);
/*
[
  { number: 104, unavailableDates: [01.03.2022,02.05.2022.....] },
  { number: 105, unavailableDates: [] },
  { number: 106, unavailableDates: [] },
  { number: 107, unavailableDates: [] },
  { number: 108, unavailableDates: [] },
  { number: 109, unavailableDates: [] },
];
*/

module.exports = mongoose.model("Room", roomSchema);
