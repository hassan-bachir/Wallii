const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

// Add transaction
router.post("/:walletId", checkToken, transactionController.addTransaction);
