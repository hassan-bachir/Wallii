const Wallet = require("../models/walletModel");
const User = require("../models/userModel");
const Transaction = require("../models/transactionModel");

const getUserWallets = async (req, res) => {
    try {
        const { userId } = req;
        const wallets = await Wallet.find({ userId });

        res.status(200).json(wallets);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user wallets", error });
    }
};

const getWallet = async (req, res) => {
    try {
        const { walletId } = req.params;
        const wallet = await Wallet.findById(walletId);

        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found" });
        }

        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: "Error fetching wallet data", error });
    }
};

const addWallet = async (req, res) => {
    try {
        const { userId } = req;
        const { name, currency, initialBalance } = req.body;

        const newWallet = new Wallet({
            userId,
            name,
            currency,
            initialBalance,
        });

        const savedWallet = await newWallet.save();

        await User.findByIdAndUpdate(userId, {
            $push: { wallets: savedWallet._id },
        });

        res.status(201).json(savedWallet);
    } catch (error) {
        console.error("Error creating wallet:", error);
        res.status(500).json({ message: "Error creating wallet", error });
    }
};

const deleteWallet = async (req, res) => {
    try {
        const { walletId } = req.params;
        const userId = req.userId;

        const wallet = await Wallet.findOne({ _id: walletId, userId });

        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found" });
        }

        await Transaction.deleteMany({ walletId });

        await User.updateOne({ _id: userId }, { $pull: { wallets: walletId } });

        await Wallet.deleteOne({ _id: walletId });

        res.json({ message: "Wallet deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const updateWallet = async (req, res) => {
    try {
        const { walletId } = req.params;
        const updatedWallet = await Wallet.findByIdAndUpdate(
            walletId,
            req.body, //better to destruct for security
            {
                new: true,
            }
        );

        res.status(200).json(updatedWallet);
    } catch (error) {
        res.status(500).json({ message: "Error updating wallet", error });
    }
};

const addBudget = async (req, res) => {
    try {
        const { walletId } = req.params;
        const { name, amount, startDate, endDate } = req.body;

        const wallet = await Wallet.findById(walletId);

        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found" });
        }

        wallet.budget = {
            name,
            amount,
            startDate,
            endDate,
        };

        const updatedWallet = await wallet.save();
        res.status(200).json(updatedWallet);
    } catch (error) {
        res.status(500).json({ message: "Error adding budget", error });
    }
};
const deleteBudget = async (req, res) => {
    try {
        const { walletId } = req.params;

        // Find the wallet by its ID and unset the budget
        const updatedWallet = await Wallet.findByIdAndUpdate(
            walletId,
            {
                $unset: { budget: "" },
            },
            { new: true }
        );

        if (!updatedWallet) {
            return res.status(404).json({ message: "Wallet not found" });
        }

        res.status(200).json(updatedWallet);
    } catch (error) {
        console.error("Error deleting budget:", error);
        res.status(500).json({ message: "Error deleting budget", error });
    }
};

const getWalletSummary = async (req, res) => {
    try {
        const { walletId } = req.params;
        const wallet = await Wallet.findById(walletId).populate("transactions");

        if (!wallet) {
            res.status(404).json({ message: "Wallet not found" });
        } else {
            let totalIncome = 0;
            let totalExpenses = 0;

            wallet.transactions.forEach((transaction) => {
                if (transaction.type === "income") {
                    totalIncome += transaction.amount;
                } else if (transaction.type === "expense") {
                    totalExpenses += transaction.amount;
                }
            });

            const totalDifference = totalIncome - totalExpenses;

            res.status(200).json({
                name: wallet.name,
                totalIncome,
                totalExpenses,
                totalDifference,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error fetching wallet summary",
            error,
        });
    }
};
module.exports = {
    addWallet,
    getUserWallets,
    updateWallet,
    getWallet,
    addBudget,
    deleteBudget,
    getWalletSummary,
    deleteWallet,
};
