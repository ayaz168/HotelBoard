const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require("../controllers/userController");
const { testToken, verifyUser, checkAdmin } = require("../utils/tokenTest");

const router = require("express").Router();

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", checkAdmin, getAllUser);

module.exports = router;
