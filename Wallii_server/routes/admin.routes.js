const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authMiddleware } = require("../middlewares/auth.middleware");

router.get("/all-users", authMiddleware, adminController.getAllUsers);
router.delete("/user/:userId", authMiddleware, adminController.deleteUser);
router.put("/user/:userId", authMiddleware, adminController.updateUser);

module.exports = router;
