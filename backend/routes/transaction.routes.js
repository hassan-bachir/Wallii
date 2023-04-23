const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

// Add transaction
router.post("/:walletId", checkToken, transactionController.addTransaction);
//get all transactions
router.get("/:walletId", checkToken, transactionController.getAllTransactions);
//get transaction by ID
router.get(
    "/byid/:transactionId",
    checkToken,
    transactionController.getTransactionById
);
//update transaction
router.put(
    "/:transactionId",
    checkToken,
    transactionController.updateTransaction
);
//delete transaction
router.delete(
    "/:transactionId",
    checkToken,
    transactionController.deleteTransaction
);
// Get transactions grouped by date
router.get(
    "/:walletId/by-date",
    checkToken,
    transactionController.getTransactionsByDate
);

module.exports = router;
