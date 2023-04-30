const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// (/auth/register) POST
router.post("/register", authController.register);

// (/auth/login) POST
router.post("/login", authController.login);

module.exports = router;
