const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

// (/transaction/:walletId) POST
router.post("/:walletId", checkToken, transactionController.addTransaction);

// (/transaction/:walletId) GET
router.get("/:walletId", checkToken, transactionController.getAllTransactions);

// (/transaction/byid/:transactionId) GET
router.get(
    "/byid/:transactionId",
    checkToken,
    transactionController.getTransactionById
);

// (/transaction/:transactionId) PUT
router.put(
    "/:transactionId",
    checkToken,
    transactionController.updateTransaction
);

// (/transaction/:transactionId) DELETE
router.delete(
    "/:transactionId",
    checkToken,
    transactionController.deleteTransaction
);

// (/transaction/:walletId/by-date) GET
router.get(
    "/:walletId/by-date",
    checkToken,
    transactionController.getTransactionsByDate
);

// (/transaction/:walletId/total-by-date-range) GET
router.get(
    "/:walletId/total-by-date-range",
    checkToken,
    transactionController.getTotalByDateRange
);

module.exports = router;
