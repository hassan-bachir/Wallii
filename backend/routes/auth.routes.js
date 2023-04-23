const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// (/auth/register)
router.post("/register", authController.register);
// (/auth/login)
router.post("/login", authController.login);

module.exports = router;
