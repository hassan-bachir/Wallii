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
        const updatedTransaction = await Transaction.findByIdAndUpdate(
            transactionId,
            req.body,
            {
                new: true,
            }
        );

        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ message: "Error updating transaction", error });
    }
};

module.exports = {
    addTransaction,
    getAllTransactions,
    updateTransaction,
};
