const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
  getCountCity,
  getCountType,
} = require("../controllers/hotelController");
const { checkAdmin } = require("../utils/tokenTest");

const router = require("express").Router();

//Create, Update, Delete, Get, GetAll
//Post Method for Creating, Async Because connecting to db takes times
router.post("/", checkAdmin, createHotel);
//Update
//Using PUT METHOD
router.put("/find/:id", checkAdmin, updateHotel);
//Delete
//Using PUT METHOD
router.delete("/find/:id", checkAdmin, deleteHotel);
//Get
//Using get METHOD
router.get("/find/:id", getHotel);

//Get All
//Using get METHOD without any id
router.get("/", getAllHotel); //will work to get all fetured also
//Get All Hotels Count in a city
router.get("/countCity", getCountCity);
//Get all hotel count by type
router.get("/countType", getCountType);

module.exports = router;
