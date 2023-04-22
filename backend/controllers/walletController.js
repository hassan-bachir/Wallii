const Wallet = require("../models/walletModel");
const User = require("../models/userModel");

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
        const { name, currency } = req.body;

        const newWallet = new Wallet({
            userId,
            name,
            currency,
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

const updateWallet = async (req, res) => {
    try {
        const { walletId } = req.params;
        const updatedWallet = await Wallet.findByIdAndUpdate(
            walletId,
            req.body,
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

module.exports = {
    addWallet,
    getUserWallets,
    updateWallet,
    getWallet,
    addBudget,
};
