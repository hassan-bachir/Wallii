const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Transaction = require("../models/transactionModel");
const Wallet = require("../models/walletModel");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.getInfoById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId, "-password ");
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user info", error });
    }
};
exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        // Find and delete all wallets and transactions associated with the user
        const user = await User.findById(userId);
        const walletIds = user.wallets;

        await Promise.all(
            walletIds.map(async (walletId) => {
                const wallet = await Wallet.findById(walletId);
                const transactionIds = wallet.transactions;
                await Transaction.deleteMany({ _id: { $in: transactionIds } });
            })
        );

        await Wallet.deleteMany({ _id: { $in: walletIds } });

        // Delete the user
        await User.findByIdAndDelete(userId);

        res.status(200).json({
            message:
                "User and associated wallets and transactions deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
