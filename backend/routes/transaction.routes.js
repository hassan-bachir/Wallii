const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

// Add transaction
// (/transaction/:walletId) POST
router.post("/:walletId", checkToken, transactionController.addTransaction);

//get all transactions
// (/transaction/:walletId)
router.get("/:walletId", checkToken, transactionController.getAllTransactions);

//get transaction by ID
// (/transaction/register)
router.get(
    "/byid/:transactionId",
    checkToken,
    transactionController.getTransactionById
);

//update transaction
// (/transaction/register)
router.put(
    "/:transactionId",
    checkToken,
    transactionController.updateTransaction
);

//delete transaction
// (/transaction/register)
router.delete(
    "/:transactionId",
    checkToken,
    transactionController.deleteTransaction
);

// Get transactions grouped by date
// (/transaction/register)
router.get(
    "/:walletId/by-date",
    checkToken,
    transactionController.getTransactionsByDate
);

module.exports = router;
