const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

//add wallet

// (/wallet/) POST
router.post("/", checkToken, walletController.addWallet);

//delete wallet

// (wallet/:walletId)
router.delete("/:walletId", checkToken, walletController.deleteWallet);

//get all wallets

// (/wallet/) GET
router.get("/", checkToken, walletController.getUserWallets);

//update wallet

// (/wallet/:walletId) PUT
router.put("/:walletId", checkToken, walletController.updateWallet);

//get wallet by ID

// (/wallet/:walletId) GET
router.get("/:walletId", checkToken, walletController.getWallet);

//create budget

// (/wallet/:walletId/budget) POST
router.post("/:walletId/budget", checkToken, walletController.addBudget);

// Delete budget

// (/wallet/:walletId/budget) DELETE
router.delete("/:walletId/budget", checkToken, walletController.deleteBudget);

// Get wallet summary

// (/wallet/:walletId/summary) GET
router.get("/:walletId/summary", checkToken, walletController.getWalletSummary);

module.exports = router;
