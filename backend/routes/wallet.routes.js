const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

//add wallet
router.post("/wallet", checkToken, walletController.addWallet);
//get all wallets
router.get("/wallet", checkToken, walletController.getUserWallets);
//update wallet
router.put("/:walletId", checkToken, walletController.updateWallet);
//get wallet by ID
router.get("/:walletId", checkToken, walletController.getWallet);

module.exports = router;
