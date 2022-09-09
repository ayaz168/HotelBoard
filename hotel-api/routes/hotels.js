const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
} = require("../controllers/hotelController");

const router = require("express").Router();

//Create, Update, Delete, Get, GetAll
//Post Method for Creating, Async Because connecting to db takes times
router.post("/", createHotel);
//Update
//Using PUT METHOD
router.put("/:id", updateHotel);
//Delete
//Using PUT METHOD
router.delete("/:id", deleteHotel);
//Get
//Using get METHOD
router.get("/:id", getHotel);

//Get All
//Using get METHOD without any id
router.get("/", getAllHotel);

module.exports = router;
