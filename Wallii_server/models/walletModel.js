const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: { type: String, required: true },
    currency: { type: String, required: true },
    initialBalance: { type: Number, default: 0 },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
        },
    ],
    budget: {
        name: String,
        amount: Number,
        startDate: Date,
        endDate: Date,
    },
});
const Wallet = mongoose.model("Wallet", walletSchema);
module.exports = Wallet;
