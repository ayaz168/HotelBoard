const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRoom,
  bookRoom,
} = require("../controllers/roomController");
const { checkAdmin } = require("../utils/tokenTest");

const router = require("express").Router();

router.post("/:hotelID", checkAdmin, createRoom);

router.put("/:id", checkAdmin, updateRoom);
router.put("/available/:id", bookRoom);

router.delete("/:id/:hotelID", checkAdmin, deleteRoom);

router.get("/:id", getRoom);

router.get("/", getAllRoom);

module.exports = router;
