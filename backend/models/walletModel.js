const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: { type: String, required: true },
    currency: { type: String, required: true },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
        },
    ],
    budget: {
        amount: { type: Number, required: true },
        startDate: Date,
        endDate: Date,
    },
});

const Wallet = mongoose.model("Wallet", walletSchema);
