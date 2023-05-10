const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authMiddleware } = require("../middlewares/auth.middleware");

// (/admin/register) GET
router.get("/all-users", authMiddleware, adminController.getAllUsers);

// (/admin/users/:userId) GET
router.get("/users/:userId", authMiddleware, adminController.getInfoById);

// (/admin/users/:userId) DELETE
router.delete("/users/:userId", authMiddleware, adminController.deleteUser);

// (/admin/users/:userId) PUT
router.put("/users/:userId", authMiddleware, adminController.updateUser);

module.exports = router;
