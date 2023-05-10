const Wallet = require("../models/walletModel");
const Transaction = require("../models/transactionModel");

const addTransaction = async (req, res) => {
    try {
        const { walletId } = req.params;
        const {
            type,
            category,
            amount,
            date,
            description,
            isRecurring,
            recurringPeriod,
            receiptImageUrl,
        } = req.body;
        const newTransaction = new Transaction({
            walletId,
            type,
            category,
            amount,
            date,
            description,
            isRecurring,
            recurringPeriod,
            receiptImageUrl,
        });

        const savedTransaction = await newTransaction.save();

        await Wallet.findByIdAndUpdate(walletId, {
            $push: { transactions: savedTransaction._id },
        });

        res.status(201).json(savedTransaction);
    } catch (error) {
        console.error("Error adding transaction:", error);
        res.status(500).json({ message: "Error adding transaction", error });
    }
};

const getAllTransactions = async (req, res) => {
    try {
        const { walletId } = req.params;
        const transactions = await Transaction.find({ walletId });

        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching transactions", error });
    }
};

const updateTransaction = async (req, res) => {
    try {
        const { transactionId } = req.params;
        const oldTransaction = await Transaction.findById(transactionId);

        const updatedTransaction = await Transaction.findByIdAndUpdate(
            transactionId,
            req.body,
            {
                new: true,
            }
        );

        if (
            req.body.walletId &&
            oldTransaction.walletId.toString() !== req.body.walletId.toString()
        ) {
            await Wallet.findByIdAndUpdate(oldTransaction.walletId, {
                $pull: { transactions: transactionId },
            });

            await Wallet.findByIdAndUpdate(req.body.walletId, {
                $push: { transactions: transactionId },
            });
        }

        res.status(200).json(updatedTransaction);
    } catch (error) {
        console.error("Error updating transaction:", error);

        res.status(500).json({ message: "Error updating transaction", error });
    }
};

const getTransactionById = async (req, res) => {
    try {
        const { transactionId } = req.params;
        const transaction = await Transaction.findById(transactionId);

        if (!transaction) {
            res.status(404).json({ message: "Transaction not found" });
        } else {
            res.status(200).json(transaction);
        }
    } catch (error) {
        res.status(500).json({ message: "Error getting transaction", error });
    }
};

const deleteTransaction = async (req, res) => {
    try {
        const { transactionId } = req.params;

        const transaction = await Transaction.findById(transactionId);

        if (!transaction) {
            res.status(404).json({ message: "Transaction not found" });
        } else {
            await Wallet.findByIdAndUpdate(transaction.walletId, {
                $pull: { transactions: transactionId },
            });
            await Transaction.findByIdAndDelete(transactionId);
            res.status(200).json({
                message: "Transaction deleted successfully",
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting transaction", error });
    }
};

const getTotalAmountByCategory = async (req, res) => {
    try {
        const { walletId, category } = req.params;
        const transactions = await Transaction.find({ walletId, category });

        let totalAmount = 0;

        transactions.forEach((transaction) => {
            totalAmount += transaction.amount;
        });

        res.status(200).json({ category, totalAmount });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching total amount by category",
            error,
        });
    }
};

const getTransactionsByDate = async (req, res) => {
    try {
        const { walletId } = req.params;
        const transactions = await Transaction.find({ walletId });

        let transactionsByDate = {};

        transactions.forEach((transaction) => {
            const date = transaction.date.toISOString().split("T")[0];

            if (!transactionsByDate[date]) {
                transactionsByDate[date] = {
                    income: 0,
                    expense: 0,
                };
            }

            if (transaction.type === "income") {
                transactionsByDate[date].income += transaction.amount;
            } else if (transaction.type === "expense") {
                transactionsByDate[date].expense += transaction.amount;
            }
        });

        res.status(200).json(transactionsByDate);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching transactions by date",
            error,
        });
    }
};

const getTotalByDateRange = async (req, res) => {
    try {
        const { walletId } = req.params;
        const { startDate, endDate } = req.query;

        const start = new Date(startDate);
        const end = new Date(endDate);

        const transactions = await Transaction.find({ walletId });

        let totalExpenses = 0;
        let totalIncome = 0;

        transactions.forEach((transaction) => {
            const transactionDate = transaction.date;

            if (transactionDate >= start && transactionDate <= end) {
                if (transaction.type === "expense") {
                    totalExpenses += transaction.amount;
                } else if (transaction.type === "income") {
                    totalIncome += transaction.amount;
                }
            }
        });

        res.status(200).json({ totalExpenses, totalIncome });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching total expenses and income by date range",
            error,
        });
    }
};

module.exports = {
    addTransaction,
    getAllTransactions,
    updateTransaction,
    getTransactionById,
    deleteTransaction,
    getTotalAmountByCategory,
    getTransactionsByDate,
    getTotalByDateRange,
};
