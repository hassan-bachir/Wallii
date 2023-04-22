const Wallet = require("../models/walletModel");
const User = require("../models/userModel");

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

module.exports = {
    addWallet,
};
