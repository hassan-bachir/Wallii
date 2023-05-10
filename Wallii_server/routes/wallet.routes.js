const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

// (/wallet/) POST
router.post("/", checkToken, walletController.addWallet);

// (wallet/:walletId)
router.delete("/:walletId", checkToken, walletController.deleteWallet);

// (/wallet/) GET
router.get("/", checkToken, walletController.getUserWallets);

// (/wallet/:walletId) PUT
router.put("/:walletId", checkToken, walletController.updateWallet);

// (/wallet/:walletId) GET
router.get("/:walletId", checkToken, walletController.getWallet);

// (/wallet/:walletId/budget) POST
router.post("/:walletId/budget", checkToken, walletController.addBudget);

// (/wallet/:walletId/budget) DELETE
router.delete("/:walletId/budget", checkToken, walletController.deleteBudget);

// (/wallet/:walletId/summary) GET
router.get("/:walletId/summary", checkToken, walletController.getWalletSummary);

module.exports = router;
