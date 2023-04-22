const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

router.post("/wallet", checkToken, walletController.addWallet);

router.get("/wallet", checkToken, walletController.getUserWallets);

router.put("/:walletId", checkToken, walletController.updateWallet);

module.exports = router;
