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
// (/transaction/:walletId) GET
router.get("/:walletId", checkToken, transactionController.getAllTransactions);

//get transaction by ID
// (/transaction/byid/:transactionId) GET
router.get(
    "/byid/:transactionId",
    checkToken,
    transactionController.getTransactionById
);

//update transaction
// (/transaction/:transactionId) PUT
router.put(
    "/:transactionId",
    checkToken,
    transactionController.updateTransaction
);

//delete transaction
// (/transaction/:transactionId) DELETE
router.delete(
    "/:transactionId",
    checkToken,
    transactionController.deleteTransaction
);

// Get transactions grouped by date
// (/transaction/:walletId/by-date) GET
router.get(
    "/:walletId/by-date",
    checkToken,
    transactionController.getTransactionsByDate
);

// Add the new route for getTotalByDateRange
// (/transaction/:walletId/total-by-date-range) GET
router.get(
    "/:walletId/total-by-date-range",
    checkToken,
    transactionController.getTotalByDateRange
);

module.exports = router;
