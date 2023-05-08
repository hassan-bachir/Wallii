const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authMiddleware } = require("../middlewares/auth.middleware");

router.get("/all-users", authMiddleware, adminController.getAllUsers);

// get user by id
router.get("/users/:userId", authMiddleware, adminController.getInfoById);

router.delete("/users/:userId", authMiddleware, adminController.deleteUser);
router.put("/users/:userId", authMiddleware, adminController.updateUser);

module.exports = router;
